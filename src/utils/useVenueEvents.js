import { useMemo } from "react";
import { format } from "date-fns";

const REM_PER_MINUTE = 4 / 15;
const HEIGHT_MULTIPLIER = 1.5;

const timeToMinutes = (time) => {
  const [hours, minutes] = time.split(":").map(Number);
  return hours * 60 + minutes;
};

const getVenueSpan = (eventVenues) => {
  if (!eventVenues || eventVenues.length === 0) {
    return 0;
  }
  return eventVenues.slice(1).reduce((span, venue, i) => {
    return venue === eventVenues[i] + 1 ? span + 1 : span;
  }, 1);
};

export const useVenueEvents = (events, venues, selectedDate) => {
  const filteredEvents = useMemo(() => {
    return events.filter(
      (event) => event.date === format(selectedDate, "yyyy-MM-dd")
    );
  }, [events, selectedDate]);

  const processedEvents = useMemo(() => {
    const eventsMap = new Map();
    const venueCount = venues.length;

    filteredEvents.forEach((event) => {
      if (eventsMap.has(event.id)) return;

      const top = timeToMinutes(event.startTime) * REM_PER_MINUTE;
      const duration = timeToMinutes(event.endTime) - timeToMinutes(event.startTime);
      const height = duration * REM_PER_MINUTE * HEIGHT_MULTIPLIER;
      const venueSpan = getVenueSpan(event.venues);
      const startVenue = venues.find((v) => v.id === event.venues[0]);

      if (startVenue) {
        const startVenueIndex = venues.indexOf(startVenue);
        const left = (startVenueIndex / venueCount) * 100;
        const width = (venueSpan / venueCount) * 100;

        eventsMap.set(event.id, {
          ...event,
          top,
          height,
          left,
          width,
        });
      }
    });

    return Array.from(eventsMap.values());
  }, [filteredEvents, venues]);

  return processedEvents;
};
