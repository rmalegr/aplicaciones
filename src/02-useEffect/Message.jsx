import React, { useEffect, useState } from 'react';
//Este ejercicio explica cuando el componente deja de existir
export const Message = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  useEffect(() => {
    //cuando se quiere limiar alguna referencia de memoria se emipieza por aqui
    const onMouseMove = ({ x, y }) => {
      // const coords = { x, y };
      setCoords({ x, y });
    };

    console.log('Message Mounted');
    //que el componente el componente la primera vez
    //cuando el componente se crea el componente se monta , vamos a crear el Match Move
    window.addEventListener('mousemove', onMouseMove);
    // voy a estar escuchando los movimientos del mouse
    //hay un listener que esta pendiente de este evento por eso no desconecta el componente
    //fuga de memoria ..
    return () => {
      //second
      console.log('Message unMounted');
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <>
      <h3>Usuario ya exite</h3>
      {JSON.stringify(coords)}
    </>
  );
};
