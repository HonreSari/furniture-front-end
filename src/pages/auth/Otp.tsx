// import { LoginForm } from "@/Components/login-form"
import { InputOTPForm } from "@/Components/auth/OtpForm"

export default function OtpPage() {
  return (
    <div className="bg-background flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="w-full max-w-sm">
        <InputOTPForm  />
      </div>
    </div>
  )
}