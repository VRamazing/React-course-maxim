import TabButton from "../components/TabButton.jsx"
import {useState} from "react"
import { EXAMPLES } from "../data.js";
import Section from "./Section.jsx";
import Tabs from "./Tabs.jsx";

export default function Example(){
    let [selectedContent, setselectedContent] =  useState("");

    function handleClick(selectedButton){
      setselectedContent(selectedButton)
    }
    return (
        <Section id="examples" title={"Examples"}>
            <Tabs 
                buttons={<>
                <TabButton onClick={()=>handleClick("components")} isSelected={selectedContent==="components"}>Components</TabButton>
                <TabButton onClick={()=>handleClick("jsx")} isSelected={selectedContent==="jsx"}>JSX</TabButton>
                <TabButton onClick={()=>handleClick("props")} isSelected={selectedContent==="props"}>Props</TabButton>
               <TabButton onClick={()=>handleClick("state")} isSelected={selectedContent==="state"}>State</TabButton></>}>
            
            {selectedContent ? (
                <div id="tab-content">
                <h3>{EXAMPLES[selectedContent].title}</h3>
                <p>{EXAMPLES[selectedContent].description}</p>
                <pre>
                    <code>{EXAMPLES[selectedContent].code}</code>
                </pre>
                </div>
            ) : <p> Please select a topic. </p>}
            
            </Tabs>
            
        </Section>  
    )
}