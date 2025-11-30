import { venuesData } from "../constants/venuedata";
import { VENUE_WIDTH_PERCENT } from "../constants/venueConfig";

const VenueBar = ({ scrollRef, onScroll }) => {
  return (
    <div className="border-b grid grid-cols-12 bg-gray-100">
      <div className="border-r" />
      <div
        ref={scrollRef}
        onScroll={onScroll}
        className="col-span-11 overflow-x-auto hide-scrollbar"
      >
        <div
          className="flex"
          style={{ minWidth: `${venuesData.length * VENUE_WIDTH_PERCENT}%` }}
        >
          {venuesData.map((venue) => (
            <div
              key={venue.id}
              className="px-4 py-2 border-r text-center shrink-0"
              style={{ width: `${VENUE_WIDTH_PERCENT}%` }}
            >
              {venue.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VenueBar;
