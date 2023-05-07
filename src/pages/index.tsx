import {getData, Row} from '../data';
import MaterialTable from "material-table";
import Link from "next/link";

export async function getStaticProps() {
  return {
    props: {
      data: getData(),
    },
  };
}

export default function Home({ data }: { data: Record<string, Row> }) {
  const columns = [
    {
      title: "Drug",
      render: (row: any) => <Link href={`/drug/${row.key}`}>{row.drug}</Link>,
      field: "drug",
    },
    {title: "Manufacturer", field: "manufacturer"},
    {title: "Generic", field: "generic"}
  ];

  return <main>
    <h1>MedAfford</h1>
    <MaterialTable
        title="Data"
        columns={columns}
        data={Object.values(data)}
        options={{
          sorting: true
        }}
    />
  </main>
}
