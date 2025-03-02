import { TransitionLink } from "@/components/animations";

const HomePage = () => {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center gap-6">
      <h1 className="text-6xl font-extrabold">CHATTERS</h1>

      <div className="flex flex-col gap-2 text-center text-xl">
        <p>Chat App like no other.</p>
        <p>
          Connect to world{" "}
          <span className="text-gray-100 font-bold">
            without a sec of delay
          </span>
        </p>
      </div>

      <TransitionLink
        href={"/sign-up"}
        className="py-3 px-6 text-xl font-semibold bg-zinc-900 hover:bg-zinc-800 transition-all rounded-lg"
      >
        Get Started
      </TransitionLink>
    </main>
  );
};
export default HomePage;
