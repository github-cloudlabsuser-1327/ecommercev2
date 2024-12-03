import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import WelcomePopup from "./components/WelcomePopup";
import AboutUs from "./components/AboutUs";

function App() {
  return (
    <Router>
      <WelcomePopup />
      <header className="App-header">
        <div className="container">
          <h1 className="text-center mt-5 pb-4">
            DevOps/DevSecOps Challenge - Day 2 Hackathon
          </h1>
          <p>
            Welcome to the DevSecOps Mastery with GitHub Hackathon! This event
            is your gateway to mastering DevSecOps practices within a modern
            application environment. We have crafted this hackathon to provide
            you with a robust learning experience, focused on Contoso Traders, a
            hypothetical e-commerce company using a React front-end, .NET
            back-end, and various microservices, container services, AI-powered
            GitHub Actions, undersatnding of Security compliance as code and
            mastering the usage of GitHub Copilot.
          </p>
          <p>
            Your goal is to integrate DevSecOps practices into Contoso Traders'
            existing e-commerce application. As you navigate through various
            challenges, you will gain practical experience in implementing
            DevSecOps in an application built with a modern tech stack.
          </p>
        </div>
        <div className="container">
          <h3>Learning Objectives</h3>
          <p>Participating in this hackathon, you will:</p>
          <ul>
            <li>
              Master the art of Continuous Integration and Deployment (CI/CD)
              for .NET applications using GitHub Actions.
            </li>
            <li>Enhance code security and manage dependencies effectively.</li>
            <li>
              Integrate and optimize monitoring solutions using Azure Monitor
              and Application Insights.
            </li>
            <li>
              Execute resilience testing to ensure the robustness of the
              application.
            </li>
            <li>
              Intergrate the usage of AI-powered GitHub actions to have a good
              hold on the security checks and complaince of pipelines.
            </li>
            <li>
              Master the usage of GitHub Copilot to leverage the power of AI
              towards code completion and testing.
            </li>
          </ul>
        </div>
      </header>
      <Routes>
        <Route path="/about-us" element={<AboutUs />} />
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
}

export default App;