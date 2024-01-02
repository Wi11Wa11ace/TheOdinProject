const container = document.querySelector('#container');

const content = document.createElement('div');
const redp = document.createElement('p');
const blueh = document.createElement('h3');
const div = document.createElement('div');
const divh = document.createElement('h1');
const divp = document.createElement('p');

content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

redp.textContent = 'Hey I\'m red!';
redp.style.color = 'red';

blueh.textContent = 'I\'m a blue h3!';
blueh.style.color = 'blue';

div.style.border = '1px solid black';
div.style.backgroundColor = 'pink';

divh.textContent = 'I\'m in a div';

divp.textContent = 'ME TOO!';

div.appendChild(divh);
div.appendChild(divp);

container.appendChild(content);
container.appendChild(redp);
container.appendChild(blueh);
container.appendChild(div);