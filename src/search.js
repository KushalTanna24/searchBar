import React, { useState } from "react";

const Search = () => {
  const arr = [
    { name: "Kushal", address: "India" },
    { name: "Gal", address: "U" },
    { name: "Jeel", address: "India" },
  ];

  const columns = ["name", "address"];

  const [result, setResult] = useState();

    const changeHandler = (e) => {
      console.log(e.target.value);
      const filteredList = arr.filter((el) => {
        console.log(columns.length);
        for (let index = 0; index < columns.length; index++) {
          const key = columns[index];
          if (el[key].includes(e.target.value)) {
            return true;
          }
        }
        return false;
      });
      setResult(filteredList);
    };

  return (
    <div>
      <input type="text" onChange={changeHandler} />
      {result?.length ? (
        <ul>
          {result?.map((el) => {
            return (
              <li key={el.name}>
                {el.name} , {el.address}
              </li>
            );
          })}
        </ul>
      ) : (
        <ul>
          {arr.map((el) => {
            return (
              <li key={el.name}>
                {el.name}, {el.address}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Search;
