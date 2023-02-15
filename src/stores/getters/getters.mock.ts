import type { IGettersMock } from "@/stores/getters/getters.types";
import { vi } from "vitest";

export const mockGetters = (): IGettersMock => ({
  getAllArticles: vi.fn(),
  getOneArticlesById: vi.fn(),
});
