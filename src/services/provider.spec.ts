import { describe, expect, it, vi } from "vitest";
import { provider } from "@/services/provider";
import { ArticlesService } from "@/services/articles";

vi.mock("./articles/articles");
describe("Provider", () => {
  it("should instantiate Articles Service", () => {
    provider();
    expect(ArticlesService.prototype.constructor).toBeCalled();
  });
});
