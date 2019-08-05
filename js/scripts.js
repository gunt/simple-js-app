// creating before anything else a new pokemonRepository variable
//Step 2: is Inside no need to do it again. 
var pokemonRepository = (function () {
    var repository = [

        {
            name: "Talonflame",
            height: 3.11,
            types: ['fire', 'flying']
        },

        {
            name: "Buzzwole",
            height: 7.10,
            types: ['bug', 'fighting']
        },

        {
            name: "Entei",
            height: 6.11,
            types: ['fire']
        },

    ];

    function add(pokemon) {
        // document.write(typeof repository);
        if (typeof repository === 'object') {
            repository.push(pokemon)
        } else {
            document.write('Is not an Object');
        }

    }

    function getAll() {
        return repository;
    }

    return {
        add: add,
        getAll: getAll
    };
})();

pokemonRepository.add({
    name: 'Pikachu',
    height: 1.4,
    types: ['electric']
});


//Part 2: forEach Loops // 
// console.log(pokemonRepository.getAll()); instead
pokemonRepository.getAll().forEach(function (pokemon) {
    if (pokemon.height > 7) {
        document.write('<p id="pokeH-style"> ' + pokemon.name + ' (height: ' + pokemon.height + ') Wow, that\'s big!' + '</p>');
    } else {
        document.write('<p> ' + pokemon.name + ':' + '  ' + pokemon.height + ' - ' + pokemon.types + '</p>');
    }
});