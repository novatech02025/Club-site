// src/data/siteData.js
import React from "react";

// --- Navigation Items ---
export const navigationItems = [
  { id: "home", name: "Home" },
  { id: "about", name: "About" },
  { id: "events", name: "Events" },
  { id: "team", name: "Team" },
  { id: "projects", name: "Projects" },
  { id: "challenges", name: "Daily Challenges" },
  { id: "templates", name: "Daily News" },
  { id: "contact", name: "Contact" },
];

// --- Daily Challenges ---
export const dailyChallenges = [
  {
    level: "Beginner",
    title: "Check for Leap Year",
    description: "Write a function to determine if a given year is a leap year or not.",
    algorithm: [
      "1. A year is a leap year if it's divisible by 4.",
      "2. However, if it's divisible by 100, it's NOT a leap year.",
      "3. UNLESS, it's also divisible by 400, then it IS a leap year.",
    ],
    code: `function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}`,
  },
  {
    level: "Intermediate",
    title: "Palindrome Checker",
    description: "Check if a string reads the same forwards and backwards, ignoring punctuation and case.",
    algorithm: [
      "1. Sanitize the input string (lowercase, remove non-alphanumeric chars).",
      "2. Create a reversed version of the sanitized string.",
      "3. Compare the sanitized string with its reversed version.",
    ],
    code: `function isPalindrome(str) {
  const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  const reversedStr = cleanStr.split('').reverse().join('');
  return cleanStr === reversedStr;
}`,
  },
  {
    level: "Advanced",
    title: "Coming Soon...",
    description: "Challenging problems to test your limits and mastery of algorithms.",
    algorithm: null,
    code: null,
  },
];

// --- Tech News ---
export const techNews = [
  {
    title: "Global AI Summit 2025 Concludes with New Ethical Frameworks",
    description: "Leaders in AI unveiled new models for ethical AI development and cross-platform integration, promising a more transparent future.",
    image: "https://placehold.co/600x400/1E293B/93C5FD?text=AI+Summit+2025",
    date: "September 26, 2025",
    category: "AI/ML",
  },
  {
    title: "Quantum Computing Achieves New Milestone in Stability",
    description: "Researchers have successfully maintained a stable quantum state for a record-breaking duration, paving the way for practical applications.",
    image: "https://placehold.co/600x400/1E293B/A5B4FC?text=Quantum+Leap",
    date: "September 25, 2025",
    category: "Hardware",
  },
  {
    title: "Next-Gen Web Framework 'Fusion.js' Enters Public Beta",
    description: "The new JavaScript framework promises up to 3x faster rendering speeds by leveraging a novel reactive architecture.",
    image: "https://placehold.co/600x400/1E293B/F9A8D4?text=Fusion.js",
    date: "September 24, 2025",
    category: "Web Dev",
  },
];

// --- Project Templates ---
export const projectTemplates = [
  {
    title: "Portfolio Website",
    description: "A clean, modern portfolio to showcase your skills and projects. Fully responsive and easy to customize.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/></svg>
    ),
  },
  {
    title: "E-commerce Store",
    description: "Pre-built layout for online stores. Includes product pages, shopping cart, and checkout flow.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
    ),
  },
  {
    title: "Hackathon Starter Kit",
    description: "A boilerplate for hackathons with a landing page, team section, and project submission form.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>
    ),
  },
  {
    title: "AI/ML Project",
    description: "A structured template for machine learning projects, including data processing and model training notebooks.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 8V4H8"/><rect x="4" y="12" width="16" height="8" rx="2"/><path d="M12 12v8H8"/></svg>
    ),
  },
  {
    title: "Mobile App Layout",
    description: "A responsive layout for mobile applications, perfect for prototyping your next big idea with React Native.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>
    ),
  },
  {
    title: "SaaS Landing Page",
    description: "A high-converting landing page template designed for SaaS products, with feature sections and pricing tables.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m21.73 18-8-14a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><path d="m12 9 1.5 3 3 1.5-3 1.5-1.5 3-1.5-3-3-1.5 3-1.5Z"/></svg>
    ),
  },
];

