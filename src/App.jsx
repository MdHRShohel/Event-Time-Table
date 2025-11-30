import { useState } from "react";
import TimeSidebar from "./components/TimeSidebar";
import UserTabbar from "./components/UserTabbar";
import VenueBar from "./components/VenueBar";
import VenueEventArea from "./components/VenueEventArea";

function App() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  console.log("selectedDate: ", selectedDate);

  return (
    <div className="h-screen overflow-hidden">
      <UserTabbar
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />
      <VenueBar />
      <div className="grid grid-cols-12 h-full">
        <TimeSidebar />
        <VenueEventArea />
      </div>
    </div>
  );
}

export default App;
