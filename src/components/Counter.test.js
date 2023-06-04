
import { render, fireEvent, screen } from "@testing-library/react";
import Counter from "../components/Counter";
import "@testing-library/jest-dom"

test("increments counter", () => {
render(<Counter />);

const counter = screen.getByTestId("counter");
const incrementBtn = screen.getByTestId("increment");

fireEvent.click(incrementBtn);

expect(counter).toHaveTextContent("1");
});