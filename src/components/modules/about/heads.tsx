import { cn } from "@/lib/utils";

interface Leader {
  image: string;
  name: string;
  position: string;
  school: string;
  thoughts: string;
}

const leadershipConfig: Record<string, Leader> = {
  principal: {
    image: "/principal.png",
    name: "Mrs Chumki Nath",
    position: "Principal",
    school: "Air Force School, ASTE",
    thoughts:
      "Keeping this spirit of education alive we are continuously striving to nurture children into full-fledged personalities. Our aim is to nurture the child into a self-motivated individual. Curriculum and the practices of the school uphold the futuristic motto of the school “Creating Global Citizens”. Both Scholastic and Co-scholastic aspects of our education offer umpteen opportunities for the students to explore their interests and innovate new ideas. We want all our students to achieve their full potential. Our task is to make it possible and our mission is to provide a platform for the same.",
  },
  gvHead: {
    image: "/gvhead.png",
    name: "Mrs. Swarnalatha Prasad",
    position: "Headmistress GV Camp",
    school: "Air Force School, ASTE",
    thoughts:
      "Educators have the honour of knowing that they touch lives every day. Teaching lets you ignite others with your passion for learning. The teachers of AFS, ASTE endeavour to enhance the self-confidence, self-esteem and personal responsibility of students by boosting their real competency. The school's best ally in the task of nurturing a student's urge to learn first and foremost are the parents.",
  },
  avHead: {
    image: "/avhead.png",
    name: "Mrs. Korobi Dey",
    position: "Headmistress AV Camp",
    school: "Air Force School, ASTE",
    thoughts:
      "“Teach with all your heart” is my advice to teachers at Air Force School, ASTE. We have an outstanding, committed and enthusiastic teaching team at Air Force School ASTE where the focus is always on the holistic development of every student to reach to their potential. Our teachers are facilitating the absorption of new ideas and concepts, creating experiences and opportunities for learners to explore and encouraging them to be active participants in the teaching-learning process.",
  },
};

interface LeadsProps {
  data: Leader;
  isFlipped?: boolean;
}

// Reusable
const Leads: React.FC<LeadsProps> = ({ data, isFlipped = false }) => {
  return (
    <section
      className={cn(`relative flex flex-col items-center md:flex-row 
        ${isFlipped ? "md:flex-row-reverse" : ""}
         bg-primary text-white border-t-8 overflow-x-hidden`)}
    >
      {/* Background Wave */}
      <figure
        className={`absolute bottom-0 -right-20 w-1/2 ${
          isFlipped ? "-z-10" : ""
        }`}
      >
        <img src="/wavebottom.png" />
      </figure>

      {/* Image */}
      <figure className="w-96 md:w-1/2 lg:w-1/3">
        <img
          src={data.image}
          alt={data.name}
          className="w-full h-full object-contain"
        />
      </figure>

      {/* Content */}
      <div
        className={`py-5 px-10 md:px-6 flex flex-col justify-center md:w-[60%] lg:w-2/3 max-w-7xl text-2xl font-bold`}
      >
        <h2 className="pt-2">{data.name}</h2>
        <h3>{data.position}</h3>
        <h4>{data.school}</h4>
        <p className="text-xs 2xl:text-lg font-normal tracking-wide py-4 2xl:py-6">
          {data.thoughts}
        </p>
        {/* <Button
          label="Read more"
          className="border text-base w-fit hover:bg-transparent hover:text-slate-400"
        /> */}
      </div>
    </section>
  );
};

// Main
export default function LeaderSection() {
  return (
    <article>
      <Leads data={leadershipConfig.principal} />
      <Leads data={leadershipConfig.gvHead} isFlipped />
      <Leads data={leadershipConfig.avHead} />
    </article>
  );
}
