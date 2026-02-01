import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import NightSwitch from "../assets/nightswitch"; // Import custom switch
import WhatsAppIntegration from "./Integrations/WhatsAppIntegration";
import EInvoiceIntegration from "./Integrations/EInvoiceIntegration";

const Settings = () => {
  const { t, i18n } = useTranslation();
  const [activeTab, setActiveTab] = useState("appearance");
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [language, setLanguage] = useState(localStorage.getItem("language") || "en");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    i18n.changeLanguage(language);
    localStorage.setItem("language", language);
  }, [language]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "ar" : "en");
  };

  return (
    <div className={`flex min-h-screen bg-base-200 text-base-content mt-12 ${language === "ar" ? "rtl" : "ltr"}`}>
      {/* Left Sidebar */}
<div className="w-64 bg-base-100 p-2 pr-2 flex flex-col justify-between ">
  {/* Sidebar top */}
  <div>
    <h2 className="text-xs uppercase font-semibold text-gray-400 mb-3">
      {t("settings.title")}
    </h2>
    <ul className="space-y-2">
      {["appearance", "language", "whatsapp", "einvoice", "contact"].map((item) => (
        <li
          key={item} 
          className={`py-2 px-4 rounded-lg cursor-pointer ${
            activeTab === item ? "bg-base-300" : "hover:bg-base-300"
          }`}
          onClick={() => setActiveTab(item)}
        >
          {t(`settings.${item}`)}
        </li>
      ))}
    </ul>
  </div>

  {/* Version footer */}
  <div className="text-start text-xs text-gray-400 mb-6 pt-3">
    <p>© 2025 Eyadeh App</p>
    <p className="mt-1 font-semibold text-gray-500">Version 2.2.1</p>
  </div>
</div>


      {/* Right Content Area */}
      <div className="flex-grow p-6 bg-base-300">
       <div className="bg-base-100 p-6 rounded-lg w-full max-w-[1100px] mx-auto">

          {activeTab === "appearance" && (
            <div>
              <h1 className="text-2xl font-bold mb-4">{t("settings.appearance")}</h1>
              <div className="mt-6 flex justify-between items-center">
                <span className="text-base-content text-lg">{t("settings.dark_mode")}</span>
                <NightSwitch checked={theme === "light"} onChange={toggleTheme} />
              </div>
            </div>
          )}

          {activeTab === "language" && (
            <div>
              <h1 className="text-2xl font-bold mb-4">{t("settings.language")}</h1>
              <div className="flex items-center justify-start gap-4 mt-4">
                <span className="text-lg font-semibold text-gray-600">English</span>
                <input 
                  type="checkbox" 
                  className="toggle bg-gray-400 border-gray-500" 
                  checked={language === "ar"} 
                  onChange={toggleLanguage} 
                />
                <span className="text-lg font-semibold text-gray-600">العربية</span>
              </div>
            </div>
          )}

          {activeTab === "contact" && (
            <div>
              <h1 className="text-2xl font-bold mb-4">{t("settings.contact")}</h1>
              <div className="space-y-4">
                <strong className="text-xl">Synergy Software Solutions™</strong>
                <p className="text-lg"><strong>{t("contact.phone")}:</strong> +962 7 9816 3375</p>
                <p className="text-lg"><strong>{t("contact.phone")}:</strong> +962 7 9831 0374</p>
                <p className="text-lg"><strong>{t("contact.email")}:</strong> help@synegysoft.me</p>
              </div>
            </div>
          )}
          {activeTab === "whatsapp" && <WhatsAppIntegration />}
          {activeTab === "einvoice" && <EInvoiceIntegration />}
        </div>
      </div>
    </div>
  );
};

export default Settings;