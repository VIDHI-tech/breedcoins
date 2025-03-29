import { SCHOOL_ID } from "@/constants";

export const table_staff_av_teaching = {
  all: `/entities/table_staff_av_teaching/public/school/${SCHOOL_ID}`,
  one: (id: string) =>
    `/entities/table_staff_av_teaching/public/school/${SCHOOL_ID}/${id}`,
};
