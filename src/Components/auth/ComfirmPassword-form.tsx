import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  useNavigation,
  useActionData,
  useSubmit,
  Link,
} from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/Components/ui/input";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/Components/ui/form";
import { Icons } from "../icons";

// Schema: password နှစ်ခုတူ/မတူ refine
const FormSchema = z
  .object({
    password: z
      .string()
      .min(8, "Password must be at least 8 characters.")
      .regex(/^\d+$/, "Password must be numbers"),
    confirmPassword: z
      .string()
      .min(8, "Password must be at least 8 characters.")
      .regex(/^\d+$/, "Password must be numbers"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password နှစ်ခုမတူပါ! ပြန်စစ်ပါ။",
    path: ["confirmPassword"],
  });

export function ComfirmPasswordForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const submit = useSubmit();
  const navigation = useNavigation();
  const actionData = useActionData() as {
    error?: string;
    message?: string;
  };

  const isSubmitting = navigation.state === "submitting";
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
    mode: "onTouched",
  });

  const onSubmit = (values: z.infer<typeof FormSchema>) => {
    submit(values, { method: "post", action: "register/confirm-password" });
    // form.reset(); // Success ဖြစ်ရင် reset လုပ်ချင်ရင် ဒီလိုသုံးနိုင်
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <div className="flex flex-col items-center gap-2">
        <Link to="#" className="flex flex-col items-center gap-2 font-medium">
          <div className="flex size-8 items-center justify-center rounded-md">
            <Icons.logo className="h-6 w-6" aria-hidden="true" />
          </div>
          <span className="sr-only">Furniture Shop Inc.</span>
        </Link>
        <h1 className="text-xl font-bold">Confirm Your Password.</h1>
      </div>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4"
        autoComplete="off"
      >
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="password">Password</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  autoComplete="new-password"
                  placeholder="********"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="confirmPassword">Confirm Password</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  autoComplete="new-password"
                  placeholder="********"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {actionData?.error && (
          <div className="flex gap-2">
            <p className="text-xs text-red-500">{actionData?.message}</p>
            <Link
              to="/register"
              className="text-xs underline underline-offset-4"
            >
              {" "}
              Go Back{" "}
            </Link>
          </div>
        )}
        {actionData?.message && (
          <div className="text-xs text-green-600">{actionData.message}</div>
        )}
        <Button type="submit" className="mt-2.5 w-full" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Confirm Password"}
        </Button>
      </form>
      <div className="text-muted-foreground *:[a]:hover:text-primary mt-2 text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
        By clicking continue, you agree to our{" "}
        <Link to="#">Terms of Service</Link> and{" "}
        <Link to="#">Privacy Policy</Link>.
      </div>
    </div>
  );
}
