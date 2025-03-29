import { ResponsiveMonthlyCalendar } from "@/components/common/responsive-monthly-calendar";
import BookListPrimary from "@/components/modules/academics/bookListPrimary";
import BookListSenior from "@/components/modules/academics/bookListSenior";
import ExamTime from "@/components/modules/academics/examTime";
import HolidayHomework from "@/components/modules/academics/holidayHomework";
import RulesRegulations from "@/components/modules/academics/rulesRegulations";
import SchoolTiming from "@/components/modules/academics/schoolTiming";
import SchoolUniform from "@/components/modules/academics/schoolUniform";
import TcIssued from "@/components/modules/academics/tcIssued";
import { Timetable } from "@/components/modules/academics/timetable";
import { Button } from "@/components/ui/button";
import academicsConfig from "@/configs/academicsConfig";
import { cn } from "@/lib/utils";
import { useState } from "react";

const ourSchoolConfig = {
  imageSrc: "/hero1.JPG",
};
const Academics: React.FC = () => {
  const [activeFolder, setActiveFolder] = useState(
    academicsConfig.folders[0].id
  );
  return (
    <>
      <div id="top" />
      <section className="relative w-full h-[500px] flex items-center justify-center">
        <figure className="absolute h-full w-full">
          <img
            src={ourSchoolConfig.imageSrc}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 h-full w-full bg-black rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-70" />
        </figure>
        <span className="flex flex-col z-10 text-white text-center max-w-7xl md:px-4 2xl:px-0">
          <h2 className="text-3xl lg:text-[56px] font-bold pb-10">Academics</h2>
          <p className="text-lg md:text-2xl 2xl:text-[32px] font-bold md:leading-10">
            Welcome to AIR FORCE SCHOOL,
            <br /> ASTE, Bengaluru!
          </p>
        </span>
      </section>
      <section className="px-[calc(5%-10px)] py-20 flex gap-x-28">
        <div className="w-fit hidden lg:flex items-start flex-col space-y-8 pt-2.5">
          {academicsConfig.folders.map((folder) => (
            <Button
              key={folder.id}
              variant="outline"
              className={cn(
                "w text-xl text-[#64748B] border border-[#CBD5E1] font-medium rounded-3xl py-5 bg-[#F8FAFC]",
                activeFolder === folder.id &&
                  "bg-[#167AC6] text-white font-bold border-none hover:bg-[#167AC6] hover:text-white"
              )}
              onClick={() => setActiveFolder(folder.id)}
            >
              {folder.name}
            </Button>
          ))}
        </div>
        <div className="flex flex-col px-5 md:px-4 md:pb-20 xl:px-[calc(100%-97%)] w-full">
          <RulesRegulations />
          <SchoolUniform />
          <SchoolTiming />
          <div
            id="academics_school_calendar"
            className="text-3xl md:text-5xl border-b-2 py-20"
          >
            School Calendar
            <main className="max-w-5xl w-full">
              <ResponsiveMonthlyCalendar />
            </main>
          </div>
          <Timetable />
          <ExamTime />
          <HolidayHomework />
          <BookListPrimary />
          <BookListSenior />
          <TcIssued />
        </div>
      </section>
    </>
  );
};

export default Academics;

// import { useEffect, useMemo, useRef, useState } from "react";
// import { Button } from "@/components/ui/button";
// import { cn } from "@/lib/utils";

// import academicsConfig from "@/configs/academicsConfig";
// import { ResponsiveMonthlyCalendar } from "@/components/common/responsive-monthly-calendar";
// import BookListPrimary from "@/components/modules/academics/bookListPrimary";
// import BookListSenior from "@/components/modules/academics/bookListSenior";
// import ExamTime from "@/components/modules/academics/examTime";
// import HolidayHomework from "@/components/modules/academics/holidayHomework";
// import RulesRegulations from "@/components/modules/academics/rulesRegulations";
// import SchoolTiming from "@/components/modules/academics/schoolTiming";
// import SchoolUniform from "@/components/modules/academics/schoolUniform";
// import TcIssued from "@/components/modules/academics/tcIssued";
// import { Timetable } from "@/components/modules/academics/timetable";
// import { useApiQuery } from "@/hooks/useApiQuery";
// import endpoints from "@/api/endpoints";

// // Example hero image config
// const ourSchoolConfig = {
//   imageSrc: "/hero1.JPG",
// };

// const Academics: React.FC = () => {
//   const { data } = useApiQuery(endpoints.pages.academicsPage.all);
//   const filteredData = useMemo(() => data?.data?.data ?? [], [data]);
//   console.log("academics", filteredData);

