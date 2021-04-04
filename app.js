// function cakes(recipe, available) {
// 	let array = [];
// 	for (key in recipe) {
// 		if (!(key in available)) {
// 			return 0;
// 		} else {
// 			let numberOfPies = available[key] / recipe[key];
// 			array.push(numberOfPies);
// 		}
// 	}
// 	return Math.floor(Math.min(...array));
// }

// console.log(cakes({ flour: 500, sugar: 200, eggs: 1 }, { flour: 1200, sugar: 1200, eggs: 5, milk: 200 }));
// console.log(
// 	cakes(
// 		{ cream: 200, flour: 300, sugar: 150, milk: 100, oil: 100 },
// 		{ sugar: 1700, flour: 20000, milk: 20000, oil: 30000, cream: 5000 }
// 	)
// );

function order(words) {
	if (words.length === 0) {
		return '';
	} else {
		let array = words.split(' ');
		let newArray = [];

		function searchArray(itemNum) {
			for (let i = 0; i < array.length; i++) {
				if (array[i].includes(`${itemNum}`)) {
					newArray.push(array[i]);
				}
			}
		}
		let itemNum = 1;
		while (itemNum < array.length + 1) {
			searchArray(itemNum);
			itemNum++;
		}
		return newArray.join(' ');
	}
}

console.log(order('is2 Thi1s T4est 3a'));
console.log(order('4of Fo1r pe6ople g3ood th5e the2'));
console.log(order(''));
