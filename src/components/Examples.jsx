import TabButton  from "./TabButton";
import {EXAMPLES} from "../data";
import {useState} from "react";
import {Section}  from "./Section";
import Tabs       from "./Tabs";

export function Examples() {
  const [selected, setSelected] = useState();
  
  function handleSelect(selectedBtn) {
	setSelected(selectedBtn);
  }
  
  let tabContent = <p>Please select a topic</p>
  if (selected) {
	tabContent = (
	  <div id={"tab-content"}>
		<h3>{EXAMPLES[selected].title}</h3>
		<p>{EXAMPLES[selected].description}</p>
		<pre>{EXAMPLES[selected].code}</pre>
	  </div>)
	
  }
  return (
	<Section title={"Examples"} id={"examples"}>
	  <Tabs
		buttons={
		  <>
			<TabButton
			  isSelected={selected === "components"}
			  onClick={() => handleSelect("components")}
			>
			  Components
			</TabButton>
			<TabButton
			  isSelected={selected === "jsx"}
			  onClick={() => handleSelect("jsx")}
			>
			  JSX
			</TabButton>
			<TabButton
			  isSelected={selected === "props"}
			  onClick={() => handleSelect("props")}
			>
			  Props
			</TabButton>
			<TabButton
			  isSelected={selected === "state"}
			  onClick={() => handleSelect("state")}
			>
			  State
			</TabButton>
		  </>
		}
	  >
		{tabContent}
	  
	  </Tabs>
	</Section>
  )
}