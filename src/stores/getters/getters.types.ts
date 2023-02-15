import type { GetterTree, Store } from "vuex";
import type { IRootState, IState } from "@/stores";
import type { IArticle } from "@/entities/article";

export interface IGetters extends GetterTree<IState, IRootState> {
  getAllArticles(this: Store<IState>, state: IState): IArticle[];
  getOneArticlesById(
    this: Store<IState>,
    state: IState
  ): (id: number) => IArticle | undefined;
}

export interface IGettersMock {
  getAllArticles: () => IArticle[];
  getOneArticlesById: () => IArticle | undefined;
}
