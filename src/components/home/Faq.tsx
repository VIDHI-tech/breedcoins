import { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

const Faq = () => {
  const [selectedKey, setSelectedKey] = useState(null);

  const toggleSelection = (key) => {
    setSelectedKey((prevKey) => (prevKey === key ? null : key));
  };

  const items = [
    {
      key: "1",
      title:
        "What is the admission process for Air Force Schools in Bangalore?",
      defaultContent:
        "Admissions usually begin in the early months of the year. Parents should check the official website of the respective Air Force School or contact the admission office for details on application forms, eligibility criteria, and important dates.",
    },
    {
      key: "2",
      title:
        "Are civilians eligible to enroll their children in Air Force Schools?",
      defaultContent:
        "Yes, while priority is given to children of Air Force personnel, civilians can also apply. Admissions for civilian students depend on seat availability and specific guidelines set by the school.",
    },
    {
      key: "3",
      title: "What curriculum do these schools follow?",
      defaultContent:
        "Air Force Schools in Bangalore follow the Central Board of Secondary Education (CBSE) curriculum, ensuring a standardized and comprehensive education.",
    },
    {
      key: "4",
      title: "What are the fee structures for Air Force Schools in Bangalore?",
      defaultContent:
        "Fee structures vary based on factors like student category (Air Force personnel, defense personnel, civilians) and grade level. It is best to visit the school's official website or contact the school administration for the latest fee details.",
    },
    {
      key: "5",
      title: "Do these schools offer extracurricular activities?",
      defaultContent:
        "Yes, Air Force Schools provide a wide range of extracurricular activities, including sports, arts, music, cultural programs, and leadership programs to ensure holistic development.",
    },
    {
      key: "6",
      title: "How can I contact Air Force Schools in Bangalore?",
      defaultContent:
        "Each Air Force School has its own contact details. Parents can visit the official website of the respective school or reach out via phone or email to get specific admission and general inquiries addressed.",
    },
  ];

  return (
    <section className="flex flex-col lg:flex-row bg-primary gap-14 lg:gap-5 xl:gap-9 2xl:gap-28 px-4 py-8 sm:px-8 sm:p-16 xl:p-16">
      <div className="text-white text-center lg:text-start">
        <p className="text-3xl">FAQ's</p>
        <h1 className="text-4xl xl:text-6xl leading-tight font-semibold ">
          Frequently Asked Questions
        </h1>
      </div>
      <div className="text-white w-full">
        <Accordion type="single" collapsible>
          {items.map((item) => (
            <AccordionItem
              key={item.key}
              value={item.key}
              className="border-none"
            >
              <AccordionTrigger
                onClick={() => toggleSelection(item.key)}
                className={`transition-colors duration-300 px-5 w-full hover:no-underline rounded-t-2xl text-start ${
                  selectedKey === item.key ? "bg-white" : "pb-16"
                }`}
              >
                <p
                  className={cn(" w-full", {
                    "text-black font-bold text-xl xl:text-2xl":
                      selectedKey === item.key,
                    "text-white text-xl xl:text-2xl": selectedKey !== item.key,
                  })}
                >
                  {item.title}
                </p>
              </AccordionTrigger>
              <AccordionContent>
                <div
                  className={`md:text-lg xl:text-xl px-5 pb-7 rounded-b-2xl ${
                    selectedKey === item.key ? "text-gray-500 bg-white" : ""
                  }`}
                >
                  {item.defaultContent}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default Faq;
