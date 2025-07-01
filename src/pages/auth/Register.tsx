import { RegisterForm } from "@/Components/auth/register-form";
import { Icons } from "@/Components/icons";

export default function RegisterPage() {
  return (
    <div className="grid min-h-svh place-items-center p-6">
      <div className="w-full max-w-md">
        <div className="flex justify-center gap-2 md:justify-start mb-4">
          <a href="/" className="flex items-center gap-2 font-bold text-lg ">
            <Icons.logo className="h-6 w-6" />
            Funiture Shop
          </a>
        </div>
        <RegisterForm />
      </div>
    </div>
  );
}
