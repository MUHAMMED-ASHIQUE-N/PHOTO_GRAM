import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Icons } from "@/components/ui/icons";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useUserAuth } from "@/context/userAuthContext";
import type { UserSignIn } from "@/types";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const initialValue: UserSignIn = {
  email: "",
  password: "",
};

const SignUp: React.FC<ISignUpProps> = () => {
  const { signUp,googleSignIn } = useUserAuth();
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState<UserSignIn>(initialValue);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      console.log("user Details", userInfo.email, userInfo.password);
      await signUp(userInfo.email, userInfo.password);
      navigate("/");
    } catch (error) {
           console.log( "Erorr: ",error);
           console.error(error);
           
    }
  };
  const handleGoogleSignIn = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();

    try {
    
      await googleSignIn();
      navigate("/");
    } catch (error) {
      console.log( "Erorr: ",error);
           console.error(error);

    }
  };

  return (
    <div className="h-screen w-full flex items-center justify-center bg-gray-900">
      <div className="mx-auto w-full max-w-sm px-4">
        <Card className="rounded-lg shadow-lg bg-white dark:bg-gray-900">
          <form onSubmit={handleSubmit} autoComplete="off">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl text-center">Addict </CardTitle>
              <CardDescription className="text-center">
                Enter your email below to create your account
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="grid mt-2">
                <Button
                onClick={handleGoogleSignIn}
                  variant="outline"
                  type="button"
                  aria-label="Sign up with Google"
                >
                  <Icons.google className="mr-2 h-4 w-4" aria-hidden="true" />
                  Google
                </Button>
              </div>
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-white dark:bg-gray-900 px-2 text-muted-foreground">
                    Or continue with
                  </span>
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="m@example.com"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setUserInfo({ ...userInfo, email: e.target.value })
                  }
                  required
                />
                {/* Display error message here if needed */}
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setUserInfo({ ...userInfo, password: e.target.value })
                  }
                  required
                />
                {/* Display password requirements or error */}
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full mt-5" type="submit">
                Create account
              </Button>
            </CardFooter>
            <div className="text-center text-sm mt-4">
              Already have an account?{" "}
              <a href="/login" className="text-blue-500 hover:underline">
                Log in
              </a>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default SignUp;
