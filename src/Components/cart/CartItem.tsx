

import type { Cart } from "@/Types";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "../ui/card";
import { Icons } from "../icons";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/Components/ui/form";
import { Input } from "@/Components/ui/input";

interface CartItemProps {
  item: Cart;
}

const quantitySchema = z.object({
  quantity: z.number().min(1),
});

export default function CartItem({ item }: CartItemProps) {
  const handleDelete = () => {
    // Handle delete logic here
    console.log(`Deleted item ${item.id}`);
  };

  const form = useForm<z.infer<typeof quantitySchema>>({
    resolver: zodResolver(quantitySchema),
    defaultValues: {
      quantity: 1,
    },
  });

  return (
    <Card className="overflow-hidden">
      <CardContent className="p-4 flex gap-2">
        <div className="relative aspect-square w-20 h-20">
          <img
            src={item.image.url}
            alt={item.name}
            className="w-full h-full object-cover rounded-md"
          />
        </div>
        <div className="flex flex-col gap-1 flex-grow">
          <h3 className="font-semibold text-base">{item.name}</h3>
          <p className="text-xs text-muted-foreground">{item.category}</p>
          <p className="font-bold text-base">${item.price.toFixed(2)}</p>
        </div>
      </CardContent>
      <CardFooter className="flex items-center justify-between">
        <Form {...form}>
          <form className="flex items-center">
            <Button
              type="button"
              variant="outline"
              size="icon"
              className="size-7 shrink-0 rounded-r-none"
              onClick={() =>
                form.setValue(
                  "quantity",
                  Math.max(1, form.getValues("quantity") - 1)
                )
              }
            >
              <Icons.minus className="size-3" />
            </Button>
            <FormField
              control={form.control}
              name="quantity"
              render={({ field }) => (
                <FormItem className="space-y-0">
                  <FormLabel className="sr-only">Quantity</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      inputMode="numeric"
                      min={1}
                      {...field}
                      className="h-7 w-10 rounded-none border-x-0 text-center"
                      onChange={(e) => {
                        const value = parseInt(e.target.value, 10);
                        if (isNaN(value) || value < 1) {
                          field.onChange(1);
                        } else {
                          field.onChange(value);
                        }
                      }}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <Button
              type="button"
              variant="outline"
              size="icon"
              className="size-7 shrink-0 rounded-l-none"
              onClick={() =>
                form.setValue("quantity", form.getValues("quantity") + 1)
              }
            >
              <Icons.plus className="size-3" />
            </Button>
          </form>
        </Form>
        <Button variant="ghost" size="icon" onClick={handleDelete}>
          <Icons.trash className="h-5 w-5 text-red-500" />
          <span className="sr-only">Delete item</span>
        </Button>
      </CardFooter>
    </Card>
  );
}
