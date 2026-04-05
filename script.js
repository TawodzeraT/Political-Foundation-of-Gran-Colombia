function showInfo(year) {
  const box = document.getElementById("infoBox");

  const data = {
    "1810": "Independence movements begin across Spanish colonies.",
    "1819": "Bolívar wins the Battle of Boyacá.",
    "1821": "Gran Colombia is created.",
    "1828": "Bolívar becomes dictator.",
    "1831": "Gran Colombia collapses."
  };

  box.innerHTML = `<h3>${year}</h3><p>${data[year]}</p>`;
}
