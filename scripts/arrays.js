console.log(data);
// 1. instead of creating the cards manually, we should use array functions to convert the data into cards
const cont = document.getElementById("countRes")

function outputCards(info) {

    const card_temp = ` <div class="col">
                        <div class="card" style="width: 18rem;">
                        <h3 class="card-header">${info.title}</h3>
                         <div class="card-body">
                        <h5 class="card-title">${info.prefix}${info.number}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${info.prefix}</h6>
                        <p class="card-text">${info.desc}</p>
                        <a href="${info.url}" class="card-link">Class link</a>
                        <a href="#" class="card-link">Another link</a>
                        </div>
                        <div class="card-footer">${info.prereqs}</div>
                        </div>
                        </div>`

    //document.write(card_temp);

    const resultsContainer = document.getElementById("#filtered-results");
    resultsContainer.innerHTML += card_temp;
    



}

data.items.forEach(element => outputCards(element));
cont.innerHTML += data.items.length.toString()



// 2. maybe we only show those that match the search query?


const searchButton = document.getElementById("search-button")
searchButton.addEventListener("click", (ev) => {
  console.log(ev)
  ev.preventDefault();
  const qfield = document.querySelector('input[name="query-text"]');
  const queryText = qfield.value;

  var newArray = data.items.filter(x => x.title.includes(queryText));

  const clear = document.getElementById("#filtered-results");
  clear.replaceChildren()

  newArray.forEach(element => outputCards(element));

  cont.replaceChildren()
  cont.innerHTML += newArray.length.toString()


})

// 3. we update the result count and related summary info as we filter