import React, { useState, useEffect } from "react";
import "./Prueba.css";

const PruebasHooks = ({ contador, setContador }) => {
  const arr = [
    "https://aliciagarciapsicologa.com/wp-content/uploads/2016/05/pexels-ferencz-istvan-9956293-scaled-e1636645786929-1706x1024.jpg",
    "https://cnnespanol.cnn.com/wp-content/uploads/2023/04/Pearl-la-perra-mas-pequena-del-mundo-e1681331902252.jpg?quality=100&strip=info",
    "https://definicion.de/wp-content/uploads/2014/07/sapo-1.jpg",
    "https://avatarenergia.com/wp-content/uploads/2020/10/el-rey-de-la-selva.jpg",
    "https://img.huffingtonpost.es/files/og_thumbnail/uploads/2023/06/20/la-pantera-en-realidad-es-un-jaguar-o-un-leopardo.jpeg",
  ];

  const [img, setImg] = useState(arr[contador - 1]);
  const maxContador = arr.length;

  useEffect(() => {
    setImg(arr[contador - 1]);
  }, [contador, arr]);

  const handleIzquierda = () => {
    if (contador > 1) {
      setContador(contador - 1);
    } else {
      setContador(maxContador);
    }
  };

  const handleDerecha = () => {
    if (contador < maxContador) {
      setContador(contador + 1);
    } else {
      setContador(1);
    }
  };

  return (
    <div className="container">
      <img src={img} alt="" className="img" />
      <h4 className="cont">{contador}</h4>
      <div className="botones-container">
        <button className="botones izquierda" onClick={handleIzquierda}>
          Izquierda
        </button>
        <button className="botones derecha" onClick={handleDerecha}>
          Derecha
        </button>
      </div>
    </div>
  );
};

export default PruebasHooks;
