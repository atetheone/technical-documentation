
let js_button = document.getElementById("#js_btn"),
    list_items = document.getElementById("list_items");

var clickMainButton = (element) => {
    console.log(js_button.textContent);
    if (element.className === "unclicked"){
        addClass(list_items, "visible");
        element.className = "clicked"
    } else {
        addClass(list_items, "hidden")
        element.className = "unclicked";
    }
}

function addClass(element, clsName) {
    element.className = clsName;
}
      

console.log("HELLOOOOOOOOO");