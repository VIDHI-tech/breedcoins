import { Send } from "lucide-react";

const GameDev = () => {
  return (
    <>
      <section className="flex flex-col items-center justify-center py-10 2xl:py-20 w-full mx-auto">
        <h1 className="stalinist text-sm md:text-xl 2xl:text-5xl">
          GAME DEVELOPMENT
        </h1>
        <figure className="pb-4 2xl:pb-0">
          <img src="/heading-line.png" alt="" />
        </figure>
        <div className="relative">
          <img src="/about.webp" alt="" className="hidden 2xl:block" />
          <img src="/about_tab.webp" alt="" className="block 2xl:hidden" />

          <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-center text-white gap-2 2xl:gap-4">
            <h1 className="text-sm lg:text-3xl font-bold 2xl:py-7">
              Web3 <span className="text-pink">Game</span> Development Comapny
            </h1>
            <p className="text-[0.35rem] md:text-[0.9rem] 2xl:text-xl max-w-xl">
              Our Web3 gaming technology gives players true ownership of in-game
              items. Web3 Game Development Services enables secure transactions
              and creates new game economies. Bring your specific idea, and make
              it to life.
            </p>
            <span className="flex gap-x-2 2xl:pt-5 h-5">
              <button className="px-2 bg-green text-[0.5rem] 2xl:text-base flex items-center">
                <img src="/whatsapp.png" alt="" className="h-4" /> Whatsapp
              </button>
              <button className="px-2 bg-blue text-[0.5rem] 2xl:text-base flex items-center">
                <Send className="h-4" /> Telegram
              </button>
            </span>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center py-10 2xl:py-20 w-full px-4">
        <h1 className="stalinist text-sm md:text-xl 2xl:text-5xl">
          WEB 3 GAME
        </h1>
        <figure className="pb-4 2xl:pb-10">
          <img src="/heading-line.png" alt="" />
        </figure>
        <div className="flex flex-col lg:flex-row items-center text-center lg:text-start gap-10 text-white">
          <figure className="w-72 lg:w-96 2xl:w-full">
            <img
              src="/entrepreur.webp"
              alt=""
              className="w-full h-full object-contain"
            />
          </figure>
          <div className="lg:max-w-xl xl:max-w-2xl space-y-5">
            <h1 className="text-sm md:text-3xl 2xl:text-4xl font-bold">
              Web3 <span className="text-pink">Game Development</span> For
              Entrepreneurs
            </h1>
            <p className="text-[0.5rem] md:text-sm 2xl:text-lg">
              Our Web3 Game Development Services is about creating games using
              blockchain technology. We have deep experience in both gaming and
              blockchain. We are a top choice for Web3 game development. We help
              startups and businesses achieve their goals by delivering engaging
              and interactive games with technical support. We take your game
              ideas and turn them into a finished product. Our Web3 game
              development services include design, development, testing, and
              maintenance. Our focus on creativity, efficiency, and time
              management ensures we deliver high-quality gaming solutions.
            </p>
            <button className="rounded-xl text-[2vw] sm:text-lg py-2 px-4 md:py-3 md:px-7 shadow-btn bg-btn text-black inter font-bold hover:bg-green/90 transition-all duration-150 max-w-fit ">
              Get a Quote
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default GameDev;
