import { useNavigate } from "react-router-dom";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <section className="flex justify-center items-center content-center h-screen">
      <div className="flex flex-col gap-4 self-center justify-center items-center">
        <h2 className="text-3xl font-bold text-gray-800">Welcome to Whisper</h2>
        <SignInButton afterSignInUrl="/chat">
          <button
            type="button"
            className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 "
          >
            Sign In
          </button>
        </SignInButton>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </section>
  );
};

export default Landing;
