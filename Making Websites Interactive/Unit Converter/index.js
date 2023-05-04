const inputEl = document.getElementById("num-input");
const convertBtn = document.getElementById("converter-btn");
const lowerEl = document.getElementById("lower");

const units = [
  {
    name: "l",
    metric: "meters",
    imperial: "feet",
  },
  {
    name: "v",
    metric: "liters",
    imperial: "gallons",
  },
  {
    name: "m",
    metric: "kilograms",
    imperial: "pounds",
  },
];

convertBtn.onclick = () => {
  let { value } = inputEl;

  for (let unit of units) {
    lowerEl.innerHTML += createUnitCard(unit, value);
  }
};

function createUnitCard(unit, v) {
  const { name, metric, imperial } = unit;
  const c = converUnit(name);

  return `
  <div class="unit-card">
          <div class="card-title">${
            name === "l" ? "Length" : name === "v" ? "Volume" : "Mass"
          } (${titleCase(metric)}/${titleCase(imperial)})</div>
          <p class="card-description">${v} ${metric} = ${(v * c).toFixed(
    3
  )} ${imperial} | ${v} ${imperial} = ${(v / c).toFixed(3)} ${metric}</p>
        </div>
  `;
}

function converUnit(u) {
  if (u === "l") {
    return 3.281;
  } else if (u === "v") {
    return 0.264;
  } else if (u === "m") {
    return 2.204;
  }
}

function titleCase(str) {
  str = str.toLowerCase().split(" ");
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  return str.join(" ");
}
