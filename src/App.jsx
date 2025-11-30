import { useState, useRef } from "react";
import Tabbar from "./components/Tabbar";
import TimeSidebar from "./components/TimeSidebar";
import VenueBar from "./components/VenueBar";
import VenueEventArea from "./components/VenueEventArea";

function App() {
  const [selectedDate, setSelectedDate] = useState(new Date("2025-12-01"));
  const venueBarRef = useRef(null);
  const venueEventAreaRef = useRef(null);

  const handleVenueBarScroll = () => {
    if (venueBarRef.current && venueEventAreaRef.current) {
      venueEventAreaRef.current.scrollLeft = venueBarRef.current.scrollLeft;
    }
  };

  const handleVenueEventAreaScroll = () => {
    if (venueBarRef.current && venueEventAreaRef.current) {
      venueBarRef.current.scrollLeft = venueEventAreaRef.current.scrollLeft;
    }
  };

  return (
    <div className="h-screen overflow-hidden">
      <Tabbar selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
      <VenueBar scrollRef={venueBarRef} onScroll={handleVenueBarScroll} />
      <div className="grid grid-cols-12 h-full hide-scrollbar overflow-y-auto">
        <TimeSidebar />
        <VenueEventArea 
          selectedDate={selectedDate} 
          scrollRef={venueEventAreaRef}
          onScroll={handleVenueEventAreaScroll}
        />
      </div>
    </div>
  );
}

export default App;
