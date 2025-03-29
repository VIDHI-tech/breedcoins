import { SCHOOL_ID } from "@/constants";

export const notification = {
  all: `/entities/notification/public/school/${SCHOOL_ID}?limit=10`,
  one: (id: string) =>
    `/entities/notification/public/school/${SCHOOL_ID}/${id}`,
};
