import styles from '../../page.module.css'
import {getData, Row} from '../../data'
import {GetStaticPropsContext} from "next";
import {Grid, Paper} from "@material-ui/core";
import Link from "next/link";
import ReactMarkdown from "react-markdown";

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
        <h1 className={styles.heading}>{drug.drug}{(drug.generic ?
            <span>{", "}<i>{drug.generic}</i></span> : "")}</h1>
        <div className={styles.info}>
          <Grid container spacing={2}>
            <Grid item={true} xs={12}>
              {drug.manufacturer ?
                  <Paper className={styles.paper}>Manufacturer: {drug.manufacturer}</Paper>
                  : null}
            </Grid>
            <Grid item={true} xs={12}>
              {drug.indication ?
                  <Paper className={styles.paper}>Indication: {drug.indication}</Paper>
                  : null}
            </Grid>
            <Grid item={true} xs={12}>
              {drug.notes ?
                  <Paper className={styles.paper}>Notes: {drug.notes}</Paper>
                  : null}
            </Grid>
            <Grid item={true} xs={6}>
              {drug.pap_no_insurance ?
                  <Paper className={styles.paper}>PAP (no
                    insurance): {drug.pap_no_insurance}</Paper>
                  : <Paper className={styles.paper}><i>No PAP plan available</i></Paper>}
            </Grid>
            <Grid item={true} xs={6}>
              {drug.goodrx ?
                  <Paper className={styles.paper}><Link href={drug.goodrx}>Goodrx</Link></Paper>
                  : null}
            </Grid>
            <Grid item={true} xs={6}>
              {drug.copay_cards ?
                  <Paper
                      className={styles.paper}><ReactMarkdown>{"**Copay_cards:** " + drug.copay_cards}</ReactMarkdown></Paper>
                  : null}
            </Grid>
            <Grid item={true} xs={6}>
              {drug.costplus_drugs ?
                  <Paper
                      className={styles.paper}><ReactMarkdown>{"**Costplus_drugs**: " + drug.costplus_drugs}</ReactMarkdown></Paper>
                  : null}
            </Grid>
            <Grid item={true} xs={6}>
              {drug.pap_insurance ?
                  <Paper className={styles.paper}>PAP (insurance): {drug.pap_insurance}</Paper>
                  : null}
            </Grid>
          </Grid>
        </div>
      </main>
  )
}
