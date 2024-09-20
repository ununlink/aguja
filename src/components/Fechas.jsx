import { useState, useEffect } from "react";
import { getAgujaDates } from "../sanity/sanity-utils";

export default function Fechas() {
  const [agujaDatesData, setAgujaDatesData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAgujaDates()
      .then((data) => setAgujaDatesData(data))
      .catch(console.error)

      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div> ... </div>;

  return (
    <div className="text-xs md:text-sm">
      <h1 className="my-1 text-base font-bold">futuro:</h1>
      <ul>
        {agujaDatesData.length === 0 ||
        agujaDatesData.every((agujaDate) => {
          const date = new Date(agujaDate.date).toISOString().split("T")[0];
          const today = new Date().toISOString().split("T")[0];
          return today > date;
        }) ? (
          <li className="text-gray-500 dark:text-gray-400">???</li>
        ) : (
          agujaDatesData.map((agujaDate) => {
            const date = new Date(agujaDate.date).toISOString().split("T")[0];
            const today = new Date().toISOString().split("T")[0];
            if (today <= date) {
              return <DateListItem key={agujaDate._id} fecha={agujaDate} />;
            }
          })
        )}
      </ul>
      <h1 className="my-1 text-base font-bold">pasado:</h1>
      <ul>
        {agujaDatesData.map((agujaDate) => {
          const date = new Date(agujaDate.date).toISOString().split("T")[0];
          const today = new Date().toISOString().split("T")[0];
          if (today > date) {
            return <DateListItem key={agujaDate._id} fecha={agujaDate} />;
          }
        })}
      </ul>
    </div>
  );
}

function DateListItem({ fecha }) {
  return (
    <li className="mb-4 flex flex-col gap-1 md:mb-0 md:flex-row">
      <div>{fecha.date}</div>
      {fecha.name && <div className="underline">{fecha.name}</div>}
      {fecha.place && <div className="italic">@{fecha.place}</div>}
      {fecha.link && (
        <a href={fecha.link} target="_blank">
          →
        </a>
      )}
    </li>
  );
}
