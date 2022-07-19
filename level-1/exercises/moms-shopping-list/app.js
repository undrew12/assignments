const form = document.addItem

console.log(form)

form.addEventListener("submit", function(event){
    event.preventDefault()

    const title = form.title.value
    const listItem = document.createElement('li')
    form.title.value = ""
    listItem.textContent = title  
    
    document.getElementsByTagName("ul")[0].append(listItem)
    let deleteB = document.createElement("button")
    deleteB.textContent = "X"
    listItem.append(deleteB)
    deleteB.addEventListener("click", () => {
        listItem.remove("li");
    })
})