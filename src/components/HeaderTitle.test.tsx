import { render, screen } from "@testing-library/react";
import HeaderTitle from "./HeaderTitle";

describe("test header title", () => {
  test("init", () => {
    render(<HeaderTitle text="test example" />);
    const headerTitle = screen.getByRole("heading");
    expect(headerTitle).toBeInTheDocument();
    expect(headerTitle.innerHTML).toBe("test example");
  });
});
