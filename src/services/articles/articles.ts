import type { IArticlesService } from "@/services/articles/articles.types";
import type { IArticleData, IArticle } from "@/entities/article";
import { Article } from "@/entities/article";
import type { ICommentData } from "@/entities/comment";
import { Comment } from "@/entities/comment";

export class ArticlesService implements IArticlesService {
  constructor(private readonly data: IArticleData[]) {}

  getAll(): IArticleData[] {
    return this.data;
  }

  getOneById(id: number): IArticle | undefined {
    const data = this.data.find((item) => item.id === id);

    if (!data) {
      return;
    }

    return new Article(data);
  }

  createComment(id: number, data: ICommentData): IArticle {
    const articles = this.getOneById(id);

    if (!articles) {
      throw new Error("Article doesnt exist in DB!");
    }

    const newComment = new Comment(data);
    if (!newComment.validate()) {
      throw new Error("Comment data is not valid");
    }

    articles.comments.push(newComment);

    return articles;
  }
}
