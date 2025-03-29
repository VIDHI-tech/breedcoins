import { SCHOOL_ID } from "@/constants";

export const latest_updates = {
  all: `/entities/table_latest_updates/public/school/${SCHOOL_ID}?limit=10`,
  one: (id: string) =>
    `/entities/table_latest_updates/public/school/${SCHOOL_ID}/${id}`,
};
