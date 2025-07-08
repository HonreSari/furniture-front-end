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
            autoComplete="off" // This is good to have on the form
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
                    autoComplete="off" // Explicitly turning off autocomplete here
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
                    // You had inputMode="numeric" here, which might not be what you want for a password.
                    // Passwords often contain more than just numbers. I've removed it, but you can add it back if needed.
                    autoComplete="new-password" // Using "new-password" is a common trick to prevent autofill
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
              <svg /* SVG code remains the same */ >
                {/* ... */}
              </svg>
              Login with Google
            </Button>
          </form>
        </Form>
      </CardContent>
      <CardFooter>
        <div className="ml-12 justify-center text-center text-sm">
          Don&apos;t have an account?{" "}
          <Link to="/register" className="underline underline-offset-4">
            Sign up
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
}