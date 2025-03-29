import { SCHOOL_ID } from "@/constants";

export const tableCareers = {
  all: `/entities/table_careers/public/school/${SCHOOL_ID}`,
  one: (id: string) => `/entities/table_careers/public/${id}`,
};
