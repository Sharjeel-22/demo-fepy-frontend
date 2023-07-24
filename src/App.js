import "./App.css";
import Header from "./Header";
import SubHeader from "./SubHeader";
import CarouselFun from "./Carousal";
import FeaturedCategory from "./FeaturedCategories";

function App() {
  return (
    <div className="w-full">
      <Header />
      <SubHeader />
      <CarouselFun />
    </div>
  );
}

export default App;
