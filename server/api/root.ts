import { exampleRouter } from "./routers/example";
import { router } from "./trpc";

// 定義したルーターをサーバのプライマリルーターに登録する
const appRouter = router({
  example: exampleRouter,
});

// APIの型定義をエクスポートする
export type AppRouter = typeof appRouter;
