import { SCHOOL_ID } from "@/constants";

export const table_tc_issued = {
  all: `/entities/table_ts_issued/public/school/${SCHOOL_ID}`,
  one: (id: string) => `/entities/table_ts_issued/public/${id}`,
};
