import React from "react";
import Notes from "./Notes";

function Home(props) {
  const {bhavesh} = props;
  console.log(bhavesh);
  return (
    <div>
      <Notes/>
    </div>
  );
}

export default Home;
