const pokemon = (function() {
  function get(name) {
    return pokeAPI.get(`pokemon/${name}`)
  }

  return {
    get,
  }
})();
