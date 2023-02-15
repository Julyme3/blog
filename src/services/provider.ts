import type { IProvider } from "@/services/provider.types";
import { ArticlesService } from "@/services/articles";
import data from "@/services/data.json";

export const provider = (): IProvider => ({
  articles: new ArticlesService(data),
});
