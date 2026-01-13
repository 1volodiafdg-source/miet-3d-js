import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { events, type EventType } from "../data/events";
import { getFavorites, toggleFavorite } from "../lib/favorites";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Checkbox } from "../components/ui/checkbox";

function formatDate(iso: string) {
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString("ru-RU", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}

export default function EventPage() {
  const { id } = useParams();
  const event = useMemo<EventType | undefined>(
    () => events.find((e: EventType) => e.id === id),
    [id]
  );

  const [favorites, setFavorites] = useState<string[]>(() => getFavorites());

  if (!event) {
    return (
      <div className="min-h-screen bg-zinc-950 text-zinc-100">
        <div className="mx-auto max-w-3xl px-4 py-10">
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6">
            <div className="text-xl font-semibold">Событие не найдено</div>
            <div className="mt-4">
              <Button asChild className="rounded-xl">
                <Link to="/">На главную</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const fav = favorites.includes(event.id);

  const onToggleFav = () => {
    toggleFavorite(event.id);
    setFavorites(getFavorites());
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <div className="mx-auto max-w-5xl px-4 py-10">
        <div className="mb-4">
          <Button asChild variant="secondary" className="rounded-xl">
            <Link to="/">← Назад</Link>
          </Button>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6">
            <div className="flex flex-wrap items-center gap-2">
              <h1 className="text-2xl font-bold">{event.title}</h1>
              <Badge>{event.type}</Badge>
              {event.age ? <Badge variant="secondary">{event.age}</Badge> : null}
            </div>

            <div className="mt-3 text-zinc-300">
              <div>
                <span className="text-zinc-400">Дата:</span>{" "}
                {formatDate(event.dateISO)}
              </div>
              <div className="mt-1">
                <span className="text-zinc-400">Адрес:</span> {event.place}
              </div>
              {event.price ? (
                <div className="mt-1">
                  <span className="text-zinc-400">Цена:</span> {event.price}
                </div>
              ) : null}
            </div>

            <p className="mt-4 text-zinc-200">{event.description}</p>

            <div className="mt-6 flex items-center gap-3">
              <Checkbox checked={fav} onCheckedChange={onToggleFav} />
              <span className="text-sm text-zinc-300">
                Добавить в избранное
              </span>
              <span className="ml-auto text-sm">{fav ? "★" : "☆"}</span>
            </div>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6">
            <div className="text-lg font-semibold">Карта / медиа</div>
            <div className="mt-3 aspect-video rounded-xl border border-zinc-800 bg-zinc-950/50 grid place-items-center text-zinc-400">
              Здесь будет карта/видео (заглушка)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
