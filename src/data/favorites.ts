let favoriteProductIds: string[] = [];

export const getFavoriteProductIds = () => [...favoriteProductIds];

export const isProductFavorite = (productId: string) => {
  return favoriteProductIds.includes(productId);
};

export const toggleFavorite = (productId: string) => {
  if (isProductFavorite(productId)) {
    favoriteProductIds = favoriteProductIds.filter((id) => id !== productId);
  } else {
    favoriteProductIds.push(productId);
  }
  console.log("Favorites:", favoriteProductIds); // For debugging
};
