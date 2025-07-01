import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Separator } from "@/Components/ui/separator";
import { cartItems } from "@/data/carts";
import { ScrollArea } from "@/Components/ui/scroll-area";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/Components/ui/sheet";
import { Icons } from "@/Components/icons";
import { Badge } from "../ui/badge";
import CartItem from "../cart/CartItem";
import { formatPrice } from "@/lib/utils";
export function CartSheet() {
  const itemCount = 4;
    const amountTotal = 190;
  return (
       <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="relative"
          aria-label="Open Cart"
        >
          <Icons.cart className="size-4" aria-hidden="true" />
          <Badge
            variant="destructive"
            className="absolute -top-2 -right-3 size-6 items-center justify-center rounded-full p-2.5"
          >
            {itemCount}
          </Badge>
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full p-2 md:max-w-lg"> {/* Reduced p-4 to p-2 */}
        <SheetHeader>
          <SheetTitle className="text-xl text-center">Cart - {itemCount}</SheetTitle>
        </SheetHeader>
        <Separator className="my-1" /> {/* Reduced my-2 to my-1 */}
        {cartItems.length > 0 ? (
          <>
            <ScrollArea className="my-2 h-[70vh] pb-2"> {/* Reduced my-4 and pb-8 */}
              <div className="flex-1 space-y-2"> {/* Added space-y-2 for tighter gap */}
                {cartItems.map((cart) => (
                  <CartItem key={cart.id} item={cart} />
                ))}
              </div>
            </ScrollArea>
            <div className="space-y-1.5"> {/* Reduced space-y-1.5 */}
              <Separator /> {/* Reduced my-2 */}
              <div className="space-y-1 text-sm">
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
                <div className="flex justify-between">
                  <span>Taxes</span>
                  <span>Calculated at Checkout</span>
                </div>
                <div className="flex justify-between font-semibold">
                  <span>Total</span>
                  <span>{formatPrice(amountTotal.toFixed(2))}</span>
                </div>
              </div>
            </div>
            <SheetFooter> {/* Added mt-2 for small space above footer */}
              <SheetClose asChild>
                <Button type="submit" asChild>
                  <Link to="/checkout">
                    Check out
                    <Icons.checkout className="size-4" aria-hidden="true" />
                  </Link>
                </Button>
              </SheetClose>
            </SheetFooter>
          </>
        ) : (
          <div className="flex h-full flex-col items-center justify-center space-y-4">
            <Icons.cart className="text-muted-foreground mb-4 size-16" />
            <div className="text-xl font-light">Your cart is empty</div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
