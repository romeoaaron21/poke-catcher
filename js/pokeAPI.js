const pokeAPI = (function() {
  const baseURL = 'https://pokeapi.co/api/v2';

  function handleErrors(res) {
    if (!res.ok) {
      throw Error(res.statusText);
    } else {
      return res;
    }
  }

  function get(path) {
    return fetch(`${baseURL}/${path}`)
      .then(handleErrors)
      .then(res => res.json());
  }

  return {
    get,
  };
})();
