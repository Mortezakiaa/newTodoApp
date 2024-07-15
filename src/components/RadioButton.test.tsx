import { render, screen } from "@testing-library/react";
import RadioButton from "./RadioButton";

describe("radio Button", () => {
  test("init", () => {
    render(
      <RadioButton ChangeStatus={() => {}} Checked={false} Value="test" />
    );
    const radio = screen.getByRole("radio");
    expect(radio).toBeInTheDocument();
  });
  test("add diffrent property", () => {
    const { getByRole } = render(
      <RadioButton ChangeStatus={() => {}} Checked={true} Value="test1" />
    );
    const radio = getByRole("radio");
    expect(radio).toBeChecked();
    expect(radio.id).toBe("test1");
  });
});
