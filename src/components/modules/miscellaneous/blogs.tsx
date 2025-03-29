import { useMemo, useRef, useState } from "react";
import { MoveLeft, MoveRight } from "lucide-react";
import { useApiQuery } from "@/hooks/useApiQuery";
import endpoints from "@/api/endpoints";
import { RichTextPreview } from "@/components/common/preview";

interface BlogsItem {
  id: string;
  title: string;
  date: string;
  image: string;
  description: string;
}

interface BlogsProps {
  Blogs: BlogsItem[];
}

const News = ({ Blogs }: BlogsProps) => {
  const { data } = useApiQuery(endpoints.entities.blog.all);
  const filteredData = useMemo(() => data?.data?.data ?? [], [data]);
  console.log("blogs", filteredData);

  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState<number>(1);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.offsetWidth;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });

      setActiveIndex((prevIndex) =>
        direction === "left"
          ? Math.max(0, prevIndex - 1)
          : Math.min(Blogs.length - 1, prevIndex + 1)
      );
    }
  };

  const calculateDaysAgo = (date: string): number => {
    const today = new Date();
    const BlogsDate = new Date(date);
    const diffTime = Math.abs(today.getTime() - BlogsDate.getTime());
    return Math.floor(diffTime / (1000 * 60 * 60 * 24));
  };

  return (
    <div
      id="miscellaneous_blogs"
      className="flex flex-col gap-y-8 w-full py-20 px-5"
    >
      <h2 className="text-4xl md:text-[53.33px] font-bold text-[#252B42]">
        Blogs
      </h2>
      <p className="text-[#363848] text-base pt-2">
        Stay updated with our latest events, achievements, and news.
      </p>

      <section className="px-5 w-full">
        <section
          className="max-w-full overflow-x-auto lg:overflow-x-hidden flex gap-x-7 scrollbar-hide snap-x snap-mandatory w-full px-5 py-5"
          ref={scrollRef}
          style={{ scrollSnapType: "x mandatory" }}
        >
          {filteredData?.map((item) => (
            <div
              key={item._id}
              className="snap-start min-w-96 sm:min-w-sm xl:min-w-[50%] 2xl:min-w-[32.2%] 3xl:min-w-[32.7%] sm:max-w-sm xl:max-w-[50%] 2xl:max-w-[32.2%] 3xl:max-w-[32.7%] bg-white rounded-lg overflow-hidden transition-all duration-300 hover:drop-shadow-lg"
            >
              <figure className="h-56">
                <img
                  src={item?.blog_img ?? "/blog1.png"}
                  className="w-full h-full object-cover rounded-lg"
                />
              </figure>
              <div className="p-4">
                <h3 className="font-bold text-2xl mb-2 tracking-tight h-32 line-clamp-3">
                  {item?.blog_text ?? "Blog Title"}
                </h3>
                <p className="text-gray-400 text-sm mb-2">
                  {new Date(item?.createdAt ?? "").toDateString()} |{" "}
                  {calculateDaysAgo(item?.createdAt ?? "")} days ago
                </p>
                <p className="text-gray-600 text-base mb-4 line-clamp-3">
                  <RichTextPreview
                    content={item?.blog_content ?? "Blog Content"}
                  />
                </p>
                <a
                  href={`/blogs/${item?._id ?? ""}`}
                  className="text-[#023AA2] inline-block text-lg font-bold my-auto"
                >
                  Read more
                </a>
              </div>
            </div>
          ))}
        </section>
      </section>

      <section className="flex items-center justify-between pt-6 text-[#023AA2]">
        <span className="flex gap-10">
          <MoveLeft
            onClick={() => scroll("left")}
            className="cursor-pointer md:h-10 md:w-10"
          />
          <MoveRight
            onClick={() => scroll("right")}
            className="cursor-pointer md:h-10 md:w-10 hidden md:block"
          />
        </span>
        <a
          href="/blogs"
          className="border border-[#023AA2] font-bold p-2 md:px-10 md:py-4 rounded-lg text-xl"
        >
          Read More
        </a>
        <MoveRight
          onClick={() => scroll("right")}
          className="cursor-pointer md:h-10 md:w-10 md:hidden"
        />
      </section>
    </div>
  );
};

const blogs: BlogsItem[] = [
  {
    id: "1",
    title: "ASTE takes pride in sharing the happy news",
    date: "2024-02-10",
    image: "/news1.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Fusce eget nulla checkinghhgbh",
  },
  {
    id: "2",
    title:
      "MRS. MERCY METILDA (Administrative staff) have been conferred with BSSCA",
    date: "2024-02-12",
    image: "/news2.png",
    description:
      "Our team has won another prestigious award, and we couldn't be prouder of our achievements",
  },
  {
    id: "3",
    title:
      "Celebrating our centum scorers of Class X and XII and the outstanding 100% results for both classes!",
    date: "2024-02-15",
    image: "/news3.png",
    description:
      "Our students have secured really very outstanding results in Class X and XII, achieving a 100% pass rate",
  },
  {
    id: "4",
    title: "New Sports Complex Inaugurated",
    date: "2024-02-18",
    image: "/news1.png",
    description:
      "Our school has opened a brand-new sports complex with modern facilities and training programs hjgbkjgkj yhvjh",
  },
  {
    id: "5",
    title: "ASTE takes pride in sharing the happy news",
    date: "2024-02-10",
    image: "/news1.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Fusce eget nulla checkinghhgbh",
  },
  {
    id: "6",
    title:
      "MRS. MERCY METILDA (Administrative staff) have been conferred with BSSCA",
    date: "2024-02-12",
    image: "/news2.png",
    description:
      "Our team has won another prestigious award, and we couldn't be prouder of our achievements",
  },
  {
    id: "7",
    title:
      "Celebrating our centum scorers of Class X and XII and the outstanding 100% results for both classes!",
    date: "2024-02-15",
    image: "/news3.png",
    description:
      "Our students have secured really very outstanding results in Class X and XII, achieving a 100% pass rate",
  },
  {
    id: "8",
    title: "New Sports Complex Inaugurated",
    date: "2024-02-18",
    image: "/news1.png",
    description:
      "Our school has opened a brand-new sports complex with modern facilities and training programs hjgbkjgkj yhvjh",
  },
];

export default function Blogssection() {
  return <News Blogs={blogs} />;
}
