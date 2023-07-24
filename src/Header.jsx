import { FaHandHolding } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import { TfiUser } from "react-icons/tfi";
import { PiShoppingCartSimpleBold } from "react-icons/pi";

export default function Header() {
  return (
    <div>
      <header className="flex-layout space-between center_vertical no-wrap-desktop header-middle bg-green-950">
        <nav>
          <div className="flex navbar-wrapper items-center h-20 text-white w-full">
            <div className="flex-initial w-14 logo">
              <a
                className="logo"
                href="https://www.fepy.com/"
                title=""
                aria-label="store logo"
              >
                <img
                  src="https://ik.imagekit.io/fepy/cdn/logo/stores/1/Logo-02.png"
                  title=""
                  alt=""
                />
              </a>
            </div>
            <div
              className="flex-initial ml-40 ..."
              style={{
                width: "50%",
                backgroundColor: "#daa520",
                borderRadius: "5px",
              }}
            >
              <div className="search">
                <div className="search-box">
                  <div className="search-field">
                    <input
                      placeholder="What are you looking for..."
                      className="input"
                      type="text"
                    />
                    <div className="search-box-icon">
                      <button className="btn-icon-content">
                        <i className="search-icon">
                          <svg
                            xmlns="://www.w3.org/2000/svg"
                            version="1.1"
                            viewBox="0 0 512 512"
                          >
                            <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"></path>
                          </svg>
                        </i>
                      </button>
                    </div>{" "}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-initial ml-3 hand-wrapper">
              <div className="flex p-5 ">
                <div className="p-1 hand-icon">
                  <FaHandHolding />
                </div>
                <div className="ml-1 flex">
                  <div className="hand-text">Services</div>
                  <div className="dropdown-arrow">
                    <p>
                      <RiArrowDropDownLine />
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-initial ml-1 mb-2">
              <div className="flex p-5 ">
                <div className="flex arbic-text">
                  <div className="">العربية</div>
                  <div className="dropdown-arrow">
                    <p>
                      <RiArrowDropDownLine />
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-initial ml-1 mb-2">
              <div className="flex p-5 ">
                <div className="flex w-50">
                  <div className="dropdown-arrow">
                    <p>
                      <TfiUser style={{ color: "white" }} />
                    </p>
                  </div>
                  <div className="ml-1 mt-1 sign-in-text">Sign In</div>
                </div>
              </div>
            </div>
            <div className="flex-initial ml-1 mb-2">
              <div className="flex p-5 ">
                <div className="flex">
                  <div className="dropdown-arrow">
                    <p>
                      <PiShoppingCartSimpleBold style={{ color: "white" }} />
                    </p>
                  </div>
                  <span className="zero">0</span>
                  <div className="ml-1 mt-1">Cart</div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
