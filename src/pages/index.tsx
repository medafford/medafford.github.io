/* eslint-disable react/display-name */
import styles from '../page.module.css'
import {forwardRef} from 'react';
import {getData, RowTrimmed} from '../data';
import MaterialTable, {Icons} from "material-table";
import Link from "next/link";
import AddBox from '@mui/icons-material/AddBox';
import ArrowDownward from '@mui/icons-material/ArrowDownward';
import Check from '@mui/icons-material/Check';
import ChevronLeft from '@mui/icons-material/ChevronLeft';
import ChevronRight from '@mui/icons-material/ChevronRight';
import Clear from '@mui/icons-material/Clear';
import DeleteOutline from '@mui/icons-material/DeleteOutline';
import Edit from '@mui/icons-material/Edit';
import FilterList from '@mui/icons-material/FilterList';
import FirstPage from '@mui/icons-material/FirstPage';
import LastPage from '@mui/icons-material/LastPage';
import Remove from '@mui/icons-material/Remove';
import SaveAlt from '@mui/icons-material/SaveAlt';
import Search from '@mui/icons-material/Search';
import ViewColumn from '@mui/icons-material/ViewColumn';

export async function getStaticProps() {
  const fullData = getData();
  const data = Object.fromEntries(
      Object.entries(fullData).map(
          ([key, value]) => [key, {
            key: value.key,
            drug: value.drug,
            manufacturer: value.manufacturer,
            generic: value.generic
          }]
      )
  )

  return {
    props: {
      data: data,
    },
  };
}

export default function Home({data}: { data: Record<string, RowTrimmed> }) {
  const columns = [
    {
      title: "Drug",
      render: (row: any) => <Link href={`/drug/${row.key}`}>{row.drug}</Link>,
      field: "drug",
    },
    {title: "Manufacturer", field: "manufacturer"},
    {title: "Generic", field: "generic"}
  ];

  const tableIcons: Icons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref}/>),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref}/>),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref}/>),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref}/>),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref}/>),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref}/>),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref}/>),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref}/>),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref}/>),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref}/>),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref}/>),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref}/>),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref}/>),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref}/>),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref}/>),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref}/>),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref}/>)
  };

  return <main>
    <h1 className={styles.heading}>MedAfford</h1>
    <MaterialTable
        title=""
        icons={tableIcons}
        columns={columns}
        data={Object.values(data)}
        options={{
          sorting: true
        }}
    />

  </main>
}
