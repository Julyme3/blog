import type {
  IMutationsMock,
  IMutationsCreateCommentMutationPayload,
} from "./mutations.types";
import { vi } from "vitest";
import { mockArticles, mockCommentsData } from "@/entities";

export const mockMutations = (): IMutationsMock => ({
  fetchArticles: vi.fn(),
  createComment: vi.fn(),
});

export const mockCreateCommentMutationPayload = (
  article = mockArticles()[0],
  comment = mockCommentsData()[0]
): IMutationsCreateCommentMutationPayload => ({
  article,
  comment,
});
