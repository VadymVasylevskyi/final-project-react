import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";

const useFilteredProducts = (products, sortType) => {
  const [searchParams] = useSearchParams();

  const filteredProducts = useMemo(() => {
    const minPrice = parseFloat(searchParams.get("minPrice")) || 0;
    const maxPrice = parseFloat(searchParams.get("maxPrice")) || Infinity;
    const includeDiscount = searchParams.get("includeDiscount") === "true";

    return products
      .filter((product) => {
        const productPrice = product.discont_price || product.price;

        if (productPrice < minPrice || productPrice > maxPrice) {
          return false;
        }

        if (includeDiscount && !product.discont_price) {
          return false;
        }

        return true;
      })
      .sort((a, b) => {
        if (sortType === "newest") {
          return new Date(b.createdAt) - new Date(a.createdAt);
        }
        if (sortType === "priceHighToLow") {
          return (b.discont_price || b.price) - (a.discont_price || a.price);
        }
        if (sortType === "priceLowToHigh") {
          return (a.discont_price || a.price) - (b.discont_price || b.price);
        }
        if (sortType === "discountPriceHighToLow") {
          return (b.discont_price || b.price) - (a.discont_price || a.price);
        }
        return 0;
      });
  }, [products, searchParams, sortType]);

  return filteredProducts;
};

export default useFilteredProducts;