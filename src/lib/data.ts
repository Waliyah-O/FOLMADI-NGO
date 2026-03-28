export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Impact", href: "#impact" },
  { label: "Contact", href: "#contact" },
];

export const NAV_ITEMS = [
  {
    label: "ABOUT US",
    href: "/about-us",
    children: [
      { label: "OUR HISTORY", href: "/about-us/our-history" },
      // { label: "OUR SUCCESSES", href: "/about-us/our-successes" },
      { label: "OUR PEOPLE", href: "/about-us/our-people" },
      { label: "ACCOUNTABILITY", href: "/about-us/accountability" },
      { label: "CONTACT US", href: "/about-us/contact-us" },
    ],
  },
  {
    label: "WHAT WE DO",
    href: "/what-we-do",
    children: [
      { label: "OUR WORK IN NIGERIA", href: "/what-we-do/our-work" },
      { label: "IN TIMES OF CRISIS", href: "/what-we-do/in-times-of-crisis" },
      {
        label: "HELP US CHANGE LIVES",
        href: "/what-we-do/help-us-change-the-lives-of-children",
      },
    ],
  },
  {
    label: "GET INVOLVED",
    href: "/get-involved",
    children: [
      {
        label: "IF YOU ARE A PERSON",
        href: "/get-involved/if-you-are-a-person",
      },
      {
        label: "IF YOU ARE A COMPANY",
        href: "/get-involved/if-you-are-a-company",
      },
    ],
  },
  {
    label: "NEWS & EVENTS",
    href: "/news-and-events",
    children: [
      { label: "NEWS", href: "/news-and-events/news" },
      { label: "BLOGS", href: "/news-and-events/blogs" },
      { label: "UPCOMING EVENTS", href: "/news-and-events/upcoming-events" },
      { label: "PUBLICATIONS", href: "/news-and-events/publications" },
    ],
  },
];

export const STATS = [
  { value: "5,000+", label: "Lives Touched" },
  { value: "12+", label: "Active Programs" },
  { value: "20+", label: "Communities Served" },
  { value: "100%", label: "Community-Driven" },
];

export const PROGRAMS = [
  {
    icon: "👶",
    title: "Early Child Development",
    description:
      "Nurturing cognitive, emotional, and physical growth in children ages 0–6 through structured early learning and play-based programs.",
    accent: "terracotta",
  },
  {
    icon: "🎓",
    title: "Youth Enlightenment",
    description:
      "Life skills, leadership training, and career mentorship for teenagers and young adults navigating education and early adulthood.",
    accent: "gold",
  },
  {
    icon: "🏥",
    title: "Medical & Health Outreach",
    description:
      "Free medical screenings, immunization drives, and health education reaching hundreds in underserved Lagos communities.",
    accent: "forest",
  },
  {
    icon: "💧",
    title: "Clean Drinkable Water",
    description:
      "Providing safe drinking water through borehole projects, water purification systems, and sanitation awareness campaigns.",
    accent: "teal",
  },
  {
    icon: "👧",
    title: "Girl Child Protection",
    description:
      "Safeguarding girls from early marriage, abuse, and school dropout — with advocacy, legal support, and retention programs.",
    accent: "terracotta",
  },
  {
    icon: "🌺",
    title: "Women's Health",
    description:
      "Maternal health support, reproductive health education, and accessible healthcare for women in vulnerable communities.",
    accent: "gold",
  },
  {
    icon: "🗳️",
    title: "Civic Education",
    description:
      "Empowering Nigerians with knowledge of their rights, responsibilities, and the democratic processes that shape their lives.",
    accent: "forest",
  },
  {
    icon: "🌍",
    title: "Community Development",
    description:
      "Capacity building, cooperative formation, and livelihood support helping families build economic resilience from within.",
    accent: "teal",
  },
];

export const IMPACT_STATS = [
  {
    icon: "👶",
    value: "1,200+",
    label: "Children in Early Development Programs",
  },
  { icon: "💧", value: "8", label: "Borehole & Water Projects Completed" },
  { icon: "🌺", value: "3,000+", label: "Women & Girls Reached" },
  { icon: "🏘️", value: "20+", label: "Communities Served in Lagos" },
];

export const TESTIMONIALS = [
  {
    quote:
      "FOLMADI changed my daughter's life. Before their girl child program, I was thinking of withdrawing her from school. Today she is in secondary school and wants to be a doctor.",
    name: "Mama Chidinma",
    role: "Parent, Ajegunle Community",
    avatar: "👩",
  },
  {
    quote:
      "The free medical outreach they brought to our area last year reached over 200 people in one day. We had never seen that kind of care come to us before. God bless FOLMADI.",
    name: "Elder Babatunde",
    role: "Community Leader, Mushin",
    avatar: "👨",
  },
  {
    quote:
      "The youth enlightenment workshop gave me the confidence to start my own small business. I was just wandering before. Now I have direction and I am helping my family.",
    name: "Emmanuel O.",
    role: "Youth Program Graduate, Agege",
    avatar: "🧑",
  },
];

export const DONATION_TIERS = [
  { amount: "₦5,000", label: "Feeds a child for a week" },
  { amount: "₦15,000", label: "Covers school supplies for one child" },
  { amount: "₦50,000", label: "Funds one community health outreach" },
  { amount: "Custom", label: "Give any amount you can" },
];

export const FOCUS_ITEMS = [
  { icon: "📚", label: "Education" },
  { icon: "🏥", label: "Healthcare" },
  { icon: "💧", label: "Clean Water" },
  { icon: "👧", label: "Girl Child" },
  { icon: "🌺", label: "Women's Health" },
  { icon: "🗳️", label: "Civic Education" },
  { icon: "👶", label: "Early Childhood" },
  { icon: "🤝", label: "Community" },
];
