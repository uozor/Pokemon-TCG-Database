## POKEMON TCG DATABASE
https://uozor.github.io/Pokemon-TCG-Database/


## App Title: POKEMON TCG DATABASE 

## App Description: 
Gotta catch them all! Look up any pokemon card within the database

API: THE POKÉMON TCG API and Data Sample

https://api.pokemontcg.io/v2/cards 
     
#API Snippet:{
    
    ```{
    "data": [
        {
            "id": "xy10-25",
            "name": "Alakazam-EX",
            "supertype": "Pokémon",
            "subtypes": [
                "Basic",
                "EX"
            ],
            "hp": "160",
            "types": [
                "Psychic"
            ],
            "evolvesTo": [
                "M Alakazam-EX"
            ],
            "rules": [
                "Pokémon-EX rule: When a Pokémon-EX has been Knocked Out, your opponent takes 2 Prize cards."
            ],
            "abilities": [
                {
                    "name": "Kinesis",
                    "text": "When you play M Alakazam-EX from your hand to evolve this Pokémon, before it evolves, you may put 2 damage counters on your opponent's Active Pokémon and 3 damage counters on 1 of your opponent's Benched Pokémon.",
                    "type": "Ability"
                }
            ],
            "attacks": [
                {
                    "name": "Suppression",
                    "cost": [
                        "Psychic",
                        "Colorless"
                    ],
                    "convertedEnergyCost": 2,
                    "damage": "",
                    "text": "Put 3 damage counters on each of your opponent's Pokémon that has any Energy attached to it."
                }
            ],
            "weaknesses": [
                {
                    "type": "Psychic",
                    "value": "×2"
                }
            ],
            "retreatCost": [
                "Colorless",
                "Colorless"
            ],                  "Colorless"
                    ],
                    "convertedEnergyCost": 2,
                    "damage": "",
                    "text": "Put 3 damage counters on each of your opponent's Pokémon that has any Energy attached to it."
                }
            ],
            "weaknesses": [
                {
                    "type": "Psychic",
                    "value": "×2"
                }
```

## Wireframes

https://pokemontcg.guru/

### MVP/Post MVP

### MVP

- Find a pokemon tcg api
- populate screen with user input
- App built with JS/HTML
- Styled with Flexbox/CSS
- Use fetched data from https://pokemontcg.io/
- used @mediaQuery for mobile 

### PostMVP

- Add music
- Add page flipping effect as if holding a card binder
- Add more card interaction
- Add card loading effect

## Timeframes:

- Monday: Pitch Project and begin basic code - html/css/- javascript
- Tuesday: Finish and refine basic code to be fully functional  add some color and design
- Wenesday: Finish most of project and begin to fix/study code to make code cleaner and simpler
- Thursday: Finalize Project and review over it for any additionbs that could be made.
- Friday: Submit/Present Project



## Timeframes:

- Html - Less than a day (No more than an hour) - extra time allotted for review and additions as needed
- CSS - Over three hours of work time. Css displays can change as code is updated and never truly completed
- JavaScript - More than 8 hours. Will have to constantly revist code to updat or dry up code to make it look better and run smoother
- Review and structure - throughout every major change be sure to review entire code for any breaks or errors that may appear - ongoing

## Code Snippet
Actually had an issue where my enter function would not work and could only click submit -

```
<form onsubmit="return false">
      <input class="poke" placeholder = "Pokemon Name" type="text"><button id="search" type="submit">Search</button>
    </form>
```
## Change Log

Changed background image to something with a better look for word contrast

