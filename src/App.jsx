import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
// import Img1 from "./assets/3-30147_shapes-graphics-png-images-vector-shapes-design-png.png";

function App() {
  // abc
  let [count, setCount] = useState(0);
  // const [userName, setUserName] = useState("Jaffar");

  // useEffect()

  // const [obj, setObj] = useState({
  //   name: "Jaffar",
  // });

  // const foo = () => {
  //   obj.age = 23;
  //   console.log("obj", obj);
  //   setObj({ ...obj });

  //   // setUserName((prev) =>  "Sufiyan");
  //   // console.log("userName", userName);
  //   // setCount((prevValue) => count++);
  //   // console.log(count, "count");
  // };

  // console.log("ReRender");

  // useEffect(() => {}, []);

  let [isUIHide, setisUIHide] = useState(false);

  return (
    <>
      {isUIHide ? null : <Header />}
      {/* <h1>HELLO WORLD</h1> */}

      {/* <h1 onClick={() => setCount(++count)}>COUNT {count} </h1> */}
      <button onClick={() => setisUIHide(true)}>HIDE</button>
      {/* <h1 onClic  k={foo}>CLICK</h1> */}

      {/* <h1 onClick={() => foo()}> {userName} </h1> */}
      {/* <img src={Img1} alt="" /> */}
      {/* <img src="/image1.png" alt="" /> */}
    </>
  );
}

export default App;
