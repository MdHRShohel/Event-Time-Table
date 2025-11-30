import { addDays, format } from "date-fns";

const Tabbar = ({ selectedDate, setSelectedDate }) => {
  const renderDays = () => {
    const days = [];
    const startDate = new Date("2025-11-30");

    for (let i = 0; i < 7; i++) {
      const date = addDays(startDate, i);
      const dayName = format(date, "EEEE");
      const dayOfMonth = format(date, "yyyy-MM-dd");

      const isSelected =
        format(selectedDate, "yyyy-MM-dd") === format(date, "yyyy-MM-dd");

      days.push(
        <div
          key={i}
          className={`min-w-[20%] border-y border-r flex flex-col items-center justify-center p-4 cursor-pointer ${
            isSelected ? "bg-gray-300" : ""
          }`}
          onClick={() => setSelectedDate(date)}
        >
          <span className="text-lg font-medium">{dayName}</span>
          <span className="text-sm font-medium">Date: {dayOfMonth}</span>
        </div>
      );
    }
    return days;
  };

  return (
    <div className="flex bg-gray-50 min-h-20 overflow-x-auto hide-scrollbar">
      {renderDays()}
    </div>
  );
};

export default Tabbar;
