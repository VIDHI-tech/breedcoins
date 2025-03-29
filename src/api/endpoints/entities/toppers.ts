import { SCHOOL_ID } from "@/constants";

export const topper = {
  all: `/entities/topper/public/school/${SCHOOL_ID}`,
  one: (id: string) => `/entities/topper/public/school/${SCHOOL_ID}/${id}`,
};
