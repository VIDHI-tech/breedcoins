import { useParams } from "react-router-dom";
import { MoveLeft, MoveRight } from "lucide-react";
import { useMemo, useRef, useState } from "react";
import { useApiQuery } from "@/hooks/useApiQuery";
import endpoints from "@/api/endpoints";
import { RichTextPreview } from "@/components/common/preview";

const BlogDetail: React.FC = () => {
  const { id } = useParams();
  const { data: dataAll } = useApiQuery(endpoints.entities.blog.all);
  const { data: dataOne } = useApiQuery(
    endpoints.entities.blog.one(id as string)
  );

  const filteredDataOne = useMemo(() => dataOne?.data?.data ?? [], [dataOne]);
  const filteredDataAll = useMemo(() => dataAll?.data?.data ?? [], [dataAll]);

  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState<number>(1);

  const relatedBlogs = useMemo(() => {
    if (Array.isArray(filteredDataAll) && id) {
      return filteredDataAll?.filter((b) => b.id !== id)?.slice(0, 4);
    } else {
      return [];
    }
  }, [filteredDataAll, id]);

  console.log("relatedBlogs", relatedBlogs);

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
          : Math.min(relatedBlogs.length - 1, prevIndex + 1)
      );
    }
  };

  if (!filteredDataOne || !filteredDataAll) {
    return <p className="text-center text-xl mt-10">Blog not found.</p>;
  }

  // return <div>all good</div>;

  return (
    <>
      <section className="relative w-full h-[250px] md:h-[350px] lg:h-[400px] flex items-center">
        <figure className="w-full h-full">
          <img
            src={filteredDataOne?.blog_img}
            className="w-full h-full object-contain object-right-top"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-100" />
        </figure>

        <h2 className="absolute text-xl lg:text-4xl font-bold  z-10 px-4 md:pl-16 lg:pl-24 xl:pl-40 text-white max-w-2xl">
          {filteredDataOne?.blog_text}
        </h2>
      </section>
      <section className="py-20 px-4 md:px-16 lg:px-24 xl:px-40 space-y-6">
        <RichTextPreview content={filteredDataOne?.blog_content ?? ""} />

        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">
          {filteredData?.blogs_img.map((imgSrc, index) => (
            <img
              key={index}
              src={imgSrc}
              alt={`Blog image ${index + 1}`}
              className="w-full h-64 object-cover rounded-md shadow-md"
            />
          ))}
        </div> */}
      </section>
      <section className="py-20 px-4 md:px-16 lg:px-24 xl:px-40">
        <h2 className="text-3xl font-bold mb-10 text-center">Read More</h2>
        <div
          className="overflow-x-auto lg:overflow-x-hidden flex scrollbar-hide snap-x snap-mandatory w-full space-x-6"
          ref={scrollRef}
          style={{ scrollSnapType: "x mandatory" }}
        >
          {relatedBlogs?.map((relatedBlog) => (
            <div
              key={relatedBlog?._id}
              className="snap-start min-w-full sm:min-w-[calc(100%/2-20px)] lg:min-w-[calc(100%/3-20px)] max-w-full sm:max-w-[calc(100%/2-20px)] md:max-w-[calc(100%/3-20px)] bg-white rounded-lg overflow-hidden transition-all duration-300 mx-3 hover:drop-shadow-lg"
            >
              <figure className="h-56">
                <img
                  src={relatedBlog?.blog_img}
                  alt={relatedBlog?.blog_text}
                  className="w-full h-full object-cover rounded-lg"
                />
              </figure>
              <div className="p-4">
                <h3 className="font-bold text-2xl mb-2 tracking-tight h-32 line-clamp-3">
                  {relatedBlog?.blog_text}
                </h3>
                <p className="text-gray-400 text-sm mb-2">
                  {"hbdf"} • {relatedBlog?.createdAt}
                </p>
                <p className="line-clamp-2">
                  <RichTextPreview content={relatedBlog?.blog_content ?? ""} />
                </p>
                <a
                  href={`/blogs/${relatedBlog._id}`}
                  className="text-[#023AA2] inline-block text-lg font-bold my-auto"
                >
                  Read more
                </a>
              </div>
            </div>
          ))}
        </div>

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
            Other Blogs
          </a>
          <MoveRight
            onClick={() => scroll("right")}
            className="cursor-pointer md:h-10 md:w-10 md:hidden"
          />
        </section>
      </section>
    </>
  );
};

export default BlogDetail;
