import { fireEvent } from "@testing-library/react";
import { screen, render } from "@testing-library/react";
import App from "./App";

test("buttons has correct initial color", () => {
  render(<App />);

  // ele name test or text
  const colorButtons = screen.getByRole("button", { name: "Change to blue" });

  // expect ele styled => toHaveStyle
  expect(colorButtons).toHaveStyle({ backgroundColor: "red" });

  // firEvent ele event trigger // method click => buttons onClick event
  fireEvent.click(colorButtons);

  // button ele onClick event => styled changed to blue check
  expect(colorButtons).toHaveStyle({ backgroundColor: "blue" });

  // button ele text change to "Change to red" check
  expect(colorButtons.textContent).toBe("Change to red");
});

test("check box", () => {
  render(<App />);

  // color button select
  const colorButtons = screen.getByRole("button", { name: "Change to blue" });

  // enabled status check
  expect(colorButtons).toBeEnabled();

  // checkbox getRole
  const checkbox = screen.getByRole("checkbox");
  expect(checkbox).not.toBeChecked();
});

test("checkbox disabled", () => {
  render(<App />);

  const checkbox = screen.getByRole("checkbox");
  const button = screen.getByRole("button");

  fireEvent.click(checkbox);
  expect(button).toBeDisabled();

  fireEvent.click(checkbox);
  expect(button).toBeEnabled();
});
