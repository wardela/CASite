import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
export default function ContactSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [formStatus, setFormStatus] = useState(null);
  const {t} = useTranslation();
  const CONTACT_FORM_ACTION_URL =
  "https://docs.google.com/forms/u/0/d/e/1FAIpQLSftL45sIDylUPY-KB6SX6RAGw2m4nAWQcL9PKeOtU8nngDPfA/formResponse";

const CONTACT_ENTRY_MAP = {
  name: "entry.1711436051",
  email: "entry.195727042",
  phone: "entry.1663444443",
  message: "entry.451878495", // this is the message field
};

const [formData, setFormData] = useState({
  name: "",
  email: "",
  phone: "",
  message: "",
});

const [isSubmitting, setIsSubmitting] = useState(false);
const [submitSuccess, setSubmitSuccess] = useState(false);

const resetForm = () => {
  setFormData({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
};

const handleSubmit = async (e) => {
  e.preventDefault();
  if (isSubmitting) return;

  setIsSubmitting(true);
  setSubmitSuccess(false);

  const body = new URLSearchParams();

  Object.entries(formData).forEach(([key, value]) => {
    if (!CONTACT_ENTRY_MAP[key]) return;
    body.append(CONTACT_ENTRY_MAP[key], value ?? "");
  });

  try {
    await fetch(CONTACT_FORM_ACTION_URL, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
      body,
    });

    setSubmitSuccess(true);
    resetForm();

  } catch (err) {
    console.error("Contact form submission failed:", err);
  } finally {
    setIsSubmitting(false);
  }
};

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

    const section = document.getElementById("contact");
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
    <section id="contact" className="relative py-20 md:py-[120px] overflow-hidden">
      {/* Background layers */}
      <div className="absolute left-0 top-0 -z-[1] h-full w-full bg-white dark:bg-dark"></div>
      <div className="absolute left-0 top-0 -z-[1] h-1/2 w-full bg-gradient-to-br from-[#0884a9]/5 via-blue-50/50 to-transparent dark:from-[#0884a9]/5 dark:via-dark-700 dark:to-transparent lg:h-[45%] xl:h-1/2"></div>

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-[1]">
        <div className="absolute top-20 -right-20 w-96 h-96 bg-[#0884a9]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 -left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-wrap items-center">
          {/* LEFT CONTENT */}
          <div className="w-full lg:w-7/12 xl:w-8/12">
            <div
              className={`transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
            >
              {/* Header */}
              <div className="mb-12 lg:mb-[150px]">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-[#0884a9]/10 backdrop-blur-sm rounded-full border border-[#0884a9]/20">
                  <svg className="w-4 h-4 text-[#0884a9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-sm font-semibold text-[#0884a9]">
                    {t("contact.badge")}
                  </span>
                </div>

                {/* Title */}
                <h2 className="max-w-[500px] text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-dark dark:text-white mb-4">
                  {t("contact.heading.line1")}{" "}
                  <span className="relative inline-block">
                    <span className="relative z-10 bg-gradient-to-r from-[#0884a9] to-[#066f8f] bg-clip-text text-transparent">
                      {t("contact.heading.highlight")}
                    </span>
                    <svg
                      className="absolute -bottom-2 left-0 w-full"
                      height="12"
                      viewBox="0 0 300 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 9C50 3 100 1 150 3C200 5 250 7 299 9"
                        stroke="#0884a9"
                        strokeOpacity="0.3"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </h2>

                <p className="text-base text-body-color dark:text-dark-6 max-w-[480px]">
                   {t("contact.description")}
                </p>
              </div>

              {/* Contact Info Cards */}
              <div className="flex flex-wrap gap-6 lg:gap-8">
                {/* Phone Card */}
                <div
                  className={`group flex-1 min-w-[280px] transition-all duration-700 delay-200 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                >
                  <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-dark-2 p-6 shadow-lg hover:shadow-xl border border-gray-100 dark:border-dark-3 hover:border-[#0884a9]/30 transition-all duration-300 hover:-translate-y-1">
                    {/* Background gradient on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0884a9]/0 to-[#0884a9]/0 group-hover:from-[#0884a9]/5 group-hover:to-transparent transition-all duration-500"></div>

                    <div className="relative">
                      {/* Icon */}
                      <div className="w-14 h-14 rounded-xl bg-[#0884a9]/10 flex items-center justify-center mb-4 group-hover:bg-[#0884a9]/20 transition-colors duration-300">
                        <svg
                          className="w-7 h-7 text-[#0884a9]"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                          />
                        </svg>
                      </div>

                      {/* Title */}
                      <h5 className="mb-3 text-lg font-bold text-dark dark:text-white group-hover:text-[#0884a9] transition-colors duration-300">
                        {t("contact.info.phone.title")}
                      </h5>

                      {/* Phone numbers */}
                      <div className="space-y-2">
                        <a
                          href="tel:+962798310374"
                          className="flex items-center gap-2 text-base text-body-color dark:text-dark-6 hover:text-[#0884a9] transition-colors duration-300 group/link"
                        >
                          <svg className="w-4 h-4 opacity-0 group-hover/link:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                          <span className="" dir="ltr">+962 79 831 0374</span>
                        </a>

                        <a
                          href="tel:+962798163375"
                          className="flex items-center gap-2 text-base text-body-color dark:text-dark-6 hover:text-[#0884a9] transition-colors duration-300 group/link"
                        >
                          <svg className="w-4 h-4 opacity-0 group-hover/link:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                          <span dir="ltr">+962 79 816 3375</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Email Card */}
                <div
                  className={`group flex-1 min-w-[280px] transition-all duration-700 delay-300 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                >
                  <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-dark-2 p-6 shadow-lg hover:shadow-xl border border-gray-100 dark:border-dark-3 hover:border-[#0884a9]/30 transition-all duration-300 hover:-translate-y-1">
                    {/* Background gradient on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0884a9]/0 to-[#0884a9]/0 group-hover:from-[#0884a9]/5 group-hover:to-transparent transition-all duration-500"></div>

                    <div className="relative">
                      {/* Icon */}
                      <div className="w-14 h-14 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition-colors duration-300">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail-icon lucide-mail"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/><rect x="2" y="4" width="20" height="16" rx="2"/></svg>
                      </div>

                      {/* Title */}
                      <h5 className="mb-3 text-lg font-bold text-dark dark:text-white group-hover:text-blue-500 transition-colors duration-300">
                        {t("contact.info.email.title")}
                      </h5>

                      {/* Email */}
                      <a
                        href="mailto:sales@fawtartak.com"
                        className="flex items-center gap-2 text-base text-body-color dark:text-dark-6 hover:text-blue-500 transition-colors duration-300 group/link"
                      >
                        <svg className="w-4 h-4 opacity-0 group-hover/link:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                        <span>sales@fawtartak.com</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="w-full lg:w-5/12 xl:w-4/12 mt-12 lg:mt-0">
            <div
              className={`relative overflow-hidden rounded-2xl bg-white dark:bg-dark-2 px-8 py-10 shadow-2xl sm:px-10 sm:py-12 md:p-[60px] lg:p-10 lg:px-10 lg:py-12 2xl:p-[60px] border border-gray-100 dark:border-dark-3 transition-all duration-1000 delay-400 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}
            >
              {/* Decorative top accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0884a9] via-blue-500 to-[#0884a9]"></div>

              {/* Title */}
              <h3 className="mb-2 text-2xl font-bold text-dark dark:text-white md:text-[28px] md:leading-tight">
                {t("contact.form.title")}
              </h3>
              <p className="mb-8 text-sm text-body-color dark:text-dark-6">
                {t("contact.form.subtitle")}
              </p>

              {/* Form */}
<form onSubmit={handleSubmit}>



<FormInput
  label={t("contact.form.fields.name.label")}
  placeholder={t("contact.form.fields.name.placeholder")}
  value={formData.name}
  onChange={(e) =>
    setFormData({ ...formData, name: e.target.value })
  }
/>
                
<FormInput
  label={t("contact.form.fields.email.label")}
  type="email"
  placeholder={t("contact.form.fields.email.placeholder")}
  value={formData.email}
  onChange={(e) =>
    setFormData({ ...formData, email: e.target.value })
  }
/>

                
<FormInput
  label={t("contact.form.fields.phone.label")}
  placeholder={t("contact.form.fields.phone.placeholder")}
  value={formData.phone}
  onChange={(e) =>
    setFormData({ ...formData, phone: e.target.value })
  }
/>


                <div className="mb-8">
                  <label className="mb-3 block text-sm font-semibold text-dark dark:text-white">
                    {t("contact.form.fields.message.label")}
                  </label>
                  <textarea
                    rows="4"
                    placeholder={t("contact.form.fields.message.placeholder")}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                    className="w-full resize-none rounded-xl border-2 border-gray-200 px-4 py-3"
                  ></textarea>

                                  </div>
                  {submitSuccess && (
                    <div className="mb-4 rounded-lg bg-blue-50 border border-blue-200 p-3 text-blue-700 text-sm">
                      {t("contact.form.success")}
                    </div>
                  )}
                <button
                  type="submit"
                  className="group w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#0884a9] to-[#066f8f] px-8 py-4 text-base font-bold text-white shadow-lg hover:shadow-xl hover:shadow-[#0884a9]/30 transition-all duration-300 hover:scale-105"
                >
                  <span> {isSubmitting ? t("contact.form.submit.loading") : t("contact.form.submit.default")}</span>
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>

                {/* Trust indicators */}
                <div className="mt-4 flex items-center justify-center gap-4 text-xs text-body-color dark:text-dark-6">
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{t("contact.trust.quick_response")}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    <span>{t("contact.trust.secure")}</span>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FormInput({ label, name, type = "text", placeholder, icon, value, onChange }) {
  return (
    <div className="mb-6">
      <label className="mb-3 block text-sm font-semibold text-dark dark:text-white">
        {label}
      </label>
      <div className="relative">
        {icon && (
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
            {icon}
          </div>
        )}
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required
          className={`w-full rounded-xl border-2 border-gray-200 bg-transparent ${
            icon ? "pl-12" : "pl-4"
          } pr-4 py-3 transition-all`}
        />
      </div>
    </div>
  );
}

