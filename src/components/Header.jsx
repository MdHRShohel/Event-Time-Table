import CalendarTab from "./CalendarTab";

const Header = ({ selectedDate, setSelectedDate }) => {
  return (
    <header className="flex bg-gray-50 min-h-20 hide-scrollbar">
      <CalendarTab selectedDate={selectedDate} onDateSelect={setSelectedDate} />
    </header>
  );
};

export default Header;
