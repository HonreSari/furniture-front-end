// import { LoginForm } from "@/Components/login-form"
import { ComfirmPasswordForm } from "@/Components/auth/ComfirmPassword-form"

export default function ComfirmPasswordPage() {
  return (
    <div className="bg-background flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="w-full max-w-sm">
        <ComfirmPasswordForm  />
      </div>
    </div>
  )
}