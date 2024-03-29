import { CORE_CONCEPTS } from "./data.js";
import Header from "./components/Header/Header.jsx"
import CoreConcept from "./components/CoreConcepts.jsx"


function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            { CORE_CONCEPTS.map(concept => <CoreConcept {...concept}/> )}
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
