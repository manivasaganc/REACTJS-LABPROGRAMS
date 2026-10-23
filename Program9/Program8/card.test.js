import { render, screen } from "@testing-library/react";
import Card from "./src/Card";

test("renders children inside Card", () => {
  render(
    <Card>
      <h1>Hello React</h1>
    </Card>
  );

  expect(screen.getByText("Hello React")).toBeInTheDocument();
});

test("Card has container", () => {
  render(
    <Card>
      <p>Testing Card</p>
    </Card>
  );

  const card = screen.getByTestId("card");
  expect(card).toBeInTheDocument();
});

test("Card renders multiple children", () => {
  render(
    <Card>
      <h2>Title</h2>
      <p>Description</p>
    </Card>
  );

  expect(screen.getByText("Title")).toBeInTheDocument();
  expect(screen.getByText("Description")).toBeInTheDocument();
});