import { venuesData } from "../constants/venuedata";

const VenueBar = () => {
  return (
    <div className="border-b grid grid-cols-12 bg-gray-100">
      <div className="border-r" />
      <div className="flex w-full col-span-11">
        {venuesData.map((venue) => (
          <div
            key={venue.id}
            className="px-4 py-2 border-r text-center min-w-[32%] overflow-x-auto"
          >
            {venue.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default VenueBar;
