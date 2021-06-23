import React from "react";
import Data from "./archive/archive.json";
function Archive({ archive }) {
  console.log(archive);
  const archiveData = Data.filter(
    (item) =>
      item.year.includes(archive[0]) &&
      item.author.includes(archive[1]) &&
      item.photographer.includes(archive[2])
  );
  return (
    <div>
      {archiveData.map((item, index) => (
        <div key={index}>
          <p>author : {item.author}</p>
          <p>year : {item.year}</p>
          <p>photographer : {item.photographer}</p>
          <p>content : {item.content}</p>
        </div>
      ))}
    </div>
  );
}

export default Archive;
