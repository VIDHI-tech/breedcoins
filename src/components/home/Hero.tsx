import { ChevronsDown } from "lucide-react";

export function Hero() {
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <section id="hero">
      <div className="relative aspect-[16/9] bg-hero bg-cover bg-no-repeat h-fit">
        <ChevronsDown
          className="text-white w-10 sm:h-10 lg:h-16 xs:bottom-1 xl:h-20 cursor-pointer absolute bottom-0  md:bottom-7 right-0 md:right-5 lg:bottom-10 lg:right-25 xl:right-20"
          onClick={scrollToBottom}
        />
        <div
          className="px-5 xl:px-20 flex flex-col justify-center h-full md:w-[70%] 2xl:w-[55%]"
          id="home"
        >
          <div className="flex flex-col gap-y-3 lg:gap-y-9 sm:-translate-y-3 xl:-translate-y-5 2xl:-translate-y-10 text-white ">
            <h1 className="text-[3.5vw] xl:text-[56px] leading-[5vw] xl:leading-[70px] text-shadow font-bold">
              Top Rated <span className="text-pink">Game</span>
              <br /> Development Studio
            </h1>
            <p className="text-[0.5rem] sm:text-xs lg:text-lg">
              We specialize in leveraging the power of blockchain technology to
              create innovative and immersive gaming experiences. Our expert
              team of game developers can bring your gaming ideas to life.
              Experience gaming like never before with our cutting-edge Web3
              game development services. Contact us today to get started!
            </p>
            <button className="rounded-xl text-[2vw] sm:text-lg py-2 px-4 md:py-3 md:px-7 shadow-btn bg-btn text-black inter font-bold hover:bg-green/90 transition-all duration-150 max-w-fit ">
              Get Estimate!
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
