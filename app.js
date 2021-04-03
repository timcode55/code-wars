function cakes(recipe, available) {
	let array = [];
	for (key in recipe) {
		if (!(key in available)) {
			return 0;
		} else {
			let numberOfPies = available[key] / recipe[key];
			array.push(numberOfPies);
		}
	}
	return Math.floor(Math.min(...array));
}

console.log(cakes({ flour: 500, sugar: 200, eggs: 1 }, { flour: 1200, sugar: 1200, eggs: 5, milk: 200 }));
console.log(
	cakes(
		{ cream: 200, flour: 300, sugar: 150, milk: 100, oil: 100 },
		{ sugar: 1700, flour: 20000, milk: 20000, oil: 30000, cream: 5000 }
	)
);
