import { SCHOOL_ID } from "@/constants";

export const tableTimings = {
  all: `/entities/table_timings/public/school/${SCHOOL_ID}`,
  one: (id: string) =>
    `/entities/table_timings/public/school/${SCHOOL_ID}/${id}`,
};
