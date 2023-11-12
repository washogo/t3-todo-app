"use client";

import { useSession } from "next-auth/react";
import { LoggedButton } from "../atoms/LoggedButton";
import { NoLoggedButton } from "../atoms/NoLoggedButton";

export const LogButtonWrapper = () => {
  const { data: sessionData, status } = useSession();

  return (
    <>
      {status !== "loading" && null}
      {sessionData ? (
        <LoggedButton email={sessionData.user.email as unknown as string} />
      ) : (
        <NoLoggedButton />
      )}
    </>
  );
};
