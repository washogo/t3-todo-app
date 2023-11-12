import { getProviders } from "next-auth/react";
import Image from "next/image";
import { LoginButton } from "~/components/atoms/LoginButton";
import { SessionProviderWrapper } from "~/components/templates/SessionProviderWrapper";

export default async function SignIn() {
  // ここで、認証の方法（providers）を取得する
  // 複数の認証方法（Google・Twitterなど）を取得する
  // 一つも認証方法が取得できなかった場合は、providers に空の配列をセットする
  const providers = await getProviders();

  return (
    <>
      <div className="min-h-screen bg-olive-one p-0 selection:bg-green-two md:px-8 md:py-24">
        <div className="flex flex-col items-center space-y-20 pt-40">
          <Image src="/github.png" width={170} height={170} alt="github-icon" />
          <div className="text-center">
            <div className="mx-auto max-w-3xl">
              <div className="flexjustify-center"></div>
              {Object.values(providers ?? []).map((provider) => (
                <div key={provider.name}>
                  <SessionProviderWrapper>
                    <LoginButton
                      providerId={provider.id}
                      providerName={provider.name}
                    />
                  </SessionProviderWrapper>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
