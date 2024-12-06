import React, {useEffect, useState} from "react";

const Reloj = () => {

 const [segundos, setSegundos] = useState(0);
 useEffect(() => {
  const tiempo = setInterval(() => {
    setSegundos((segundosAnteriores) => segundosAnteriores + 1); }, 1000);
    return () => clearInterval(tiempo)
  },[]);

  const segundo1 = Math.floor(segundos % 10)
  const segundo2 = Math.floor((segundos / 10) %10) 
  const segundo3 = Math.floor((segundos / 100) %10) 
  const segundo4 = Math.floor((segundos / 1000) %10) 
  const segundo5 = Math.floor((segundos / 10000) %10) 
  const segundo6 = Math.floor((segundos / 100000) %10) 

  return (
    <div className="container">
      <div>{segundo6}</div>
      <div>{segundo5}</div>
      <div>{segundo4}</div>
      <div>{segundo3}</div>
      <div>{segundo2}</div>
      <div>{segundo1}</div>
    </div>
  );
};

export default Reloj;
