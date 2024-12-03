import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import WelcomePopup from "./WelcomePopup";

describe("WelcomePopup Component", () => {
  test("renders the welcome message", () => {
    render(<WelcomePopup />);
    expect(screen.getByText("WELCOME")).toBeInTheDocument();
    expect(screen.getByText("TO")).toBeInTheDocument();
    expect(screen.getByText("The DevSecOps Day 2 Hackathon!")).toBeInTheDocument();
  });

  test("renders the close button", () => {
    render(<WelcomePopup />);
    expect(screen.getByText("Get Started")).toBeInTheDocument();
  });

  test("closes the modal when the close button is clicked", () => {
    render(<WelcomePopup />);
    fireEvent.click(screen.getByText("Get Started"));
    expect(screen.queryByText("WELCOME")).not.toBeInTheDocument();
  });
});