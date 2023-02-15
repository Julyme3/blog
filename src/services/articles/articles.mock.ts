import { vitest } from "vitest";
import type { IArticlesServiceMock } from "@/services/articles/articles.types";

export const mockArticlesService = (): IArticlesServiceMock => ({
  getAll: vitest.fn(),
  getOneById: vitest.fn(),
  createComment: vitest.fn(),
});
