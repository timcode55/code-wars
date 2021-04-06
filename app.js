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

// function order(words) {
// 	if (words.length === 0) {
// 		return '';
// 	} else {
// 		let array = words.split(' ');
// 		let newArray = [];

// 		function searchArray(itemNum) {
// 			for (let i = 0; i < array.length; i++) {
// 				if (array[i].includes(`${itemNum}`)) {
// 					newArray.push(array[i]);
// 				}
// 			}
// 		}
// 		let itemNum = 1;
// 		while (itemNum < array.length + 1) {
// 			searchArray(itemNum);
// 			itemNum++;
// 		}
// 		return newArray.join(' ');
// 	}
// }

// console.log(order('is2 Thi1s T4est 3a'));
// console.log(order('4of Fo1r pe6ople g3ood th5e the2'));
// console.log(order(''));

// b = [ 'ABAR 200', 'CDXE 500', 'BKWR 250', 'BTSQ 890', 'DRTY 600' ];
// c = [ 'A', 'B' ];

b = [ 'CBART 20', 'CDXEF 50', 'BKWRK 25', 'BTSQZ 89', 'DRTYM 60' ];
c = [ 'A', 'B', 'C', 'W' ];

function stockList(listOfArt, listOfCat) {
	let newObj = {};
	for (let item of listOfCat) {
		listOfArt.forEach((el) => {
			if (el[0] !== item) {
				newObj[item] = 0;
			}
		});
		for (let el of listOfArt) {
			if (el[0] === item && !newObj[item]) {
				newObj[item] = Number(el.split(' ')[1]);
			} else if (el[0] === item) {
				newObj[item] += Number(el.split(' ')[1]);
			}
		}
	}

	let returnObj = Object.entries(newObj);
	let finalString = '';
	returnObj.forEach((item, i) => {
		let string;

		if (i < returnObj.length - 1) {
			string = `(${item[0]} : ${item[1]}) - `;
			finalString += string;
		} else {
			anotherString = `(${item[0]} : ${item[1]})`;
			finalString += anotherString;
		}
	});
	return finalString;
}

console.log(stockList(b, c));

// function insideOut(x) {
// 	let newArray = [];
// 	let sep = x.split(' ');
// 	let inOut = sep.forEach((item) => {
// 		if (item.length < 4) {
// 			newArray.push(item);
// 		} else if (item.length % 2 === 0) {
// 			let newString = '';
// 			let middle = item.length / 2;
// 			newString +=
// 				Array.from(item.slice(0, middle)).reverse().join('') +
// 				Array.from(item.slice(middle, item.length)).reverse().join('');
// 			newArray.push(newString);
// 		} else {
// 			let newString = '';
// 			let middle = Math.round(item.length / 2);
// 			newString +=
// 				Array.from(item.slice(0, middle - 1)).reverse().join('') +
// 				item.slice(middle - 1, middle) +
// 				Array.from(item.slice(middle, item.length)).reverse().join('');
// 			newArray.push(newString);
// 		}
// 	});
// 	return newArray.join(' ');
// }

// console.log(insideOut('man i need a taxi up to ubud'));
