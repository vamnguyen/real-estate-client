import { useState } from "react";
import { cn } from "~/lib/utils";

const Login = () => {
  const [variant, setVariant] = useState("sign-in");

  return (
    <div
      className="bg-white w-[500px] h-[500px] rounded-md p-8 relative top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center"
      onClick={(e) => e.stopPropagation()}
    >
      <h1 className="font-Dancing text-5xl mb-6">Welcome to REIS</h1>
      <div className="flex gap-5 border-b border-b-gray-100">
        <button
          className={cn(
            "pb-2 hover:text-primary-500",
            variant === "sign-in" ? "border-b-4 border-b-primary-500" : ""
          )}
          onClick={() => setVariant("sign-in")}
        >
          Sign in
        </button>
        <button
          className={cn(
            "pb-2 hover:text-primary-500",
            variant === "register" ? "border-b-4 border-b-primary-500" : ""
          )}
          onClick={() => setVariant("register")}
        >
          New Account
        </button>
      </div>
    </div>
  );
};

export default Login;
