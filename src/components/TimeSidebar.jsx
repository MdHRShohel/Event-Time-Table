import { addMinutes, format } from "date-fns";

const TimeSidebar = () => {
  const times = [];
  const startOfDay = new Date();
  startOfDay.setHours(0, 0, 0, 0);

  // 24 hours * 4 quarters
  for (let i = 0; i < 96; i++) {
    const time = addMinutes(startOfDay, i * 15);
    times.push(format(time, "HH:mm"));
  }

  return (
    <div className="border-x h-full">
      {times.map((time, index) => (
        <div
          key={index}
          className="h-16 flex items-center justify-center border-b"
        >
          <span className="text-sm">{time}</span>
        </div>
      ))}
    </div>
  );
}

export default TimeSidebar