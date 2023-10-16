import React from "react";

export function Sciaga({ tytul, tresc }) {
  return (
    <div className="container bg-green-500 grid-rows-4 rounded-3xl m-10 w-1/4  ">
      <h1 className="text-4xl text-white flex justify-center ">{tytul}</h1>
      <p className="text-2xl text-white font-light justify-center flex">
        {tresc}
      </p>
    </div>
  );
}
