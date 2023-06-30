import { Heading, Info } from "../styles";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function GeneralResources() {
  return (
    <main>
      <Heading>General Resources</Heading>
      <Info variant={"outlined"}>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {"In addition to the medication-specific resources, below is a general list of cost-saving resources patients may find useful:\n" +
            "\n" +
            "The American Diabetes Association publishes information on resources available for insulin affordability.\n" +
            "\n" +
            "The Asthma and Allergy Foundation of America publishes information on resources available for certain asthma prescription medications.\n" +
            "\n" +
            "Prescription Assistance Programs for Major Asthma and Diabetes Pharmaceutical Companies:\n" +
            "\n" +
            "Sanofi Patient Connection, Sanofi: [https://www.sanofipatientconnection.com/](https://www.sanofipatientconnection.com/)\n" +
            "\n" +
            "Novocare, Novo Nordisk:  [https://www.novocare.com/](https://www.novocare.com/)\n" +
            "\n" +
            "Lilly Cares Foundation, Eli Lilly:  [https://www.lillycares.com/](https://www.lillycares.com/)\n" +
            "\n" +
            "BI Cares, Boehringer Ingelheim:  [https://www.boehringer-ingelheim.com/us/our-responsibility/patient-assistance-program](https://www.boehringer-ingelheim.com/us/our-responsibility/patient-assistance-program)\n" +
            "\n" +
            "GSK For You, Glaxo-Smith-Kline:  [https://www.gskforyou.com/programs/prescription-medicine-patient-assistance/](https://www.gskforyou.com/programs/prescription-medicine-patient-assistance/)\n" +
            "\n" +
            "Merck Helps, Merck:  [https://www.merckhelps.com/](https://www.merckhelps.com/)\n" +
            "\n" +
            " Genentech Patient Foundation, Genentech:  [https://www.gene.com/patients/patient-foundation](https://www.gene.com/patients/patient-foundation)\n" +
            "\n" +
            "AZ&ME, AstroZeneca:  [https://www.azandmeapp.com/prescriptionsavings/](https://www.azandmeapp.com/prescriptionsavings/?screenName=showEnrollmentPage)\n" +
            "\n" +
            "Teva Cares Foundation, Teva:  [https://www.tevausa.com/our-products/article-pages/patient-assistance-programs/](https://www.tevausa.com/our-products/article-pages/patient-assistance-programs/)\n" +
            "\n" +
            "Pfizer Rx Pathways, Pfizer:  [https://www.pfizerrxpathways.com/](https://www.pfizerrxpathways.com/)\n"}
        </ReactMarkdown>
      </Info>
    </main>
  );
}
