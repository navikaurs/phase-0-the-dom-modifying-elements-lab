const main = document.querySelector('#main')

main.remove();

const newHeader = document.createElement('h1');

newHeader.innerHTML = "Blake is the champion"
newHeader.id = "victory";
document.body.appendChild(newHeader);
