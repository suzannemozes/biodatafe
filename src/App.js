import React, { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MainHeader from "./components/MainHeader";
import Welcome from "./pages/Welcome";
import NewFact from './components/NewFact/NewFact';
import Facts from "./components/Facts/Facts";
import FactsPage from "./pages/FactsPage";
import FactDetail from "./pages/FactDetail";


const DUMMY_FACTS = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    description: 'lorem ipsum jkls;hjdskal;hfjdks;ajf',
    date: new Date(1898, 7, 14),
  },
  { id: 'e2', 
    title: 'New TV', 
    description: 'lorem ipsum jkls;hjdskal;hfjdks;ajf', 
    date: new Date(1898, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    description: 'lorem ipsum jkls;hjdskal;hfjdks;ajf',
    date: new Date(1898, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    description: 'lorem ipsum jkls;hjdskal;hfjdks;ajf',
    date: new Date(1899, 5, 12),
  },
];

function App() {
  const [facts, setFacts] = useState(DUMMY_FACTS);

  const addFactHandler = (fact) => {
    setFacts((prevFacts) => {
      return [fact, ...prevFacts];
    });
  };

  return (
    <div>
      <h1>Welcome to Biodata</h1>
      <MainHeader />
      <main>
        <Router>
          <Routes>
            <Route path="/welcome" element={<Welcome />} />
            <Route
              path="/facts/fact-detail/:factId"
              element={<FactDetail />}
            />
            <Route path="/factspage" element={<FactsPage />} exact />
          </Routes>
        </Router>
      </main>
      <NewFact onAddFact={addFactHandler} />
      <Facts items={facts} />
    </div>
  );
}

export default App;

// import React, { useState } from "react";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// import NewFact from "./components/NewFact/NewFact";
// import Facts from "./components/Facts/Facts";
// import Fact from "./components/Facts/Fact";
// import FactsList from "./components/Facts/FactsList";
// import MainHeader from "./components/Facts/MainHeader";
// import FactsPage from "./pages/FactsPage"
// import Welcome from "./pages/Welcome";

// const DUMMY_FACTS = [
//   {
//     id: "e1",
//     title: "Toilet Paper",
//     description: "lorem ipsum jkls;hjdskal;hfjdks;ajf",
//     date: new Date(1898, 7, 14),
//   },
//   {
//     id: "e2",
//     title: "New TV",
//     description: "lorem ipsum jkls;hjdskal;hfjdks;ajf",
//     date: new Date(1898, 2, 12),
//   },
//   {
//     id: "e3",
//     title: "Car Insurance",
//     description: "lorem ipsum jkls;hjdskal;hfjdks;ajf",
//     date: new Date(1898, 2, 28),
//   },
//   {
//     id: "e4",
//     title: "New Desk (Wooden)",
//     description: "lorem ipsum jkls;hjdskal;hfjdks;ajf",
//     date: new Date(1899, 5, 12),
//   },
// ];

// function App() {
//   const [facts, setFacts] = useState(DUMMY_FACTS);

//   const addFactHandler = (fact) => {
//     setFacts((prevFacts) => {
//       return [fact, ...prevFacts];
//     });
//   };

//   return (
//     <div>
//       <MainHeader />
//       <Router>
//         <Routes>
//           <Route path="/" element={<Welcome />} />
//           <Route path="/products" element={<FactsPage />} />
//           {/* <Route path="/" element={<Facts />} />
//           <Route path="/:id" element={<Fact />} />
//           <Route path="/:id/edit" element={<Edit />} /> */}
//         </Routes>
//       </Router>
//       {/* <NewFact onAddFact={addFactHandler} />
//       <Facts items={facts} /> */}
//     </div>
//   );
// }

// export default App;
