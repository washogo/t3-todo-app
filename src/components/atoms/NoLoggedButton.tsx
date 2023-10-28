"use client";

import { signIn } from "next-auth/react";
import Image from "next/image";

export const NoLoggedButton = () => {
  return (
    // status が "loading" でない、つまり認証情報の取得が完了している、
    // かつ、認証されていない場合に、下記が表示されます
    <div className="flex flex-col items-center">
      <button
        className="mb-5 inline-flex cursor-pointer items-center justify-center rounded-md px-4 py-2 font-semibold outline outline-2 outline-offset-2 outline-green-one hover:text-green-five"
        onClick={() => signIn()}
      >
        Sign In
      </button>
      <div className="mb-5 text-xl">
        <p className="text-center text-gray-four">
          Keep your life in order with todolist
        </p>
        <p className="text-center text-gray-four">
          - The ultimate productivity tool -
        </p>
      </div>
      <div className="">
        <Image src="/main-img.png" width={600} height={600} alt="main image" />
      </div>
    </div>
  );
};
