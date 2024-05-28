import TabButton from "../components/TabButton.jsx"
import {useState} from "react"
import { EXAMPLES } from "../data.js";

export default function Example(){
    let [selectedContent, setselectedContent] =  useState("");

    function handleClick(selectedButton){
      setselectedContent(selectedButton)
    }
    return (
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
    )
}