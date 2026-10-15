import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Welcome to React", () => {
  render(<App />);
  const heading = screen.getByText(/Welcome to React/i);
  expect(heading).toBeInTheDocument();
});