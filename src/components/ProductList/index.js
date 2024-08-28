import { productList } from "../../data/product";
import ProductItem from "./ProductItem";

function ProductList() {
  return (
    <>
      <div className="product__list">
        {productList.map((item) => {
          return (
            <ProductItem item={item} key={item.id} />
          );
        })};

      </div>
    </>
  );
}

export default ProductList;