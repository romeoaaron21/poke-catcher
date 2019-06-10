// // fetch('https://pokeapi.co/api/v2/')
// // .then(response => response.json())
// // .then(regions => {
// //   console.log(regions)
// // })
// // .catch(error => console.error(error))


// const pokeAPI = function(){
//     const base = 'https://pokeapi.co/api/v2/';

//     fetch(`${base}region`)
//     .then(response => response.results)
//     .then(regions => {
//         return (regions.name)
//     })
//     .catch(error => console.error(error))

// }


// // const baseUrl = 'https://pokeapi.co/api/v2/';

// // const regions = function(){
// //     return fetch(`${baseUrl}/${name}`)
// //     .then(response => response.json())
// //     .then(response => {
// //     console.log(response)
// //     })
// //     .catch(error => console.error(error))
// // }




// // fetch(`${base}region`)
// //     .then(response => response.json())
// //     .then(region => {
// //         return select.append(`<option value="${region.name}">${region.name}</option>`)
// //     })
// //     .catch(error => console.error(error))




// const pokeAPI = (function() {
//     const baseURL = 'https://pokeapi.co/api/v2';
  
  
// fetch(`${baseURL}/${path}`)
//         .then(response => response.json());
//     })

//   const regions = (function() {
//       return pokeAPI
//         .get('region')
//         .then(data => data.results)
//         .catch(console.error);
  
//     function get(name) {
//       return pokeAPI.get(`region/${name}`);
//     }
//   })();

const base = 'https://pokeapi.co/api/v2/';

  const pokeAPI = (function(){
    fetch(base)
    .then(response => response.json())

    .then(function(data){
        let regions = data.results;

        let regionList = regions.map(region => {
            return regionList;
        })
        })
    .catch(error => console.error(error))
})