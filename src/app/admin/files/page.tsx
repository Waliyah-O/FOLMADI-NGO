"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { Upload, Trash2, File, Image, FileText, Copy, Check } from "lucide-react";

interface FileItem {
  id: number;
  filename: string;
  originalName: string;
  mimeType: string;
  size: number;
  path: string;
  createdAt: string;
}

function formatSize(bytes: number): string {
  if (bytes < 1024) return bytes + " B";
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + " KB";
  return (bytes / (1024 * 1024)).toFixed(1) + " MB";
}

function getFileIcon(mimeType: string) {
  if (mimeType.startsWith("image/")) return Image;
  if (mimeType === "application/pdf") return FileText;
  return File;
}

export default function AdminFilesPage() {
  const [files, setFiles] = useState<FileItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [copiedId, setCopiedId] = useState<number | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const fetchFiles = useCallback(async () => {
    try {
      const res = await fetch("/api/files");
      const data = await res.json();
      setFiles(data);
    } catch (err) {
      console.error("Failed to fetch files:", err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchFiles();
  }, [fetchFiles]);

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    try {
      const formData = new FormData();
      formData.append("file", file);

      const res = await fetch("/api/files", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        fetchFiles();
      }
    } catch (err) {
      console.error("Failed to upload:", err);
    } finally {
      setUploading(false);
      if (fileInputRef.current) fileInputRef.current.value = "";
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Are you sure you want to delete this file?")) return;
    try {
      await fetch(`/api/files?id=${id}`, { method: "DELETE" });
      fetchFiles();
    } catch (err) {
      console.error("Failed to delete:", err);
    }
  };

  const copyPath = (path: string, id: number) => {
    navigator.clipboard.writeText(path);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  if (loading) {
    return (
      <div
        style={{
          fontFamily: "var(--font-lato)",
          color: "#666",
          padding: "40px 0",
          textAlign: "center",
        }}
      >
        Loading...
      </div>
    );
  }

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "28px",
        }}
      >
        <h1
          style={{
            fontFamily: "var(--font-oswald)",
            fontSize: "1.6rem",
            fontWeight: 700,
            textTransform: "uppercase",
            color: "#2e2a26",
          }}
        >
          File Manager
        </h1>
        <div>
          <input
            ref={fileInputRef}
            type="file"
            onChange={handleUpload}
            style={{ display: "none" }}
            accept="image/*,video/*,.pdf,.doc,.docx,.xls,.xlsx"
          />
          <button
            onClick={() => fileInputRef.current?.click()}
            disabled={uploading}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              backgroundColor: uploading ? "#ccc" : "#d4a832",
              color: "#fff",
              fontFamily: "var(--font-oswald)",
              fontWeight: 600,
              textTransform: "uppercase",
              padding: "10px 20px",
              fontSize: "0.8rem",
              letterSpacing: "0.05em",
              border: "none",
              cursor: uploading ? "not-allowed" : "pointer",
            }}
          >
            <Upload size={16} />
            {uploading ? "Uploading..." : "Upload File"}
          </button>
        </div>
      </div>

      {/* Upload zone */}
      <div
        style={{
          backgroundColor: "#fff",
          border: "2px dashed #ddd",
          padding: "32px",
          textAlign: "center",
          marginBottom: "28px",
          cursor: "pointer",
          transition: "border-color 0.15s",
        }}
        onClick={() => fileInputRef.current?.click()}
      >
        <Upload
          size={32}
          color="#ccc"
          style={{ marginBottom: "12px" }}
        />
        <p
          style={{
            fontFamily: "var(--font-lato)",
            fontSize: "0.9rem",
            color: "#999",
          }}
        >
          Click to upload or drag and drop
        </p>
        <p
          style={{
            fontFamily: "var(--font-lato)",
            fontSize: "0.75rem",
            color: "#bbb",
            marginTop: "4px",
          }}
        >
          Images, videos, PDFs, documents
        </p>
      </div>

      {/* Files list */}
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        {files.length === 0 && (
          <div
            style={{
              backgroundColor: "#fff",
              padding: "40px",
              textAlign: "center",
              fontFamily: "var(--font-lato)",
              color: "#999",
            }}
          >
            No files uploaded yet. Click &quot;Upload File&quot; to add one.
          </div>
        )}
        {files.map((file) => {
          const Icon = getFileIcon(file.mimeType);
          return (
            <div
              key={file.id}
              style={{
                backgroundColor: "#fff",
                padding: "16px 20px",
                display: "grid",
                gridTemplateColumns: "auto 1fr auto",
                gap: "16px",
                alignItems: "center",
              }}
            >
              {/* Icon / Preview */}
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  backgroundColor: "#f5f5f5",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden",
                }}
              >
                {file.mimeType.startsWith("image/") ? (
                  <img
                    src={file.path}
                    alt={file.originalName}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                ) : (
                  <Icon size={20} color="#999" />
                )}
              </div>

              {/* Info */}
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-oswald)",
                    fontSize: "0.9rem",
                    fontWeight: 600,
                    color: "#333",
                  }}
                >
                  {file.originalName}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-lato)",
                    fontSize: "0.75rem",
                    color: "#999",
                    marginTop: "2px",
                  }}
                >
                  {formatSize(file.size)} - {file.mimeType}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-lato)",
                    fontSize: "0.7rem",
                    color: "#bbb",
                    marginTop: "2px",
                    cursor: "pointer",
                  }}
                  onClick={() => copyPath(file.path, file.id)}
                  title="Click to copy path"
                >
                  {file.path}
                </div>
              </div>

              {/* Actions */}
              <div style={{ display: "flex", gap: "8px" }}>
                <button
                  onClick={() => copyPath(file.path, file.id)}
                  title="Copy path"
                  style={{
                    background: "none",
                    border: "1px solid #eee",
                    cursor: "pointer",
                    padding: "8px",
                    color: copiedId === file.id ? "#00a651" : "#999",
                  }}
                >
                  {copiedId === file.id ? (
                    <Check size={16} />
                  ) : (
                    <Copy size={16} />
                  )}
                </button>
                <button
                  onClick={() => handleDelete(file.id)}
                  title="Delete"
                  style={{
                    background: "none",
                    border: "1px solid #eee",
                    cursor: "pointer",
                    padding: "8px",
                    color: "#e74c3c",
                  }}
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