// --- Events ---
export const events = [
  {
    title: "Online Quiz Competition",
    date: "Sep 13, 2025",
    time: "5:00 PM",
    description: "Test your knowledge in C, CSS, HTML, GitHub, and Python. Winners will be rewarded with pizzas and certificates during the Fresher Party 2025.",
    type: "Quiz",
    color: "bg-gradient-to-r from-yellow-500 to-orange-500",
  },
  {
    title: "E-Sports Tournament",
    date: "Coming Soon",
    time: "TBA",
    description: "Get ready for thrilling E-Sports battles like BGMI and Free Fire. Stay tuned!",
    type: "Gaming",
    color: "bg-gradient-to-r from-red-500 to-pink-500",
  },
  {
    title: "Hackathon 2025",
    date: "Nov 15-16, 2025",
    time: "48 Hours",
    description: "Build innovative solutions to real-world problems in this exciting hackathon.",
    type: "Competition",
    color: "bg-gradient-to-r from-blue-500 to-cyan-500",
  },
];


// --- Winners ---
export const winners = [
  {
    name: "Amit Sharma",
    event: "Online Quiz Competition",
    image: "/images/winners/amit.jpg",
  },
  {
    name: "Priya Verma",
    event: "E-Sports Tournament",
    image: "/images/winners/priya.jpg",
  },
  {
    name: "Rahul Gupta",
    event: "Hackathon 2025",
    image: "/images/winners/rahul.jpg",
  },
];

// --- Projects ---
export const projects = [
  {
    title: "Smart Campus Navigator",
    description: "AR-based navigation system for university campus using React Native and ARKit",
    tech: ["React Native", "ARKit", "Node.js", "MongoDB"],
    status: "In Progress",
    image: "bg-gradient-to-br from-blue-400 to-purple-600",
  },
  {
    title: "EcoTracker",
    description: "Carbon footprint tracking application with gamification elements",
    tech: ["React", "Python", "TensorFlow", "Firebase"],
    status: "Completed",
    image: "bg-gradient-to-br from-green-400 to-blue-500",
  },
  {
    title: "CodeCollab Platform",
    description: "Real-time collaborative coding platform for remote teams",
    tech: ["React", "WebRTC", "Socket.io", "Docker"],
    status: "Planning",
    image: "bg-gradient-to-br from-purple-400 to-pink-600",
  },
];






// --- Team Members ---
export const teamMembers = [
  {
    name: "Pushpankit Singh Patel",
    role: "President",
    bio: "Full-stack developer passionate about AI and blockchain technology",
    skills: ["React", "Python", "Machine Learning"],
    image: "bg-gradient-to-br from-blue-400 to-purple-500",
  },
  {
    name: "Gagan Puskar",
    role: "Vice President",
    bio: "UI/UX designer and front-end developer with a love for clean interfaces",
    skills: ["React", "Figma", "TypeScript"],
    image: "bg-gradient-to-br from-pink-400 to-red-500",
  },
  {
    name: "Ashnik Choudhary",
    role: "Secretary",
    bio: "UI/UX designer and front-end developer with a love for clean interfaces",
    skills: ["React", "Figma", "TypeScript"],
    image: "bg-gradient-to-br from-pink-400 to-red-500",
  },
  {
    name: "Sumit Verma",
    role: "Technical Lead",
    bio: "Frontend Developer specializing in scalable systems and DevOps",
    skills: ["Frontend", "JavaScript", "React.js", "Python", "C"],
    image: "bg-gradient-to-br from-green-400 to-teal-500",
  },
  {
    name: "Akashi Gupta",
    role: "Events Coordinator",
    bio: "Computer science student with expertise in mobile development",
    skills: ["React Native", "Flutter", "Firebase"],
    image: "bg-gradient-to-br from-yellow-400 to-orange-500",
  },
  {
    name: "Arshan Ali Khan",
    role: "PR/Outreach Lead",
    bio: "Computer science student with expertise in mobile development",
    skills: ["React Native", "Flutter", "Firebase"],
    image: "bg-gradient-to-br from-yellow-400 to-orange-500",
  },
  {
    name: "Shivam Kumar",
    role: "Research & Developer",
    bio: "Computer science student with expertise in mobile development",
    skills: ["React Native", "Flutter", "Firebase"],
    image: "bg-gradient-to-br from-yellow-400 to-orange-500",
  },
  {
    name: "Vanshaj Agnithotri",
    role: "PR",
    bio: "Computer science student with expertise in mobile development",
    skills: ["React Native", "Flutter", "Firebase"],
    image: "bg-gradient-to-br from-yellow-400 to-orange-500",
  },
];
