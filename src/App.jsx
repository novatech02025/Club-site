import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LoadingScreen from "./components/LoadingScreen";
import Navigation from "./components/Navbar";
import Hero from "./components/sections/HeroSection";
import About from "./components/sections/About";
import Events from "./components/sections/Events";
import Projects from "./components/sections/Project";
import Team from "./components/sections/Team";
import Contact from "./components/sections/Contact";
import Footer from "./components/Footer";
import DailyChallenges from "./components/sections/DailyChallenges";
import DailyNews from "./components/sections/DailyNews";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import AdminDashboard from "./components/AdminDashboard";
import Resources from "./components/sections/Resources";

import {
  navigationItems,
  events,
  projects,
  teamMembers,
  techNews,
  projectTemplates,
} from "./data/SiteData";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1500);
  }, []);

  if (isLoading) return <LoadingScreen />;

  // Home section with Hero + Resources
  const renderHome = () => (
    <>
      <Hero setActiveSection={setActiveSection} />
      <About/>   
      <Events events={events} />
      <Team teamMembers={teamMembers} />;
      <Projects projects={projects} />;
      <DailyChallenges />;
      <DailyNews techNews={techNews} projectTemplates={projectTemplates} />;
      <Resources />
      <Contact />;
    </>
  );

  const renderSection = () => {
    switch (activeSection) {
      case "home":
        return renderHome();
      case "about":
        return <About />;
      case "resources":
        return <Resources />;
      case "events":
        return <Events events={events} />;
      case "projects":
        return <Projects projects={projects} />;
      case "team":
        return <Team teamMembers={teamMembers} />;
      case "challenges":
        return <DailyChallenges />;
      case "templates":
        return <DailyNews techNews={techNews} projectTemplates={projectTemplates} />;
      case "contact":
        return <Contact />;
      default:
        return renderHome();
    }
  };

  return (
    <Router>
      <Routes>
        {/* Default Club Website */}
        <Route
          path="/"
          element={
            <div className="min-h-screen bg-slate-900 text-white overflow-hidden">
              <Navigation
                navigationItems={navigationItems}
                activeSection={activeSection}
                setActiveSection={setActiveSection}
                isMenuOpen={isMenuOpen}
                setIsMenuOpen={setIsMenuOpen}
              />
              {renderSection()}
              <Footer />
            </div>
          }
        />

        {/* Login Page */}
        <Route path="/login" element={<Login />} />

        {/* Sign Up Page */}
        <Route path="/signup" element={<SignUp />} />

        {/* Admin Dashboard */}
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
