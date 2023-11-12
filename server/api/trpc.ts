import { initTRPC } from "@trpc/server";

// tRPCを初期化する
// この操作はサーバー起動時に一度だけ行う
// tRPCのインスタンスは複数あってはならない
const t = initTRPC.create();

// tそのものではなく、変数tの特定のメソッドをエクスポートする
// これにより、tのメソッドを呼び出すときには、t.method()ではなく、method()と書くことができる
export const router = t.router;
export const publicProcedure = t.procedure;
