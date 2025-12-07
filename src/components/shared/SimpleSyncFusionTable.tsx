import * as React from "react";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Inject,
  Page,
  Sort,
  Filter,
} from "@syncfusion/ej2-react-grids";
import { orderDetails, type Order } from "@/api/mockData";

const SimpleSyncfusionTable: React.FC = () => {
  const data: Order[] = orderDetails;

  const pageSettings = { pageSizes: true, pageSize: 5 };
  const filterSettings = { type: "Excel" as const }; // Define o tipo de filtro

  return (
    <div style={{ margin: "20px" }}>
      <h2>Syncfusion DataGrid</h2>
      <GridComponent
        dataSource={data}
        allowPaging={true}
        pageSettings={pageSettings}
        allowSorting={true}
        allowFiltering={true}
        filterSettings={filterSettings}
        height={315}
      >
        <ColumnsDirective>
          <ColumnDirective
            field="OrderID"
            headerText="ID do Pedido"
            width="100"
            textAlign={"Right"}
          />
          <ColumnDirective
            field="CustomerName"
            headerText="Nome do Cliente"
            width="150"
          />
          <ColumnDirective
            field="Freight"
            headerText="Frete"
            width="100"
            format="C2"
            textAlign={"Right"}
          />
          <ColumnDirective
            field="ShipCountry"
            headerText="País de Envio"
            width="120"
          />
        </ColumnsDirective>
        <Inject services={[Page, Sort, Filter]} />
      </GridComponent>
    </div>
  );
};

export default SimpleSyncfusionTable;
