import React from "react";

const adminConfig = [
  {
    image: "/chairman.png",
    name: "AVM DS Dangi, AVSM VM",
    position: "Chairman",
    school: "AF School, ASTE",
    thoughts:
      "It gives you wisdom, what you want to be tomorrow. Time has its own way of moving quickly and catching everyone unaware of the passing years. So make use of time judiciously and cautiously for career building.",
  },
  {
    image: "/chief.png",
    name: "Gp Capt K Hurshan",
    position: "Chief Administrative Officer",
    school: "ASTE",
    thoughts:
      "It gives you wisdom, what you want to be tomorrow. Time has its own way of moving quickly and catching everyone unaware of the passing years. So make use of time judiciously and cautiously for career building.",
  },
  {
    image: "/director.png",
    name: "Wg Cdr T K Sumesh",
    position: "EXECUTIVE DIRECTOR",
    school: "Air Force School, ASTE",
    thoughts:
      "It gives you wisdom, what you want to be tomorrow. Time has its own way of moving quickly and catching everyone unaware of the passing years. So make use of time judiciously and cautiously for career building.",
  },
];

const AdminSection: React.FC = () => {
  return (
    <section id="messagedesk" className="py-28 bg-[#F6F6F6]">
      <p className="text-primary font-bold  text-center text-3xl">
        Message Desk
      </p>
      <h2 className="text-4xl lg:text-[51px] font-bold text-gray-900  text-center py-10">
        Word from our administrators
      </h2>

      {/* Cards  */}
      <div className="pt-10 gap-12 px-6  2xl:px-40 lg:max-w-full xl:overflow-x-auto flex flex-col md:flex-row md:flex-wrap xl:flex-nowrap  md:justify-center  scrollbar-hide">
        {adminConfig.map((admin, index) => (
          <div
            key={index}
            className="bg-white md:max-w-xs xl:max-w-full text-[#252B42] rounded-lg shadow-md text-xl md:text-2xl font-bold p-5 2xl:p-14 tracking-wide min-w-[300px] lg:min-w-[350px] xl:min-w-0"
          >
            <img
              src={admin.image}
              alt={admin.name}
              className="w-36 h-48 pb-7"
            />
            <h3>{admin.name}</h3>
            <p>{admin.position}</p>
            <p>{admin.school}</p>
            <div className="w-16 h-1 bg-primary my-7" />
            <p className="text-[#737373] text-lg font-medium tracking-normal">
              {admin.thoughts}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AdminSection;
