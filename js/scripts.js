

// var pokemonRepository = (function () {
//     var repository = [];
  
//     function add(pokemon) {
//       repository.push(pokemon);
//     }
  
//     function getAll() {
//       return repository;
//     }
  
//     return {
//       add: add,
//       getAll: getAll
//     };
//   })();

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

// recode - wrap your code to a IIFE // the same but with the clean code // last paragraph
function getAll() {
    return repository;
}

//Part 2: forEach Loops // 
repository.forEach(function (property) {
    document.write('<p> ' + property.name + ':' + '  ' + property.height + ' - ' + property.types + '</p>');
});
