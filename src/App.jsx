import TimeSidebar from "./components/TimeSidebar";
import UserTabbar from "./components/UserTabbar";
import VenueEventArea from "./components/VenueEventArea";

function App() {
  return (
    <div className="h-screen overflow-hidden">
      <UserTabbar />
      <div className="grid grid-cols-12 h-full">
        <TimeSidebar />
        <VenueEventArea />
      </div>
    </div>
  );
}

export default App;
