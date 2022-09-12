import React, { useState, useEffect } from "react";
import axios from "axios";

export default class ContentService {
  getAllData() {
    return axios
      .get("http://localhost:5000/getAllData")
      .then((res) => res.data);
  }
}

// const ContentService = () => {
//   const { setDate, setCasesNew } = useStateContext();

//   useEffect(() => {
//     let data = [];
//     fetch("http://localhost:5000/getAllData")
//       .then((result) => result.json())
//       // .then(data=> JSON.parse(JSON.stringify(data)))
//       .then((data) => {
//         setDate(data.dateArray);
//         setCasesNew(data.casesNewArray);
//       })

//       .catch((err) => console.log(err));
//   }, []);
//   return;
// };

// export default ContentService;
