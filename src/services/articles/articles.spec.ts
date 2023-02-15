import { describe, expect, it } from "vitest";
import { mockArticlesData, mockArticles } from "@/entities/article";
import { mockCommentsData, mockComments } from "@/entities/comment";
import { ArticlesService } from "@/services/articles/articles";

describe("Articles Service", () => {
  const service = new ArticlesService(mockArticlesData());

  describe("getAll", () => {
    it("should return all data", () => {
      expect(service.getAll()).toEqual(mockArticlesData());
    });
  });

  describe("getOneById", () => {
    it("should return one articles by provided id", () => {
      const articles = mockArticles()[0];
      const id = articles.id as number;
      expect(service.getOneById(id)).toEqual(articles);
    });
    it("should return undefined if no articles found", () => {
      expect(service.getOneById(1111)).toBeUndefined();
    });
  });

  describe("createComment", () => {
    const data = mockCommentsData()[0];
    it("should add new comment to provided articles and return it", () => {
      const articles = mockArticles()[0];
      const id = articles.id as number;
      const commentsAmount = articles.comments.length;
      const newArticle = service.createComment(id, data);

      expect(newArticle.id).toEqual(id);
      expect(newArticle.comments.length).toBe(commentsAmount + 1);
    });

    it("should throw an error if articles with provided id doesnt exist", () => {
      expect(() => {
        service.createComment(11111, data);
      }).toThrowError();
    });

    it("should throw an error if comment is not valid", () => {
      const data = {
        ...mockComments()[0],
        title: "",
      };
      expect(() => {
        service.createComment(1, data);
      }).toThrowError();
    });
  });
});
