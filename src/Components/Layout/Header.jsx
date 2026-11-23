import { useContext, useState } from "react";
import { useSearchParams, useLocation, useParams } from "react-router-dom";
import { OrderContext } from "../../Context/OrderContext";
import { LayoutContext } from "../../Context/LayoutContext";
import { ThemeContext } from "../../Context/ThemeContext";
import "../../Styles/header.scss";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdKeyboardArrowDown, MdDarkMode, MdLightMode } from "react-icons/md";
import { IoLanguageSharp } from "react-icons/io5";
import UserProfile from "../UserProfile";
import { headerIcons, languages } from "../../Data/headerData";

function Header({ pageTitle, subPage }) {
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  const { theme, toggleTheme } = useContext(ThemeContext);

  const [searchParams] = useSearchParams();
  const { id } = useParams();
  const location = useLocation();

  const { filteredOrderData, orderData } = useContext(OrderContext);

  const { isSidebarCollapsed, handleSideBar } = useContext(LayoutContext);

  const customerId = searchParams.get("customerId") || id;

  const isIdentityPage = location.pathname.startsWith("/identity");

  const isMobileView = window.innerWidth <= 768;

  let customer;

  if (isIdentityPage) {
    customer = orderData.find(
      (item) => Number(item.id) === Number(id)
    );
  } else if (customerId) {
    customer = orderData.find(
      (item) => Number(item.customerId) === Number(customerId)
    );
  }

  function handleIconClick(id) {
    if (id === 2) {
      toggleTheme();
    }
  }

  function toggleLanguageDropdown() {
    setIsLanguageOpen((prev) => !prev);
  }

  return (
    <>
      <header className="header-content">

        <div className="header-left">

          <div className="hamburger-wrapper">
            <GiHamburgerMenu
              size={20}
              onClick={handleSideBar}
              className={
                isMobileView
                  ? "clock-wise"
                  : isSidebarCollapsed
                    ? "clock-wise"
                    : "anti-clock-wise"
              }
            />

            <span className="left-tooltip">
              {isMobileView
                ? "open menu"
                : isSidebarCollapsed
                  ? "open menu"
                  : "close menu"}
            </span>
          </div>

          <div className="page-title">
            {isIdentityPage && customer ? (
              <div className="header-customer">
                <img
                  src={customer.avatar}
                  alt={`${customer.firstName} ${customer.lastName}`}
                  width="24px"
                />

                <h5>
                  {customer.firstName} {customer.lastName}
                </h5>
              </div>
            ) : (
              <>
                {pageTitle && <h3>{pageTitle}</h3>}
              </>
            )}
          </div>

        </div>

        <div className="header-center">
          <h1>~POSTERS GALORE~</h1>
        </div>

        <div className="header-right">

          <div
            className="header-action languages"
            onClick={toggleLanguageDropdown}>
            <IoLanguageSharp size={20}/>
            ENGLISH
            <MdKeyboardArrowDown size={20}/>

              {isLanguageOpen && (
            <div className="dropdown">
              {languages.map((item, index) => (
                <p key={index} className="header-para">{item}</p>
              ))}
            </div>
          )}
          </div>

          {headerIcons.map((item) => (
            <div className="icon-container" key={item.id}>

              <button
                className="header-btn"
                type="button"
                key={item.id}
                title={item.tooltip}
                onClick={() => handleIconClick(item.id)}
              >
                {item.id === 2
                  ? theme === "light"
                    ? <MdDarkMode size={24} />
                    : <MdLightMode size={24}/>
                  : item.icon}
              </button>

              <span className="right-tooltip">
                {item.tooltip}
              </span>

            </div>
          ))}

          <div className="profile">
            <UserProfile />
          </div>

        </div>
      </header>
    </>
  );
}

export default Header;
