import { z } from "zod";
import { publicProcedure, router } from "../trpc";

// プロシージャを持つルーターを作成する
export const exampleRouter = router({
  hello: publicProcedure
    // zodによるバリデーション
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello, ${input.text}`,
      };
    }),
});
