import type { IGetters } from "@/stores/getters/getters.types";
import type { IState } from "@/stores/store.types";
import type { IArticle } from "@/entities";
import { Article } from "@/entities";

export const getters: IGetters = {
  getAllArticles(state: IState): IArticle[] {
    return state.articles.map((data) => new Article(data));
  },

  getOneArticlesById:
    (state: IState) =>
    (id: number): IArticle | undefined => {
      const data = state.articles.find((article) => article.id === id);
      if (!data) {
        return;
      }

      return new Article(data);
    },
};
