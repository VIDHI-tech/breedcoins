interface Logo {
  id: number;
  name: string;
  src: string;
}

const Partners: React.FC = () => {
  const logos: Logo[] = [
    { id: 1, name: "Captain Altcoin", src: "/partners/bark.png" },
    { id: 2, name: "Techpoint Africa", src: "/partners/bizoforce.png" },
    { id: 3, name: "Analytics Insight", src: "/partners/clutch-co.png" },
    { id: 4, name: "Finbold", src: "/partners/Crunchbase.png" },
    { id: 5, name: "Crypto News Flash", src: "/partners/f6s.png" },
    { id: 6, name: "Disrupt Africa", src: "/partners/firmstalk.png" },
    { id: 7, name: "Disrupt Africa", src: "/partners/goodfirms.png" },
    { id: 8, name: "Disrupt Africa", src: "/partners/itrate.webp" },
    { id: 9, name: "Disrupt Africa", src: "/partners/superbcompanies.webp" },
    { id: 10, name: "Disrupt Africa", src: "/partners/TechBehemoths.png" },
    { id: 11, name: "Disrupt Africa", src: "/partners/Techreviewer.png" },
    { id: 12, name: "Disrupt Africa", src: "/partners/themanifest.webp" },
    { id: 13, name: "Disrupt Africa", src: "/partners/topdevelopers.png" },
    { id: 14, name: "Disrupt Africa", src: "/partners/yourstory.png" },
    { id: 15, name: "Disrupt Africa", src: "/partners/selectedfirms.webp" },
  ];

  return (
    <div className="w-full overflow-hidden px-4 xl:px-0 py-7 md:py-14  bg-black">
      <div className="flex animate-scroll whitespace-nowrap">
        {logos.map((logo) => (
          <img
            key={logo.id}
            src={logo.src}
            alt={logo.name}
            className="h-10 md:h-20 mx-7 md:mx-16 opacity-75 hover:opacity-50 transition duration-100"
          />
        ))}
      </div>
    </div>
  );
};

export default Partners;
