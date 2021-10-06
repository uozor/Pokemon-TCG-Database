POKEMON TCG DATABASE
https://uozor.github.io/Pokemon-TCG-Database/
______________________________________________________________=>

### App Title: POKEMON TCG DATABASE 

### App Description: Look up any pokemon card with a name

API: THE POKÉMON TCG API
     https://api.pokemontcg.io/v2/cards 
     
API Snippet:{
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
            ],
            "convertedRetreatCost": 2,
            "set": {
                "id": "xy10",
                "name": "Fates Collide",
                "series": "XY",
                "printedTotal": 124,
                "total": 125,
                "legalities": {
                    "unlimited": "Legal",
                    "expanded": "Legal"
                },
                "ptcgoCode": "FCO",
                "releaseDate": "2016/05/02",
                "updatedAt": "2018/09/03 11:49:00",
                "images": {
                    "symbol": "https://images.pokemontcg.io/xy10/symbol.png",
                    "logo": "https://images.pokemontcg.io/xy10/logo.png"
                }
            },
            "number": "25",
            "artist": "PLANETA",
            "rarity": "Rare Holo EX",
            "nationalPokedexNumbers": [
                65
            ],
            "legalities": {
                "unlimited": "Legal",
                "expanded": "Legal"
            },
            "images": {
                "small": "https://images.pokemontcg.io/xy10/25.png",
                "large": "https://images.pokemontcg.io/xy10/25_hires.png"
            },
            "tcgplayer": {
                "url": "https://prices.pokemontcg.io/tcgplayer/xy10-25",
                "updatedAt": "2021/10/04",
                "prices": {
                    "holofoil": {
                        "low": 1.59,
                        "mid": 3.54,
                        "high": 27.91,
                        "market": 3.6,
                        "directLow": 4.43
                    }
                }
            },
            "cardmarket": {
                "url": "https://prices.pokemontcg.io/cardmarket/xy10-25",
                "updatedAt": "2021/10/04",
                "prices": {
                    "averageSellPrice": 4.95,
                    "lowPrice": 1.5,
                    "trendPrice": 4.53,
                    "germanProLow": null,
                    "suggestedPrice": null,
                    "reverseHoloSell": null,
                    "reverseHoloLow": null,
                    "reverseHoloTrend": 5.19,
                    "lowPriceExPlus": 3.75,
                    "avg1": 2.99,
                    "avg7": 4.59,
                    "avg30": 5.1,
                    "reverseHoloAvg1": 2.5,
                    "reverseHoloAvg7": 5.88,
                    "reverseHoloAvg30": 4.83
                }
            }
        },
# Pokémon TCG SDK

*Now Supporting Version 2 of the Pokémon TCG API!*

[![pokemontcg-developers on discord](https://img.shields.io/badge/discord-pokemontcg--developers-738bd7.svg)](https://discord.gg/dpsTCvg)
[![npm version](https://badge.fury.io/js/pokemontcgsdk.svg)](https://badge.fury.io/js/pokemontcgsdk)
[![Build Status](https://travis-ci.org/PokemonTCG/pokemon-tcg-sdk-javascript.svg?branch=master)](https://travis-ci.org/PokemonTCG/pokemon-tcg-sdk-javascript)

This is the Pokémon TCG SDK Javascript implementation. It is a wrapper around the Pokémon TCG API of [pokemontcg.io](http://pokemontcg.io/).

## Installation

    npm install --save pokemontcgsdk

## Usage

### Configuration

```js
import pokemon from 'pokemontcgsdk'

pokemon.configure({apiKey: '123abc'})
```

### Cards

#### Get a single card by ID
```js
pokemon.card.find('base1-4')
.then(card => {
    console.log(card.name) // "Charizard"
})
```

#### Filter cards via the q parameter
```js
pokemon.card.where({ q: 'name:blastoise' })
.then(result => {
    console.log(result.data[0].name) // "Blastoise"
})
```

#### Filter cards via the q parameter and specific page
```js
pokemon.card.where({ q: 'name:blastoise', pageSize: 10, page: 3 })
.then(result => {
    console.log(result.data[0].name) // "Blastoise"
})
```

#### Automatically page through card data

```js
pokemon.card.all({ q: 'name:blastoise' })
    .then((cards) => {
        console.log(cards[0].name) // "Blastoise"
    })
```

Using the `all` function, pagination happens automatically, and the result will simply contain the data and no pagination info.

### Sets

#### Get a single set by ID
```js
pokemon.set.find('base1')
.then(set => {
    console.log(set.name) // "Base"
})
```

#### Filter sets via the q parameter
```js
pokemon.set.where({ q: 'series:base' })
.then(result => {
    console.log(result.data[0].name) // "Base"
})
```

#### Filter cards via the q parameter and specific page
```js
pokemon.set.where({ q: 'series:base', pageSize: 1, page: 1 })
.then(result => {
    console.log(result.data[0].name) // "Base"
})
```

#### Automatically page through card data

```js
pokemon.set.all({ q: 'series:base' })
    .then((cards) => {
        console.log(cards[0].name) // "Base"
    })
```

Using the `all` function, pagination happens automatically, and the result will simply contain the data and no pagination info.

### Supertypes

```js
pokemon.supertype.all()
```

### Subtypes

```js
pokemon.subtype.all()
```

### Types

```js
pokemon.type.all()
```

### Rarity

```js
pokemon.rarity.all()
```

Please refer to https://docs.pokemontcg.io for more information on query syntax and what fields are available.

### Development

- ([nwb](https://github.com/insin/nwb))

Build tasks are in npm scripts:

    npm run build
    npm run test
    
    
    
MVP
_____________________________________ =>
App built with JS/CSS/HTML
Styled WITH Flexbox
Use fetched data from https://pokemontcg.io/
used @mediaQuery

###
Fulfill the build requirements you have specified in your MVP.
Deployed site on Github Pages.
At least 30 commits in your project repository
###
A README.md file that contains your project worksheet, a link to your live, deployed site, and any necessary installation instructions such as npm i.

Wireframes: The proposed layout and design of your app. Create mockups for your views. If your are creating multiple views including both desktop and mobile formats, and consider whether or not you need to account for landscape and portrait orientations. Please use a digital tool to complete your wireframe.

MVP: A list of features you will need to build in order to meet the Minimum Viable Product. This will be the rubric your project will be graded against.
Post-MVP: A list of additional/advanced features you would like to include in your app after you have met MVP.

Goals: 
Monday: Pitch Project and begin basic code - html/css/javascript
Tuesday: Finish and refine basic code to be fully functional - add some color and design
Wenesday: Finish most of project and begin to fix/study code to make code cleaner and simpler
Thursday: Finalize Project and review over it for any additionbs that could be made.
Friday: Submit Project



Timeframes:

html - Less than a day (No more than an hour) - extra time allotted for review and additions as needed
Css - Over three hours of work time. Css displays can change as code is updated and never truly completed
JavaScript - mor than 8 hours. Will have to constantly revist code to updat or dry up code to make it look better and run smoother
