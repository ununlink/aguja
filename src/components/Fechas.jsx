import { useState, useEffect } from "react";
import { getAgujaDates } from "../sanity/sanity-utils";

export default function Fechas() {
  const [agujaDatesData, setAgujaDatesData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    getAgujaDates()
      .then((data) => setAgujaDatesData(data))
      .catch(console.error)

      .finally(() => setLoading(false));
  }, []);

  const futureShows = agujaDatesData
    ?.filter((agujaDate) => {
      const date = new Date(agujaDate.date).toISOString().split("T")[0];
      const today = new Date().toISOString().split("T")[0];
      return today <= date;
    })
    .sort((a, b) => new Date(a.date) - new Date(b.date));

  const pastShows = agujaDatesData?.filter((agujaDate) => {
    const date = new Date(agujaDate.date).toISOString().split("T")[0];
    const today = new Date().toISOString().split("T")[0];
    return today > date;
  });

  if (loading) return <div> ... </div>;

  return (
    <div className="text-sm md:text-2xl">
      {/* <h1 className="my-1 text-base font-bold">futuro:</h1> */}
      <ul>
        {!futureShows ? (
          <li className="text-gray-500 dark:text-gray-400">???</li>
        ) : (
          futureShows.map((agujaDate) => (
            <DateListItem key={agujaDate._id} fecha={agujaDate} />
          ))
        )}
      </ul>
      {/* <button onClick={() => setIsExpanded(!isExpanded)} className="text-sm">
        {isExpanded ? "---" : "+++"}
      </button> */}
      {isExpanded && (
        <>
          {/* <h1 className="my-1 text-base font-bold">pasado:</h1> */}
          <ul className="over text-sm">
            {pastShows.map((agujaDate) => {
              return <DateListItem key={agujaDate._id} fecha={agujaDate} />;
            })}
          </ul>
        </>
      )}
    </div>
  );
}

function DateListItem({ fecha }) {
  return (
    <li className="mb-4 flex flex-col gap-1 sm:items-center md:mb-0 md:flex-row">
      <div>{fecha.date}</div>
      {fecha.name && <div className="font-['italic']">{fecha.name}</div>}
      {fecha.place && <div className="italic">@{fecha.place}</div>}
      {fecha.link && (
        <a href={fecha.link} target="_blank">
          <img src="arrow.png" className="h-4" />
        </a>
      )}
    </li>
  );
}
