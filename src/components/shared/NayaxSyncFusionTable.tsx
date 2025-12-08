import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Inject,
  Page,
  Sort,
  Filter,
} from "@syncfusion/ej2-react-grids";

type ColumnConfig = {
  field: string;
  headerText: string;
  width?: string;
  format?: string;
  textAlign?: string;
};
type NayaxSyncFusionTableProps<T extends object> = {
  items: T[];
  columnConfigs: ColumnConfig[];
};
const NayaxSyncFusionTable = <T extends object>({
  items,
  columnConfigs,
}: NayaxSyncFusionTableProps<T>) => {
  const pageSettings = { pageSizes: true, pageSize: 5 };
  const filterSettings = { type: "Excel" as const }; // Define o tipo de filtro

  return (
    <div style={{ margin: "20px" }}>
      <h2>Syncfusion DataGrid</h2>
      <GridComponent
        dataSource={items}
        allowPaging={true}
        pageSettings={pageSettings}
        allowSorting={true}
        allowFiltering={true}
        filterSettings={filterSettings}
        height={200}
      >
        <ColumnsDirective>
          {columnConfigs.map((config) => (
            <ColumnDirective
              field={config.field}
              headerText={config.headerText}
            />
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Sort, Filter]} />
      </GridComponent>
    </div>
  );
};

export default NayaxSyncFusionTable;