//   const refs = {
//     rulesRegulations: useRef<HTMLDivElement>(null),
//     schoolUniform: useRef<HTMLDivElement>(null),
//     schoolTiming: useRef<HTMLDivElement>(null),
//     schoolCalendar: useRef<HTMLDivElement>(null),
//     timetable: useRef<HTMLDivElement>(null),
//     examTime: useRef<HTMLDivElement>(null),
//     holidayHomework: useRef<HTMLDivElement>(null),
//     bookListPrimary: useRef<HTMLDivElement>(null),
//     bookListSenior: useRef<HTMLDivElement>(null),
//     tcIssued: useRef<HTMLDivElement>(null),
//   };

//   // Default active section = "rulesRegulations" so it appears blue initially
//   const [activeSection, setActiveSection] =
//     useState<keyof typeof refs>("rulesRegulations");

//   // Scroll within the parent container to a specific ref
//   const scrollToSection = (id: keyof typeof refs) => {
//     const container = document.getElementById("scrollable-content");
//     if (!container || !refs[id]?.current) return;

//     // offsetTop = how far the child is from the container's top
//     const top = refs[id].current.offsetTop;
//     container.scrollTo({ top, behavior: "smooth" });
//   };

//   // Attach a scroll listener on the parent container for "scroll spy"
//   useEffect(() => {
//     const container = document.getElementById("scrollable-content");
//     if (!container) return;

//     const handleScroll = () => {
//       const scrollPosition = container.scrollTop;
//       let current: keyof typeof refs = "rulesRegulations"; // fallback

//       // Check each ref in order
//       for (const [key, ref] of Object.entries(refs)) {
//         if (ref.current) {
//           const sectionOffset = ref.current.offsetTop;
//           // If the section's offset is above (or near) the current scroll, mark it active
//           if (sectionOffset - 150 <= scrollPosition) {
//             current = key as keyof typeof refs;
//           }
//         }
//       }
//       setActiveSection(current);
//     };

//     container.addEventListener("scroll", handleScroll);
//     // Call once in case you're already scrolled or to set "rulesRegulations" default
//     handleScroll();

//     return () => container.removeEventListener("scroll", handleScroll);
//   }, [refs]);

//   return (
//     <>
//       <section className="relative w-full h-[500px] flex items-center justify-center">
//         <figure className="absolute h-full w-full">
//           <img
//             src={filteredData?.hero_img ?? ourSchoolConfig.imageSrc}
//             className="w-full h-full object-cover"
//             alt="Hero Section"
//           />
//           <div className="absolute inset-0 h-full w-full bg-black rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-70" />
//         </figure>
//         <span className="flex flex-col z-10 text-white text-center max-w-7xl md:px-4 2xl:px-0">
//           <h2 className="text-3xl lg:text-[56px] font-bold pb-10">Academics</h2>
//           <p className="text-lg md:text-2xl 2xl:text-[32px] font-bold md:leading-10">
//             Welcome to AIR FORCE SCHOOL,
//             <br /> ASTE, Bengaluru!
//           </p>
//         </span>
//       </section>

//       <section className="px-[calc(5%-10px)] flex gap-x-28">
//         <div className="w-fit hidden lg:flex flex-col space-y-8 pt-20 sticky top-20 h-fit">
//           {academicsConfig.folders.map((folder) => (
//             <Button
//               key={folder.id}
//               variant="outline"
//               onClick={() => scrollToSection(folder.id as keyof typeof refs)}
//               className={cn(
//                 "w text-xl text-[#64748B] border border-[#CBD5E1] font-medium rounded-3xl py-5 bg-[#F8FAFC]",
//                 activeSection === folder.id &&
//                   "bg-primary text-white font-bold border-none hover:bg-primary-hover hover:text-white"
//               )}
//             >
//               {folder.name}
//             </Button>
//           ))}
//         </div>

//         <div
//           id="scrollable-content"
//           className="flex flex-col px-5 md:px-4 md:pb-20 xl:px-[calc(100%-97%)] w-full h-[600px] md:h-[1200px] overflow-y-auto scroll-smooth"
//         >
//           <div ref={refs.rulesRegulations}>
//             <RulesRegulations />
//           </div>

//           <div ref={refs.schoolUniform}>
//             <SchoolUniform />
//           </div>

//           <div ref={refs.schoolTiming}>
//             <SchoolTiming />
//           </div>

//           <div
//             id="academics_school_calendar"
//             ref={refs.schoolCalendar}
//             className="text-3xl md:text-5xl border-b-2 py-20"
//           >
//             School Calendar
//             <main className="max-w-5xl w-full mt-4">
//               <ResponsiveMonthlyCalendar />
//             </main>
//           </div>

//           <div ref={refs.timetable}>
//             <Timetable />
//           </div>

//           <div ref={refs.examTime}>
//             <ExamTime />
//           </div>

//           <div ref={refs.holidayHomework}>
//             <HolidayHomework />
//           </div>

//           <div ref={refs.bookListPrimary}>
//             <BookListPrimary />
//           </div>

//           <div ref={refs.bookListSenior}>
//             <BookListSenior />
//           </div>

//           <div ref={refs.tcIssued}>
//             <TcIssued />
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Academics;
