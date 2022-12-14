import { atom } from "recoil";

// type
import type { Filter } from "@prisma/client";

/**
 * 2022/08/24 - 저장된 모든 필터들 요청 - by 1-blue
 */
export const filtersState = atom<Filter[]>({
  key: "filtersState",
  default: [],
});
/**
 * 2022/08/24 - 현재 선택한 필터들 - by 1-blue
 */
export const selectedFiltersState = atom<string[]>({
  key: "selectedFiltersState",
  default: [],
});

/**
 * 2022/08/27 - 필터링 관련 states 객체 - by 1-blue
 */
const filterService = {
  filtersState,
  selectedFiltersState,
};

export default filterService;
