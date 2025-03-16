import ProductCard from "./productCard";
import product1 from "../assets/image/product1.jpg";
import product2 from "../assets/image/product2.jpg";
import product3 from "../assets/image/product3.jpg";

const products = [
  {
    id: 1,
    name: "Laptops",
    price: 99999,
    image: product1,
    desc: "Upgrade your work and entertainment with our powerful and sleek laptops! Designed for speed, efficiency, and portability, our laptops feature high-performance processors, stunning displays, and long-lasting batteries. Whether you're a student, a professional, or a gamer, these laptops provide the perfect balance of power and convenience. Get yours today and experience next-level performance!",
  },
  {
    id: 2,
    name: "Cameras",
    price: 49999,
    image: product2,
    desc: "Capture every moment in stunning detail with our high-quality cameras! Whether you're a photography enthusiast or a professional, our cameras deliver crisp, vibrant images and 4K video recording. With advanced autofocus, versatile lenses, and user-friendly controls, you’ll be able to create breathtaking content effortlessly. Don’t miss out—elevate your photography game now!",
  },
  {
    id: 3,
    name: "Phones",
    price: 129999,
    image: product3,
    desc: "Stay connected and ahead of the curve with our latest smartphones! Featuring cutting-edge technology, stunning displays, and powerful cameras, our phones are designed to keep up with your lifestyle. Enjoy seamless performance, ultra-fast charging, and next-gen connectivity for work, gaming, and entertainment. Upgrade today and experience the future in your hands!",
  },
];

export default function ProductList({ onSelect }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 p-7">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onSelect={onSelect} />
      ))}
    </div>
  );
}
