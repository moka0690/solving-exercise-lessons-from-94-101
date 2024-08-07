
  function handleClick(event) {
    console.log(`This Is "${event.target.tagName}"`);
}
const elements = document.querySelectorAll('div, span, p, article, section');

document.body.addEventListener("click", handleClick);  
