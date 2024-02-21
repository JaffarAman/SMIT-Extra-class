import React, { useEffect, useState } from "react";

const Header = () => {
  let [counter, setcounter] = useState(0);

  //   useEffect(() => {
  //     foo();
  //   }, []);

  //   useEffect(() => {
  //     foo();
  //   }, [counter , ]);

  useEffect(() => {
    console.log("Online");

    return () => {
      console.log("offline");
    };
  }, []);

  const foo = () => {
    console.log("first time");
  };
  //   foo();
  return (
    <>
      <h1>HELLO WORLD</h1>
      <button onClick={() => setcounter(++counter)}> counter: {counter}</button>
    </>
  );
};

export default Header;
