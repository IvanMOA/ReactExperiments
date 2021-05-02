import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import { Login } from "../Experiments/Fp/components";
import * as TE from "fp-ts/TaskEither";

describe("Test", () => {
  let emailInput: HTMLElement;
  let passwordInput: HTMLElement;

  const setup = () => {
    emailInput = screen.getByTestId("email_input");
    passwordInput = screen.getByTestId("password_input");
  };

  beforeEach(() => {
    const onLoginMock = jest.fn();
    render(<Login onLogin={onLoginMock} />);
    setup();
  });

  it("Calls onsubmit when form is submitted", () => {
    expect(emailInput).toBeInTheDocument();
  });
});
