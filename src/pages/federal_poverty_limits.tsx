import { Heading, Info } from "../styles";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { styled } from "@mui/material/styles";

export default function FederalPovertyLimits() {
  const TableStyledDiv = styled("div")`
    table {
      border-collapse: collapse;
    }

    th,
    td {
      border: 1px solid black;
      padding: 8px;
    }
  `;

  return (
    <main>
      <Heading>Federal Poverty Limits</Heading>
      <Info variant={"outlined"}>
        <TableStyledDiv>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {"| Household Size | 100% FPL | 150%    | 200%     |\n" +
              "| --- | -------- | ------- | -------- |\n" +
              "| 1              | $14,580  | $21,870 | $29,160  |\n" +
              "| 2              | $19,720  | $29,580 | $39,440  |\n" +
              "| 3              | $24,860  | $37,290 | $49,720  |\n" +
              "| 4              | $30,000  | $45,000 | $60,000  |\n" +
              "| 5              | $35,140  | $52,710 | $70,280  |\n" +
              "| 6              | $40,280  | $60,420 | $80,560  |\n" +
              "| 7              | $45,420  | $68,130 | $90,840  |\n" +
              "| 8              | $50,560  | $75,840 | $101,120 |\n\n" +
              "For more information about Federal Poverty Limits, visit the U.S. Department of Health and Human Services, Assistant Secretary for Planning and Evaluation (ASPE) website: [https://aspe.hhs.gov/topics/poverty-economic-mobility/poverty-guidelines](https://aspe.hhs.gov/topics/poverty-economic-mobility/poverty-guidelines)"}
          </ReactMarkdown>
        </TableStyledDiv>
      </Info>
    </main>
  );
}
