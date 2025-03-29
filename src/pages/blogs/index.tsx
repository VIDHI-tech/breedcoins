import endpoints from "@/api/endpoints";
import { useApiQuery } from "@/hooks/useApiQuery";
import {
  appStandardDateFormatter2,
  appStandardDateFormatter3,
} from "@/utils/formatter";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

const blogsConfig = {
  imageSrc: "/hero1.JPG",
};

export const blogData = [
  {
    id: "1",
    image: "/news1.png",
    title: "ASTE takes pride in sharing the happy news",
    date: "August 18, 2022",
    readTime: "4 Min",
    content: {
      paragraphs: [
        "The Air Force School ASTE is proud to celebrate the achievements of our outstanding students. Their dedication and hard work have led to remarkable success in various fields.",
        "Through innovative learning techniques and a strong academic foundation, our students continue to excel, bringing pride to our institution.",
        "We remain committed to fostering an environment where excellence is not just encouraged but celebrated at every step.",
      ],
      images: ["/card1.png", "/card1.png", "/card1.png", "/card1.png"],
    },
  },
  {
    id: "2",
    image: "/news2.png",
    title: "Cold Brew Coffee, How to Drink Cold Coffee is More Enjoyable",
    date: "August 18, 2022",
    readTime: "4 Min",
    content: {
      paragraphs: [
        "The Air Force School ASTE is proud to celebrate the achievements of our outstanding students. Their dedication and hard work have led to remarkable success in various fields.",
        "Through innovative learning techniques and a strong academic foundation, our students continue to excel, bringing pride to our institution.",
        "We remain committed to fostering an environment where excellence is not just encouraged but celebrated at every step.",
      ],
      images: ["/card1.png", "/card1.png", "/card1.png", "/card1.png"],
    },
  },
  {
    id: "3",
    image: "/news3.png",
    title: "Celebrating our centum scorers of Class X and XII",
    date: "August 18, 2022",
    readTime: "4 Min",
    content: {
      paragraphs: [
        "Air Force School, ASTE is located within Bangalore city limits. The school is one of the forerunners amongst the elite educational institutions in the city. It functions under the aegis of IAF educational and cultural society and is meant primarily for the children of Air Force personnel, Air Force School ASTE is recognised school up to XIIth class and affiliated with CBSE New Delhi. Air Force School, ASTE was started as a Nursery School in 1977 to cater to the educational needs of the children of Air Force personnel serving in HAL based units. Over the years, the school has grown in size up to XII std. Air Force School, ASTE functions from its two locations at Murgeshpalya Camp and Akash Vihar Camp and comprises of classes from Nursery to XII std.",
        "Air Force School, ASTE is located within Bangalore city limits. The school is one of the forerunners amongst the elite educational institutions in the city. It functions under the aegis of IAF educational and cultural society and is meant primarily for the children of Air Force personnel, Air Force School ASTE is recognised school up to XIIth class and affiliated with CBSE New Delhi. Air Force School, ASTE was started as a Nursery School in 1977 to cater to the educational needs of the children of Air Force personnel serving in HAL based units. Over the years, the school has grown in size up to XII std. Air Force School, ASTE functions from its two locations at Murgeshpalya Camp and Akash Vihar Camp and comprises of classes from Nursery to XII std.Air Force School, ASTE is located within Bangalore city limits. The school is one of the forerunners amongst the elite educational institutions in the city. It functions under the aegis of IAF educational and cultural society and is meant primarily for the children of Air Force personnel, Air Force School ASTE is recognised school up to XIIth class and affiliated with CBSE New Delhi. Air Force School, ASTE was started as a Nursery School in 1977 to cater to the educational needs of the children of Air Force personnel serving in HAL based units. Over the years, the school has grown in size up to XII std. Air Force School, ASTE functions from its two locations at Murgeshpalya Camp and Akash Vihar Camp and comprises of classes from Nursery to XII std.",
        "Air Force School, ASTE is located within Bangalore city limits. The school is one of the forerunners amongst the elite educational institutions in the city. It functions under the aegis of IAF educational and cultural society and is meant primarily for the children of Air Force personnel, Air Force School ASTE is recognised school up to XIIth class and affiliated with CBSE New Delhi. Air Force School, ASTE was started as a Nursery School in 1977 to cater to the educational needs of the children of Air Force personnel serving in HAL based units. Over the years, the school has grown in size up to XII std. Air Force School, ASTE functions from its two locations at Murgeshpalya Camp and Akash Vihar Camp and comprises of classes from Nursery to XII std.",
      ],
      images: [
        "/card1.png",
        "/card2.png",
        "/card3.png",
        "/card1.png",
        "/card1.png",
        "/card2.png",
        "/card3.png",
        "/card1.png",
      ],
    },
  },
  {
    id: "4",
    image: "/news1.png",
    title: "ASTE takes pride in sharing the happy news",
    date: "August 18, 2022",
    readTime: "4 Min",
    content: {
      paragraphs: [
        "The Air Force School ASTE is proud to celebrate the achievements of our outstanding students. Their dedication and hard work have led to remarkable success in various fields.",
        "Through innovative learning techniques and a strong academic foundation, our students continue to excel, bringing pride to our institution.",
        "We remain committed to fostering an environment where excellence is not just encouraged but celebrated at every step.",
      ],
      images: ["/card1.png", "/card1.png", "/card1.png", "/card1.png"],
    },
  },
  {
    id: "5",
    image: "/news2.png",
    title: "Cold Brew Coffee, How to Drink Cold Coffee is More Enjoyable",
    date: "August 18, 2022",
    readTime: "4 Min",
    content: {
      paragraphs: [
        "The Air Force School ASTE is proud to celebrate the achievements of our outstanding students. Their dedication and hard work have led to remarkable success in various fields.",
        "Through innovative learning techniques and a strong academic foundation, our students continue to excel, bringing pride to our institution.",
        "We remain committed to fostering an environment where excellence is not just encouraged but celebrated at every step.",
      ],
      images: ["/card1.png", "/card1.png", "/card1.png", "/card1.png"],
    },
  },
  {
    id: "6",
    image: "/news3.png",
    title:
      "Celebrating our centum scorers of Class X and XII and the outstanding 100% results for both classes!",
    date: "August 18, 2022",
    readTime: "4 Min",
    content: {
      paragraphs: [
        "The Air Force School ASTE is proud to celebrate the achievements of our outstanding students. Their dedication and hard work have led to remarkable success in various fields.",
        "Through innovative learning techniques and a strong academic foundation, our students continue to excel, bringing pride to our institution.",
        "We remain committed to fostering an environment where excellence is not just encouraged but celebrated at every step.",
      ],
      images: ["/card1.png", "/card1.png", "/card1.png", "/card1.png"],
    },
  },
  {
    id: "7",
    image: "/news1.png",
    title: "ASTE takes pride in sharing the happy news",
    date: "August 18, 2022",
    readTime: "4 Min",
    content: {
      paragraphs: [
        "The Air Force School ASTE is proud to celebrate the achievements of our outstanding students. Their dedication and hard work have led to remarkable success in various fields.",
        "Through innovative learning techniques and a strong academic foundation, our students continue to excel, bringing pride to our institution.",
        "We remain committed to fostering an environment where excellence is not just encouraged but celebrated at every step.",
      ],
      images: ["/card1.png", "/card1.png", "/card1.png", "/card1.png"],
    },
  },
  {
    id: "8",
    image: "/news2.png",
    title: "Cold Brew Coffee, How to Drink Cold Coffee is More Enjoyable",
    date: "August 18, 2022",
    readTime: "4 Min",
    content: {
      paragraphs: [
        "The Air Force School ASTE is proud to celebrate the achievements of our outstanding students. Their dedication and hard work have led to remarkable success in various fields.",
        "Through innovative learning techniques and a strong academic foundation, our students continue to excel, bringing pride to our institution.",
        "We remain committed to fostering an environment where excellence is not just encouraged but celebrated at every step.",
      ],
      images: ["/card1.png", "/card1.png", "/card1.png", "/card1.png"],
    },
  },
  {
    id: "9",
    image: "/news3.png",
    title:
      "Celebrating our centum scorers of Class X and XII and the outstanding 100% results for both classes!",
    date: "August 18, 2022",
    readTime: "4 Min",
    content: {
      paragraphs: [
        "The Air Force School ASTE is proud to celebrate the achievements of our outstanding students. Their dedication and hard work have led to remarkable success in various fields.",
        "Through innovative learning techniques and a strong academic foundation, our students continue to excel, bringing pride to our institution.",
        "We remain committed to fostering an environment where excellence is not just encouraged but celebrated at every step.",
      ],
      images: ["/card1.png", "/card1.png", "/card1.png", "/card1.png"],
    },
  },
  {
    id: "10",
    image: "/news1.png",
    title: "ASTE takes pride in sharing the happy news",
    date: "August 18, 2022",
    readTime: "4 Min",
    content: {
      paragraphs: [
        "The Air Force School ASTE is proud to celebrate the achievements of our outstanding students. Their dedication and hard work have led to remarkable success in various fields.",
        "Through innovative learning techniques and a strong academic foundation, our students continue to excel, bringing pride to our institution.",
        "We remain committed to fostering an environment where excellence is not just encouraged but celebrated at every step.",
      ],
      images: ["/card1.png", "/card1.png", "/card1.png", "/card1.png"],
    },
  },
  {
    id: "11",
    image: "/news2.png",
    title: "Cold Brew Coffee, How to Drink Cold Coffee is More Enjoyable",
    date: "August 18, 2022",
    readTime: "4 Min",
    content: {
      paragraphs: [
        "The Air Force School ASTE is proud to celebrate the achievements of our outstanding students. Their dedication and hard work have led to remarkable success in various fields.",
        "Through innovative learning techniques and a strong academic foundation, our students continue to excel, bringing pride to our institution.",
        "We remain committed to fostering an environment where excellence is not just encouraged but celebrated at every step.",
      ],
      images: ["/card1.png", "/card1.png", "/card1.png", "/card1.png"],
    },
  },
  {
    id: "12",
    image: "/news3.png",
    title:
      "Celebrating our centum scorers of Class X and XII and the outstanding 100% results for both classes!",
    date: "August 18, 2022",
    readTime: "4 Min",
    content: {
      paragraphs: [
        "The Air Force School ASTE is proud to celebrate the achievements of our outstanding students. Their dedication and hard work have led to remarkable success in various fields.",
        "Through innovative learning techniques and a strong academic foundation, our students continue to excel, bringing pride to our institution.",
        "We remain committed to fostering an environment where excellence is not just encouraged but celebrated at every step.",
      ],
      images: ["/card1.png", "/card1.png", "/card1.png", "/card1.png"],
    },
  },
];

