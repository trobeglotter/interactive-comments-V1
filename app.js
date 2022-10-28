const countUp = document.querySelector('.counter-button-increase');
const countDown = document.querySelector('.counter-button-decrease');

let counter = 0;
countUp.addEventListener('click', () => {
	counter++;
	document.querySelector('.counter-count').innerHTML = counter;
});
countDown.addEventListener('click', () => {
	counter--;
	document.querySelector('.counter-count').innerHTML = counter;
});

const replyButton = document.querySelector('.reply-container');

replyButton.addEventListener('click', () => {
	// let p = document.createElement('p');

	// p.textContent = 'some text';

	// document.getElementById('container').append(p);

	// console.log(
	// 	document.getElementById('comment-container-outter').parentNode.nodeName
	// );

	let node = document.getElementById('container');
	let clone = node.cloneNode(true);

	document.body.appendChild(clone);

	const thing = new Object();
	console.log(thing);

	// let containerDiv = document.createElement('div');
	// containerDiv.className = 'new-container';
	// containerDiv.innerText = 'one';
	// document.body.appendChild(containerDiv);
	// let newComment = document.getElementById('NEW-COMMENT');
	// newComment.className = 'new-container';
	// newComment.innerText = 'two';
	// let commentContainerOutterDiv = '<p>three</p>';
	// commentContainerOutterDiv.className = 'new-container';
	// containerDiv.insertAdjacentHTML('afterend', commentContainerOutterDiv);
});
