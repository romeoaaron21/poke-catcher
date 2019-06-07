const api = {
  pokemon,
  locations,
  regions,
};

const gameState = {
  possibleEncounters: [],
  currentEncounter: undefined,
  captured: [],
};

const regionsSelect = document.getElementById('regions');


regionsSelect.addEventListener('change', function(e) {
  api.regions.get(e.target.value).then(region => {
    locationsSelect.innerHTML = region.locations
      .map(loc => {
        return `<option value="${loc.name}">${loc.name}</option>`;
      })
      .join('');
    locationsSelect.dispatchEvent(new Event('change'));
  });
});