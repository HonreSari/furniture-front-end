import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Loader2Icon } from "lucide-react";
import { Button } from "@/components/ui/button";
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
  // Changed to email for better validation, as the placeholder suggests an email.
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
});

export function ProfileForm() {
  const [loading, setLoading] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "", // Updated default value key
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    setLoading(true);
    // Simulate an API call and reset the form
    setTimeout(() => {
      setLoading(false);
      form.reset(); // Reset the form fields to their default values
      console.log("Form submitted and reset!");
    }, 2000);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid pr-8 lg:pr-0"
        autoComplete="off" // Add autoComplete="off" to the form as well
      >
        <FormField
          control={form.control}
          name="email" // Updated field name
          render={({ field }) => (
            <FormItem>
              {/* Corrected a typo: "setter" to "newsletter" */}
              <FormLabel className="text-xl lg:text-2xl font-semibold">
                Subscribe to our newsletter
              </FormLabel>
              <div className="flex items-start gap-2">
                <div className="w-full">
                  <FormControl>
                    {/* Corrected autoComplete value from "false" to "off" */}
                    <Input
                      autoComplete="off"
                      placeholder="example@gmail.com"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="mt-2" />
                </div>
                <Button
                  type="submit"
                  size="icon" // Use size="icon" for a square button
                  variant="outline"
                  disabled={loading} // Disable button while loading
                >
                  {loading ? (
                    <Loader2Icon className="h-4 w-4 animate-spin" />
                  ) : (
                    <Icons.send className="h-4 w-4" />
                  )}
                  <span className="sr-only">Subscribe</span>
                </Button>
              </div>
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}