import React, { useEffect, useState } from 'react';

const ErrorPopup = ({ message = "Please try again", subMessage = "This is the description part", onClose }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFading(true);
      setTimeout(() => {
        setIsVisible(false);
        onClose();
      }, 300); // Matches the fade-out duration
    }, 5000);

    return () => clearTimeout(timer); // Cleanup timer on component unmount
  }, [onClose]);

  return (
    isVisible && (
      <div
        className={`flex flex-col gap-2 w-80 sm:w-96 text-[10px] sm:text-xs z-50 fixed top-10 left-1/2 transform -translate-x-1/2 ${
          isFading ? 'opacity-0' : 'opacity-100'
        }`}
        style={{ transition: 'opacity 0.3s ease-in-out' }}
      >
        <div className="error-alert cursor-default flex items-center justify-between w-full h-12 sm:h-14 rounded-lg bg-[#232531] px-[10px]">
          <div className="flex gap-2">
            <div className="text-[#d65563] bg-white/5 backdrop-blur-xl p-1 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
              </svg>
            </div>
            <div>
              <p className="text-white">{message}</p>
              <p className="text-gray-500">{subMessage}</p>
            </div>
          </div>
          <button
            className="text-gray-600 hover:bg-white/10 p-1 rounded-md transition-colors ease-linear"
            onClick={() => {
              setIsFading(true);
              setTimeout(() => {
                setIsVisible(false);
                onClose();
              }, 300);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    )
  );
};

export default ErrorPopup;
