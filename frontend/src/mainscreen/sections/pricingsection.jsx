import { useState, useEffect } from "react";
import BuyModal from "../modals/buymodal";
import useScrollToSection from "../../utils/useScrollToSection";
import { useTranslation } from "react-i18next";
export default function PricingSection() {
  const [isVisible, setIsVisible] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
const [selectedPlan, setSelectedPlan] = useState(null);
    const scrollToSection = useScrollToSection();
    const {t} = useTranslation();
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById("pricing");
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  
  return (
    <section
      id="pricing"
      className="relative z-20 overflow-hidden bg-gradient-to-b from-white to-gray-50 dark:from-dark dark:to-dark-2 pb-16 pt-20 lg:pb-[100px] lg:pt-[120px]"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 end-20 w-96 h-96 bg-[#5fb875]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 start-20 w-96 h-96 bg-[#5fb875]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto relative z-10">
        {/* Header */}
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div
              className={`mx-auto mb-16 max-w-[680px] text-center transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-[#5fb875]/10 backdrop-blur-sm rounded-full border border-[#5fb875]/20">
                <div className="w-2 h-2 bg-[#5fb875] rounded-full animate-pulse"></div>
                <span className="text-sm font-semibold text-[#5fb875]">
                  {t("pricing.badge")}
                </span>
              </div>

              {/* Main Heading */}
              <h2 className="mb-5 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-5xl md:leading-tight">
                {t("pricing.heading.before_highlight")}{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 bg-gradient-to-r from-[#5fb875] to-[#4a9960] bg-clip-text text-transparent">
                    {t("pricing.heading.highlight")}
                  </span>
                  <svg
                    className="absolute -bottom-2 start-0 w-full hidden sm:block"
                    height="12"
                    viewBox="0 0 300 12"
                    fill="none"
                    xmsns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 9C50 3 100 1 150 3C200 5 250 7 299 9"
                      stroke="#5fb875"
                      strokeOpacity="0.3"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </h2>

              {/* Description */}
              <div className="space-y-2">
                <p className="text-base text-body-color dark:text-dark-6">
                  {t("pricing.description.line1_before")}{" "}
                  <span className="font-semibold text-[#5fb875]">{t("pricing.description.line1_highlight")}</span>{" "}
                 {t("pricing.description.line1_after")}
                </p>
                <p className="text-base font-bold text-dark dark:text-white">
                  {t("pricing.description.line2")}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
<div className="-mx-4 flex flex-wrap justify-center">
  {/* ESSENTIAL */}
<PricingCard
  isVisible={isVisible}
  delay="0ms"
  planKey="Essential"
  title={t("pricing.plans.essential.title")}
  subtitle={t("pricing.plans.essential.subtitle")}
  oldPrice="70.00"
  price="39.99"
  onChoose={(plan) => {
    setSelectedPlan(plan);
    setIsModalOpen(true);
  }}
  discount="43% OFF"
  features={t("pricing.plans.essential.features", { returnObjects: true })}
  disabledFeatures={t("pricing.plans.essential.disabled", {
    returnObjects: true,
  })}
/>

  {/* PREMIUM */}
<PricingCard
  isVisible={isVisible}
  delay="150ms"
  highlight
  planKey="Premium"
  badge={t("pricing.plans.premium.badge")}
  title={t("pricing.plans.premium.title")}
  subtitle={t("pricing.plans.premium.subtitle")}
  oldPrice="100.00"
  price="54.99"
  onChoose={(plan) => {
    setSelectedPlan(plan);
    setIsModalOpen(true);
  }}
  discount="45% OFF"
  features={t("pricing.plans.premium.features", { returnObjects: true })}
  disabledFeatures={t("pricing.plans.premium.disabled", {
    returnObjects: true,
  })}
/>

  {/* EXCLUSIVE */}
<PricingCard
  isVisible={isVisible}
  delay="300ms"
  planKey="Exclusive"
  title={t("pricing.plans.exclusive.title")}
  subtitle={t("pricing.plans.exclusive.subtitle")}
  oldPrice="130.00"
  price="82.99"
  onChoose={(plan) => {
    setSelectedPlan(plan);
    setIsModalOpen(true);
  }}
  discount="36% OFF"
  features={t("pricing.plans.exclusive.features", {
    returnObjects: true,
  })}
/>
</div>


        {/* Bottom CTA */}
        <div
          className={`mt-12 text-center transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-gradient-to-r from-[#5fb875]/10 via-[#5fb875]/5 to-transparent rounded-2xl border border-[#5fb875]/20">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[#5fb875]/20 flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-[#5fb875]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="text-start">
                <h3 className="text-lg font-bold text-dark dark:text-white">
                   {t("pricing.custom.title")}
                </h3>
                <p className="text-sm text-body-color dark:text-dark-6">
                  {t("pricing.custom.subtitle")}
                </p>
              </div>
            </div>
            <button
                    onClick={() => scrollToSection("contact")}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#5fb875] to-[#4a9960] px-6 py-3 text-base font-semibold text-white shadow-lg hover:shadow-xl hover:shadow-[#5fb875]/30 transition-all duration-300 hover:scale-105"
            >
              <span>{t("pricing.custom.button")}</span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </button>
          </div>
        </div>
              <BuyModal
  isOpen={isModalOpen}
  plan={selectedPlan}
  onClose={() => setIsModalOpen(false)}
/>
      </div>
    </section>
  );
}

/* ======================================================
   Reusable Card Component
====================================================== */

function PricingCard({
  isVisible,
  delay,
  planKey,
  title,
  onChoose,
  subtitle,
  price,
  oldPrice,
  discount,
  features = [],
  disabledFeatures = [],
  badge,
  highlight = false,
}) {
  const {t} = useTranslation();
  return (
    <div
      className={`w-full px-4 md:w-1/2 lg:w-1/3 mb-10 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: isVisible ? delay : "0ms" }}
    >
      <div
        className={`group relative h-full overflow-hidden rounded-2xl bg-white dark:bg-dark-2 shadow-xl transition-all duration-500 hover:shadow-2xl ${
          highlight
            ? "border-2 border-[#5fb875] transform lg:scale-105 lg:-translate-y-4"
            : "border border-gray-100 dark:border-dark-3 hover:border-[#5fb875]/30"
        }`}
      >
        {/* Popular Badge */}
        {badge && (
          <div className="absolute top-0 start-1/2 -translate-x-1/2 z-20">
            <div className="relative">
              <div className="bg-gradient-to-r from-[#5fb875] to-[#4a9960] px-6 py-2 text-xs font-bold text-white rounded-b-xl shadow-lg">
                {badge}
              </div>
              <div className="absolute -bottom-1 start-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-[#4a9960]"></div>
            </div>
          </div>
        )}

        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#5fb875]/0 to-[#5fb875]/0 group-hover:from-[#5fb875]/5 group-hover:to-transparent transition-all duration-500 pointer-events-none"></div>

        <div className={`p-8 ${badge ? "pt-12" : ""}`}>
          {/* Title & Subtitle */}
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-dark dark:text-white mb-2 group-hover:text-[#5fb875] transition-colors duration-300">
              {title}
            </h3>
            <p className="text-sm text-body-color dark:text-dark-6 leading-relaxed">
              {subtitle}
            </p>
          </div>

          {/* Pricing */}
          <div className="relative mb-8">
            {/* Discount Badge */}
            {discount && (
              <div className="absolute -top-3 -end-3 z-10">
                <div className="relative">
                  <div className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg animate-pulse">
                    {discount}
                  </div>
                  <div className="absolute inset-0 bg-red-500 rounded-full blur-sm opacity-50 animate-pulse"></div>
                </div>
              </div>
            )}

            {/* Old Price */}
            <div className="flex items-center gap-2 mb-2">
              <span className="text-sm line-through text-gray-400 dark:text-gray-500">
                ${oldPrice}
              </span>
              <span className="text-xs text-green-600 dark:text-green-400 font-semibold">
                 {t("pricing.card.save")} ${(parseFloat(oldPrice) - parseFloat(price)).toFixed(2)}
              </span>
            </div>

            {/* Current Price */}
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-bold text-dark dark:text-white">$</span>
              <span className="text-5xl font-bold text-dark dark:text-white">
                {price}
              </span>
              <span className="text-base text-body-color dark:text-dark-6 ms-1">
                {t("pricing.card.per_month")}
              </span>
            </div>

          </div>

          {/* Features Header */}
          <div className="mb-4 pb-3 border-b border-gray-100 dark:border-dark-3">
            <h5 className="text-sm font-bold text-dark dark:text-white uppercase tracking-wide">
              {t("pricing.card.included")}
            </h5>
          </div>

          {/* Features List */}
          <ul className="space-y-3 mb-8">
            {features.map((f, index) => (
              <li
                key={index}
                className="flex items-start gap-3 text-sm font-medium text-dark dark:text-white"
              >
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#5fb875]/20 flex items-center justify-center mt-0.5">
                  <svg
                    className="w-3 h-3 text-[#5fb875]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span>{f}</span>
              </li>
            ))}

            {disabledFeatures && disabledFeatures.map((f, index) => (
              <li
                key={`disabled-${index}`}
                className="flex items-start gap-3 text-sm text-body-color dark:text-dark-6 opacity-50"
              >
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center mt-0.5">
                  <svg
                    className="w-3 h-3 text-gray-400 dark:text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>
                <span className="line-through">{f}</span>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <button
            onClick={() => onChoose(planKey)}
            className={`group/btn w-full rounded-full py-4 font-bold transition-all duration-300 hover:scale-105 hover:shadow-xl ${
              highlight
                ? "bg-gradient-to-r from-[#5fb875] to-[#4a9960] text-white hover:shadow-[#5fb875]/30"
                : "bg-[#5fb875] text-white hover:bg-[#4a9960]"
            }`}
          >
            <span className="flex items-center justify-center gap-2">
              {t("pricing.card.cta")}
              <svg
                className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </span>
          </button>
        </div>

        {/* Bottom accent line */}
        {highlight && (
          <div className="absolute bottom-0 start-0 end-0 h-1 bg-gradient-to-r from-[#5fb875] to-[#4a9960]"></div>
        )}
      </div>
    </div>
  );
}