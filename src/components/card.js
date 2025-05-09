import { navigateTo } from "../router.js";

export const card = (character) => {
  const li = document.createElement("li");
  li.innerHTML =  
  ` 
    <li class ="card-li" itemscope itemtype="Personaje" id=${character.id}>
      <div class="card">
        <div class="imgs-container"> 
          <span>Chatea conmigo...</span>
          <a id="click-img">
            <img src=${character.imageUrl} alt=${character.name} class="card-img">
          </a>
          <img src="https://github.com/MilenPG/DEV014-dataverse-chat/blob/image-migration/src/assets/card_barcode.png?raw=true" alt="barcode" class="barcode-img">
        </div> 
        <div class="card-text"> 
          <h3 itemprop="name" class="card-tittle">${character.name}</h3>
          <div class="p-box">
            <p1 itemprop="nenType"><span>Tipo de Nen: </span>${character.facts.nenType}</p1>
            <p2 itemprop="ocupation"><span>Ocupación: </span>${character.facts.ocupation}</p2>
            <p3 itemprop="abilities"><span>Habilidades: </span>${character.extraInfo.abilities}</p3>
          </div>  
        </div>
      </div>
    </li>
  `;

  /*- ¿Qué quiero? Que el click me lleve a otra vista
- Para que el click sepa a dónde tiene que ir: */
  const clickImg = li.querySelector("#click-img");
  clickImg.addEventListener("click", () => {
  //Crear variable para el identificador. Necesita tener un identificador (en este caso, el id de cada personaje)
    const characterId = character.id 
    // - Crear una nueva URL que incluya la ruta de la vista y el identificador respectivo (query param + identificador {key+value} === ?id=character.id). "Llevar" el identificador a la url
    const chatPath = '/chat-character' + '?id=' + characterId;
    console.log(chatPath)
    // - Actualizar el historial de navegación en la URL (con history.pushState({}, '', newUrl)) para sumar la nueva URL sin borrar el historial
    // - onURLchange
    navigateTo(chatPath, {id:characterId});

  });    

  return li;
};

