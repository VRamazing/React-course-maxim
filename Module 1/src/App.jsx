import { CORE_CONCEPTS, EXAMPLES } from "./data.js";
import Header from "./components/Header/Header.jsx"
import CoreConcept from "./components/CoreConcepts.jsx"
import TabButton from "./components/TabButton.jsx"
import {useState} from "react"

function App() {
  let [selectedContent, setselectedContent] =  useState("");

  function handleClick(selectedButton){
    setselectedContent(selectedButton)
  }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            { CORE_CONCEPTS.map(concept => <CoreConcept key={concept.title} {...concept}/> )}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <li><TabButton onSelect={()=>handleClick("components")} isSelected={selectedContent==="components"}>Components</TabButton></li>
            <li><TabButton onSelect={()=>handleClick("jsx")} isSelected={selectedContent==="jsx"}>JSX</TabButton></li>
            <li><TabButton onSelect={()=>handleClick("props")} isSelected={selectedContent==="props"}>Props</TabButton></li>
            <li><TabButton onSelect={()=>handleClick("state")} isSelected={selectedContent==="state"}>State</TabButton></li>

          </menu>
          {selectedContent ? (
            <div id="tab-content">
            <h3>{EXAMPLES[selectedContent].title}</h3>
            <p>{EXAMPLES[selectedContent].description}</p>
            <pre>
              <code>{EXAMPLES[selectedContent].code}</code>
            </pre>
          </div>
          ) : <p> Please select a topic. </p>}
        </section>     
      </main>
    </div>
  );
}

export default App;
