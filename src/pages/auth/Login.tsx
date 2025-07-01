import profile from "@/data/images/profile.jpg";
import { LoginForm } from "@/Components/auth/login-form";
import { Icons } from "@/Components/icons";

export default function LoginPage() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <a href="/" className="flex items-center gap-2 text-lg font-bold">
            <Icons.logo className="h-6 w-6" />
            Funiture Shop
          </a>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <LoginForm />
        </div>
      </div>
      <div className="bg-muted relative hidden lg:block">
        <img
          src={profile}
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.4] dark:grayscale"
        />
      </div>
    </div>
  );
}
