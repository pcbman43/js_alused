let val;

val = document.querySelectorAll('li');

const oddLi = document.querySelectorAll('li:nth-child(odd)');

const evenLi = document.querySelectorAll('li:nth-child(even)');

oddLi.forEach(function(li){
	li.style.background = '#ddd';
});

for(let i = 0; i < evenLi.length; i++){
	evenLi[i].style.background = '#f4f4f4';
}