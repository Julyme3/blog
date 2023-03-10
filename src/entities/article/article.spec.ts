import { Article } from "@/entities/article/article";
import { Comment, mockCommentsData } from "@/entities/comment";
import { describe, expect, it } from "vitest";
import { mockArticlesData } from "@/entities/article/article.mock";

describe("Article", () => {
  describe("constructor", () => {
    it("should instantiate id only it it was provided", () => {
      const entity1 = new Article({
        ...mockArticlesData()[0],
        id: 1,
      });

      expect(entity1.id).toBe(1);

      const entity2 = new Article({
        ...mockArticlesData()[0],
        id: undefined,
      });

      expect(entity2.id).toBeUndefined();
    });

    it("should instantiate createdAt only if it was provided", () => {
      const entity1 = new Article({
        ...mockArticlesData()[0],
        createdAt: "2019-12-19T11:54:04 +05:00",
      });

      expect(entity1.createdAt).toBe("2019-12-19T11:54:04 +05:00");

      const entity2 = new Article({
        ...mockArticlesData()[0],
        createdAt: undefined,
      });

      expect(entity2.createdAt).toBeUndefined();
    });

    it("should instantiate Comments", () => {
      const entity1 = new Article({
        ...mockArticlesData()[0],
        comments: mockCommentsData(),
      });

      expect(entity1.comments[0] instanceof Comment).toBeTruthy();
    });
  });
});
