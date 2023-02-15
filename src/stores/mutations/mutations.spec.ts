import { describe, it, expect } from "vitest";
import { mutations } from "@/stores/mutations";
import { mockState, mockStore } from "@/stores/store.mock";
import { mockArticlesData, mockArticles } from "@/entities";
import { mockCreateCommentMutationPayload } from "./mutations.mock";

describe("Mutations", () => {
  describe("fetchArticles", () => {
    it("should add all provided articles tot the store", () => {
      const state = mockState();
      const payload = mockArticlesData();
      const expected = {
        ...state,
        articles: [...state.articles, ...payload],
      };

      mutations.fetchArticles.bind(mockStore())(state, payload);

      expect(state).toEqual(expected);
    });
  });

  describe(">> createComment", () => {
    const state = mockState();
    const payload = mockCreateCommentMutationPayload();

    it("should create new article if it doesn't exist in the store yet", () => {
      state.articles = [];

      mutations.createComment.bind(mockStore())(state, payload);

      expect(state.articles).toEqual([payload.article]);
    });

    it("should create add new comment to the article in the store ", () => {
      const article = mockArticles()[0];

      state.articles = [article];

      const expected = {
        ...article,
        comments: [payload.comment],
      };

      mutations.createComment.bind(mockStore())(state, payload);

      expect(state.articles[0]).toEqual(expected);
    });
  });
});
