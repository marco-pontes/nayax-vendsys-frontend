import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import NayaxSyncFusionTable from "./NayaxSyncFusionTable";

// Mock Syncfusion components to avoid testing the library internals and handling complex DOM issues
vi.mock("@syncfusion/ej2-react-grids", () => {
  return {
    GridComponent: (props: any) => (
      <div
        data-testid="mock-grid"
        data-allow-paging={props.allowPaging}
        data-allow-sorting={props.allowSorting}
        data-allow-filtering={props.allowFiltering}
        data-items-count={props.dataSource?.length}
      >
        {props.children}
      </div>
    ),
    ColumnsDirective: ({ children }: any) => (
      <div data-testid="mock-columns-container">{children}</div>
    ),
    ColumnDirective: (props: any) => (
      <div data-testid="mock-column" data-field={props.field}>
        {props.headerText}
      </div>
    ),
    Inject: () => <div data-testid="mock-inject" />,
    // Mock the service classes simply as strings or objects
    Page: "PageService",
    Sort: "SortService",
    Filter: "FilterService",
  };
});

describe("NayaxSyncFusionTable", () => {
  const mockItems = [
    { id: 1, name: "Item 1", value: 100 },
    { id: 2, name: "Item 2", value: 200 },
  ];

  const mockColumns = [
    { field: "id", headerText: "ID", width: "50" },
    { field: "name", headerText: "Name" },
    { field: "value", headerText: "Value" },
  ];

  it("renders the table container and title", () => {
    render(<NayaxSyncFusionTable items={[]} columnConfigs={[]} />);
    expect(screen.getByText("Syncfusion DataGrid")).toBeInTheDocument();
  });

  it("passes configuration props and data to the GridComponent", () => {
    render(
      <NayaxSyncFusionTable items={mockItems} columnConfigs={mockColumns} />,
    );

    const grid = screen.getByTestId("mock-grid");

    // Verify data source length
    expect(grid).toHaveAttribute("data-items-count", "2");

    // Verify feature flags are enabled
    expect(grid).toHaveAttribute("data-allow-paging", "true");
    expect(grid).toHaveAttribute("data-allow-sorting", "true");
    expect(grid).toHaveAttribute("data-allow-filtering", "true");
  });

  it("generates the correct columns based on config", () => {
    render(
      <NayaxSyncFusionTable items={mockItems} columnConfigs={mockColumns} />,
    );

    const columns = screen.getAllByTestId("mock-column");
    expect(columns).toHaveLength(3);

    expect(columns[0]).toHaveAttribute("data-field", "id");
    expect(columns[0]).toHaveTextContent("ID");

    expect(columns[1]).toHaveAttribute("data-field", "name");
    expect(columns[1]).toHaveTextContent("Name");

    expect(columns[2]).toHaveAttribute("data-field", "value");
    expect(columns[2]).toHaveTextContent("Value");
  });

  it("injects required services", () => {
    render(<NayaxSyncFusionTable items={[]} columnConfigs={[]} />);
    expect(screen.getByTestId("mock-inject")).toBeInTheDocument();
  });
});
