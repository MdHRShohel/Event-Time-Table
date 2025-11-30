import { events } from "../constants/eventdata";
import { venuesData } from "../constants/venuedata";
import { useVenueEvents } from "../utils/useVenueEvents";
import EventCard from "./EventCard";

const VenueEventArea = ({ selectedDate }) => {
  const processedEvents = useVenueEvents(events, venuesData, selectedDate);

  return (
    <div className="col-span-11 relative">
      <div className="relative">
        {processedEvents.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default VenueEventArea;
