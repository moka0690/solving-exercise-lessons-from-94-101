const spn = document.querySelector('span');
const siblingComment = spn.nextSibling.nextSibling;
const textaContent = siblingComment.nextSibling.textContent;
 console.log(textaContent.trim());