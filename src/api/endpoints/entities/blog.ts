import { SCHOOL_ID } from "@/constants";

export const blog = {
  all: `/entities/blog/public/school/${SCHOOL_ID}`,
  one: (id: string) => `/entities/blog/public/${id}`,
};
