/*const person = {
	name: 'Andrew',
	age: 22,
	location: {
		city: 'Philadelpia',
		temp: 92
	}
};

const { name: firstname = 'Robin', age } = person;
console.log(`${firstname} is ${age}`);

const { city, temp: temperature } = person.location;
if(city && temperature) {
	console.log(`It's ${temperature} in ${city}`);
}

const book = {
	title: "Ego is the enemy",
	author: "Ryan Holiday",
	publisher: {
		name: "Panguin"
	}
}

const { name: publisherName = "Self-Published" } = book.publisher;

console.log(publisherName);*/

const address = ['229 Lakas ng Marami st.', 'Caloocan City', 'NCR', '1408'];
const [, city, state = "New York"] = address;
console.log(`You are in ${city} ${state}`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [itemName, , mediumPrice] = item;
console.log(`A medium ${itemName} costs ${mediumPrice}`);