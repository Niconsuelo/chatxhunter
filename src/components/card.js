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
          <img src="https://raw.githubusercontent.com/Niconsuelo/chatxhunter/main/src/assets/card_barcode.png" alt="barcode" class="barcode-img">
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

  const clickImg = li.querySelector("#click-img");
  clickImg.addEventListener("click", () => {
    const characterId = character.id 
    const chatPath = '/chat-character' + '?id=' + characterId;
    navigateTo(chatPath, {id:characterId});

  });    

  return li;
};

