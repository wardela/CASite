import { useState, useEffect } from "react";
import useScrollToSection from "../../utils/useScrollToSection";
import { useTranslation } from "react-i18next";
export default function CTASection() {
  const [isVisible, setIsVisible] = useState(false);
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

    const section = document.getElementById("cta");
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
      id="cta"
      className="relative z-10 overflow-hidden bg-gradient-to-br from-[#5fb875] via-[#52a868] to-[#4a9960] py-12 lg:py-[100px]"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="relative overflow-hidden">
          <div className="-mx-4 flex flex-wrap items-stretch">
            <div className="w-full px-4">
              <div
                className={`mx-auto max-w-[680px] text-center transition-all duration-1000 ${
                  isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
                }`}
              >
                {/* Badge */}
                <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                  <svg
                    className="w-4 h-4 text-white animate-pulse"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm font-semibold text-white">
                   {t("cta.badge")}
                  </span>
                </div>

                {/* Main Heading */}
                <h2 className="mb-4 text-3xl font-bold text-white md:text-5xl md:leading-tight">
                  <span className="block mb-2">{t("cta.heading.line1")}</span>
                  <span className="relative inline-block">
                    <span className="relative z-10 text-4xl md:text-6xl bg-gradient-to-r from-white to-green-100 bg-clip-text text-transparent">
                      {t("cta.heading.highlight")}
                    </span>
                    <svg
                      className="absolute -bottom-2 left-0 w-full hidden sm:block"
                      height="12"
                      viewBox="0 0 300 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 9C50 3 100 1 150 3C200 5 250 7 299 9"
                        stroke="white"
                        strokeOpacity="0.4"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </h2>

                {/* Description */}
                <p className="mx-auto mb-10 max-w-[580px] text-lg leading-relaxed text-white/90">
                  {t("cta.description.before_highlight")}{" "}
                  <span className="font-bold text-white">{t("cta.description.highlight")}</span> - {t("cta.description.after_highlight")}
                </p>

                {/* CTA Buttons */}
                <div
                  className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 transition-all duration-1000 delay-300 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                  }`}
                >
                  <button
                    onClick={() => scrollToSection("pricing")}
                    className="group inline-flex items-center justify-center gap-3 rounded-full bg-white px-8 py-4 text-base font-bold text-[#5fb875] shadow-2xl transition-all duration-300 hover:shadow-white/20 hover:scale-105 hover:bg-green-50 w-full sm:w-auto"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                    <span>{t("cta.button.start_trial")}</span>
                    <svg
                      className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </button>
                </div>

                {/* Trust Indicators */}
                <div
                  className={`flex flex-wrap items-center justify-center gap-8 transition-all duration-1000 delay-500 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                  }`}
                >
                  <div className="flex items-center gap-2 text-white/90">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-sm font-medium">{t("cta.trust.no_card")}</span>
                  </div>

                  <div className="flex items-center gap-2 text-white/90">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-sm font-medium">{t("cta.trust.setup_time")}</span>
                  </div>

                  <div className="flex items-center gap-2 text-white/90">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-sm font-medium">{t("cta.trust.cancel")}</span>
                  </div>
                </div>

                {/* Social Proof */}
                <div
                  className={`mt-12 inline-flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-4 border border-white/20 transition-all duration-1000 delay-700 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                  }`}
                >
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div
                        key={i}
                        className="w-10 h-10 rounded-full border-2 border-white bg-gradient-to-br from-green-200 to-green-300 flex items-center justify-center text-sm font-bold text-[#5fb875]"
                      >
                        {i === 1 ? <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-square-activity-icon lucide-square-activity"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M17 12h-2l-2 5-2-10-2 5H7"/></svg> 
                        : i === 2 ? <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calendar-heart-icon lucide-calendar-heart"><path d="M12.127 22H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v5.125"/><path d="M14.62 18.8A2.25 2.25 0 1 1 18 15.836a2.25 2.25 0 1 1 3.38 2.966l-2.626 2.856a.998.998 0 0 1-1.507 0z"/><path d="M16 2v4"/><path d="M3 10h18"/><path d="M8 2v4"/></svg>
                        : i === 3 ? <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pill-icon lucide-pill"><path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z"/><path d="m8.5 8.5 7 7"/></svg>
                        : i === 4 ? <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-briefcase-medical-icon lucide-briefcase-medical"><path d="M12 11v4"/><path d="M14 13h-4"/><path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><path d="M18 6v14"/><path d="M6 6v14"/><rect width="20" height="14" x="2" y="6" rx="2"/></svg>
                        : <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart-handshake-icon lucide-heart-handshake"><path d="M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676.6.6 0 0 1-.818.001A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052 2.12 2.12 0 0 0-.004-3 2.124 2.124 0 1 0 3-3 2.124 2.124 0 0 0 3.004 0 2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0 2 2 0 0 1 0-2.828l2.823-2.762"/></svg>}
                      </div>
                    ))}
                  </div>
                  <div className="text-left">
                    <div className="text-sm font-bold text-white">{t("cta.social_proof.features_count")}</div>
                    <div className="text-xs text-white/80">{t("cta.social_proof.product")}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Background Shapes - Enhanced */}
      <span className="absolute left-0 top-0 opacity-30">
        <svg
          width="495"
          height="470"
          viewBox="0 0 495 470"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="animate-spin-slow"
        >
          <circle
            cx="55"
            cy="442"
            r="138"
            stroke="white"
            strokeOpacity="0.1"
            strokeWidth="50"
          />
          <circle
            cx="446"
            r="39"
            stroke="white"
            strokeOpacity="0.15"
            strokeWidth="20"
          />
          <path
            d="M245.406 137.609L233.985 94.9852L276.609 106.406L245.406 137.609Z"
            stroke="white"
            strokeOpacity="0.2"
            strokeWidth="12"
          />
        </svg>
      </span>

      <span className="absolute bottom-0 right-0 opacity-30">
        <svg
          width="493"
          height="470"
          viewBox="0 0 493 470"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="animate-spin-slow"
          style={{ animationDirection: 'reverse' }}
        >
          <circle
            cx="462"
            cy="5"
            r="138"
            stroke="white"
            strokeOpacity="0.1"
            strokeWidth="50"
          />
          <circle
            cx="49"
            cy="470"
            r="39"
            stroke="white"
            strokeOpacity="0.15"
            strokeWidth="20"
          />
          <path
            d="M222.393 226.701L272.808 213.192L259.299 263.607L222.393 226.701Z"
            stroke="white"
            strokeOpacity="0.2"
            strokeWidth="13"
          />
        </svg>
      </span>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0 opacity-10">
        <svg
          className="w-full h-auto"
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z"
            fill="white"
          />
        </svg>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        .animate-spin-slow {
          animation: spin-slow 30s linear infinite;
        }
      `}</style>
    </section>
  );
}