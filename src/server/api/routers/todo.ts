import { createInput, toggleInput, updateInput } from "~/server/types";
import { createTRPCRouter, protectedProcedure } from "../trpc";
import { z } from "zod";
// import { TRPCError } from "@trpc/server";

export const todoRouter = createTRPCRouter({
  all: protectedProcedure.query(async ({ ctx }) => {
    // ctx.dbはsrc/server/db.tsで定義したPrismaClientのインスタンス
    const todos = await ctx.db.todo.findMany({
      where: {
        userId: ctx.session.user.id,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    return todos.map(({ id, text, isCompleted }) => ({
      id,
      text,
      isCompleted,
    }));
  }),
  create: protectedProcedure.input(createInput).mutation(({ ctx, input }) => {
    // ロールバック確認用
    // throw new TRPCError({
    //   code: "INTERNAL_SERVER_ERROR",
    //   message: "test failed",
    // });
    return ctx.db.todo.create({
      data: {
        text: input,
        user: {
          connect: {
            id: ctx.session.user.id,
          },
        },
      },
    });
  }),
  toggle: protectedProcedure.input(toggleInput).mutation(({ ctx, input }) => {
    // ロールバック確認用
    // throw new TRPCError({
    //   code: "INTERNAL_SERVER_ERROR",
    //   message: "test failed",
    // });
    const { id, is_completed } = input;
    return ctx.db.todo.update({
      where: {
        id,
      },
      data: {
        isCompleted: is_completed,
      },
    });
  }),
  update: protectedProcedure.input(updateInput).mutation(({ ctx, input }) => {
    // ロールバック確認用
    // throw new TRPCError({
    //   code: "INTERNAL_SERVER_ERROR",
    //   message: "test failed",
    // });
    const { id, text } = input;
    return ctx.db.todo.update({
      where: {
        id,
      },
      data: {
        text,
      },
    });
  }),
  delete: protectedProcedure.input(z.string()).mutation(({ ctx, input }) => {
    // ロールバック確認用
    // throw new TRPCError({
    //   code: "INTERNAL_SERVER_ERROR",
    //   message: "test failed",
    // });
    return ctx.db.todo.delete({
      where: {
        id: input,
      },
    });
  }),
});
