  export interface NavItem {
  title: string;
  href?: string;
  description?: string;
}

export interface NavItemWithChildren extends NavItem {
  card?: NavItemWithChildren[];
  menu?: NavItemWithChildren[];
}

// export type Image = {
//   id: string;
//   path: string
// }

export type MainNavItem = NavItemWithChildren;

export type Product = {
  id: string;
  name: string;
  description: string;
  images: string[];
  categoryId: string;
  price: number;
  discount: number;
  rating: number;
  inventory: number;
  status: string;
};

export type Post = {
  id: string;
  author: string;
  title: string;
  content: string;
  image: string[];
  body: string;
  updated_at: string;
  tags: string[];
};

export type Category = {
  id: string;
  label : string;
}

export type User = {
  id: string;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  imageUrl: string;
};

export type Cart = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  // image: string;
  image: {
    id: string;
    name: string;
    url: string;
  };
  category: string;
  subcategory: string;
};