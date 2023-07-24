import FeaturedCategoryCarousel from "./FeaturedCategoryCarousel";
import { Sidebar } from "./Sidebar";

export default function FeaturedCategory() {
  return (
    <>
    <div className="featured-category-wrapper w-full mt-6">
      <h1 className="featured-category-title">Featured Categories</h1>
      {/* <Sidebar/> */}
      <div className="featured-category-carousel">
        <FeaturedCategoryCarousel />
      </div>
    </div>
    </>
  );
}
