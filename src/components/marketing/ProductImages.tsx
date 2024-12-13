import { ProductImage } from "./product/ProductImage";
import { productImages } from "./product/productData";

const ProductImages = () => {
  return (
    <div className="grid grid-cols-2 gap-4 my-8">
      {productImages.map((image, index) => (
        <ProductImage key={image.src} {...image} index={index} />
      ))}
    </div>
  );
};

export default ProductImages;