import React, { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import api from './services/facts-api'

import MainHeader from "./components/MainHeader";
import Welcome from "./pages/Welcome";
import NewFact from "./components/NewFact/NewFact";
import Facts from "./components/Facts/Facts";
import FactsPage from "./pages/FactsPage";
import FactDetail from "./pages/FactDetail";
import FactEdit from "./components/Facts/FactEdit"
import NewCharacter from "./components/NewCharacter/NewCharacter";
import Characters from "./components/Characters/Characters";
import CharactersPage from "./pages/CharactersPage"
import CharacterEdit from "./components/Characters/CharacterEdit"



function App() {
  const [facts, setFacts] = useState([]);
  const [characters, setCharacters] = useState([]);

  const addFactHandler = (fact) => {
    setFacts((prevFacts) => {
      return [fact, ...prevFacts];
    });
  };

  const addCharacterHandler = (character) => {
    setCharacters((prevCharacters) => {
      return [character, ...prevCharacters];
    });
  };

  return (
    <div>
      <h1>Bio Data</h1>
      <h4> the biographer's best friend </h4>
      <MainHeader />
      <main>
        <Router>
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/home" element={<Welcome />} />
            <Route path="/facts" element={<FactsPage />} />
            <Route path="/facts/fact-detail/:factId" element={<FactDetail />} />
            <Route path="/facts/fact-detail/:factId/delete" element={<FactEdit />} />
            <Route path="/factspage" element={<FactsPage />} exact />

            <Route path="/characters" element={<CharactersPage />} />
            <Route path="/facts/fact-detail/:factId" element={<FactDetail />} />
            <Route path="/facts/fact-detail/:factId/delete" element={<FactEdit />} />
            <Route path="/factspage" element={<FactsPage />} exact />
            {/* <Route path="/facts" element={< />} /> */}
           
          </Routes>
        </Router>
      </main>
      <NewFact onAddFact={addFactHandler} />
      <NewCharacter onAddCharacter={addCharacterHandler} />
    </div>
  );
}

export default App;


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
