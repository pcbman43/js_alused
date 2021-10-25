const name = "Anna Karutina";
const age = 40;
const job = "Kutseõpetaja";
const city = "Tartu";

let html;

// es5

html = '<ul>' +
			'<li>' + name + '</li>' +
			'<li>' + age + '</li>' +
			'<li>' + job + '</li>' +
			'<li>' + city + '</li>' +
		'</ul>';


// es6 - template string

html = `
	<ul>
		<li>Name: ${name}</li>
		<li>Age: ${age}</li>
		<li>Job: ${job}</li>
		<li>City: ${city}</li>
	</ul>
`;

console.log(html);

document.body.innerHTML = html;