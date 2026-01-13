import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { events, type EventType } from "../data/events";
import { getFavorites, toggleFavorite } from "../lib/favorites";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";

const TYPES: Array<EventType["type"] | "Все"> = [
  "Все",
  "Концерт",
  "Лекция",
  "Выставка",
  "Встреча",
];

function formatDate(iso: string) {
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString("ru-RU", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}

export default function HomePage() {
  const [query, setQuery] = useState("");
  const [type, setType] = useState<(typeof TYPES)[number]>("Все");
  const [favorites, setFavorites] = useState<string[]>(() => getFavorites());

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return events
      .filter((e) => (type === "Все" ? true : e.type === type))
      .filter((e) =>
        q.length === 0
          ? true
          : e.title.toLowerCase().includes(q) ||
            e.place.toLowerCase().includes(q) ||
            e.description.toLowerCase().includes(q)
      )
      .sort((a, b) => a.dateISO.localeCompare(b.dateISO));
  }, [query, type]);

  const onToggleFav = (id: string) => {
    toggleFavorite(id);
    setFavorites(getFavorites());
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <div className="mx-auto max-w-5xl px-4 py-10">
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6">
          <h1 className="text-3xl font-bold">Афиша города</h1>
          <p className="mt-2 text-zinc-400">
            Найди событие, открой карточку и добавляй в избранное.
          </p>

          <div className="mt-6 grid gap-3 md:grid-cols-3">
            <input
              className="w-full rounded-xl border border-zinc-800 bg-zinc-950/60 px-4 py-2 text-zinc-100 outline-none focus:border-zinc-600"
              placeholder="Поиск по названию / месту..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />

            <div className="flex flex-wrap gap-2 md:col-span-2 md:justify-end">
              {TYPES.map((t) => (
                <button
                  key={t}
                  onClick={() => setType(t)}
                  className={[
                    "rounded-xl border px-3 py-2 text-sm transition",
                    t === type
                      ? "border-zinc-600 bg-zinc-800"
                      : "border-zinc-800 bg-zinc-950/40 hover:border-zinc-700",
                  ].join(" ")}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {filtered.map((e) => {
            const fav = favorites.includes(e.id);
            return (
              <div
                key={e.id}
                className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-5"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h2 className="text-xl font-semibold">{e.title}</h2>
                      <Badge>{e.type}</Badge>
                      {e.age ? (
                        <Badge variant="secondary">{e.age}</Badge>
                      ) : null}
                    </div>

                    <div className="mt-2 text-sm text-zinc-400">
                      <div>Дата: {formatDate(e.dateISO)}</div>
                      <div>Адрес: {e.place}</div>
                      {e.price ? <div>Цена: {e.price}</div> : null}
                    </div>
                  </div>

                  <button
                    className={[
                      "rounded-xl border px-3 py-2 text-sm transition",
                      fav
                        ? "border-amber-500/60 bg-amber-500/10"
                        : "border-zinc-800 bg-zinc-950/40 hover:border-zinc-700",
                    ].join(" ")}
                    onClick={() => onToggleFav(e.id)}
                    title="Избранное"
                  >
                    {fav ? "★" : "☆"}
                  </button>
                </div>

                <p className="mt-3 line-clamp-3 text-zinc-300">
                  {e.description}
                </p>

                <div className="mt-4">
                  <Button asChild className="rounded-xl">
                    <Link to={`/event/${e.id}`}>Открыть</Link>
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {filtered.length === 0 ? (
          <div className="mt-6 text-center text-zinc-400">
            Ничего не найдено.
          </div>
        ) : null}
      </div>
    </div>
  );
}