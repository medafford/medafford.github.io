import { Button, Heading, Info, Paper } from "../../styles";
import { getData, normalize, Row } from "../../data";
import { GetStaticPropsContext } from "next";
import { Box, Grid } from "@mui/material";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import Head from "next/head";
import remarkGfm from "remark-gfm";

export async function getStaticProps(ctx: GetStaticPropsContext) {
  const id = ctx.params?.id as string;
  const data = getData();

  if (!data[id]) {
    return {
      notFound: true,
    };
  }

  const generic = normalize(data[id].generic);

  let generic_link: string | null = null;
  for (const [key, value] of Object.entries(data)) {
    if (key == generic && value.manufacturer.toLowerCase() == "generic") {
      generic_link = key;
      break;
    }
  }

  return {
    props: {
      drug: data[id],
      generic_link: generic_link,
    },
  };
}

export async function getStaticPaths() {
  const data = getData();

  return {
    paths: Object.keys(data).map((key) => "/drug/" + key),
    fallback: false,
  };
}

function Element({ children }) {
  return <Paper elevation={3}>{children}</Paper>;
}

export default function Id({
  drug,
  generic_link,
}: {
  drug: Row;
  generic_link: string | null;
}) {
  function displayGeneric() {
    if (!generic_link) {
      return drug.generic;
    }
    return <Link href={"/drug/" + generic_link}>{drug.generic}</Link>;
  }

  return (
    <main>
      <Head>
        <title>{`Medafford: ${drug.drug}`}</title>
      </Head>
      <Heading>
        {drug.drug}
        {drug.generic && generic_link != drug.id ? (
          <span>
            {", "}
            <i>{displayGeneric()}</i>
          </span>
        ) : (
          ""
        )}
      </Heading>
      <p>
        {drug.manufacturer ? (
          <span style={{ marginRight: "40px" }}>
            Manufacturer: {drug.manufacturer}
          </span>
        ) : null}
        {drug.indication ? <span>Indication: {drug.indication}</span> : null}
      </p>
      <Info variant={"outlined"}>
        <Grid container spacing={2}>
          <Grid xs={12} md={6}>
            <Element>
              {!drug.pap_no_insurance && !drug.pap_notes ? (
                <i>No PAP plan available</i>
              ) : (
                <span>
                  <b>Patient Assistance Plans: </b>
                </span>
              )}
              {drug.pap_no_insurance ? (
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {drug.pap_no_insurance}
                </ReactMarkdown>
              ) : null}
              {drug.pap_notes ? (
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {drug.pap_notes}
                </ReactMarkdown>
              ) : null}
            </Element>
            <Element>
              {drug.copay_cards ? (
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {"**Copay Cards:** " + drug.copay_cards}
                </ReactMarkdown>
              ) : (
                <i>No Copay Card available</i>
              )}
            </Element>
          </Grid>
          <Grid xs={12} md={6}>
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="space-evenly"
              alignItems="center"
              style={{ height: "100%" }}
            >
              {drug.goodrx ? (
                <Button variant={"contained"} href={drug.goodrx}>
                  Goodrx
                </Button>
              ) : null}
              {drug.inside_rx ? (
                <Button variant={"contained"} href={drug.inside_rx}>
                  InsideRX
                </Button>
              ) : null}
              {drug.costplus_drugs ? (
                <Button variant={"contained"} href={drug.costplus_drugs}>
                  Costplus Drugs
                </Button>
              ) : null}
              {drug.singlecare ? (
                <Element>SingleCare: {drug.singlecare}</Element>
              ) : null}
            </Box>
          </Grid>
        </Grid>
      </Info>
    </main>
  );
}
