import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/Components/ui/input";
// import { Label } from "@/Components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/Components/ui/card";
import { Link, useSubmit } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/Components/ui/form";
import { PasswordInput } from "./Password-input";

const FormSchema = z.object({
  phone: z
    .string()
    .min(7, "Phone number must be at least 7 digits.")
    .max(15, "Phone number must be at most 15 digits.")
    .regex(/^\d+$/, { message: "Phone number must contain only digits." }),
  password: z.string().min(8, "Password must be at least 8 characters."),
});

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const submit = useSubmit();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      phone: "",
      password: "",
    },
  });
  const onSubmit = (values: z.infer<typeof FormSchema>) => {
    // console.log(values);
    submit(values, { method: "POST", action: "/login" });
  };

  return (
    <Card className={cn("w-full max-w-sm", className)} {...props}>
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold">
          Login to your account
        </CardTitle>
        <CardDescription>
          Enter your phone number below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4"
            autoComplete="off"
          >
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="phone">Phone</FormLabel>
                  <Input
                    type="tel"
                    placeholder="09xxxxxxxxx"
                    required
                    inputMode="numeric"
                    pattern="[0-9]*"
                    {...field}
                  />
                  <FormControl></FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <div className="">
                    <FormLabel htmlFor="password">
                      Password
                      <Link
                        to="#"
                        className="text-muted-foreground ml-auto inline-block text-sm underline-offset-4 hover:underline"
                      >
                        Forgot your password?
                      </Link>
                    </FormLabel>
                  </div>
                  <PasswordInput
                    required
                    placeholder="******"
                    inputMode="numeric"
                    {...field}
                  />
                  <FormControl></FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full">
              Login
            </Button>
            <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
              <span className="text-muted-foreground relative z-10 px-2">
                Or continue with
              </span>
            </div>
            <Button variant="outline" className="w-full">
              <svg
                width="800px"
                height="800px"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
              >
                <path
                  fill="#4285F4"
                  d="M14.9 8.161c0-.476-.039-.954-.121-1.422h-6.64v2.695h3.802a3.24 3.24 0 01-1.407 2.127v1.75h2.269c1.332-1.22 2.097-3.02 2.097-5.15z"
                />
                <path
                  fill="#34A853"
                  d="M8.14 15c1.898 0 3.499-.62 4.665-1.69l-2.268-1.749c-.631.427-1.446.669-2.395.669-1.836 0-3.393-1.232-3.952-2.888H1.85v1.803A7.044 7.044 0 008.14 15z"
                />
                <path
                  fill="#FBBC04"
                  d="M4.187 9.342a4.17 4.17 0 010-2.68V4.859H1.849a6.97 6.97 0 000 6.286l2.338-1.803z"
                />
                <path
                  fill="#EA4335"
                  d="M8.14 3.77a3.837 3.837 0 012.7 1.05l2.01-1.999a6.786 6.786 0 00-4.71-1.82 7.042 7.042 0 00-6.29 3.858L4.186 6.66c.556-1.658 2.116-2.89 3.952-2.89z"
                />
              </svg>
              Login with Google
            </Button>
          </form>
        </Form>
      </CardContent>
      <CardFooter>
        <div className="ml-12 justify-center text-center text-sm">
          Don&apos;t have an account?{" "}
          <a href="/register" className="underline underline-offset-4">
            Sign up
          </a>
        </div>
      </CardFooter>
    </Card>
  );
}
// function setLoading(arg0: boolean) {
//   throw new Error("Function not implemented.");
// }
