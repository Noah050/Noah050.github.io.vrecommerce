function cartAdd(item) {
    var item1 = item;
    var itemDisplay = document.createElement("h3");
    itemDisplay.innerHTML = item1;
    document.querySelector(".display").appendChild(itemDisplay);
  }
