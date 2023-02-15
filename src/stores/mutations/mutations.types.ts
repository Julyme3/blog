import type { MutationTree, Store } from "vuex";
import type { IState } from "@/stores";
import type { IArticle, IArticleData, ICommentData } from "@/entities";

export interface IMutations extends MutationTree<IState> {
  fetchArticles(
    this: Store<IState>,
    state: IState,
    payload: IArticleData[]
  ): void;
  createComment(
    this: Store<IState>,
    state: IState,
    payload: IMutationsCreateCommentMutationPayload
  ): void;
}

export interface IMutationsMock extends IMutations {
  fetchArticles: () => void;
  createComment: () => void;
}

export interface IMutationsCreateCommentMutationPayload {
  article: IArticle;
  comment: ICommentData;
}
