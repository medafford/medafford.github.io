import { Heading, Info, Paper } from '../../styles'
import {getData, normalize, Row} from '../../data'
import {GetStaticPropsContext} from "next";
import {Grid} from "@mui/material";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import Head from "next/head";

export async function getStaticProps(ctx: GetStaticPropsContext) {
  const id = ctx.params?.id as string;
  const data = getData();

  if (!data[id]) {
    return {
      notFound: true,
    }
  }

  const generic = normalize(data[id].generic);

  let generic_link: string | null = null;
  for (const [key, value] of Object.entries(data)) {
    if (key == generic && value.manufacturer.toLowerCase() == "generic") {
      generic_link = key;
      break
    }
  }

  return {
    props: {
      drug: data[id],
      generic_link: generic_link
    },
  };
}

export async function getStaticPaths() {
  const data = getData();

  return {
    paths: Object.keys(data).map((key) => "/drug/" + key), fallback: false
  }
}

function Element({children}) {
  return <Paper elevation={3}>{children}</Paper>
}

function Item({children}) {
  return <Grid item={true} xs={12} md={6}>{children}</Grid>
}

export default function Id({drug, generic_link}: { drug: Row, generic_link: string | null }) {
  function displayGeneric() {
    if (!generic_link) {
      return drug.generic;
    }
    return <Link href={"/drug/" + generic_link}>{drug.generic}</Link>
  }

  return (<main>
    <Head>
      <title>{`Medafford: ${drug.drug}`}</title>
    </Head>
    <Heading>{drug.drug}{(drug.generic && generic_link != drug.id ?
        <span>{", "}<i>{displayGeneric()}</i></span> : "")}</Heading>
    <Info variant={"outlined"}>
      <Grid container spacing={2}>
        <Grid item={true} xs={12}>
          {drug.manufacturer ? <Element>Manufacturer: {drug.manufacturer}</Element> : null}
        </Grid>
        <Grid item={true} xs={12}>
          {drug.indication ? <Element>Indication: {drug.indication}</Element> : null}
        </Grid>
        <Item>
          <Element>
            {drug.pap_no_insurance ? <ReactMarkdown>{drug.pap_no_insurance}</ReactMarkdown> : null}
            {drug.pap_notes ? <ReactMarkdown>{drug.pap_notes}</ReactMarkdown> : null}
            {!drug.pap_no_insurance && !drug.pap_notes ? <i>No PAP plan available</i> : null}
          </Element>
        </Item>
        <Item>
          {drug.goodrx ? <Element><Link href={drug.goodrx}>Goodrx</Link></Element> : null}
        </Item>
        <Item>
          {drug.inside_rx ? <Element><Link href={drug.inside_rx}>InsideRX</Link></Element> : null}
        </Item>
        <Item>
          {drug.copay_cards ?
              <Element><ReactMarkdown>{"**Copay_cards:** " + drug.copay_cards}</ReactMarkdown></Element> : null}
        </Item>
        <Item>
          {drug.costplus_drugs ?
              <Element><ReactMarkdown>{"**Costplus_drugs**: " + drug.costplus_drugs}</ReactMarkdown></Element> : null}
        </Item>
        <Item>
          {drug.singlecare ? <Element>SingleCare: {drug.singlecare}</Element> : null}
        </Item>
      </Grid>
    </Info>
  </main>)
}
