import { Link } from "react-router-dom";
import { Icons } from "@/Components/icons";
import type { Product } from "@/Types";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/Components/ui/card";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import { formatPrice , cn } from "@/lib/utils";
interface ProductProps  extends React.HTMLAttributes<HTMLDivElement> {
  product: Product;
}
export default function ProductCard({ product, className }: ProductProps) {
  return (
    <Card className={cn(`size-full overflow-hidden rounded-lg p-0`, className)}>  
      <Link to={`/products/${product.id}`}>
        <CardHeader className="m-0 border-none p-0">
          <AspectRatio ratio={1 / 1} className="bg-transparent">
            <img
              src={product.images[0]}
              alt={product.name}
              className="block h-full w-full object-cover align-top"
              loading="lazy"
            />
          </AspectRatio>
        </CardHeader>
        <CardContent className="space-y-1.5 p-4">
          <CardTitle className="line-clamp-1">{product.name}</CardTitle>
          <CardDescription className="line-clamp-1">
            {formatPrice(product.price)}
            {product.discount > 0 && (
              <span className="ml-2 font-extralight line-through">
                {product.discount}
              </span>
            )}
          </CardDescription>
        </CardContent>
      </Link>
      <CardFooter className="p-4 pt-2">
        {product.status === "sold" ? (
          <Button
            size="sm"
            disabled={true}
            className="h-8 w-full rounded-sm font-bold"
          >
            Sold Out
          </Button>
        ) : (
          <Button type="submit" className="w-full font-bold">
            <Icons.plus className="ml-2 h-4 font-bold w-4" />
            Add to Cart
          </Button> 
        )}
      </CardFooter>
    </Card>
  );
}
