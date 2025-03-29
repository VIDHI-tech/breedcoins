import { SCHOOL_ID } from "@/constants";

export const alumni = {
  all: `/entities/alumni/public/school/${SCHOOL_ID}`,
  one: (id: string) => `/entities/alumni/public/school/${SCHOOL_ID}/${id}`,
};
