import { render, screen, fireEvent } from "@testing-library/react";
import RadioButton from "./RadioButton";

describe("radio Button", () => {
  test("init", () => {
    render(
      <RadioButton ChangeStatus={() => {}} Checked={false} Value="test" />
    );
    const radio = screen.getByRole("radio");
    expect(radio).toBeInTheDocument();
  });
  test("click test", () => {
    const change = jest.fn();
    render(<RadioButton ChangeStatus={change} Checked={false} Value="test" />);
    const input = screen.getByRole("radio");
    fireEvent.change(input , {value:{target:true}});
    expect(input).toHaveBeenCalledTimes(1);
  });
});
