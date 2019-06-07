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


regions.all().then(regions => {
    regionsSelect.innerHTML = regions
      .map(reg => {
        return `<option value="${reg.name}">${reg.name}</option>`;
      })
      .join('');
    regionsSelect.dispatchEvent(new Event('change'));
  });