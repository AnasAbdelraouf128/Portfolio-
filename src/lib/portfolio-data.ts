export const CONTACT = {
  name: "Anas Abdelraouf",
  initials: "AA",
  logo: "Anas Abdelraouf",
  title: "SOC / Incident Response Analyst",
  location: "Alexandria, Egypt",
  email: "anasabdelraouf128@gmail.com",
  phone: "+201015645873",
  github: "https://github.com/AnasAbdelraouf128",
  linkedin: "https://www.linkedin.com/in/anas-abdelraoufsaeed",
  summary:
    "Computer Science student and defensive-security practitioner focused on incident response, SIEM monitoring, and threat hunting. Currently an IR Analyst Intern at DEPI and Head of the Blue Team at the HackerRank Campus Community.",
};

export const METRICS = [
  { value: "217+", label: "Training hours" },
  { value: "2", label: "Active security roles" },
  { value: "4", label: "Certifications & courses" },
  { value: "3.2", label: "GPA / 4.0" },
];


export const ROLES = [
  "INCIDENT RESPONSE ANALYST",
  "BLUE TEAM LEAD",
  "SOC DEFENDER",
  "CTF ORGANIZER",
];

export const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "achievements", label: "Achievements" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export const STATUS_ROWS = [
  { key: "STATUS", val: "Available for Opportunities", live: true },
  { key: "ROLE", val: "IR Analyst Intern" },
  { key: "TEAM", val: "Blue Team Lead" },
  { key: "FOCUS", val: "SOC / Incident Response" },
  { key: "LANG", val: "AR (native) / EN (B2)" },
];

export const EXPERIENCE = [
  {
    title: "Cyber Security Incident Response Analyst Intern",
    date: "Dec 2025 — Present",
    org: "DEPI · Ministry of Communications and IT",
    points: [
      { k: "Technical Proficiency:", v: "Acquired hands-on expertise in incident response management workflows and SOC operations." },
      { k: "English Development:", v: "Completed a specialized 6-week \"English for Freelancing\" module enhancing professional communication." },
      { k: "Freelance Coaching:", v: "Developed a strategic approach to positioning in the digital security marketplace." },
    ],
  },
  {
    title: "Head of Cybersecurity Blue Team",
    date: "Nov 2025 — Present",
    org: "HackerRank Campus Community",
    points: [
      { k: "Team Leadership:", v: "Lead and mentor a specialized team of students in defensive security fundamentals." },
      { k: "Community Engagement:", v: "Organize internal Capture the Flag (CTF) challenges to sharpen practical skills." },
      { k: "Technical Training:", v: "Design and deliver technical workshops on Blue Team tools, SIEM, and threat hunting." },
    ],
  },
];

type SkillBar = { label: string; value: string; width: number };
type SkillGroup =
  | { title: string; type: "bars"; bars: SkillBar[] }
  | { title: string; type: "tags"; tags: string[] };

export const SKILLS: SkillGroup[] = [
  {
    title: "Monitoring & SIEM",
    type: "bars",
    bars: [
      { label: "Splunk", value: "80%", width: 80 },
      { label: "ELK Stack", value: "70%", width: 70 },
    ],
  },
  {
    title: "Network Analysis",
    type: "tags",
    tags: ["Wireshark", "Nmap", "Snort", "Suricata", "YARA", "Cisco Packet Tracer"],
  },
  {
    title: "Offensive / Defensive",
    type: "tags",
    tags: ["Burp Suite", "Cyber Chef", "Web Forensics", "OWASP Top 10", "Active Directory"],
  },
  {
    title: "Systems & OS",
    type: "bars",
    bars: [
      { label: "Linux CLI", value: "85%", width: 85 },
      { label: "Windows / AD", value: "65%", width: 65 },
    ],
  },
  {
    title: "Soft Skills",
    type: "tags",
    tags: ["Team Leadership", "Communication", "Problem Solving", "Detail Oriented"],
  },
  {
    title: "Languages",
    type: "bars",
    bars: [
      { label: "Arabic", value: "Native", width: 100 },
      { label: "English (B2)", value: "75%", width: 75 },
    ],
  },
];

export const ACHIEVEMENTS = [
  {
    hours: "92",
    unit: "hrs",
    title: "Red Teaming, Ethical Hacking, Bug Hunting & Penetration Test",
    by: "by Hossam Shady",
    points: [
      { k: "Web & Network:", v: "Manual/auto exploitation of OWASP Top 10 (SQLi, XSS) using Burp Suite & Nmap." },
      { k: "Active Directory:", v: "Kerberoasting, privilege escalation, domain compromise." },
      { k: "Reporting:", v: "Professional pentest reports detailing security findings." },
    ],
  },
  {
    hours: "52",
    unit: "hrs",
    title: "ECIR Prep — Incident Response Certification",
    by: "by Ahmed Sultan · Netriders",
    points: [
      { k: "SIEM & Threat Hunting:", v: "Log correlation and IoC detection in Splunk & ELK." },
      { k: "Network Analysis:", v: "Deep packet inspection and C2 traffic analysis." },
      { k: "Incident Reporting:", v: "Forensic findings and attack timeline documentation." },
    ],
  },
  {
    hours: "73",
    unit: "hrs",
    title: "Complete Networking Fundamentals Course",
    by: "by David Bombal",
    points: [
      { k: "Network Fundamentals:", v: "OSI/TCP-IP models, IPv4/IPv6 subnetting." },
      { k: "Simulation & Design:", v: "Complex topologies in Cisco Packet Tracer." },
      { k: "Protocol Analysis:", v: "Packet-level diagnostic of network issues." },
    ],
  },
  {
    hours: "✓",
    unit: " done",
    title: "Advent of Cyber 2025",
    by: "TryHackMe",
    points: [
      { k: "", v: "Completed all daily challenges across the season." },
      { k: "", v: "Earned official TryHackMe completion certification." },
    ],
  },
];

export const PROJECTS = [
  {
    num: "01",
    tag: "Theory of Computation",
    title: "Regex to DFA Converter",
    desc: "Final project for CSCI 3204. Converts regular expressions into Deterministic Finite Automata with full state visualization and transition table output.",
    link: "https://github.com/AnasAbdelraouf128/RegexToDFAConverter",
  },
  {
    num: "02",
    tag: "Java OOP",
    title: "Bank Queue System",
    desc: "Final project for CSCI 2201. A full bank queue management simulation built with Java OOP principles — multi-window service, priority queuing, and real-time analytics.",
    link: "https://github.com/AnasAbdelraouf128/Bank-System-Queue-System.git",
  },
];
