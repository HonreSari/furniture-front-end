import  RegisterForm  from "@/Components/auth/Register-form";
import { Icons } from "@/Components/icons";
import { Link } from "react-router-dom";

export default function RegisterPage() {
  return (
    <div className="grid min-h-svh place-items-center p-6">
      <div className="w-full max-w-md">
        <div className="mb-4 flex justify-center gap-2 md:justify-start">
          <Link to="/" className="flex items-center gap-2 text-lg font-bold">
            <Icons.logo className="h-6 w-6" />
            Funiture Shop
          </Link>
        </div>
        <RegisterForm />
      </div>
    </div>
  );
}
