import styles from '../../page.module.css'
import {getData, Row} from '../../data'
import {GetStaticPropsContext} from "next";
import {Grid} from "@material-ui/core";

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

export default function Id({drug}: { drug: Row }) {
  return (
      <main>
        <h1>{drug.drug}{(drug.generic ? <span>{", "}<i>{drug.generic}</i></span> : "")}</h1>
        <div className={styles.info}>
        {drug.manufacturer ?
            <p>Manufacturer: {drug.manufacturer}</p>
            : null}
        {drug.indication ?
            <p>Indication: {drug.indication}</p>
            : null}
        {drug.notes ?
            <p>Notes: {drug.notes}</p>
            : null}
        <Grid container spacing={2}>
          <Grid xs={6}>
            {drug.pap_no_insurance ?
                <p>PAP (no insurance): {drug.pap_no_insurance}</p>
                : null}
          </Grid>
          <Grid xs={6}>
            {drug.goodrx ?
                <p>Goodrx: {drug.goodrx}</p>
                : null}
          </Grid>
          <Grid xs={6}>
            {drug.copay_cards ?
                <p>Copay_cards: {drug.copay_cards}</p>
                : null}
          </Grid>
          <Grid xs={6}>
            {drug.costplus_drugs ?
                <p>Costplus_drugs: {drug.costplus_drugs}</p>
                : null}
          </Grid>
          <Grid xs={6}>
            {drug.pap_insurance ?
                <p>PAP (insurance): {drug.pap_insurance}</p>
                : null}
          </Grid>
        </Grid>
        </div>
      </main>
  )
}
