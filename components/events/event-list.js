import EventItem from "./event-item";
import classes from "./event-list.module.css";

function EventList({ items }) {
  return (
    <ul className={classes.list}>
      {items.map((event) => (
        <EventItem
          key={event.id}
          date={event.date}
          id={event.id}
          image={event.image}
          location={event.location}
          title={event.title}
        />
      ))}
    </ul>
  );
}

export default EventList;
