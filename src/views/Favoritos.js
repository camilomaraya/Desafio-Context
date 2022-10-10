import { useContext } from "react";
import Context from "../Context";

export default function Favoritos() {
  const {fotos, setFotos} = useContext(Context);

  const deleteFavorito = (id) =>{
    const fotoIndex = fotos.findIndex((elem) => elem.fotos)
    // fotos.splice(fotoIndex, 1);
    fotos[fotoIndex].favorito = !fotos[fotoIndex].favorito
    setFotos([...fotos]);
  };
  
  return (
    <div>
      <h1>Fotos favoritas</h1>
      <div className="p-3 galeria grid-columns-4">
          {fotos
            .filter((elem) => elem.favorito)
            .map((elem, i) => (
              <img 
                src={elem.src}
                desc=""
                onClick={()=> deleteFavorito(elem.id)}
                key={i}
              />
            ))}   
      </div>
    </div>
  );
}
