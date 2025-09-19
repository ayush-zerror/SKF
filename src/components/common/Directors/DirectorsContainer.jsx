import React from "react";
import DirectorCard from "./DirectorCard";

const DirectorsContainer = ({ data }) => {
  return (
    <div id="directors_container">
      {data?.map((director,index) => (
        <DirectorCard key={index} data={director} />
      ))}
    </div>
  );
};

export default DirectorsContainer;
