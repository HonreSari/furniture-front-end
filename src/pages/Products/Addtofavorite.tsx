import { Button, type ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Icons } from "@/Components/icons";
import { useState, useEffect } from "react";
import { isProductFavorite, toggleFavorite } from "@/data/favorites";

interface FavoriteProps extends ButtonProps {
  productId: string;
  rating: number;
}

export default function Addtofavorite({
  productId,
  // rating,
  className,
  ...props
}: FavoriteProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    setIsFavorite(isProductFavorite(productId));
  }, [productId]);

  const handleToggleFavorite = () => {
    toggleFavorite(productId);
    setIsFavorite(!isFavorite);
  };

  return (
    <Button
      variant={isFavorite ? "default" : "secondary"}
      size="icon"
      className={cn("size-8 shrink-0", className)}
      onClick={handleToggleFavorite}
      {...props}
    >
      
      <Icons.heart className={cn("size-4", isFavorite && "fill-accent text-red-500 bg-accent-foreground")} />
    </Button>
  );
}
