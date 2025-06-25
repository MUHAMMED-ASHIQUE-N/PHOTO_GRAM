import React, { useState } from "react";
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
import type { UserLogIn } from "@/types";
import { useNavigate } from "react-router-dom";
import image1 from "@/assets/images/image_four.jpg";
import image2 from "@/assets/images/image_one.jpg";
import image3 from "@/assets/images/image_three.jpg";
import image4 from "@/assets/images/image5.jpg";

interface ILoginProps {}

const initialValue: UserLogIn = {
  email: "",
  password: "",
};

const Login: React.FC<ILoginProps> = () => {
  const { logIn,googleSignIn } = useUserAuth();
  const navigate = useNavigate();
  const [userLoginInfo, setUserLoginInfo] = useState<UserLogIn>(initialValue);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      console.log("user Details", userLoginInfo.email, userLoginInfo.password);
      await logIn(userLoginInfo.email, userLoginInfo.password);
      navigate("/");
    } catch (error) {
      console.log(error);
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
   <div className="bg-slate-900 w-full h-screen">
  <div className="container mx-auto p-6 flex h-full">
    <div className="flex flex-col md:flex-row justify-center items-center w-full">
      {/* Image collage on large screens */}
      <div className="md:p-20 md:w-2/3 w-full mb-10 md:mb-0">
        <div className="grid grid-cols-2 gap-1">
          <img
            src={image1}
            alt="Showcase image 1"
            className="w-2/3 h-auto aspect-video rounded-3xl place-self-end shadow-lg"
          />
          <img
            src={image2}
            alt="Showcase image 2"
            className="w-2/4 h-auto aspect-auto rounded-3xl shadow-lg"
          />
          <img
            src={image4}
            alt="Showcase image 4"
            className="w-2/4 h-auto aspect-auto rounded-3xl place-self-end shadow-lg"
          />
          <img
            src={image3}
            alt="Showcase image 3"
            className="w-2/3 h-auto aspect-video rounded-3xl shadow-lg"
          />
        </div>
      </div>
      {/* Login form */}
      <div className="rounded-xl border bg-card text-card-foreground shadow-lg w-full max-w-sm">
        <Card>
          <form onSubmit={handleSubmit} >
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl text-center">Addict</CardTitle>
              <CardDescription className="text-center">
                Enter your email below to login to your account
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="grid mt-2">
                <Button
                onClick={handleGoogleSignIn}

                  variant="outline"
                  type="button"
                  aria-label="Sign up with Google"
                  className="transition-all duration-200 hover:shadow"
                >
                  <Icons.google
                    className="mr-2 h-4 w-4"
                    aria-hidden="true"
                  />
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
                    setUserLoginInfo({
                      ...userLoginInfo,
                      email: e.target.value,
                    })
                  }
                  required
                  className="focus:ring-2 focus:ring-blue-500"
                />
                {/* Error message here */}
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setUserLoginInfo({
                      ...userLoginInfo,
                      password: e.target.value,
                    })
                  }
                  required
                  className="focus:ring-2 focus:ring-blue-500"
                />
                {/* Error message here */}
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full mt-5" type="submit">
                Login
              </Button>
            </CardFooter>
            <div className="text-center text-sm mt-4">
              Don't have an account?{' '}
              <a href="/signup" className="text-blue-500 hover:underline">
                SignUp
              </a>
            </div>
          </form>
        </Card>
      </div>
    </div>
  </div>
</div>
  );
};

export default Login;
