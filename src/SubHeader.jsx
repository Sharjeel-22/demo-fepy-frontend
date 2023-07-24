import { BiSolidPurchaseTag } from "react-icons/bi";
import { RiArrowDropDownLine } from "react-icons/ri";
export default function SubHeader() {
  return (
    <div>
      <div className="sub-header-wrapper items-center">
        <div className="item-1 text-center">
            <span className="equal-content">☰</span> <span className="category">☰ All Categories</span>
        </div>
        <div className="item ml-4">
        <div className="flex p-1">
                <div className="p-1">
                  <BiSolidPurchaseTag />
                </div>
                <div className="ml-1 flex">
                  <div className="">Deals</div>
                  <div className="dropdown-arrow">
                    <p>
                      <RiArrowDropDownLine />
                    </p>
                  </div>
                </div>
              </div>
        </div>
        <div className="item pl-2 ml-4">Shop By Brands</div>
        <div className="item pl-2 ml-4">Building Materials</div>
        <div className="item pl-2 ml-4">Cement</div>
        <div className="item pl-2 ml-4">Block</div>
        <div className="item pl-2 ml-4">Paints</div>
        <div className="item pl-2 ml-4">Woods</div>
        <div className="item pl-2 ml-4">Adhesives</div>
        <div className="item pl-2 ml-4">Furniture</div>
        <div className="item pl-2 ml-4">Electrical & Lighting</div>
        <div className="item pl-2 ml-4">Construction Chemicals</div>
        <div className="ml-60">
        <a href="/request-a-quote" target="_blank"><img src="https://ik.imagekit.io/fepy/cdn//wysiwyg/Request-03.png" alt="" /></a>
        </div>
      </div>
    </div>
  );
}
