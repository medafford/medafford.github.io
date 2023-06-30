import { Heading, Info } from "../styles";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function HowToUseThisWebsite() {
  return (
    <main>
      <Heading>How to Use this Website</Heading>
      <Info variant={"outlined"}>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {"1. Search for a medication by typing either its brand name or generic name into the search bar on the Home page.\n" +
            "\n" +
            "2. When you click on the drug, updated relevant cost-saving measures available for that medication will appear.\n" +
            "\n" +
            "3. The information enclosed can be discussed with the patient during the course of a visit or included in the After Visit Summary for the patient to evaluate in their own time before purchasing at the pharmacy.\n"}
        </ReactMarkdown>
      </Info>
    </main>
  );
}
