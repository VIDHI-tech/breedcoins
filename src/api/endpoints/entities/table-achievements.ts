import { SCHOOL_ID } from "@/constants";

export const tableAchievements = {
  all: `/entities/table-achievements/public/school/${SCHOOL_ID}`,
  one: (id: string) =>
    `/entities/table-achievements/public/school/${SCHOOL_ID}/${id}`,
};
