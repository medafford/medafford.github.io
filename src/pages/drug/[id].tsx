import styles from '../../page.module.css'
import {getData, Row} from '../../data'
import {GetStaticPropsContext} from "next";
import {Card, Grid, Paper} from "@mui/material";
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

function Element({ children }) {
  return <Paper elevation={3} className={styles.paper}>{children}</Paper>
}

export default function Id({drug}: { drug: Row }) {
  return (
      <main>
        <h1 className={styles.heading}>{drug.drug}{(drug.generic ?
            <span>{", "}<i>{drug.generic}</i></span> : "")}</h1>
        <Card variant={"outlined"} className={styles.info}>
          <Grid container spacing={2}>
            <Grid item={true} xs={12}>
              {drug.manufacturer ?
                  <Element>Manufacturer: {drug.manufacturer}</Element>
                  : null}
            </Grid>
            <Grid item={true} xs={12}>
              {drug.indication ?
                  <Element>Indication: {drug.indication}</Element>
                  : null}
            </Grid>
            <Grid item={true} xs={6}>
              {drug.pap_no_insurance ?
                  <Element>PAP (no
                    insurance): {drug.pap_no_insurance}</Element>
                  : <Element><i>No PAP plan available</i></Element>}
            </Grid>
            <Grid item={true} xs={6}>
              {drug.goodrx ?
                  <Element><Link href={drug.goodrx}>Goodrx</Link></Element>
                  : null}
            </Grid>
            <Grid item={true} xs={6}>
              {drug.copay_cards ?
                  <Element><ReactMarkdown>{"**Copay_cards:** " + drug.copay_cards}</ReactMarkdown></Element>
                  : null}
            </Grid>
            <Grid item={true} xs={6}>
              {drug.costplus_drugs ?
                  <Element><ReactMarkdown>{"**Costplus_drugs**: " + drug.costplus_drugs}</ReactMarkdown></Element>
                  : null}
            </Grid>
            <Grid item={true} xs={6}>
              {drug.singlecare ?
                  <Element>SingleCare: {drug.singlecare}</Element>
                  : null}
            </Grid>
          </Grid>
        </Card>
      </main>
  )
}
