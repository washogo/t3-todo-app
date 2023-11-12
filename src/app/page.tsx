import Head from "next/head";
import { CreateTodo } from "~/components/organisms/CreateTodo";
import { LogButtonWrapper } from "~/components/organisms/LogButtonWrapper";

function Home() {
  return (
    <>
      <Head>
        <title>Todo App</title>
        <meta name="description" content="Full stack todo app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen bg-olive-one p-0 selection:bg-green-two md:px-8 md:py-24">
        <main className="mx-auto min-h-screen max-w-none rounded-none bg-cream-four px-5 pb-10 pt-24 outline-none md:max-w-[60rem] md:rounded-2xl md:px-8 md:outline md:outline-4 md:outline-offset-8 md:outline-cream-four">
          <h1 className="mb-6 text-center text-4xl font-bold text-gray-three">
            ToDo List
          </h1>
          <LogButtonWrapper />
          <div>
            <CreateTodo />
          </div>
        </main>
      </div>
    </>
  );
}

export default Home;
