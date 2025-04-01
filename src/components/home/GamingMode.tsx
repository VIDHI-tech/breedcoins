import { useState, useEffect } from "react";

interface Card {
  title: string;
  description: string;
  image: string;
}

const cards: Card[] = [
  {
    title: "Maintenance and Support",
    description:
      "After release, the game requires ongoing maintenance, bug fixes, and updates to keep it running smoothly and keep players engaged.",
    image:
      "https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?auto=format&fit=crop&w=400&h=300",
  },
  {
    title: "Game Development",
    description:
      "Our team of experts creates immersive gaming experiences using cutting-edge technology.",
    image:
      "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&w=400&h=300",
  },
  {
    title: "Community Building",
    description:
      "We focus on building strong gaming communities through regular events and updates.",
    image:
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=400&h=300",
  },
];
const services = [
  {
    title: "NFT Game Development",
    description:
      "Use our NFT game development services to stay ahead in the NFT gaming sector.",
  },
  {
    title: "Metaverse Game Development",
    description:
      "Create your gaming metaverse with us and attract players to a rich 3D gaming environment.",
  },
  {
    title: "Casino Game Development",
    description:
      "Explore the casino games with web3 solutions. We offer many options for developing casino games.",
  },
  {
    title: "Move to Earn Game Development",
    description:
      "Let users improve their physical activities and earn rewards. Boost revenue with move-to-earn games.",
  },
  {
    title: "Play to Earn Game Development",
    description:
      "We offer play-to-earn games so gamers can make money from gaming. Create a great P2E game.",
  },
  {
    title: "Role Playing Game Development",
    description:
      "Help players adopt a character's role in a fictional universe. Develop role-playing games with our solutions.",
  },
];

const ServiceCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => (
  <div className="relative bg-black backdrop-blur-3xl p-8 rounded-2xl border border-[#1a1a1a] hover:border-[#4CAF50]/50 transition-all duration-300 group">
    <div className="absolute inset-0 bg-gradient-to-b from-[#c2d87b] via-transparent to-transparent h-14 rounded-2xl opacity-100 transition-opacity duration-300" />

    <h3 className="text-xl font-bold text-[#91b61c] mb-3">{title}</h3>
    <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
  </div>
);

const GamingMode = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + cards.length) % cards.length
    );
  };

  return (
    <>
      <section className="flex items-center justify-between py-10 w-full">
        <figure className="hidden md:block">
          <img src="/left.png" />
        </figure>
        <figure>
          <img src="/gaming-mode.webp" />
        </figure>
        <figure className="hidden md:block">
          <img src="/right.png" />
        </figure>
      </section>
      <section className="w-full flex flex-col items-center">
        <div className="flex flex-col items-center justify-center py-10 2xl:py-20 max-w-6xl">
          <h1 className="stalinist text-sm md:text-xl 2xl:text-5xl">
            SERVICES
          </h1>
          <figure className="pb-4 2xl:pb-10">
            <img src="/heading-line.png" alt="" />
          </figure>
          <h2 className="text-white text-center text-sm md:text-xl 2xl:text-4xl font-bold">
            Accelerate Your <span className="text-pink">Business Growth</span>{" "}
            With Our Web3 Game Development Services
          </h2>
          <section className="px-4 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
              />
            ))}
          </section>
          ;
        </div>
      </section>
      <section className="w-full flex flex-col items-center pb-7">
        <h1 className="stalinist text-sm md:text-xl 2xl:text-5xl">
          PLAY TO EARN
        </h1>
        <figure>
          <img src="/heading-line.png" />
        </figure>
        <h2 className="text-white text-center text-sm md:text-xl 2xl:text-4xl font-bold py-10">
          Our <span className="text-pink">Play to Earn Game Development </span>
          Services
        </h2>
        <div className="relative bg-play bg-cover w-full h-96 bg-no-repeat flex gap-20">
          <div className="absolute flex py-10 2xl:py-20 items-center justify-center lg:left-[10%] 2xl:left-[25%] px-2 z-10">
            <button onClick={prevSlide}>
              <img
                src="/swiper-left.png"
                alt="Previous"
                className="w-10 h-10 object-cover rounded-full hover:scale-110 transition-transform "
              />
            </button>
            {/* Card Content */}
            <div className="transition-all duration-500 ease-in-out max-w-xl h-52 flex flex-col gap-2 bg-pink/50 rounded-2xl p-4 backdrop-blur-sm">
              <span className="bg-black/85 backdrop-blur-lg rounded-2xl flex flex-col justify-center h-52 text-center lg:text-start p-2">
                <h2 className="text-lg lg:text-2xl font-bold text-white">
                  {cards[currentIndex].title}
                </h2>
                <p className="text-white/90 text-sm lg:text-lg leading-relaxed">
                  {cards[currentIndex].description}
                </p>
              </span>
            </div>
            <button onClick={nextSlide}>
              <img
                src="/swiper-right.png"
                alt="Next"
                className="w-10 h-10 object-cover rounded-full hover:scale-110 transition-transform"
              />
            </button>
          </div>
          <figure className="absolute hidden md:block bottom-0 h-[26rem] right-0 lg:right-[10%] 3xl:right-[20%]">
            <img
              src="/play-person.webp"
              className="w-full h-full object-cover"
            />
          </figure>
        </div>
      </section>
    </>
  );
};
export default GamingMode;
