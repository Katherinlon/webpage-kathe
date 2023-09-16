
import { useState } from "react";
import Navbar from "../../Common/navbar/Navbar";
import PruebasHooks from "../../Common/pruebasHooks/PruebasHooks";

export const Home = () => {

  const [ contador, setContador ] = useState(1)

  return (
    <>
      <Navbar />
      <PruebasHooks contador={contador}  setContador={setContador}/>
    </>
  );
};


