import endpoints from "@/api/endpoints";
import { useApiQuery } from "@/hooks/useApiQuery";
import { useMemo } from "react";

const ourSchoolConfig = {
  imageSrc: "/hero1.JPG",
};
const OurSchool = () => {
  const { data } = useApiQuery(endpoints.pages.aboutPage.all);
  const filteredData = useMemo(() => data?.data?.data ?? [], [data]);
  // console.log("about", filteredData);

  return (
    <section
      id="about-hero"
      className="relative w-full h-[500px] md:h-[600px] flex items-center"
    >
      <figure className="absolute h-full w-full">
        <img
          src={filteredData?.hero_img ?? ourSchoolConfig.imageSrc}
          alt="Our School"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 h-full w-full bg-black rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-70" />
      </figure>

      {/* Content */}
      <div className="flex flex-col lg:flex-row z-10 px-6 md:px-12 xl:px-28 text-white items-center">
        <section className="flex-1 text-center lg:text-start">
          <h2 className="text-3xl lg:text-[56px] font-bold pb-10">
            Our School
          </h2>
          <h3 className="text-lg xl:text-[32px] font-bold leading-snug">
            Welcome to AIR FORCE SCHOOL,
            <br /> ASTE, Bengaluru!
          </h3>
        </section>
        {/* <section className="flex-1 space-y-4 text-center lg:text-start items-center lg:items-start flex flex-col"> */}
        <p className="mt-4 text-xs lg:text-base 2xl:text-xl flex text-center lg:text-start lg:w-2/3 lg:pl-28">
          Air Force School, ASTE is located within Bangalore city limits. The
          school is one of the forerunners amongst the elite educational
          institutions in the city. It functions under the aegis of IAF
          educational and cultural society and is meant primarily for the
          children of Air Force personnel, Air Force School ASTE is recognised
          school up to XIIth class and affiliated with CBSE New Delhi. Air Force
          School, ASTE was started as a Nursery School in 1977 to cater to the
          educational needs of the children of Air Force personnel serving in
          HAL based units. Over the years, the school has grown in size up to
          XII std. Air Force School, ASTE functions from its two locations at
          Murgeshpalya Camp and Akash Vihar Camp and comprises of classes from
          Nursery to XII std. With the right combination of values, we believe
          in helping every child grow into a responsible citizen and a good
          human being.
        </p>
      </div>
    </section>
  );
};

export default OurSchool;
