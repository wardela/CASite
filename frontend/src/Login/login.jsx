import React, { useState } from "react";
import styled from "styled-components";

const DemoLogin = () => {
  const [loading, setLoading] = useState(false);

  const GOOGLE_FORM_ACTION =
    "https://docs.google.com/forms/u/0/d/e/1FAIpQLSckjAmfjnUukdqR6JSa7BWZCkBgSU192QHyupBIDM7X40QXVw/formResponse";

  const handleSubmit = () => {
    setLoading(true);

    // silently login into demo mode after posting to Google Forms
    setTimeout(() => {
      localStorage.setItem("demoUser", "true");
      window.location.href = "/#/success/dashboard";
    }, 700);
  };

  return (
    <StyledWrapper>
      <div className="relative w-full h-screen bg-[#0d0d0d] overflow-hidden flex items-center justify-center">
        <div className="w-full max-w-md p-8 bg-[#1a1a1a] bg-opacity-80 backdrop-blur-xl rounded-xl border border-gray-700">

          <h1 className="text-center text-3xl font-bold text-[#58bc82] mb-2">
            Eyadeh App Demo
          </h1>
          <p className="text-center text-gray-400 mb-6 text-sm">
            Please fill your details to enter the live demo
          </p>

          <form
            action={GOOGLE_FORM_ACTION}
            method="POST"
            target="hidden_iframe"
            onSubmit={handleSubmit}
            className="flex flex-col gap-4"
          >

            {/* Hidden iFrame so Google doesn't redirect the page */}
            <iframe
              title="hidden_iframe"
              name="hidden_iframe"
              style={{ display: "none" }}
            />

            {/* FULL NAME */}
            <div className="flex flex-col gap-2">
              <label className="text-gray-300">Full Name</label>
              <input
                required
                type="text"
                name="entry.1422120905"
                className="input"
                placeholder="Dr. Ahmed Al-Masri"
              />
            </div>

            {/* CLINIC NAME */}
            <div className="flex flex-col gap-2">
              <label className="text-gray-300">Clinic Name</label>
              <input
                required
                type="text"
                name="entry.231148843"
                className="input"
                placeholder="Smile Studio Clinic"
              />
            </div>

            {/* PHONE NUMBER */}
            <div className="flex flex-col gap-2">
              <label className="text-gray-300">Phone Number (optional)</label>
              <input
                type="text"
                name="entry.646924430"
                className="input"
                placeholder="+9627XXXXXXXX"
              />
            </div>

            {/* EMAIL ADDRESS */}
            <div className="flex flex-col gap-2">
              <label className="text-gray-300">Email Address</label>
              <input
                required
                type="email"
                name="entry.77592213"
                className="input"
                placeholder="example@gmail.com"
              />
            </div>

            <button type="submit" className="submit-btn">
              {loading ? "Entering Demo..." : "Enter Demo"}
            </button>
          </form>

          <div className="text-center mt-4 text-gray-500 text-sm">
            INNOVATIVE Software Solutions™
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .input {
    width: 100%;
    padding: 0.9rem 0.75rem;
    border-radius: 0.5rem;
    background-color: rgba(156, 156, 156, 0.3);
    border: none;
    outline: 2px solid #707070;
    color: white;
  }
  .input:focus {
    outline: 2px solid #58bc82;
  }

  .submit-btn {
    width: 100%;
    padding: 1rem;
    background-color: #58bc82;
    color: #1a1a1a;
    border-radius: 3rem;
    font-weight: 700;
    font-size: 1rem;
    transition: 0.2s;
  }
  .submit-btn:hover {
    background-color: #4aa772;
  }
`;

export default DemoLogin;
