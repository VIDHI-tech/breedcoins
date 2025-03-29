import { Button } from "@/components/ui/button";

interface InfoSectionProps {
  title: string;
  description: string;
  button?: {
    label: string;
    link?: string;
  };
}
const InfoSection = ({ title, description, button }: InfoSectionProps) => {
  return (
    <section className="space-y-5 md:space-y-10">
      <h2 className="text-3xl md:text-5xl font-normal">{title}</h2>
      <p className="text-sm md:text-lg">{description}</p>
      {button && (
        <a href={button.link || "#"} target={button.link ? "_blank" : "_self"}>
          <Button className="text-sm md:text-base bg-primary mt-7 p-6 font-semibold hover:bg-primary-hover ">
            {button.label}
          </Button>
        </a>
      )}
    </section>
  );
};

// Main Config Object
const titledescbtnConfig = {
  rulesRegulations: {
    title: "Rules & Regulations",
    description:
      "Air Force School, ASTE is located within Bangalore city limits. The school is one of the forerunners amongst the elite educational institutions in the city. It functions under the aegis of IAF educational and cultural society and is meant primarily for the children of Air Force personnel, Air Force School ASTE is recognised school up to XIIth class and affiliated with CBSE New Delhi. Air Force School, ASTE was started as a Nursery School in 1977 to cater to the educational needs of the children of Air Force personnel serving in HAL based units. Over the years, the school has grown in size up to XII std. Air Force School, ASTE functions from its two locations at Murgeshpalya Camp and Akash Vihar Camp and comprises of classes from Nursery to XII std.",
    button: {
      label: "Load More",
      link: "/pdfs/rules-regulations.pdf",
    },
  },
  schoolUniform: {
    title: "School Uniform",
    description:
      "Air Force School, ASTE is located within Bangalore city limits. The school is one of the forerunners amongst the elite educational institutions in the city. It functions under the aegis of IAF educational and cultural society and is meant primarily for the children of Air Force personnel.",
    button: {
      label: "School Uniform",
      link: "/pdfs/school-uniform.pdf",
    },
  },
  bookListPrimary: {
    title: "Book List of Primary Wing",
    description:
      "Air Force School, ASTE is located within Bangalore city limits. The school is one of the forerunners amongst the elite educational institutions in the city. It functions under the aegis of IAF educational and cultural society and is meant primarily for the children of Air Force personnel.",
    button: {
      label: "Read PDF",
      link: "/pdfs/book-list.pdf",
    },
  },
  bookListSenior: {
    title: "Book List of Senior Wing",
    description:
      "Air Force School, ASTE is located within Bangalore city limits. The school is one of the forerunners amongst the elite educational institutions in the city. It functions under the aegis of IAF educational and cultural society and is meant primarily for the children of Air Force personnel.",
    button: {
      label: "Read PDF",
      link: "/pdfs/book-list.pdf",
    },
  },
  tcIssued: {
    title: "TC Issued",
    description:
      "Air Force School, ASTE is located within Bangalore city limits. The school is one of the forerunners amongst the elite educational institutions in the city. It functions under the aegis of IAF educational and cultural society and is meant primarily for the children of Air Force personnel.",
    button: {
      label: "View Issued TC",
      link: "/tc_issued",
    },
  },
};

export { InfoSection, titledescbtnConfig };
