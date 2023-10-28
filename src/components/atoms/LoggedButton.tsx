"use client";

import { signOut } from "next-auth/react";

interface LoggedButtonProps {
  email: string;
}

export const LoggedButton = ({ email }: LoggedButtonProps) => {
  return (
    // status が "loading" でない、つまり認証情報の取得が完了している、
    // かつ、認証されている場合に、下記が表示されます
    <>
      <div className="flex flex-col items-center">
        <p className="text-l text-white mb-4 text-center">
          <span>Logged in as {email}</span>
        </p>
        <button
          className="mb-8 inline-flex cursor-pointer items-center justify-center rounded-md px-4 py-2 font-semibold outline outline-2 outline-offset-2 outline-green-one hover:text-green-five"
          onClick={() => signOut()}
        >
          Sign out
        </button>
      </div>
      <div>Todo components coming soon...</div>
    </>
  );
};
