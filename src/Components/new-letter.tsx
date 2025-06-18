import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Loader2Icon } from "lucide-react";
import { Button } from "@/Components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/Components/ui/form";
import { Input } from "@/Components/ui/input";
import { Icons } from "@/Components/icons";
import { useState } from "react";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

export function ProfileForm() {
  // ...  // 1. Define your form.
  const [loading, setLoading] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    setLoading(true);
    //*Call api
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid pr-8 lg:pr-0"
      >
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem >
              <FormLabel className="text-xl lg:text-2xl  font-semibold">Suscribe to our new setter</FormLabel>
              <div className="flex gap-2">
                <FormControl>
                  <Input placeholder="Example@gmail.com" {...field} />
                </FormControl>
                <Button
                  type="submit"
                  className="size-8"
                  variant="outline"
                  aria-hidden="true"
                >
                  {loading ? (
                    <Loader2Icon className="animate-spin" />
                  ) : (
                    <Icons.send />
                  )}
                </Button>
                <FormMessage />
              </div>
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