const Blogs = () => {
  const { data } = useApiQuery(endpoints.entities.blog.all);
  const filteredData = useMemo(() => data?.data?.data ?? [], [data]);
  // console.log("filteredData", filteredData);

  const [visibleBlogs, setVisibleBlogs] = useState(6);

  const handleLoadMore = () => {
    setVisibleBlogs((prev) => prev + 6);
  };

  return (
    <>
      <section className="relative w-full h-[500px] flex items-center">
        <figure className="absolute h-full w-full">
          <img
            src={blogsConfig.imageSrc}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 h-full w-full bg-black rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-70" />
        </figure>
        <span className="flex flex-col z-10 text-white text-center w-full">
          <h2 className="text-3xl lg:text-[56px] font-bold pb-10">Blogs</h2>
          <h3 className="text-lg xl:text-[32px] font-bold">
            Welcome to AIR FORCE SCHOOL,
            <br /> ASTE, Bengaluru!
          </h3>
        </span>
      </section>
      <section className="py-10 px-4 xl:px-10 2xl:px-[calc(100%-80%)]">
        {filteredData?.map((item) => (
          <Link key={item._id} to={`/blogs/${item?._id}`} className="block">
            <div className="flex flex-col md:flex-row gap-10 items-center border-b pt-6 pb-14 w-full">
              <figure className="lg:h-48 w-full md:w-1/4">
                <img
                  src={item?.blog_img}
                  alt={item?._id}
                  className="w-full h-full object-contain"
                />
              </figure>
              <div className="w-full md:w-3/4 space-y-3">
                <h3 className="text-xl md:text-3xl xl:text-4xl font-medium">
                  {item?.blog_text}
                </h3>
                <p className="text-gray-500 text-sm md:text-base xl:text-lg 2xl:text-xl">
                  {appStandardDateFormatter3(item?.createdAt)}
                </p>
              </div>
            </div>
          </Link>
        ))}
        {visibleBlogs < filteredData.length && (
          <div className="flex justify-center mt-6">
            <button
              onClick={handleLoadMore}
              className="bg-primary text-white px-6 py-2 rounded-md"
            >
              Load More
            </button>
          </div>
        )}
      </section>
    </>
  );
};

export default Blogs;
