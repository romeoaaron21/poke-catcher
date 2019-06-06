const regions = (function() {
  function all() {
    return pokeAPI
      .get('region')
      .then(data => data.results)
      .catch(console.error);
  }

  function get(name) {
    return pokeAPI.get(`region/${name}`);
  }

  return {
    all,
    get,
  };
})();
