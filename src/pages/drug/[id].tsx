import {useRouter} from "next/router";
import {getData, Row} from '../../data'
import {GetStaticPropsContext} from "next";

export async function getStaticProps(ctx: GetStaticPropsContext) {
  const id = ctx.params?.id as string;
  const data = getData();

  if (!data[id]) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      drug: data[id]
    },
  };
}

export async function getStaticPaths() {
  const data = getData();

  return {
    paths: Object.keys(data).map((key) => "/drug/" + key),
    fallback: false
  }
}

export default function Id({ drug }: { drug: Row }) {
  return (
      <main>
        <h1>{drug.drug}</h1>
        {drug.manufacturer ?
            <p>Manufacturer: {drug.manufacturer}</p>
            : null}
        {drug.generic ?
            <p>Generic: {drug.generic}</p>
            : null}
        {drug.indication ?
            <p>Indication: {drug.indication}</p>
            : null}
        {drug.pap_insurance ?
            <p>PAP (insurance): {drug.pap_insurance}</p>
            : null}
        {drug.pap_no_insurance ?
            <p>PAP (no insurance): {drug.pap_no_insurance}</p>
            : null}
        {drug.goodrx ?
            <p>Goodrx: {drug.goodrx}</p>
            : null}
        {drug.costplus_drugs ?
            <p>Costplus_drugs: {drug.costplus_drugs}</p>
            : null}
        {drug.copay_cards ?
            <p>Copay_cards: {drug.copay_cards}</p>
            : null}
        {drug.notes ?
            <p>Notes: {drug.notes}</p>
            : null}
      </main>
  )
}
