import { useState, useEffect } from "react";
import logo from "../../assets/logo.svg"; // adjust path if needed
import whiteLogo from "../../assets/image.png";
import {Link, useNavigate, useLocation } from "react-router-dom";
import LanguageSwitcher from "./langswitcher";
import { useTranslation } from "react-i18next";
export default function LandingNAV() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const {t} = useTranslation();
  const navigate = useNavigate();
const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

const scrollToSection = (id) => {
  // If already on landing page → scroll directly
  if (location.pathname === "/") {
    const el = document.getElementById(id);
    if (!el) return;

    const yOffset = -90;
    const y =
      el.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
    return;
  }

  // If NOT on landing page → navigate first
  sessionStorage.setItem("scrollTarget", id);
  navigate("/");
};


  return (
<div
  className={`ud-header fixed start-0 top-0 z-40 flex w-full items-center transition-all duration-300 ${
    scrolled ? "bg-white/80 backdrop-blur-sm shadow-md" : "bg-transparent py-2"
  }`}
>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
        <div className="w-40 lg:w-48">
        <button
        onClick={() => (scrollToSection("home"))} className="navbar-logo block w-full ">
            <img
            src={scrolled ? logo : whiteLogo}
            alt="logo"
            className="header-logo w-full transition-opacity duration-300"
            />
        </button>
        </div>

          {/* Mobile Toggler */}
{/* Mobile Actions (Language + Menu) */}
<div className="flex items-center gap-2 lg:hidden">
  {/* Language Switcher (Mobile) */}
  <LanguageSwitcher light={!scrolled} />

  {/* Mobile Toggler */}
  <button
    onClick={() => setMenuOpen(!menuOpen)}
    className={`rounded-lg px-3 py-[6px] ring-[#5fb875] focus:ring-2 transition-colors ${
      scrolled ? "text-black" : "text-white"
    }`}
  >
    <span
      className={`relative my-[6px] block h-[2px] w-[30px] ${
        scrolled ? "bg-[#5fb875]" : "bg-white"
      }`}
    />
    <span
      className={`relative my-[6px] block h-[2px] w-[30px] ${
        scrolled ? "bg-[#5fb875]" : "bg-white"
      }`}
    />
    <span
      className={`relative my-[6px] block h-[2px] w-[30px] ${
        scrolled ? "bg-[#5fb875]" : "bg-white"
      }`}
    />
  </button>
</div>


          {/* Navigation - Centered */}
          <nav
            className={`absolute start-0 top-full w-full bg-white py-5 shadow-lg dark:bg-dark-2
            lg:static lg:flex lg:flex-1 lg:justify-center lg:bg-transparent lg:py-0 lg:shadow-none dark:lg:bg-transparent
            ${menuOpen ? "block" : "hidden"} lg:flex`}
          >
            <ul className="block lg:flex lg:items-center lg:gap-2">
{[
  [t("navbar.home"), "home"],
  [t("navbar.features"), "features"],
  [t("navbar.about"), "about"],
  [t("navbar.pricing"), "pricing"],
  [t("navbar.contact"), "contact"],
].map(([label, id]) => (
  <li key={label}>
    <button
      onClick={() => {
        scrollToSection(id);
        setMenuOpen(false);
      }}
      className={`block w-full px-4 py-2 text-base font-medium hover:text-[#5fb875]
                        dark:text-white lg:px-3 lg:py-6
                        transition-colors ${
                          scrolled ? "text-dark" : "text-dark lg:text-white"
                        }`}
    >
      {label}
    </button>
  </li>
))}

              {/* Modules Dropdown */}
<li className="submenu-item group relative">
  <button
    onClick={(e) => {
      e.preventDefault();
      setSubmenuOpen(!submenuOpen);
    }}
    className={`flex w-full items-center justify-between px-4 py-2 text-base font-medium
    hover:text-[#5fb875] dark:text-white lg:px-3 lg:py-6
    transition-colors ${
      scrolled ? "text-dark" : "text-dark lg:text-white"
    }`}
  >
    {t("navbar.modules")}
    <svg
      className={`ms-2 fill-current transition-transform ${submenuOpen ? 'rotate-180' : ''}`}
      width="16"
      height="20"
      viewBox="0 0 16 20"
    >
      <path d="M7.99999 14.9L1.85 9.1c-.225-.225-.225-.575 0-.8s.575-.225.8 0L8 13.525l5.35-5.275c.225-.225.575-.225.8 0s.225.575 0 .8L8.4 14.7c-.125.125-.25.2-.4.2z" />
    </svg>
  </button>

  <div
    className={`
      w-full rounded-lg bg-white/95 dark:bg-dark-2/95 mt-2 overflow-hidden
      transition-all duration-300
      ${submenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
      
      lg:absolute lg:start-0 lg:top-full lg:w-[240px] lg:mt-0
      lg:invisible lg:opacity-0 lg:max-h-none
      lg:group-hover:visible lg:group-hover:opacity-100
      lg:shadow-xl lg:border lg:border-gray-100 lg:dark:border-dark-3
      lg:bg-white lg:dark:bg-dark-2
    `}
  >
    <div className="py-2">
      <Link
        to="/appointments"
        onClick={() => {
          setSubmenuOpen(false);
          setMenuOpen(false);
        }}
        className="block px-4 py-2.5 text-sm text-body-color hover:bg-gray-50 dark:hover:bg-dark-3 hover:text-[#5fb875] dark:text-dark-6 dark:hover:text-[#5fb875] transition-colors duration-200"
      >
        {t("navbar.modules_items.appointments")}
      </Link>
      
      <Link
        to="/patients"
        onClick={() => {
          setSubmenuOpen(false);
          setMenuOpen(false);
        }}
        className="block px-4 py-2.5 text-sm text-body-color hover:bg-gray-50 dark:hover:bg-dark-3 hover:text-[#5fb875] dark:text-dark-6 dark:hover:text-[#5fb875] transition-colors duration-200"
      >
        {t("navbar.modules_items.patients")}
      </Link>
      
      <Link
        to="/financial"
        onClick={() => {
          setSubmenuOpen(false);
          setMenuOpen(false);
        }}
        className="block px-4 py-2.5 text-sm text-body-color hover:bg-gray-50 dark:hover:bg-dark-3 hover:text-[#5fb875] dark:text-dark-6 dark:hover:text-[#5fb875] transition-colors duration-200"
      >
        {t("navbar.modules_items.financial")}
      </Link>
      
      <Link
        to="/insights"
        onClick={() => {
          setSubmenuOpen(false);
          setMenuOpen(false);
        }}
        className="block px-4 py-2.5 text-sm text-body-color hover:bg-gray-50 dark:hover:bg-dark-3 hover:text-[#5fb875] dark:text-dark-6 dark:hover:text-[#5fb875] transition-colors duration-200"
      >
         {t("navbar.modules_items.insights")}
      </Link>
      
      <Link
        to="/operation"
        onClick={() => {
          setSubmenuOpen(false);
          setMenuOpen(false);
        }}
        className="block px-4 py-2.5 text-sm text-body-color hover:bg-gray-50 dark:hover:bg-dark-3 hover:text-[#5fb875] dark:text-dark-6 dark:hover:text-[#5fb875] transition-colors duration-200"
      >
         {t("navbar.modules_items.operations")}
      </Link>

      <Link
        to="/tools"
        onClick={() => {
          setSubmenuOpen(false);
          setMenuOpen(false);
        }}
        className="block px-4 py-2.5 text-sm text-body-color hover:bg-gray-50 dark:hover:bg-dark-3 hover:text-[#5fb875] dark:text-dark-6 dark:hover:text-[#5fb875] transition-colors duration-200"
      >
        {t("navbar.modules_items.tools")}
      </Link>
    </div>
  </div>
</li>
            </ul>
          </nav>

          {/* Right Side */}
          <div className="hidden lg:flex items-center gap-3">
            <LanguageSwitcher light={!scrolled} />
            <button
              onClick={() => {
                scrollToSection("pricing");
                setMenuOpen(false);
              }}
              className="relative inline-flex items-center justify-center px-6 py-2.5
                font-semibold text-white rounded-full
                bg-gradient-to-r from-[#5fb875] to-[#4a9960]
                shadow-lg shadow-[#5fb875]/30
                hover:shadow-xl hover:shadow-[#5fb875]/40
                hover:scale-105 transition-all duration-300"
            >
              <span className="relative z-10">{t("navbar.cta.start_trial")}</span>

              {/* Glow layer */}
              <span
                className="
                  absolute inset-0 rounded-full
                  bg-gradient-to-r from-[#5fb875] to-[#3fa66a]
                  blur-md opacity-40
                  transition-opacity duration-300
                  hover:opacity-70
                "
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}