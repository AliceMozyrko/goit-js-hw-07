const liItems = document.querySelectorAll("li.item")
const lengthItems = liItems.length
console.log(`Number of categories: ${lengthItems}`)

liItems.forEach(item => {
  const title = item.querySelector("h2").textContent
  console.log(`Category: ${title}`)
  const liQuantity = item.querySelectorAll("li").length
  console.log(`Elements: ${liQuantity}`)
}) 
