import { useTranslation } from "react-i18next";

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "ar" : "en";
    i18n.changeLanguage(newLang);
    localStorage.setItem("lang", newLang);
    document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
  };

  return (
    <button
      onClick={toggleLanguage}
      className="ml-4 px-3 py-1 rounded-md border border-gray-300 text-sm font-medium hover:bg-gray-100 transition"
    >
      {i18n.language === "en" ? "AR" : "EN"}
    </button>
  );
}

export default LanguageSwitcher;