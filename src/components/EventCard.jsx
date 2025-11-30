const EventCard = ({ event }) => {
  const { top, height, left, width, startTime, endTime, name } = event;

  return (
    <div
      className="absolute z-10 border"
      data-testid="event-card"
      style={{
        top: `${top}rem`,
        height: `${height}rem`,
        left: `${left}%`,
        width: `${width}%`,
      }}
    >
      <div className="bg-blue-200 h-full flex flex-col items-center justify-center p-2 overflow-hidden">
        <p className="text-xs">
          {startTime} - {endTime}
        </p>
        <p className="text-sm font-semibold">{name}</p>
      </div>
    </div>
  );
};

export default EventCard;
