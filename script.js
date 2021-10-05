const poke = document.body.querySelector(".poke").value;
const body = document.body
/*export default {
  host: 'https://api.pokemontcg.io/v2'
}  
import configuration from './configure';
import queryBuilder from './queryBuilder';

const configure = ({apiKey}) => {
    configuration.apiKey = apiKey;
};

export default {
    configure,
    card: queryBuilder('cards'),
    set: queryBuilder('sets'),
    type: queryBuilder('types'),
    subtype: queryBuilder('subtypes'),
    rarity: queryBuilder('rarities'),
    supertype: queryBuilder('supertypes')
} 

pokemon.card.find('base1-4')
.then(card => {
    console.log(card.name) // "Charizard"

})
*/
document.querySelector('#searchPoke').addEventListener('click', () => {
  fetch('https://api.pokemontcg.io/v2/cards')
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      const poke = document.querySelector(".poke").value;
      //document.querySelector(".poke").value;
    
      console.log(poke)
      data.data.forEach(card => {
        if (poke.toLowerCase() == card.name.toLowerCase()) {
          let option = document.createElement('img');
          //option.textContent = `${card.name} ${card.id}`;
          option.src = card.images.small;
          option.classList.add('gen');
          body.append(option);
          //sel.classList.remove('hide');
          images.src = option.value;
          option.addEventListener('click', function () {
            images.src = option.value;
            console.log(images.src);
          });
        }
               
      });
    });
});//catch ((err) => console.log(err));
