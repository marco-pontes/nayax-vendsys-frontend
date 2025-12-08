import { render, screen, waitFor, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { NayaxAutocomplete } from "./NayaxAutocomplete";

describe("NayaxAutocomplete", () => {
  const mockOptions = [
    { label: "Apple", value: 1, icon: <span data-testid="icon-1">🍎</span> },
    { label: "Banana", value: 2, icon: <span data-testid="icon-2">🍌</span> },
    { label: "Cherry", value: "c", icon: <span data-testid="icon-3">🍒</span> },
  ];

  const onSelectMock = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders with the default placeholder", () => {
    render(
      <NayaxAutocomplete
        options={mockOptions}
        onSelect={onSelectMock}
        id="test-autocomplete"
      />,
    );

    const trigger = screen.getByRole("combobox");
    expect(trigger).toHaveTextContent("Please Select...");
  });

  it("renders with a custom placeholder", () => {
    render(
      <NayaxAutocomplete
        options={mockOptions}
        onSelect={onSelectMock}
        id="test-autocomplete"
        placeholder="Choose fruit"
      />,
    );

    expect(screen.getByRole("combobox")).toHaveTextContent("Choose fruit");
  });

  it("opens the list and selects an option", async () => {
    const user = userEvent.setup();
    render(
      <NayaxAutocomplete
        options={mockOptions}
        onSelect={onSelectMock}
        id="test-autocomplete"
      />,
    );

    const trigger = screen.getByRole("combobox");
    await user.click(trigger);

    // Radix UI renders content in a portal, wait for options to appear
    const option = await screen.findByRole("option", { name: /Banana/i });
    expect(option).toBeInTheDocument();

    // Check if icon is rendered in the list
    expect(within(option).getByTestId("icon-2")).toBeInTheDocument();

    await user.click(option);

    // Verify callback
    expect(onSelectMock).toHaveBeenCalledTimes(1);
    expect(onSelectMock).toHaveBeenCalledWith(2);

    // Verify trigger label update
    expect(trigger).toHaveTextContent("Banana");

    // Popover should close
    await waitFor(() => {
      expect(screen.queryByRole("option")).not.toBeInTheDocument();
    });
  });

  it("deselects the option when clicking it again", async () => {
    const user = userEvent.setup();
    render(
      <NayaxAutocomplete
        options={mockOptions}
        onSelect={onSelectMock}
        id="test-autocomplete"
      />,
    );

    const trigger = screen.getByRole("combobox");

    // First selection
    await user.click(trigger);
    const option = await screen.findByRole("option", { name: /Apple/i });
    await user.click(option);

    expect(trigger).toHaveTextContent("Apple");
    expect(onSelectMock).toHaveBeenCalledWith(1);

    // Re-open and click same option
    await user.click(trigger);
    const selectedOption = await screen.findByRole("option", {
      name: /Apple/i,
    });
    await user.click(selectedOption);

    expect(onSelectMock).toHaveBeenCalledWith(null);
    expect(trigger).toHaveTextContent("Please Select...");
  });

  it("supports string values", async () => {
    const user = userEvent.setup();
    render(
      <NayaxAutocomplete
        options={mockOptions}
        onSelect={onSelectMock}
        id="test-autocomplete"
      />,
    );

    const trigger = screen.getByRole("combobox");
    await user.click(trigger);

    const option = await screen.findByRole("option", { name: /Cherry/i });
    await user.click(option);

    expect(onSelectMock).toHaveBeenCalledWith("c");
    expect(trigger).toHaveTextContent("Cherry");
  });
});
