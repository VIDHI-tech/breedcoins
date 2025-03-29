export default function PrincipalSection() {
  const principalInfo = {
    name: "Mrs. Chumki Nath",
    position: "Principal",
    school: "Air Force School, ASTE",
    imageSrc: "/principal.png",
    message:
      "Keeping this spirit of education alive we are continuously striving to nurture children into full-fledged personalities. Our aim is to nurture the child into a self-motivated individual. Curriculum and the practices of the school uphold the futuristic motto of the school Creating Global Citizens. Both Scholastic and Co-scholastic aspects of our education offer umpteen opportunities for the students to explore their interests and innovate new ideas. We want all our students to achieve their full potential. Our task is to make it possible and our mission is to provide a platform for the same.",
  };

  return (
    <section className="relative bg-primary text-white text-center py-16 px-6 overflow-hidden">
      {/* Background Design */}
      <figure className="absolute -top-20 md:-top-64 md:-left-32 2xl:-top-28 -left-5">
        <img src="/wavetop.png" className="w-full h-full object-contain" />
      </figure>
      <figure className="absolute bottom-0 right-0">
        <img src="/wavebottom.png" className="w-full h-full object-contain" />
      </figure>
      <figure className="absolute right-1/3">
        <img
          src="/circlebox.png"
          alt=""
          className="w-full h-full object-contain"
        />
      </figure>

      {/* Content Wrapper */}
      <div className="relative z-10 flex flex-col items-center gap-y-10 py-16">
        <h2 className="text-4xl md:text-6xl md:max-w-2xl font-bold">
          Education Is The Most Powerful Weapon
        </h2>
        <p className="text-sm md:text-lg max-w-6xl opacity-90">
          {principalInfo.message}
        </p>

        {/* Principal Info */}
        <div className="flex flex-col md:flex-row items-center gap-14">
          <figure className="w-48 md:w-60 shadow-2xl">
            <img
              src={principalInfo.imageSrc}
              alt="Principal"
              className="w-full h-full rounded-lg"
            />
          </figure>
          <span className="text-center md:text-start">
            <h3 className="md:my-4 text-4xl md:text-6xl allura-regular">
              {principalInfo.name}
            </h3>
            <p className="md:text-lg">{principalInfo.position}</p>
            <p className="md:text-lg">{principalInfo.school}</p>
          </span>
        </div>
      </div>
    </section>
  );
}
