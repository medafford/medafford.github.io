import { Heading, Info } from "../styles";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function About() {
  return (
    <main>
      <Heading>About</Heading>
      <Info variant={"outlined"}>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {"The Prescription Affordability Navigator is designed to help providers discover cost-saving measures for their patients’ prescription medications. Currently, the Navigator identifies relevant cost-saving measures for medications used in the treatment of _diabetes mellitus_ and _asthma_ including patient assistance programs, co-pay card programs, and third-party pharmacies (eg. GoodRx, Cost Plus Drugs, InsideRx).\n" +
            "\n" +
            "**Prescription assistance programs (PAPs)** are safety net financial assistance programs, typically offered by pharmaceutical manufacturers, to help patients afford certain expensive medications. The programs function as a stop-gap solution for Americans whose insurance does not contribute to their prescription medications or are uninsured. Each PAP has its own qualifying criteria that patients need to meet in order to participate in the program, and there is no universal enrollment standard for programs. Generally, PAPs require proof of financial need and for patients to demonstrate inadequate insurance coverage.\n" +
            "\n" +
            "**Co-pay card programs** are manufacturer-sponsored coupons for patients with insurance who face high out-of-pocket costs for prescription medications. Most co-pay card programs require participants to i) have commercial insurance, and ii) not have government-sponsored insurance (Medicaid or Medicare). There are also state-specific restrictions. For example, in the state of California, co-pay cards are not allowed to be used for the purchase of medications that have generic equivalents.\n" +
            "\n" +
            "**Third-party pharmacies,** such as GoodRx, InsideRx, and Cost Plus Drugs are companies that provide coupons for prescription medications. The prices advertised are often markedly reduced from the cost associated with insurance. As the companies are “out-of-network”, patients will not be able to use insurance with the drug coupon cards. In the case of GoodRx, the company is a publicly traded corporation that also provides telemedicine services and a paid plan with additional services. InsideRx is a subsidiary of ExpressScripts, a pharmacy benefit manager contracted with Cigna. Cost Plus Drugs is a public benefit corporation, and provides consumer-savings by selling medications at a fixed, low markup rate. Unlike GoodRx and InsideRx, Cost Plus Drugs is direct-to-consumer, and accordingly requires patients create an account to directly order from their website.\n" +
            "\n" +
            "Patients and providers should be aware that as insurance cannot be used simultaneously with third-party pharmacies, patients will accordingly not see their payments for prescription medications go towards their deductible.\n"}
        </ReactMarkdown>
      </Info>
    </main>
  );
}
