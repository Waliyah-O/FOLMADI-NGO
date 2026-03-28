"use client";

import PageLayout from "@/components/PageLayout";
import { useState } from "react";

const donationAmounts = [1000, 2500, 5000, 10000, 25000, 50000];

const impactMap: Record<number, string> = {
  1000: "provides basic school supplies for one child",
  2500: "funds a week of nutritional support for a malnourished child",
  5000: "provides school supplies for one child for a year",
  10000: "trains a community volunteer in child protection",
  25000: "supports a child's education for a full term",
  50000: "trains a community health worker in child health and nutrition",
};

export default function DonatePage() {
  const [frequency, setFrequency] = useState<"once" | "monthly">("once");
  const [selectedAmount, setSelectedAmount] = useState<number>(5000);
  const [customAmount, setCustomAmount] = useState<string>("");
  const [step, setStep] = useState<1 | 2>(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    anonymous: false,
  });

  const effectiveAmount = customAmount
    ? parseInt(customAmount) || 0
    : selectedAmount;

  const formatAmount = (amount: number) =>
    new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      minimumFractionDigits: 0,
    }).format(amount);

  const inputStyle = {
    width: "100%",
    padding: "12px 16px",
    fontFamily: "var(--font-lato)",
    fontSize: "0.95rem",
    border: "1px solid #ddd",
    outline: "none",
    backgroundColor: "#fff",
    boxSizing: "border-box" as const,
  };

  const labelStyle = {
    fontFamily: "var(--font-oswald)",
    fontSize: "0.85rem",
    fontWeight: 600,
    textTransform: "uppercase" as const,
    color: "#333",
    letterSpacing: "0.05em",
    display: "block",
    marginBottom: "6px",
  };

  return (
    <PageLayout>
      {/* Hero */}
      <section
        style={{
          backgroundColor: "#c0613a",
          padding: "60px 0 50px",
        }}
      >
        <div className="container">
          <h1
            style={{
              fontFamily: "var(--font-oswald)",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 700,
              color: "#fff",
              textTransform: "uppercase",
              lineHeight: 1.1,
              marginBottom: "16px",
            }}
          >
            Donate Now
          </h1>
          <p
            style={{
              fontFamily: "var(--font-lato)",
              fontSize: "1.1rem",
              color: "#fff",
              opacity: 0.9,
              maxWidth: "600px",
              lineHeight: 1.7,
            }}
          >
            Your donation gives children a healthy start in life, the
            opportunity to learn, and protection from harm. Every naira makes a
            difference.
          </p>
        </div>
      </section>

      <section style={{ padding: "60px 0", backgroundColor: "#f5f5f5" }}>
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "2fr 1fr",
              gap: "40px",
              alignItems: "flex-start",
            }}
          >
            {/* Donation form */}
            <div style={{ backgroundColor: "#fff", padding: "48px" }}>
              {step === 1 ? (
                <>
                  <h2
                    style={{
                      fontFamily: "var(--font-oswald)",
                      fontSize: "1.5rem",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      color: "#333",
                      marginBottom: "32px",
                    }}
                  >
                    STEP 1: CHOOSE YOUR DONATION
                  </h2>

                  {/* Frequency toggle */}
                  <div style={{ marginBottom: "32px" }}>
                    <label style={labelStyle}>Donation Frequency</label>
                    <div style={{ display: "flex", gap: "0" }}>
                      {(["once", "monthly"] as const).map((freq) => (
                        <button
                          key={freq}
                          onClick={() => setFrequency(freq)}
                          style={{
                            flex: 1,
                            padding: "12px",
                            fontFamily: "var(--font-oswald)",
                            fontSize: "0.9rem",
                            fontWeight: 600,
                            textTransform: "uppercase",
                            letterSpacing: "0.05em",
                            border: "2px solid",
                            borderColor:
                              frequency === freq ? "#c0613a" : "#ddd",
                            backgroundColor:
                              frequency === freq ? "#c0613a" : "#fff",
                            color: frequency === freq ? "#fff" : "#666",
                            cursor: "pointer",
                          }}
                        >
                          {freq === "once" ? "Give Once" : "Give Monthly"}
                        </button>
                      ))}
                    </div>
                    {frequency === "monthly" && (
                      <p
                        style={{
                          fontFamily: "var(--font-lato)",
                          fontSize: "0.85rem",
                          color: "#00a651",
                          marginTop: "8px",
                        }}
                      >
                        ✓ Monthly donors provide sustained support that helps us
                        plan long-term programmes
                      </p>
                    )}
                  </div>

                  {/* Amount selection */}
                  <div style={{ marginBottom: "32px" }}>
                    <label style={labelStyle}>Select Amount</label>
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(3, 1fr)",
                        gap: "8px",
                        marginBottom: "12px",
                      }}
                    >
                      {donationAmounts.map((amount) => (
                        <button
                          key={amount}
                          onClick={() => {
                            setSelectedAmount(amount);
                            setCustomAmount("");
                          }}
                          style={{
                            padding: "14px 8px",
                            fontFamily: "var(--font-oswald)",
                            fontSize: "1rem",
                            fontWeight: 600,
                            border: "2px solid",
                            borderColor:
                              selectedAmount === amount && !customAmount
                                ? "#c0613a"
                                : "#ddd",
                            backgroundColor:
                              selectedAmount === amount && !customAmount
                                ? "#c0613a"
                                : "#fff",
                            color:
                              selectedAmount === amount && !customAmount
                                ? "#fff"
                                : "#333",
                            cursor: "pointer",
                          }}
                        >
                          {formatAmount(amount)}
                        </button>
                      ))}
                    </div>

                    {/* Custom amount */}
                    <div style={{ position: "relative" }}>
                      <span
                        style={{
                          position: "absolute",
                          left: "16px",
                          top: "50%",
                          transform: "translateY(-50%)",
                          fontFamily: "var(--font-oswald)",
                          fontSize: "1rem",
                          color: "#666",
                        }}
                      >
                        ₦
                      </span>
                      <input
                        type="number"
                        placeholder="Enter custom amount"
                        value={customAmount}
                        onChange={(e) => {
                          setCustomAmount(e.target.value);
                          setSelectedAmount(0);
                        }}
                        style={{
                          ...inputStyle,
                          paddingLeft: "36px",
                          border: customAmount
                            ? "2px solid #c0613a"
                            : "1px solid #ddd",
                        }}
                      />
                    </div>
                  </div>

                  {/* Impact message */}
                  {effectiveAmount > 0 && (
                    <div
                      style={{
                        backgroundColor: "#fff5f5",
                        border: "1px solid #c0613a",
                        padding: "16px 20px",
                        marginBottom: "32px",
                        display: "flex",
                        gap: "12px",
                        alignItems: "center",
                      }}
                    >
                      <span style={{ fontSize: "1.5rem" }}>❤️</span>
                      <p
                        style={{
                          fontFamily: "var(--font-lato)",
                          fontSize: "0.9rem",
                          color: "#555",
                          lineHeight: 1.5,
                        }}
                      >
                        <strong>{formatAmount(effectiveAmount)}</strong>{" "}
                        {frequency === "monthly" ? "per month " : ""}
                        {impactMap[effectiveAmount] ||
                          "makes a real difference in a child's life"}
                        .
                      </p>
                    </div>
                  )}

                  <button
                    onClick={() => setStep(2)}
                    disabled={effectiveAmount <= 0}
                    style={{
                      width: "100%",
                      backgroundColor: effectiveAmount > 0 ? "#c0613a" : "#ccc",
                      color: "#fff",
                      fontFamily: "var(--font-oswald)",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      padding: "16px",
                      fontSize: "1.1rem",
                      letterSpacing: "0.05em",
                      border: "none",
                      cursor: effectiveAmount > 0 ? "pointer" : "not-allowed",
                    }}
                  >
                    CONTINUE →
                  </button>
                </>
              ) : (
                <>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: "32px",
                    }}
                  >
                    <h2
                      style={{
                        fontFamily: "var(--font-oswald)",
                        fontSize: "1.5rem",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        color: "#333",
                      }}
                    >
                      STEP 2: YOUR DETAILS
                    </h2>
                    <button
                      onClick={() => setStep(1)}
                      style={{
                        fontFamily: "var(--font-oswald)",
                        fontSize: "0.8rem",
                        color: "#c0613a",
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                      }}
                    >
                      ← BACK
                    </button>
                  </div>

                  {/* Summary */}
                  <div
                    style={{
                      backgroundColor: "#c0613a",
                      padding: "16px 20px",
                      marginBottom: "32px",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-lato)",
                        fontSize: "0.9rem",
                        color: "#fff",
                        opacity: 0.9,
                      }}
                    >
                      {frequency === "monthly"
                        ? "Monthly donation"
                        : "One-time donation"}
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-oswald)",
                        fontSize: "1.5rem",
                        fontWeight: 700,
                        color: "#fff",
                      }}
                    >
                      {formatAmount(effectiveAmount)}
                    </span>
                  </div>

                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: "16px",
                      marginBottom: "16px",
                    }}
                  >
                    <div>
                      <label style={labelStyle}>First Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.firstName}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            firstName: e.target.value,
                          })
                        }
                        style={inputStyle}
                        placeholder="First name"
                      />
                    </div>
                    <div>
                      <label style={labelStyle}>Last Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.lastName}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            lastName: e.target.value,
                          })
                        }
                        style={inputStyle}
                        placeholder="Last name"
                      />
                    </div>
                  </div>

                  <div style={{ marginBottom: "16px" }}>
                    <label style={labelStyle}>Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      style={inputStyle}
                      placeholder="your@email.com"
                    />
                  </div>

                  <div style={{ marginBottom: "24px" }}>
                    <label style={labelStyle}>Phone Number</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      style={inputStyle}
                      placeholder="+234 ..."
                    />
                  </div>

                  <div
                    style={{
                      display: "flex",
                      gap: "10px",
                      alignItems: "center",
                      marginBottom: "32px",
                    }}
                  >
                    <input
                      type="checkbox"
                      id="anonymous"
                      checked={formData.anonymous}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          anonymous: e.target.checked,
                        })
                      }
                      style={{ width: "18px", height: "18px" }}
                    />
                    <label
                      htmlFor="anonymous"
                      style={{
                        fontFamily: "var(--font-lato)",
                        fontSize: "0.9rem",
                        color: "#555",
                        cursor: "pointer",
                      }}
                    >
                      Make my donation anonymous
                    </label>
                  </div>

                  <button
                    style={{
                      width: "100%",
                      backgroundColor: "#c0613a",
                      color: "#fff",
                      fontFamily: "var(--font-oswald)",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      padding: "16px",
                      fontSize: "1.1rem",
                      letterSpacing: "0.05em",
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    DONATE {formatAmount(effectiveAmount)}{" "}
                    {frequency === "monthly" ? "/ MONTH" : "NOW"}
                  </button>

                  <p
                    style={{
                      fontFamily: "var(--font-lato)",
                      fontSize: "0.75rem",
                      color: "#999",
                      textAlign: "center",
                      marginTop: "12px",
                      lineHeight: 1.5,
                    }}
                  >
                    🔒 Your payment is secure and encrypted. FOLMADI Nigeria is
                    a registered NPO (No. 003-867).
                  </p>
                </>
              )}
            </div>

            {/* Sidebar */}
            <div
              style={{ display: "flex", flexDirection: "column", gap: "24px" }}
            >
              {/* Trust signals */}
              <div
                style={{
                  backgroundColor: "#fff",
                  padding: "32px",
                  borderTop: "4px solid #c0613a",
                }}
              >
                <h3
                  style={{
                    fontFamily: "var(--font-oswald)",
                    fontSize: "1rem",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    color: "#333",
                    marginBottom: "20px",
                  }}
                >
                  WHY DONATE TO FOLMADI?
                </h3>
                {[
                  {
                    icon: "✅",
                    text: "Registered NPO — your donation is tax-deductible",
                  },
                  {
                    icon: "📊",
                    text: "Independently audited finances — we are fully transparent",
                  },
                  {
                    icon: "❤️",
                    text: "Over 2 million children reached since 1999",
                  },
                  {
                    icon: "🔒",
                    text: "Secure payment processing",
                  },
                ].map((item) => (
                  <div
                    key={item.text}
                    style={{
                      display: "flex",
                      gap: "10px",
                      marginBottom: "12px",
                    }}
                  >
                    <span style={{ fontSize: "1rem" }}>{item.icon}</span>
                    <span
                      style={{
                        fontFamily: "var(--font-lato)",
                        fontSize: "0.85rem",
                        color: "#555",
                        lineHeight: 1.5,
                      }}
                    >
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>

              {/* Other ways to give */}
              <div
                style={{
                  backgroundColor: "#fff",
                  padding: "32px",
                  borderTop: "4px solid #0779bf",
                }}
              >
                <h3
                  style={{
                    fontFamily: "var(--font-oswald)",
                    fontSize: "1rem",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    color: "#333",
                    marginBottom: "16px",
                  }}
                >
                  OTHER WAYS TO GIVE
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-lato)",
                    fontSize: "0.85rem",
                    color: "#666",
                    lineHeight: 1.6,
                    marginBottom: "12px",
                  }}
                >
                  <strong>Bank Transfer:</strong>
                  <br />
                  Account Name: FOLMADI Nigeria
                  <br />
                  Bank: First Bank of Nigeria
                  <br />
                  Account No: 2012345678
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-lato)",
                    fontSize: "0.85rem",
                    color: "#666",
                    lineHeight: 1.6,
                  }}
                >
                  <strong>Cheque:</strong> Make payable to &ldquo;FOLMADI
                  Nigeria&rdquo; and post to our Abuja office.
                </p>
              </div>

              {/* Contact */}
              <div
                style={{
                  backgroundColor: "#f5f5f5",
                  padding: "24px",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-lato)",
                    fontSize: "0.85rem",
                    color: "#666",
                    lineHeight: 1.6,
                  }}
                >
                  Questions about donating?{" "}
                  <a
                    href="/about-us/contact-us"
                    style={{ color: "#c0613a", fontWeight: 600 }}
                  >
                    Contact our fundraising team
                  </a>{" "}
                  or call <strong>+234 (0) 9 123 4567</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
