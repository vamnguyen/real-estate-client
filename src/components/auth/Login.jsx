import { useEffect, useState } from "react";
import { cn } from "~/lib/utils";
import { Button, Input } from "~/components";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Loading from "~/assets/Loading";

const Login = () => {
  const [variant, setVariant] = useState("login");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isLoading },
  } = useForm();

  useEffect(() => {
    reset();
  }, [reset, variant]);

  const onSubmit = async (data) => {
    console.log("🚀 ~ onSubmit ~ data:", data);
    // async request which may result error
    try {
      // await fetch()
    } catch (e) {
      // handle your error
    }
  };

  return (
    <div
      className="bg-white w-[500px] h-fit rounded-md p-8 relative top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center"
      onClick={(e) => e.stopPropagation()}
    >
      <h1 className="font-Dancing text-5xl mb-6">Welcome to REIS</h1>
      <div className="flex gap-5 border-b border-b-gray-100">
        <button
          className={cn(
            "pb-2 hover:text-primary-500",
            variant === "login"
              ? "border-b-4 border-b-primary-500 text-primary-600 font-bold"
              : ""
          )}
          onClick={() => setVariant("login")}
        >
          Sign in
        </button>
        <button
          className={cn(
            "pb-2 hover:text-primary-500",
            variant === "register"
              ? "border-b-4 border-b-primary-500 text-primary-600 font-bold"
              : ""
          )}
          onClick={() => setVariant("register")}
        >
          New Account
        </button>
      </div>
      <form
        className="mt-7 flex flex-col gap-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        {variant === "login" ? (
          <>
            <Input
              id="phone"
              label="Phone number"
              placeholder="Enter your phone number"
              disabled={isSubmitting || isLoading}
              errors={errors}
              validate={{
                required: "Phone number is required",
                pattern: {
                  value: /^[0-9]+$/,
                  message: "Phone number is invalid",
                },
              }}
              register={register}
            />
            <Input
              id="password"
              label="Password"
              type="password"
              placeholder="Enter your password"
              disabled={isSubmitting || isLoading}
              errors={errors}
              validate={{
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              }}
              register={register}
            />
            <Button
              className="mt-4"
              type="submit"
              disabled={isSubmitting || isLoading}
            >
              {isSubmitting ? <Loading /> : "Sign in"}
            </Button>
            <Link to="#" className="text-primary-500 hover:underline">
              Forgot password?
            </Link>
          </>
        ) : (
          <>
            <Input
              id="phone"
              label="Phone number"
              placeholder="Enter your phone number"
              disabled={isSubmitting || isLoading}
              errors={errors}
              validate={{
                required: "Phone number is required",
                pattern: {
                  value: /^[0-9]+$/,
                  message: "Phone number is invalid",
                },
              }}
              register={register}
            />
            <Input
              id="password"
              label="Password"
              type="password"
              placeholder="Enter your password"
              disabled={isSubmitting || isLoading}
              errors={errors}
              validate={{
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              }}
              register={register}
            />
            <Input
              id="name"
              label="Name"
              placeholder="Enter your name"
              disabled={isSubmitting || isLoading}
              errors={errors}
              validate={{
                required: "Name is required",
              }}
              register={register}
            />
            <Button
              className="mt-4"
              type="submit"
              disabled={isSubmitting || isLoading}
            >
              {isSubmitting ? <Loading /> : "Register"}
            </Button>
          </>
        )}
      </form>
    </div>
  );
};

export default Login;
