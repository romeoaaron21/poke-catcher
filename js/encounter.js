const encounter = (function() {
  function getRandomEncounter(possible) {
    if (!possible.length) {
      return false;
    }

    return possible[Math.floor(Math.random() * possible.length)]
  }

  return {
    getRandomEncounter,
  }
})()
