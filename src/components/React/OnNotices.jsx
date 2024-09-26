import React, { useState, useEffect } from 'react';
import { getOnNoticias } from '../../services/getData';

const NoticiasActualizadas = () => {
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    const unsubscribe = getOnNoticias((nuevasNoticias) => {
      setNoticias(nuevasNoticias);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div>
      {noticias.map(noticia => (
        <div key={noticia.id}>
          <h3>{noticia.titulo}</h3>
          <p>{noticia.cuerpo.completo}</p>
        </div>
      ))}
    </div>
  );
};

export default NoticiasActualizadas;
