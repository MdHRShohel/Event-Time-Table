import { events } from "../constants/eventdata";
import { venuesData } from "../constants/venuedata";
import { VENUE_WIDTH_PERCENT } from "../constants/venueConfig";
import { useVenueEvents } from "../utils/useVenueEvents";
import EventCard from "./EventCard";

const VenueEventArea = ({ selectedDate, scrollRef, onScroll }) => {
  const processedEvents = useVenueEvents(events, venuesData, selectedDate);

  return (
    <div 
      ref={scrollRef}
      onScroll={onScroll}
      className="col-span-11 relative overflow-x-auto"
    >
      <div className="relative" style={{ minWidth: `${venuesData.length * VENUE_WIDTH_PERCENT}%` }}>
        {processedEvents.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default VenueEventArea;
