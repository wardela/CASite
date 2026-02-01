import React, { useState, useEffect, useRef } from "react";

const TimePicker = ({ value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const parseTime = (timeString) => {
    if (!timeString) return { hour: "09", minute: "00", period: "AM" }; // Default
  
    const [time, period] = timeString.split(" ");
    const [hour, minute] = time.split(":");
  
    return {
      hour: hour.padStart(2, "0"),
      minute: minute.padStart(2, "0"),
      period: period || "AM",
    };
  };
  
  const [selectedHour, setSelectedHour] = useState(null);
  const [selectedMinute, setSelectedMinute] = useState(null);
  const [selectedPeriod, setSelectedPeriod] = useState(null);
  

// Update time when the value prop changes
useEffect(() => {
  if (value) {
    const { hour, minute, period } = parseTime(value);
    setSelectedHour(hour || "12");
    setSelectedMinute(minute || "00");
    setSelectedPeriod(period || "AM");
  }
}, [value]);


  const pickerRef = useRef(null);

  // Handles outside clicks to close the time picker
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (pickerRef.current && !pickerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Generate hours, minutes, and AM/PM options
  const hours = Array.from({ length: 12 }, (_, i) => String(i + 1).padStart(2, "0"));
  const minutes = Array.from({ length: 60 }, (_, i) => String(i).padStart(2, "0"));
  const periods = ["AM", "PM"];

  // Update the time value when selections change
    // Update the time value when selections change
    useEffect(() => {
      if (selectedHour && selectedMinute && selectedPeriod) {
        onChange(`${selectedHour}:${selectedMinute} ${selectedPeriod}`);
      }
    }, [selectedHour, selectedMinute, selectedPeriod]);
  
  return (
    <div className="relative w-full" ref={pickerRef}>
      {/* Time Input Display */}
      <div
  className="w-full px-3 py-2 border rounded-lg bg-base-100 cursor-pointer flex justify-between items-center focus:outline-none focus:ring focus:border-[#58bc82]"
  onClick={() => setIsOpen(!isOpen)}
>
<span className="text-base-content font-medium">
    {selectedHour && selectedMinute && selectedPeriod 
        ? `${selectedHour}:${selectedMinute} ${selectedPeriod}` 
        : "--:-- --"}
</span>

  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}  // Increased stroke width for boldness
    stroke="currentColor"
    className="size-6 text-gray-700" // Changed color for visibility
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
    />
  </svg>
</div>


      {/* Dropdown Time Picker */}
      {isOpen && (
        <div className="absolute z-50 mt-2 w-[20vh] bg-white shadow-lg rounded-lg border border-gray-300 flex">
          {/* Hour Picker */}
          <div className="w-1/3 max-h-48 overflow-y-auto">
            {hours.map((hour) => (
              <div
                key={hour}
                className={`p-2 text-center cursor-pointer ${
                  selectedHour === hour ? "bg-[#58bc82] text-white" : "hover:bg-gray-200"
                }`}
                onClick={() => setSelectedHour(hour)}
              >
                {hour}
              </div>
            ))}
          </div>

          {/* Minute Picker */}
          <div className="w-1/3 max-h-48 overflow-y-auto">
            {minutes.map((minute) => (
              <div
                key={minute}
                className={`p-2 text-center cursor-pointer ${
                  selectedMinute === minute ? "bg-[#58bc82] text-white" : "hover:bg-gray-200"
                }`}
                onClick={() => setSelectedMinute(minute)}
              >
                {minute}
              </div>
            ))}
          </div>

          {/* AM/PM Picker */}
          <div className="w-1/3 max-h-48 overflow-y-auto">
            {periods.map((period) => (
              <div
                key={period}
                className={`p-2 text-center cursor-pointer ${
                  selectedPeriod === period ? "bg-[#58bc82] text-white" : "hover:bg-gray-200"
                }`}
                onClick={() => setSelectedPeriod(period)}
              >
                {period}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TimePicker;
