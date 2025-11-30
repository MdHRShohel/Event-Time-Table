import { useState } from "react";
import Tabbar from "./components/Tabbar";
import TimeSidebar from "./components/TimeSidebar";
import VenueBar from "./components/VenueBar";
import VenueEventArea from "./components/VenueEventArea";

function App() {
  const [selectedDate, setSelectedDate] = useState(new Date("2025-12-01"));

  return (
    <div className="h-screen overflow-hidden">
      <Tabbar selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
      <VenueBar />
      <div className="grid grid-cols-12 h-full hide-scrollbar overflow-y-auto">
        <TimeSidebar />
        <VenueEventArea selectedDate={selectedDate} />
      </div>
    </div>
  );
}

export default App;
