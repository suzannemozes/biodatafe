import React from "react";
import CreateFact from "./CreateFact";

function Facts(props) {
  return (
    <div>
      <CreateFact
        title={props.items[0].title}
        people={props.items[0].people}
        date={props.items[0].date}
      />
      <CreateFact
        title={props.items[1].title}
        people={props.items[1].people}
        date={props.items[1].date}      
      />
      <CreateFact
        title={props.items[2].title}
        people={props.items[2].people}
        date={props.items[2].date}
     />
      </div>
    );
}

export default Facts;