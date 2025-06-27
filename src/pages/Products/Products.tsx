// import type { Category } from "@/Types";
import { products, filterList } from "@/data/products";
import ProductCard from "@/Components/products/ProductCard";
import {ProductsFilter} from "@/pages/Products/ProductsFilter";
import { PaginationDemo } from "./Pagination";
export default function Products() {
  return (
    <div className="container mx-auto">
      <section className="flex flex-col gap-4 lg:flex-row">
        <section className="my-8 ml-4 w-full lg:w-1/5 ">
          <ProductsFilter filterList={filterList} />
        </section>
        <section className="w-full lg:ml-0 lg:w-4/5">
          <h1 className="my-8 ml-4 text-2xl font-bold"> All Products </h1>
          <div className="mb-12 grid grid-cols-1 gap-4 gap-y-12  sm:grid-cols-1 md:grid-cols-2 md:px-0 lg:grid-cols-3">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <PaginationDemo />
        </section>
      </section>
    </div>
  );
}
