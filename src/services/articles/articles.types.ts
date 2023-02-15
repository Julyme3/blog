import type { IArticle, IArticleData } from "@/entities/article";
import type { ICommentData } from "@/entities/comment";

export interface IArticlesService {
  getAll(): IArticleData[];
  getOneById(id: number): IArticle | undefined;
  createComment(id: number, data: ICommentData): IArticle;
}

export interface IArticlesServiceMock {
  getAll: () => IArticleData[];
  getOneById: () => IArticle | undefined;
  createComment: () => IArticle;
}
