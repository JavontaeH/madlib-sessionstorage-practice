//story
// It had been a hard, {adjective} day on the {silly word} trail. The cowboys drove a herd of {plural noun} across the dry plains, kicking up {noun} along the way as they looked for somewhere to bed down.

const main = document.querySelector("main");
const div = document.querySelector("div");

main.addEventListener("click", (event) => {
  if (event.target.id.startsWith("tellStory")) {
    const madlib = {
      adjective: `${document.querySelector(".adjective").value}`,
      sillyword: `${document.querySelector(".sillyword").value}`,
      pluralnoun: `${document.querySelector(".pluralnoun").value}`,
      noun: `${document.querySelector(".noun").value}`,
    };
    //set/save to sessionStorage
    setDataToStorage(madlib);

    //invoke renderStory
    if (
      document.getElementById("input").value.length === 0 ||
      document.getElementById("input2").value.length === 0 ||
      document.getElementById("input3").value.length === 0 ||
      document.getElementById("input4").value.length === 0
    ) {
      alert("empty");
    } else {
      renderStory();
    }
  }
  // start over button should prompt input fields
  if (event.target.id.startsWith("startOver")) {
    renderInputs();
  }
});

const getDataFromStorage = (dataKey) => {
  //use JSON.parse()
  return JSON.parse(sessionStorage.getItem(dataKey));
};

const setDataToStorage = (dataObj) => {
  //use JSON.stringify()
  sessionStorage.setItem("input", JSON.stringify(dataObj));
};

const clearStorage = (dataKey) => {
  sessionStorage.removeItem(dataKey);
};

const renderInputs = () => {
  clearStorage("input");
  // show inputs fields
  main.innerHTML = `<label for="adjective">Adjective:</label>
  <input type="text" id="input" class="adjective" name="adjective"><br><br>
  <label for="sillyword">Silly Word:</label>
  <input type="text" class="sillyword" id="input2" name="sillyword"><br><br>
    <label for="pluralnoun">Plural Noun:</label>
  <input type="text" id="input3" class="pluralnoun" name="pluralnoun"><br><br>
    <label for="noun">Noun:</label>
  <input type="text" id="input4" class="noun" name="noun"><br><br>
  `;

  //show 'Tell Story' button
  main.innerHTML += `<button id="tellStory">Tell A Story!</button>`;
};

const renderStory = () => {
  //get from sessionStorage
  let madlib = getDataFromStorage("input");
  console.log(madlib);
  //show the story
  main.innerHTML = ` It had been a hard, ${madlib.adjective} day on the ${madlib.sillyword} trail. The cowboys drove a herd of ${madlib.pluralnoun} across the dry plains, kicking up ${madlib.noun} along the way as they looked for somewhere to bed down.<br><br>`;
  //show startOver button
  main.innerHTML += `<button id="startOver">Start Over!</button>`;
  //startOver will invoke renderInputs()
};

renderInputs();
