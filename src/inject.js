const buttonText = "Add to Calendar"
function init() {
    
   const addButton =  document.createElement("button")
   addButton.classList.add("button")
   addButton.classList.add("btn")
   addButton.classList.add("btn--secondary-alt")
    addButton.innerHTML = buttonText 
    addButton.style = "font-weight: 700;"
    addButton.addEventListener("click", saveEvent)
    document.getElementsByClassName("text-content")[0].prepend(addButton)
}
function saveEvent(){
    if (document.getElementsByClassName("page-node-type-event").length == 0) {
        return
    }
    const name = toTitleCase(document.getElementsByClassName("hero__title")[0].textContent.trim())
    const location = toTitleCase(document.getElementsByClassName("event__location")[0].textContent.replace("Campus", "Campus ").trim())
    const description = document.getElementsByClassName("text-content")[0].textContent.replace(buttonText,"").trim()
    const times = document.getElementsByTagName("time")
    const start = new Date(times[0].getAttribute("datetime") * 1000)
    const end = new Date(times[1].getAttribute("datetime") * 1000)
    var cal = ics();
    cal.addEvent(name, description, location, start, end);
    cal.download(name.toLowerCase().replace(" ", "-").replace(" ","-"));
}
function toTitleCase(str) {
        return str.replace(
            /\w\S*/g,
            function(txt) {
                return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
            }
        );
    }
init();
