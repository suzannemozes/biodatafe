import React from "react";
import Facts from './component/Facts/Facts'

function App() {
  const facts = [
    {
      title: "dgr date of birth",
      people: ["DGR, LGR"],
      place: "unknown",
      year: 1828,
      month: 12,
      day: 12,
    },
    {
      title: "dgr date of birth",
      people: ["DGR, LGR"],
      place: "unknown",
      year: 1828,
      month: 12,
      day: 12
    },
    {
      title: "dgr date of birth",
      people: ["DGR, LGR"],
      place: "unknown",
      year: 1828,
      month: 12,
      day: 12
    },
    {
      title: "dgr date of birth",
      people: ["DGR, LGR"],
      place: "unknown",
      year: 1828,
      month: 12,
      day: 12
    },
  ];

  return (
    <div className="App">
      <h2>Let's do this</h2>
      <Facts items={facts}/>
    
    </div>
  );
}

export default App;
