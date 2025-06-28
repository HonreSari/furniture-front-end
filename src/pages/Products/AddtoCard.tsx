import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/Components/ui/form";
import { Input } from "@/Components/ui/input";
import { Icons } from "@/Components/icons";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
const quantitySchema = z.object({
  quantity: z.number().min(0),
});
interface ShowByNowProps {
  canBuy: boolean;
}

export function AddToCardForm({ canBuy }: ShowByNowProps) {
  // ...  // 1. Define your form.
  const form = useForm<z.infer<typeof quantitySchema>>({
    resolver: zodResolver(quantitySchema),
    defaultValues: {
      quantity: 1,
    },
  });
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof quantitySchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    //*Call api
    toast.success("Product is add to cart successfully.");
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="max-[260px] flex flex-col gap-4"
      >
        <div className="flex items-center">
          <Button
            type="button"
            variant="outline"
            size="icon"
            className="size-8 shrink-0 rounded-r-none"
          >
            <Icons.minus className="size-3" />
          </Button>
          <FormField
            control={form.control}
            name="quantity"
            render={({ field }) => (
              <FormItem className="space-y-0">
                <FormLabel className="sr-only">Quantity</FormLabel>
                <FormControl >
                  <Input type="number" inputMode="numeric" min={0} {...field} className="h-8 w-16 rounded-none border-x-0" />
                </FormControl>
              </FormItem>
            )}
          />
          <Button
            type="button"
            variant="outline"
            size="icon"
            className="size-8 shrink-0 rounded-l-none"
          >
            <Icons.plus className="size-3" />
          </Button>
        </div>
        <div className="flex items-center space-x-2.5">
          <Button
            type="button"
            size="sm"
            className={cn("font-bold", !canBuy && "bg-slate-400 p-4 ")}
          >
            Buy Now
          </Button>
          <Button
            type="submit"
            size="sm"
            variant={canBuy ? "outline" : "default"}
            className="font-semibold p-4"
          >
            Add to Cart
          </Button>
        </div>
      </form>
    </Form>
  );
}
