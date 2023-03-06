import React from "react";
import { allRuns } from "../data";

function sortRunsByDate(list, order = "asc") {
  const order2 = order === "asc" ? 1 : order === "desc" ? -1 : 0;
  // list [run, run, run] -- run: { id, label, date }
  const listSorted = [...list].sort((a, b) =>
    a.date > b.date ? -1 * order2 : a.date < b.date ? 1 * order2 : 0
  );
  return listSorted;
}

export default function App() {
  const runs = allRuns.map(function (run, index) {
    return (
      <li key={run.id}>
        {run.label}, {run.date}
      </li>
    );
  });

  // trying to copy allRuns without mutating it
  const runsSorted = sortRunsByDate(allRuns);
  const runsDesc = sortRunsByDate(allRuns, "desc");
  const runsUnsorted = sortRunsByDate(allRuns, "Daniel");

  // seeing what's passed to the browser
  console.log("allRuns: ", allRuns);
  console.log("runs: ", runs);
  console.log("runsSorted: ", runsSorted);

  return (
    <div>
      <ul>{runs}</ul>
      <RunsOrderedList runs={runsDesc} />
      <RunsOrderedList runs={runsSorted} />
      <RunsOrderedList runs={runsUnsorted} />
    </div>
  );
}

function RunsOrderedList(props) {
  return (
    <ol>
      {props.runs.map(function (run) {
        return <ListRendering run={props.children} />;
      })}
    </ol>
  );
}

function ListRendering(props) {
  return (
    <li key={props.id}>
      {props.label}, {props.date}
    </li>
  );
}
