import EButton from "./index";
import { describe, test, expect, vi } from "vitest";
import { render } from "@testing-library/react";

describe("EButton", () => {
  test("basic render", () => {
    const res = render(<EButton label="hello" />);
    expect(res.getByText("hello")).toBeDefined();
  });

  test("button click", () => {
    const onClick = vi.fn();
    const res = render(<EButton label="hello" onClick={onClick} />);
    res.getByText("hello").click();
    expect(onClick).toBeCalled();
  });

  test("button disabled", () => {
    const onClick = vi.fn();
    const res = render(
      <EButton label="hello" disabled={true} onClick={onClick} />,
    );
    res.getByText("hello").click();
    expect(onClick).not.toBeCalled();
  });

  test("button size", () => {
    const res = render(<EButton label="hello" size="large" />);
    expect(res.getByText("hello").className).toContain("btn-large");
  });
});
