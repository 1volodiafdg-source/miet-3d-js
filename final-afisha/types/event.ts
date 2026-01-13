export type EventType = "concert" | "lecture" | "exhibition";

export type EventItem = {
  id: string;
  title: string;
  type: EventType;
  date: string;     // "YYYY-MM-DD"
  time?: string;    // "19:00"
  place: string;
  description: string;
  imageUrl?: string;
};
