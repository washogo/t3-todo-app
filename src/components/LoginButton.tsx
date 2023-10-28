"use client";
import { signIn } from "next-auth/react";

interface LoginButtonProps {
  providerId: string;
  providerName: string;
}

export const LoginButton = ({ providerId, providerName }: LoginButtonProps) => {
  return (
    <button
      className="inline-flex w-full cursor-pointer items-center justify-center rounded-md p-4 text-xl font-bold hover:text-green-five"
      // このボタンを押すと GitHub による認証が行われます
      // また、認証後のリダイレクト先をルートパスに設定しています
      onClick={() =>
        signIn(providerId, {
          callbackUrl: "/",
        })
      }
    >
      Sign in with {providerName}
    </button>
  );
};
