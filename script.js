const pokemon = document.body.querySelector(".poke").value.toLowerCase();
const body = document.body;
//const images = document.body.querySelector.value.id
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
 //https://api.pokemontcg.io/v2/cards?q=name:gardevoir
})

*/
document.querySelector('#searchPoke').addEventListener('click', () => {
  fetch(`https://api.pokemontcg.io/v2/cards?q=name:${pokemon}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

      //const poke = document.querySelector(".poke").value;
      //document.querySelector(".poke").value;
      //console.log(poke)
      data.data.forEach(card => {
        if (pokemon.toLowerCase() == card.name.toLowerCase()) {
          let option = document.createElement('img');
          option.textContent = `${card.name} ${card.id}`;
          option.src = card.images.small;
          option.classList.add('gen');
          body.append(option);
          //sel.classList.remove('hide');
          let images = option.value;
          option.addEventListener('click', function () {
            images = option.value;
            console.log(images);
          });
        }
               
      });
    });
});//catch ((err) => console.log(err));


//Object.entries pokemon.forEach(), =>

//for () {
  //const image = document.createElement('div');
  //pokeName.textContent = `name:${name}[]`;
    //document.createElement('div');


