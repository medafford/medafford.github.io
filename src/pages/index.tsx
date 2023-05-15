import {getData, RowTrimmed} from '../data';
import Link from "next/link";
import {Heading} from '../styles'
import {DataGrid} from "@mui/x-data-grid";
import {Box, TextField} from "@mui/material";
import {useState} from "react";

export async function getStaticProps() {
  const fullData = getData();
  const data = Object.fromEntries(Object.entries(fullData).map(([key, value]) => [key, {
    id: value.id, drug: value.drug, manufacturer: value.manufacturer, generic: value.generic
  }]))

  return {
    props: {
      data: data,
    },
  };
}

export default function Home({data}: { data: Record<string, RowTrimmed> }) {
  const [filter, setFilter] = useState("");

  const columns = [{
    headerName: "Drug",
    description: "Drug Name",
    field: "drug",
    renderCell: (row: any) => <Link href={`/drug/${row.id}`}>{row.value}</Link>,
    flex: 2
  }, {
    headerName: "Manufacturer", description: "Drug Manufacturer", field: "manufacturer", flex: 1
  }, {
    headerName: "Generic", description: "Generic Name", field: "generic", flex: 1
  }];

  const filterValue = filter.toLowerCase();

  const rows = Object.values(data).filter((row) => {
    return row.drug.toLowerCase().includes(filterValue) || row.generic.toLowerCase().includes(filterValue) || row.manufacturer.toLowerCase().includes(filterValue) || row.id.includes(filterValue)
  });

  return <main>
    <Heading>MedAfford</Heading>
    <Box style={{
      backgroundColor: "var(--cool-gray)",
      padding: "5px",
      borderRadius: "4px",
      marginBottom: '15px',
    }}>
      <TextField
          label="Search"
          variant="outlined"
          style={{
            width: '100%'
          }}
          onChange={(event) => setFilter(event.target.value)}
      />
    </Box>
    {
      rows.length > 0 ? <DataGrid
          columns={columns}
          rows={rows}
          style={{
            backgroundColor: "var(--white)"
          }}
          initialState={{
            pagination: {
              paginationModel: {
                page: 0, pageSize: 5
              }
            }
          }}
          rowSelection={false}
          disableRowSelectionOnClick
          disableColumnMenu
          disableColumnSelector
          pageSizeOptions={[5, 20, 50]}
      /> : <Box style={{
        backgroundColor: "var(--white)",
        padding: "20px",
        borderRadius: "4px"
      }}>{"No Matches Found"}</Box>
    }
  </main>
}
