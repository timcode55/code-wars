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

// b = [ 'CBART 20', 'CDXEF 50', 'BKWRK 25', 'BTSQZ 89', 'DRTYM 60' ];
// c = [ 'A', 'B', 'C', 'W' ];

// function stockList(listOfArt, listOfCat) {
// 	let newObj = {};
// 	for (let item of listOfCat) {
// 		listOfArt.forEach((el) => {
// 			if (el[0] !== item) {
// 				newObj[item] = 0;
// 			}
// 		});
// 		for (let el of listOfArt) {
// 			if (el[0] === item && !newObj[item]) {
// 				newObj[item] = Number(el.split(' ')[1]);
// 			} else if (el[0] === item) {
// 				newObj[item] += Number(el.split(' ')[1]);
// 			}
// 		}
// 	}

// 	let returnObj = Object.entries(newObj);
// 	let finalString = '';
// 	returnObj.forEach((item, i) => {
// 		let string;

// 		if (i < returnObj.length - 1) {
// 			string = `(${item[0]} : ${item[1]}) - `;
// 			finalString += string;
// 		} else {
// 			anotherString = `(${item[0]} : ${item[1]})`;
// 			finalString += anotherString;
// 		}
// 	});
// 	return finalString;
// }

// console.log(stockList(b, c));

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

// function solution(value) {
// 	let array = value.toString().split('');
// 	for (let i = array.length; i < 5; i++) {
// 		array.unshift('0');
// 	}
// 	return `Value is ${array.join('')}`;
// }

// console.log(solution(5)); //"Value is 00005")
// console.log(solution(1204)); //"Value is 01204")
// console.log(solution(109)); //"Value is 00109")
// console.log(solution(0)); //"Value is 00000")

// function digitize(n) {
// 	let array = n.toString().split('');
// 	return array.map((item) => {
// 		return Number(item);
// 	});
// }

// console.log(digitize(123)); // [1,2,3])
// console.log(digitize(1)); // [1])
// console.log(digitize(0)); // [0])
// console.log(digitize(1230)); // [1,2,3, 0])
// console.log(digitize(8675309)); // [8,6,7,5,3,0,9])
// function solution(nums) {
// 	if (nums === null || nums.length === 0) {
// 		return [];
// 	} else {
// 		return nums.sort((a, b) => {
// 			return a - b;
// 		});
// 	}
// }

// console.log(solution([ 1, 2, 3, 10, 5 ])); //, [1,2,3,5,10])
// console.log(solution(null)); //, [])
// console.log(solution([])); //, [])
// console.log(solution([ 20, 2, 10 ])); //, [2,10,20])
// console.log(solution([ 2, 20, 10 ])); //, [2,10,20])

// function well(x) {
// 	let array = [];
// 	x.forEach((item) => {
// 		item.forEach((el) => {
// 			if (typeof el === Number) {
// 				array.push(el);
// 			} else {
// 				array.push(el.toString().toLowerCase());
// 			}
// 		});
// 	});
// 	let count = 0;

// 	array.forEach((item) => {
// 		if (item === 'good') {
// 			count += 1;
// 		}
// 	});
// 	if (!count) {
// 		return 'Fail!';
// 	} else if (count > 2) {
// 		return 'I smell a series!';
// 	} else {
// 		return 'Publish!';
// 	}
// }

// console.log(well([ [ 16, bad, CAPS, bad, cheat, bAd, BAD, bad, DAB, cheat, CAPS ] ])); //, 'Fail!');
// console.log(well([ [ 'gOOd', 'bad', 'BAD', 'bad', 'bad' ], [ 'bad', 'bAd', 'bad' ], [ 'GOOD', 'bad', 'bad', 'bAd' ] ])); //,
// ('Publish!');

// console.log(well([ [ 'gOOd', 'bAd', 'BAD', 'bad', 'bad', 'GOOD' ], [ 'bad' ], [ 'gOOd', 'BAD' ] ])); //,
// ('I smell a series!');

// function fib(n) {
// 	if (n < 2) {
// 		return n;
// 	}
// 	return fib(n - 1) + fib(n - 2);
// }

// console.log(fib(8));

// var list1 = [
// 	{ firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C' },
// 	{
// 		firstName: 'Anna',
// 		lastName: 'R.',
// 		country: 'Liechtenstein',
// 		continent: 'Europe',
// 		age: 52,
// 		language: 'JavaScript'
// 	},
// 	{ firstName: 'Ramon', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby' },
// 	{ firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C' }
// ];

// var answer = { C: 2, JavaScript: 1, Ruby: 1 };

// function countLanguages(list) {
// 	let newObj = {};
// 	const array = list.forEach((item) => {
// 		if (!newObj[item.language]) {
// 			newObj[item.language] = 1;
// 		} else {
// 			newObj[item.language] += 1;
// 		}
// 	});
// 	return newObj;
// }

// console.log(countLanguages(list1)); //, answer);

// function pipeFix(numbers) {
// 	let result = [];
// 	for (let i = Math.min(...numbers); i <= Math.max(...numbers); i++) {
// 		result.push(i);
// 	}
// 	return result;
// }

// console.log(pipeFix([ 1, 2, 3, 5, 6, 8, 9 ])); //,[1,2,3,4,5,6,7,8,9]);
// console.log(pipeFix([ 1, 2, 3, 12 ])); //,[1,2,3,4,5,6,7,8,9,10,11,12]);
// console.log(pipeFix([ 6, 9 ])); //,[6,7,8,9]);
// console.log(pipeFix([ -1, 4 ])); //,[-1,0,1,2,3,4]);
// console.log(pipeFix([ 1, 2, 3 ])); //,[1,2,3]);

// return masked string
// function maskify(cc) {
// 	let pound = '';
// 	let newString = `${cc.slice(-4)}`;
// 	if (cc.length < 5) {
// 		return cc;
// 	} else {
// 		for (let i = 0; i < cc.length - 4; i++) {
// 			pound += '#';
// 		}
// 	}
// 	return pound + newString;
// }

// console.log(maskify('4556364607935616')); //, '############5616');
// console.log(maskify('1')); //, '1');
// console.log(maskify('11111')); //, '#1111');
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// function chunk(array, size) {
// 	const chunked = [];
// 	for (let element of array) {
// 		const last = chunked[chunked.length - 1];

// 		if (!last || last.length === size) {
// 			chunked.push([ element ]);
// 		} else {
// 			last.push(element);
// 		}
// 	}
// 	return chunked;
// }

// console.log(chunk([ 1, 2, 3, 4, 5 ], 2));
// function anagrams(stringA, stringB) {
// 	let simpleA = stringA.replace(/[^\w]/g, '').toLowerCase();
// 	let simpleB = stringB.replace(/[^\w]/g, '').toLowerCase();
// 	let sortA = simpleA.split('').sort().join('');
// 	let sortB = simpleB.split('').sort().join('');
// 	if (sortA === sortB) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }

// console.log(anagrams('rail safety', 'fairy tales'));
// console.log(anagrams('RAIL! SAFETY!', 'fairy tales'));
// console.log(anagrams('Hi there', 'Bye there'));
// function capitalize(str) {
// 	let array = str.split(' ');
// 	// console.log(array);
// 	let result = array.map((item) => {
// 		return item[0].toUpperCase() + item.slice(1);
// 	});

// 	return result.join(' ');
// }

// console.log(capitalize('a short sentence')); // --> 'A Short Sentence'
// console.log(capitalize('a lazy fox')); // --> 'A Lazy Fox'
// console.log(capitalize('look, it is working!')); // --> 'Look, It Is Working!'

// function isIsogram(str) {
// 	return new Set(str.toUpperCase()).size === str.length;
// }

// console.log(isIsogram('Dermatoglyphics')); //, true );
// console.log(isIsogram('isogram')); //, true );
// console.log(isIsogram('aba')); //, false, "same chars may not be adjacent" );
// console.log(isIsogram('moOse')); //, false, "same chars may not be same case" );
// console.log(isIsogram('isIsogram')); //, false );
// console.log(isIsogram('')); //, true, "an empty string is a valid isogram" );

// function accum(s) {
// 	let newString = '';
// 	function addLower(letter, idx) {
// 		let addString = '';
// 		for (let j = 0; j < idx; j++) {
// 			addString += letter;
// 		}
// 		return addString;
// 	}
// 	for (let i = 0; i < s.length; i++) {
// 		if (i === s.length - 1) {
// 			newString += s[i].toUpperCase() + addLower(s[i].toLowerCase(), i);
// 		} else {
// 			newString += s[i].toUpperCase() + addLower(s[i].toLowerCase(), i) + '-';
// 		}
// 	}
// 	return newString;
// }

// console.log(accum('ZpglnRxqenU')); //, "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu");
// console.log(accum('NyffsGeyylB')); //, "N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb");
// console.log(accum('MjtkuBovqrU')); //, "M-Jj-Ttt-Kkkk-Uuuuu-Bbbbbb-Ooooooo-Vvvvvvvv-Qqqqqqqqq-Rrrrrrrrrr-Uuuuuuuuuuu");
// console.log(accum('EvidjUnokmM')); //, "E-Vv-Iii-Dddd-Jjjjj-Uuuuuu-Nnnnnnn-Oooooooo-Kkkkkkkkk-Mmmmmmmmmm-Mmmmmmmmmmm");
// console.log(accum('HbideVbxncC')); //, "H-Bb-Iii-Dddd-Eeeee-Vvvvvv-Bbbbbbb-Xxxxxxxx-Nnnnnnnnn-Cccccccccc-Ccccccccccc");

// function disemvowel(str) {
// 	let vowels = 'aeiou';
// 	let newString = '';
// 	for (let item of str) {
// 		if (!vowels.includes(item.toLowerCase())) {
// 			newString += item;
// 		}
// 	}
// 	return newString;
// }

// console.log(disemvowel('This website is for losers LOL!')); //, "Ths wbst s fr lsrs LL!")
// console.log(disemvowel("No offense but,\nYour writing is among the worst I've ever read")); //, "N ffns bt,\nYr wrtng s mng th wrst 'v vr rd")
// console.log(disemvowel('What are you, a communist?')); //, "Wht r y,  cmmnst?")

// function stray(numbers) {
// 	let obj = {};
// 	for (let item of numbers) {
// 		obj[item] ? (obj[item] += 1) : (obj[item] = 1);
// 	}
// 	for (let key in obj) {
// 		if (obj[key] === 1) {
// 			return Number(key);
// 		}
// 	}
// }

// console.log(stray([ 1, 1, 2 ]));

// function duplicateCount(text) {
// 	let obj = {};
// 	if (text.length < 1) return 0;
// 	let adjust = text.toLowerCase().split('').sort().join('');
// 	for (let item of adjust) {
// 		obj[item] ? (obj[item] += 1) : (obj[item] = 1);
// 	}
// 	let values = Object.values(obj).filter((item) => {
// 		return item > 1;
// 	});
// 	return values.length;
// }

// console.log(duplicateCount('')); //, 0);
// console.log(duplicateCount('abcde')); //, 0);
// console.log(duplicateCount('aabbcde')); //, 2);
// console.log(duplicateCount('aabBcde')); //, 2,"should ignore case");
// console.log(duplicateCount('Indivisibility')); //, 1)
// console.log(duplicateCount('Indivisibilities')); //, 2, "characters may not be adjacent")

// function arrayDiff(a, b) {
// 	let newArray = [];
// 	if (a.length === 0) return [];
// 	if (b.length === 0) return a;
// 	for (let item of a) {
// 		if (!b.includes(item)) {
// 			newArray.push(item);
// 		}
// 	}
// 	return newArray;
// }

// console.log(arrayDiff([], [ 4, 5 ])); //, [], "a was [], b was [4,5]");
// console.log(arrayDiff([ 3, 4 ], [ 3 ])); //, [4]//, "a was [3,4], b was [3]");
// console.log(arrayDiff([ 1, 8, 2 ], [])); //, [1,8,2]//, "a was [1,8,2], b was []");
// console.log(arrayDiff([ 1, 2, 3 ], [ 1, 2 ])); //, [3]//, "a was [1,2,3], b was [1,2]")

// function partsSums(ls) {
// 	let final = [];

// 	const helper = (input) => {
// 		if (input.length === 0) {
// 			return [ 0 ];
// 		}
// 		let sum = input.reduce((acc, val) => {
// 			return acc + val;
// 		});

// 		final.push(sum);
// 		helper(input.slice(1));
// 	};

// 	helper(ls);
// 	return final.concat(0);
// }

// function partsSums(ls) {
// 	let result = [];
// 	if (ls.length === 0) return [ 0 ];
// 	let sum = ls.reduce((acc, val) => {
// 		return acc + val;
// 	});
// 	result.push(sum);
// 	for (let i = 0; i < ls.length; i++) {
// 		result.push(result[i] - ls[i]);
// 	}
// 	return result;
// }

// console.log(partsSums([])); //, [0]);
// console.log(partsSums([ 0, 1, 3, 6, 10 ])); //, [20, 20, 19, 16, 10, 0]);
// console.log(partsSums([ 1, 2, 3, 4, 5, 6 ])); //, [21, 20, 18, 15, 11, 6, 0]);
// console.log(partsSums([ 744125, 935, 407, 454, 430, 90, 144, 6710213, 889, 810, 2579358 ])); //,
// //[10037855, 9293730, 9292795, 9292388, 9291934, 9291504, 9291414, 9291270, 2581057, 2580168, 2579358, 0]);

// var moveZeros = function (arr) {
//   let result = [];
//   let count = 0;
//   for (let item of arr) {
//     if (item === 0) {
//       count++;
//     } else {
//       result.push(item);
//     }
//   }

//   return result.concat(Array(count).fill(0));
// };

// var moveZeros = function (arr) {
//   return arr
//     .filter((item) => item !== 0)
//     .concat(arr.filter((item) => item === 0));
// };
// var moveZeros = function (arr) {
//   let result = [];
//   let count = 0;

//   const test = arr.filter((item) => {
//     return item !== 0;
//   });
//   for (let item of arr) {
//     if (item === 0) {
//       count++;
//     }
//   }
//   result.push(...test);
//   result.push(...Array(count).fill(0));
//   return result;
// };

// console.log(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1])); //,
// console.log(moveZeros([0, 1, 0, 3, 12])); //,
//JSON.stringify([ 1, 2, 1, 1, 3, 1, 0, 0, 0, 0 ])

// function broken(x) {
// 	let newString = '';
// 	for (let item of x) {
// 		item === '1' ? (newString += '0') : (newString += '1');
// 	}
// 	return newString;
// }

// console.log(broken('1')); //, "0");
// console.log(broken('10000000101101111110011001000')); //, "01111111010010000001100110111");
// console.log(broken('100010')); //, "011101");

// function gordon(a) {
// 	let result = [];
// 	for (let item of a.split(' ')) {
// 		result.push(item.replace(/[a]/g, '@').replace(/[eiou]/g, '*').toUpperCase().concat('!!!!'));
// 	}
// 	return result.join(' ');
// }

// console.log(gordon('What feck damn cake')); //, 'WH@T!!!! F*CK!!!! D@MN!!!! C@K*!!!!');
// console.log(gordon('are you stu pid')); //, '@R*!!!! Y**!!!! ST*!!!! P*D!!!!');
// console.log(gordon('i am a chef')); //, '*!!!! @M!!!! @!!!! CH*F!!!!');

// function last(x) {
// 	let array = x.split(' ');
// 	return array.sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1));
// }

// console.log(last('man i need a taxi up to ubud')); //, ['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up']);
// console.log(last('what time are we climbing up the volcano')); //, ['time', 'are', 'we', 'the', 'climbing', 'volcano', 'up', 'what']);
// console.log(last('take me to semynak')); //, ['take', 'me', 'semynak', 'to']);

// s = 'Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill';
// s =
// 	'Alexis:Wahl;John:Bell;Victoria:Schwarz;Abba:Dorny;Grace:Meta;Ann:Arno;Madison:STAN;Alex:Cornwell;Lewis:Kern;Megan:Stan;Alex:Korn';

// function meeting(s) {
// 	let newArray = [];
// 	for (let item of s.split(';')) {
// 		newArray.push(item.split(':'));
// 	}
// 	let result = newArray.sort(
// 		(a, b) =>
// 			a[1].toLowerCase() > b[1].toLowerCase()
// 				? 1
// 				: a[1].toLowerCase() === b[1].toLowerCase() ? (a[0] > b[0] ? 1 : -1) : -1
// 	);
// 	console.log(result, 'result');
// 	let finalString = '';
// 	for (let el of result) {
// 		finalString += `(${el[1].toUpperCase()}, ${el[0].toUpperCase()})`;
// 	}
// 	return finalString;
// }

// console.log(meeting(s));

// function inArray(array1, array2) {
// 	let newArray = [];
// 	for (let item of array1) {
// 		if (array2.join(',').includes(item)) {
// 			newArray.push(item);
// 		}
// 	}
// 	return newArray.sort();
// }

// a2 = [ 'lively', 'alive', 'harp', 'sharp', 'armstrong' ];

// a1 = [ 'xyz', 'live', 'strong' ];
// console.log(inArray(a1, a2)); //, ["live", "strong"])
// a1 = [ 'live', 'strong', 'arp' ];
// console.log(inArray(a1, a2)); //, ["arp", "live", "strong"])
// a1 = [ 'tarp', 'mice', 'bull' ];
// console.log(inArray(a1, a2)); //, [])
// function filterLongWords(sentence, n) {
// 	return sentence.split(' ').filter((item) => item.length > n);
// }

// console.log(filterLongWords('The quick brown fox jumps over the lazy dog', 4)); //, ['quick', 'brown', 'jumps']);

// function twistedSum(n) {
// 	if (!n) return 0;
// 	let total = 0;
// 	if (n > 9) {
// 		for (let i = 0; i <= 9; i++) {
// 			total += i;
// 		}
// 		for (let j = 10; j <= n; j++) {
// 			let spl = j.toString().split('');
// 			let sumSplit = spl.reduce((acc, val) => {
// 				return Number(acc) + Number(val);
// 			});
// 			total += sumSplit;
// 		}
// 	} else {
// 		for (let m = 1; m <= n; m++) {
// 			total += m;
// 		}
// 	}

// 	return total;
// }

// console.log(twistedSum(3)); //, 6, "n = 3"); });
// console.log(twistedSum(10)); //, 46, "n = 10"); });
// console.log(twistedSum(11)); //, 48, "n = 11"); });
// console.log(twistedSum(12)); //, 51, "n = 12"); });

// function cleanString(s) {
// 	if (s.length === 0) return '';
// 	let array = [];
// 	for (let i = 0; i < s.length; i++) {
// 		if (s[i] === '#') {
// 			array.pop();
// 		} else {
// 			array.push(s[i]);
// 		}
// 	}
// 	return array.join('');
// }

// console.log(cleanString('abc#d##c')); //, "ac")
// console.log(cleanString('abc####d##c#')); //, "" )

// function test(...args) {
// 	console.log(args);
// }

// console.log(test('test1', 'test2'));

// function shorter_reverse_longer(a, b) {
// 	if (a.length >= b.length) {
// 		return `${b}${a.split('').reverse().join('')}${b}`;
// 	} else {
// 		return `${a}${b.split('').reverse().join('')}${a}`;
// 	}
// }

// console.log(shorter_reverse_longer('first', 'abcde')); //, "abcdetsrifabcde");
// console.log(shorter_reverse_longer('hello', 'bau')); //, "bauollehbau");
// console.log(shorter_reverse_longer('abcde', 'fghi')); //, "fghiedcbafghi");

// function count(string) {
// 	let result = {};
// 	for (let el of string) {
// 		if (!result[el]) {
// 			result[el] = 1;
// 		} else {
// 			result[el] += 1;
// 		}
// 	}
// 	return result;
// }

// console.log(count('aba')); //, { a: 2, b: 1 });
// console.log(count('')); //, {});

// function highAndLow(numbers) {
// 	let array = numbers.split(' ');
// 	return [ Math.max(...array), Math.min(...array) ].join(' ');
// }

// console.log(highAndLow('4 5 29 54 4 0 -214 542 -64 1 -3 6 -6')); //, "542 -214");
// function matrix(array) {
// 	let copy = array.slice();
// 	let index = 0;
// 	for (let item of copy) {
// 		item[index] >= 0 ? (item[index] = 1) : (item[index] = 0);
// 		index++;
// 	}
// 	return copy;
// }

// console.log(
// 	matrix([
// 		[ -1, 4, -5, -9, 3 ],
// 		[ 6, -4, -7, 4, -5 ],
// 		[ 3, 5, 4, -9, -1 ],
// 		[ 1, 5, -7, -8, -9 ],
// 		[ -3, 2, 1, -5, 6 ]
// 	]),
// 	[ [ 0, 4, -5, -9, 3 ], [ 6, 0, -7, 4, -5 ], [ 3, 5, 1, -9, -1 ], [ 1, 5, -7, 0, -9 ], [ -3, 2, 1, -5, 1 ] ]
// );
// console.log(
// 	matrix([
// 		[ -1, 4, -5, -9, 3 ],
// 		[ 6, 8, -7, 4, -5 ],
// 		[ 3, 5, 1, -9, -1 ],
// 		[ 1, 5, -7, 15, -9 ],
// 		[ -3, 2, 1, -5, -6 ]
// 	]),
// 	[ [ 0, 4, -5, -9, 3 ], [ 6, 1, -7, 4, -5 ], [ 3, 5, 1, -9, -1 ], [ 1, 5, -7, 1, -9 ], [ -3, 2, 1, -5, 0 ] ]
// );
// console.log(
// 	matrix([
// 		[ -1, 4, -5, -9, 3, 8 ],
// 		[ 6, 8, -7, 4, -5, -1 ],
// 		[ 3, 5, 1, -9, -1, 6 ],
// 		[ 1, 5, -7, 15, -9, 3 ],
// 		[ -3, 2, 1, -5, -6, 0 ],
// 		[ 8, 2, 0, -2, 4, -5 ]
// 	]),
// 	[
// 		[ 0, 4, -5, -9, 3, 8 ],
// 		[ 6, 1, -7, 4, -5, -1 ],
// 		[ 3, 5, 1, -9, -1, 6 ],
// 		[ 1, 5, -7, 1, -9, 3 ],
// 		[ -3, 2, 1, -5, 0, 0 ],
// 		[ 8, 2, 0, -2, 4, 0 ]
// 	]
// );
// console.log(matrix([ [ 1, 1, -5, 5 ], [ 2, -4, 11, 2 ], [ 3, 1, -1, 4 ], [ 2, -6, 8, 10 ] ]), [
// 	[ 1, 1, -5, 5 ],
// 	[ 2, 0, 11, 2 ],
// 	[ 3, 1, 0, 4 ],
// 	[ 2, -6, 8, 1 ]
// ]);

// function wordsToSentence(words) {
// 	return words.join(' ');
// }

// console.log(wordsToSentence([ 'hello', 'world' ])); //, 'hello world');

// const nums = [1, 3, 2, 1];
// var getConcatenation = function (nums) {
//   return nums.concat(nums);
// };

// console.log(getConcatenation(nums));
// const s = "aiohn";
// const indices = [3, 1, 4, 2, 0];
// const result = [];

// var restoreString = function (s, indices) {
//   indices.forEach((item, i) => {
//     result[item] = s[i];
//   });
//   return result.join("");
// };

// console.log(restoreString(s, indices));

// const operations = ["++X", "++X", "X++"];
// var finalValueAfterOperations = function (operations) {
//   let x = 0;
//   for (let item of operations) {
//     if (item === "--X" || item === "X--") {
//       x -= 1;
//     } else {
//       x += 1;
//     }
//   }
//   return x;
// };

// console.log(finalValueAfterOperations(operations));
// const s = "Hello";
// var toLowerCase = function (s) {
//   return s.toLowerCase();
// };

// console.log(toLowerCase(s));

// const allowed = "fstqyienx";
// s = "  now is the time   ";
// var lengthOfLastWord = function (s) {
//   let array = s.trim().split(" ");

//   return array[array.length - 1].length;
// };

// console.log(lengthOfLastWord(s));
// let digits = [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3];

// var plusOne = function (digits) {
//   let number = BigInt(digits.join(""));
//   number++;
//   let myFunc = (num) => Number(num);
//   return Array.from(String(number), myFunc);
// };
// console.log(plusOne(digits));
// const words = [
//   "n",
//   "eeitfns",
//   "eqqqsfs",
//   "i",
//   "feniqis",
//   "lhoa",
//   "yqyitei",
//   "sqtn",
//   "kug",
//   "z",
//   "neqqis"
// ];
// var countConsistentStrings = function (allowed, words) {
//   let sum = 0;
//   for (let word of words) {
//     let includes = false;
//     for (let c of word) {
//       if (!allowed.includes(c)) {
//         includes = false;
//         break;
//       } else {
//         includes = true;
//       }
//     }
//     if (includes) {
//       sum++;
//     }
//   }
//   return sum;
// };

// console.log(countConsistentStrings(allowed, words));
// const nums = [2, 2, 1, 1, 1, 2, 2];
// var majorityElement = function (nums) {
//   const result = {};
//   for (let ele of nums) {
//     if (result[ele]) {
//       result[ele] += 1;
//     } else {
//       result[ele] = 1;
//     }
//   }
//   let max = Math.max(...Object.values(result));
//   for (let item in result) {
//     if (result[item] === max) {
//       return item;
//     }
//   }
// };

// console.log(majorityElement(nums));

// function evenNumbers(array, number) {
//   const reverseArray = array.reverse();
//   let length = number;
//   let result = [];
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] % 2 === 0) {
//       result.push(array[i]);
//       length--;
//     }
//     if (length === 0) {
//       break;
//     }
//   }
//   return result.reverse();
// }

// console.log(evenNumbers([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2));

// function diffBig2(arr) {
//   let sorted = arr.sort((a, b) => a - b);
//   return sorted[arr.length - 1] - sorted[arr.length - 2];
// }

// console.log(diffBig2([2, 1])); //, 1);
// console.log(diffBig2([8, 3, 1])); //, 5);
// console.log(diffBig2([1, 8, 3])); //, 5);
// var FilterString = function (value) {
//   const result = [];
//   const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
//   for (let ele of value) {
//     if (numbers.includes(Number(ele))) {
//       result.push(Number(ele));
//     }
//   }
//   return Number(result.join(""));
// };

// console.log(FilterString("123")); //, 123, 'Just return the numbers');
// console.log(FilterString("a1b2c3")); //, 123, 'Just return the numbers');
// console.log(FilterString("aa1bb2cc3dd")); //, 123, 'Just return the numbers');

// const areThereDuplicates = (...args) => {
//   return new Set(args).size !== args.length;
// };

// console.log(areThereDuplicates(1, 2, 3, 3));
// console.log(areThereDuplicates("a", "b", "c", "a"));

// function isSubsequence(a, b) {
//   let index = 0;
//   for (let i = 0; i < a.length; i++) {
//     let updateIndex = b.indexOf(a[i], index);
//     if (updateIndex === -1) {
//       return false;
//     }
//     index = updateIndex;
//   }
//   return true;
// }

// console.log(isSubsequence("hello", "hello world"));

// function productOfArray(array) {
//   let result = 1;
//   function product(arr) {
//     if (arr.length === 0) {
//       return;
//     }
//     result *= arr[0];
//     product(arr.slice(1));
//   }

//   product(array);
//   return result;
// }

// console.log(productOfArray([1, 2, 3]));

// function reverse(str) {
//   let result = "";
//   let array = str.split("");
//   function revString(string) {
//     if (string.length === 0) {
//       return;
//     }
//     result += string[string.length - 1];
//     revString(string.slice(0, -1));
//   }

//   revString(array);
//   return result;
// }

// console.log(reverse("awesome"));

// function isPalindrome(string) {
//   let result = "";
//   let array = string.split("");

//   function testPal(arr) {
//     if (arr.length === 0) {
//       return;
//     }
//     result += arr[arr.length - 1];
//     testPal(arr.slice(0, -1));
//   }

//   testPal(array);
//   return result === string;
// }

// console.log(isPalindrome("awesome"));
// console.log(isPalindrome("tacocat"));

// function firstRecurring(array) {
//   let obj = {};
//   for (let i = 0; i < array.length; i++) {
//     if (!obj[array[i]]) {
//       obj[array[i]] = 1;
//     } else {
//       return array[i];
//     }
//   }

//   return undefined;
// }

// console.log(firstRecurring([2, 1, 1, 2, 3, 5, 1, 2, 4]));
// console.log(firstRecurring([2, 5, 1, 2, 3, 5, 1, 2, 4]));
// console.log(firstRecurring([2, 3, 4, 5]));
// const isOdd = (val) => val % 2 !== 0;

// function someRecursive(array, callback) {
//   if (array.length === 0) return false;
//   if (callback(array[0])) return true;
//   return someRecursive(array.slice(1), callback);
// }

// console.log(someRecursive([1, 2, 3, 4], isOdd)); // true
// console.log(someRecursive([4, 6, 8, 9], isOdd)); // true
// console.log(someRecursive([4, 6, 8], isOdd)); // false
// console.log(someRecursive([4, 6, 8], (val) => val > 10)); // false
// function flatten(oldArr) {
//   var newArr = [];
//   for (var i = 0; i < oldArr.length; i++) {
//     if (Array.isArray(oldArr[i])) {
//       newArr = newArr.concat(flatten(oldArr[i]));
//     } else {
//       newArr.push(oldArr[i]);
//     }
//   }
//   return newArr;
// }

// console.log(flatten([1, 2, 3, [4, 5]])); // [1, 2, 3, 4, 5]
// console.log(flatten([1, [2, [3, 4], [[5]]]])); // [1, 2, 3, 4, 5]
// console.log(flatten([[1], [2], [3]])); // [1,2,3]
// console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); // [1,2,3
// function binarySearch(array, val) {
//   let min = 0;
//   let max = array.length - 1;
//   let middle = Math.floor((max + min) / 2);
//   while (array[middle] !== val && min <= max) {
//     if (val < array[middle]) max = middle - 1;
//     else min = middle + 1;
//     middle = Math.floor((min + max) / 2);
//   }
//   return array[middle] === val ? middle : -1;
// }

// console.log(
//   binarySearch(
//     [
//       5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
//       99
//     ],
//     84
//   )
// );
// const nums = [1, 2, 3, 1, 1, 3];

// var numIdenticalPairs = function (nums) {
//   let count = 0;
//   function recurse(array) {
//     if (array.length === 0) return;
//     let idx = array.indexOf(array[0], 1);
//     while (idx !== -1) {
//       count++;
//       idx = array.indexOf(array[0], idx + 1);
//     }

//     recurse(array.slice(1));
//   }
//   recurse(nums);
//   return count;
// };

// console.log(numIdenticalPairs(nums));
// const jewels = "zZ",
//   stones = "ZZ";
// var numJewelsInStones = function (jewels, stones) {
//   let count = 0;
//   function recurse(array1, array2) {
//     console.log(array1, "ARRAY1");
//     if (array1.length === 0) return;
//     let idx = array2.indexOf(array1[0]);
//     while (idx !== -1) {
//       console.log(idx, "IDX");
//       count++;
//       idx = array2.indexOf(array1[0], idx + 1);
//     }

//     recurse(array1.slice(1), array2);
//   }
//   recurse(jewels, stones);
//   return count;
// };

// var numJewelsInStones = function (jewels, stones) {
//   const result = {};
//   for (let i = 0; i < stones.length; i++) {
//     if (!result[stones[i]]) {
//       result[stones[i]] = 1;
//     } else {
//       result[stones[i]]++;
//     }
//   }
//   let count = 0;
//   jewels.split("").forEach((item) => {
//     if (!result[item]) return 0;
//     count += result[item];
//   });
//   return count;
// };

// console.log(numJewelsInStones(jewels, stones));

// const nums = [8, 1, 2, 2, 3];
// var smallerNumbersThanCurrent = function (nums) {
//   let result = [];
//   for (let i = 0; i < nums.length; i++) {
//     let count = 0;
//     for (let j = 0; j < nums.length; j++) {
//       if (nums[j] < nums[i]) {
//         count++;
//       }
//     }
//     result.push(count);
//   }
//   return result;
// };

// console.log(smallerNumbersThanCurrent(nums));
// const allowed = "abc";
// const words = ["a", "b", "c", "ab", "ac", "bc", "abc"];
// var countConsistentStrings = function (allowed, words) {
//   let count = 0;
//   for (let i = 0; i < words.length; i++) {
//     let addOne = true;
//     for (let j = 0; j < words[i].length; j++) {
//       if (allowed.indexOf(words[i][j]) === -1) {
//         addOne = false;
//       }
//     }
//     if (addOne) {
//       count++;
//     }
//   }

//   return count;
// };

// console.log(
//   countConsistentStrings("fstqyienx", [
//     "n",
//     "eeitfns",
//     "eqqqsfs",
//     "i",
//     "feniqis",
//     "lhoa",
//     "yqyitei",
//     "sqtn",
//     "kug",
//     "z",
//     "neqqis"
//   ])
// );

// var checkIfPangram = function (sentence) {
//   const letters = [
//     "a",
//     "b",
//     "c",
//     "d",
//     "e",
//     "f",
//     "g",
//     "h",
//     "i",
//     "j",
//     "k",
//     "l",
//     "m",
//     "n",
//     "o",
//     "p",
//     "q",
//     "r",
//     "s",
//     "t",
//     "u",
//     "v",
//     "w",
//     "x",
//     "y",
//     "z"
//   ];
//   for (let i = 0; i < sentence.length; i++) {
//     if (letters.includes(sentence[i])) {
//       letters.splice(letters.indexOf(sentence[i]), 1);
//     }
//   }
//   if (letters.length === 0) {
//     return true;
//   } else {
//     return false;
//   }
// };

// console.log(checkIfPangram("thequickbrownfoxjumpsoverthelazydog"));
// console.log(checkIfPangram("leetcode"));

// var firstUniqChar = function (s) {
//   for (i = 0; i < s.length; i++) {
//     if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
//       return i;
//     }
//   }
//   return -1;
// };

// console.log(firstUniqChar("leetcode"));
// console.log(firstUniqChar("loveleetcode"));
// console.log(firstUniqChar("aabb"));

// function bubbleSort(array) {
//   const result = [];
//   function recurse(arr) {
//     console.log(arr, "ARR");
//     if (arr.length === 0) return;
//     let max = 0;
//     for (let i = 0; i < array.length; i++) {
//       if (array[i] > max) {
//         max = array[i];
//       }
//     }
//     result.unshift(max);
//     arr.splice(arr.indexOf(max), 1);
//     recurse(arr);
//   }
//   recurse(array);
//   return result;
// }

// console.log(bubbleSort([99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]));

// const s = "is2 sentence4 This1 a3";
// var sortSentence = function (s) {
//   let split = s.split(" ");
//   let object = {};
//   for (let i = 0; i < split.length; i++) {
//     let toArray = split[i].split("");
//     object[toArray.pop()] = split[i].slice(0, split[i].length - 1);
//   }
//   return Object.values(object).join(" ");
// };

// console.log(sortSentence(s));
// function fizzBuzz(n) {
//   for (let i = 1; i <= n; i++) {
//     if (i % 3 === 0 && i % 5 === 0) console.log("fizzbuzz");
//     else if (i % 3 === 0) console.log("fizz");
//     else if (i % 5 === 0) console.log("buzz");
//     else console.log(i);
//   }
// }

// console.log(fizzBuzz(20));

//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// function capitalize(str) {
//   let array = str.split(" ");
//   let result = [];
//   for (let i = 0; i < array.length; i++) {
//     let temp = array[i][0].toUpperCase();
//     let string = "";
//     result.push((string += temp += array[i].slice(1)));
//   }
//   return result.join(" ");
// }

// console.log(capitalize("a short sentence"));
// console.log(capitalize("a lazy fox"));
// console.log(capitalize("I Love Breakfast At Bill Miller Bbq"));
// var mySqrt = function (x) {
//   if (x === 0) return 0;
//   for (let i = 0; i <= x; i++) {
//     if (i * i === x) return i;
//     if (i * i > x) return i - 1;
//   }
// };

// console.log(mySqrt(1));
// console.log(mySqrt(0));
// console.log(mySqrt(8));

// function reverseInt(n) {
//   if (n < 0) {
//     return Number(n.toString().split("").slice(1).reverse().join("")) * -1;
//   } else {
//     return Number(n.toString().split("").reverse().join(""));
//   }
// }

// console.log(reverseInt(15)); // === 51
// console.log(reverseInt(981)); //=== 189
// console.log(reverseInt(500)); // === 5
// console.log(reverseInt(-15)); // === -51
// console.log(reverseInt(-90)); // === -9

// function maxChar(str) {
//   let object = {};
//   for (let ele of str) {
//     object[ele] = object[ele] + 1 || 1;
//   }
//   console.log(object);
//   let maxValue = Math.max(...Object.values(object));

//   for (let item in object) {
//     if (object[item] === maxValue) {
//       return item;
//     }
//   }
// }

// console.log(maxChar("abcccccccd")); // === "c"
// console.log(maxChar("apple 1231111")); // === "1"

// function chunk(array, size) {
//   let final = [];
//   let pushArray = [];
//   for (let i = 0; i < array.length; i++) {
//     if (pushArray.length === 2) {
//       final.push(pushArray);
//       pushArray = [];
//     }
//     pushArray.push(array[i]);
//     // final.push(pushArray);
//     // pushArray = [];
//   }
//   return final;
// }

// console.log(chunk([1, 2, 3, 4], 2)); // --> [[ 1, 2], [3, 4]])
// console.log(chunk([1, 2, 3, 4, 5], 2)); // --> [[ 1, 2], [3, 4], [5]])
// console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8], 3)); //--> [[ 1, 2, 3], [4, 5, 6], [7, 8]])
// console.log(chunk([1, 2, 3, 4, 5], 4)); // --> [[ 1, 2, 3, 4], [5]])
// console.log(chunk([1, 2, 3, 4, 5], 10)); //--> [[ 1, 2, 3, 4, 5]])
// const nums = [2, 2, 3];
// var singleNumber = function (nums) {
//   // if (nums.length === 1) return nums[0];
//   // for (let i = 0; i < nums.length; i++) {
//   //   if (nums.indexOf(nums[i]) === nums.lastIndexOf(nums[i])) {
//   //     return nums[i];
//   //   }
//   // }
//   const result = {};
//   for (let i = 0; i < nums.length; i++) {
//     result[nums[i]] = result[nums[i]] + 1 || 1;
//   }
//   console.log(result);
//   for (let ele in result) {
//     if (result[ele] === 1) {
//       return ele;
//     }
//   }
// };

// console.log(singleNumber(nums));

// var moveZeroes = function (nums) {
//   let a = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === 0) nums.splice(i, 1);
//     nums.push(0);
//   }
//   return nums;
// };

// console.log(moveZeroes([0, 1, 0, 3, 12]));
// console.log(moveZeroes([0, 0, 1]));

// function steps(n) {
//   let array = Array(2 * n - 1).fill(" ");
//   let row = 0;
//   for (let i = 1; i <= n; i++) {
//     let middle = Math.floor(array.length / 2);
//     array[middle] = "#";
//     array[middle - row] = "#";
//     array[middle + row] = "#";
//     console.log(array.join(""));
//     row++;
//   }
// }

// console.log(steps(3));

// function countUniqueValues(array) {
//   let count = 1;
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] < array[i + 1]) {
//       count++;
//     }
//   }
//   return count;
// }

// console.log(countUniqueValues([1, 2]));
// const s = "anagram",
//   t = "nagaram";
// var isAnagram = function (s, t) {
//   if (s.length !== t.length) {
//     return false;
//   }
//   let object = {};
//   for (let item of s) {
//     object[item] ? (object[item] += 1) : (object[item] = 1);
//   }
//   for (let item of t) {
//     if (!object[item]) {
//       return false;
//     } else {
//       object[item] -= 1;
//     }
//   }
//   return true;
// };

// console.log(isAnagram(s, t));
// const nums1 = [1, 2, 2, 1];
// const nums2 = [2];
// var intersect = function (nums1, nums2) {
//   if (nums1.length === 0 || nums2.length === 0) return null;
//   for (let i = 0; i < nums1.length; i++) {
//     console.log(i, nums1[i], "I");
//     if (!nums2.includes(nums1[i])) {
//       nums1.splice(i, 1);
//     } else {
//       console.log(nums2.indexOf(nums1[i]), "nums2indewx");
//       nums2.splice(nums2.indexOf(nums1[i]), 1);
//     }
//     console.log(nums2, "NUMS2");
//     console.log(nums1, "NUMS1");
//   }
//   return nums1;
// };

// console.log(intersect(nums1, nums2));

//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

// function matrix(n) {
//   const result = [];

//   for (let i = 0; i < n; i++) {
//     result.push([]);
//   }
//   let counter = 1;
//   let startRow = 0;
//   let endRow = n - 1;
//   let startColumn = 0;
//   let endColumn = n - 1;

//   while (startColumn <= endColumn && startRow <= endRow) {
//     for (let i = startColumn; i <= endColumn; i++) {
//       result[startRow][i] = counter;
//       counter++;
//     }
//     startRow++;

//     for (let i = startRow; i <= endRow; i++) {
//       result[i][endColumn] = counter;
//       counter++;
//     }
//     endColumn--;

//     for (let i = endColumn; i >= startColumn; i--) {
//       result[endRow][i] = counter;
//       counter++;
//     }
//     endRow--;

//     for (let i = endRow; i >= startRow; i--) {
//       result[i][startColumn] = counter;
//       counter++;
//     }
//     startColumn++;
//   }
//   return result;
// }

// console.log(matrix(2));
// console.log(matrix(3));
// console.log(matrix(4));
// let calculations = 0;
// function fibonacci(n) {
//   //O(2^n)

//   if (n < 2) {
//     return n;
//   }
//   return fibonacci(n - 1) + fibonacci(n - 2);
// }

// function fibonacciMaster() {
//   //O(n)
//   let cache = {};
//   return function fib(n) {
//     calculations++;
//     if (n in cache) {
//       return cache[n];
//     } else {
//       if (n < 2) {
//         return n;
//       } else {
//         cache[n] = fib(n - 1) + fib(n - 2);
//         return cache[n];
//       }
//     }
//   };
// }

// console.log(fibonacci(40), "slow");
// const memo = fibonacciMaster();
// console.log(memo(40), "memo");

// class Queue {
//   constructor() {
//     this.data = [];
//   }
//   add(record) {
//     this.data.unshift(record);
//   }
//   remove(record) {
//     return this.data.pop(record);
//   }
//   peek() {
//     return this.data[this.data.length - 1];
//   }
// }

// const s1 = new Queue();
// const s2 = new Queue();
// s1.add("a");
// s1.add("b");
// s2.add(1);
// s2.add(2);
// console.log(s1);
// console.log(s2);
// function weave(s1, s2) {
//   let combined = new Queue();
//   while (s1.peek() || s2.peek()) {
//     if (s1.peek()) {
//       combined.add(s1.remove());
//     }
//     if (s2.peek()) {
//       combined.add(s2.remove());
//     }
//   }
//   return combined;
// }

// console.log(weave(s1, s2));
// const line = new Queue();
// // console.log(line);
// line.add("john");
// line.add("sochin");
// line.add("mark");
// // console.log(line);
// line.remove();

// You shouldn't need to modify this class
// class Node {
//   constructor(data) {
//     this.data = data;
//     this.children = [];
//   }

//   add(data) {
//     this.children.push(new Node(data));
//   }
// }

// function levelWidth(root) {
//   const arr = [root, "s"];
//   const counters = [0];

//   while (arr.length > 1) {
//     const node = arr.shift();

//     if (node === "s") {
//       counters.push(0);
//       arr.push("s");
//     } else {
//       arr.push(...node.children);
//       counters[counters.length - 1]++;
//     }
//   }

//   return counters;
// }

// const root = new Node(0);
// root.add(1);
// root.add(2);
// root.add(3);
// root.children[0].add(4);
// root.children[2].add(5);
// console.log(levelWidth(root));

// function selectionSort(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     let min = i;
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[min] > arr[j]) {
//         min = j;
//       }
//     }
//     let temp = arr[i];
//     arr[i] = arr[min];
//     arr[min] = temp;
//   }
//   return arr;
// }

// console.log(selectionSort([-30, 0, -5, 10, 2, 76]));
// const nums = [1, 1, 2];
// var removeDuplicates = function (nums) {
//   let slow = 0;
//   let fast = 1;
//   if (nums.length === 0) return null;
//   while (fast < nums.length) {
//     if (nums[slow] === nums[fast]) {
//       fast++;
//     } else {
//       let temp = nums[fast];
//       nums[slow + 1] = temp;
//       fast++;
//       slow++;
//     }
//   }
//   return nums;
// };

// console.log(removeDuplicates(nums));
// const nums = [-2, 1, -3, 4, -1, 2, 1, 5, 4];
// var maxSubArray = function (nums) {
//   let maxCurrent = nums[0];
//   let maxGlobal = nums[0];

//   for (let i = 1; i < nums.length; i++) {
//     maxCurrent = Math.max(nums[i], maxCurrent + nums[i]);

//     if (maxCurrent > maxGlobal) {
//       maxGlobal = maxCurrent;
//     }
//   }
//   return maxGlobal;
// };

// console.log(maxSubArray(nums));
// const a = -2,
//   b = 3;
// var getSum = function (a, b) {
//   let count = 0;

//   for (let i = 0; i < Math.abs(a); i++) {
//     a < 0 ? count-- : count++;
//   }

//   for (let j = 0; j < Math.abs(b); j++) {
//     b < 0 ? count-- : count++;
//   }
//   return count;
// };

// console.log(getSum(a, b));
// const prices = [7, 6, 4, 3, 1];
// var maxProfit = function (prices) {
//   let result = 0;
//   for (let i = 0; i < prices.length; i++) {
//     if (prices[i + 1] > prices[i]) {
//       result += prices[i + 1] - prices[i];
//     }
//   }
//   return result;
// };

// console.log(maxProfit(prices));
// const s = "leetcode";
// var firstUniqChar = function (s) {
//   let array = s.split("");
//   let result = {};
//   for (let item of array) {
//     result[item] = result[item] + 1 || 1;
//   }
//   console.log(result, "RESULT");
//   for (let ele in result) {
//     if (result[ele] === 1) {
//       return array.indexOf(ele);
//     }
//   }
//   return -1;
// };

// console.log(firstUniqChar(s));

// const nums = [1, 2, 3, 4, 5, 6, 7];
// var rotate = function (nums, k) {
//   let i = 1;
//   while (i <= k) {
//     nums.unshift(nums[nums.length - i]);
//     i++;
//   }
//   return nums.slice(0, -k);
// };

// console.log(rotate(nums, 3));

// var trailingZeroes = function (n) {
//   let total = 1;
//   function recurse(n) {
//     if (n === 0) return;
//     total *= n;
//     recurse(n - 1);
//   }
//   recurse(n);
//   console.log(total, "TOTAL");
//   let array = total.toString().split("");
//   let count = 0;
//   while (array.pop() === "0") {
//     count++;
//   }
//   return count;
// };

// console.log(trailingZeroes(3));
// console.log(trailingZeroes(5));
// console.log(trailingZeroes(0));
// console.log(trailingZeroes(30));
// function countMaximumTeams(skill, teamSize, maxDiff) {
//   let sortSkill = skill.sort((a, b) => a - b);
//   let teamCount = 0;
//   let addTeamMember = 1;

//   for (let i = 0; i < sortSkill.length; i++) {
//     if (sortSkill[i + 1] - sortSkill[i] <= maxDiff) {
//       addTeamMember++;
//     }
//     if (addTeamMember === teamSize) {
//       teamCount++;
//       addTeamMember = 1;
//     }
//   }
//   return teamCount;
// }

// console.log(countMaximumTeams([3, 4, 3, 1, 6, 5], 3, 2));

// function getTotalImbalance(weight) {
//   let maxWeight = Math.max(...weight);
//   let minWeight = Math.min(...weight);
//   let total = 0;
//   if (maxWeight - minWeight === 0) {
//     return 0;
//   } else {
//     total += maxWeight - minWeight;
//   }
//   console.log(total);
//   let size = 1;
//   let min = 0;
//   let max = size;
//   while (size < weight.length - 1) {
//     for (let i = 0; i < weight.length - 1; i++) {
//       let maxWeight = Math.max(weight[i], weight[i + size]);
//       console.log(maxWeight, "MAX");
//       let minWeight = Math.min(weight[i], weight[i + size]);
//       console.log(minWeight, "MIN");
//       total += maxWeight - minWeight;
//       size++;
//     }
//   }
//   return total;
// }

// console.log(getTotalImbalance([4, 3, 2, 5, 6]));

// function toNumberArray(stringarray) {
// return stringarray.map((item) => {
//   return Number(item);
// });
// }

// console.log(toNumberArray(["1.1", "2.2", "3.3"])); //, [1.1,2.2,3.3]);
// function bump(x) {
//   let count = 0;
//   for (let ele of x) {
//     if (ele === "n") {
//       count++;
//     }
//   }
//   if (count > 15) {
//     return "Car Dead";
//   }
//   return "Woohoo!";
// }

// console.log(bump("n")); //, "Woohoo!");
// console.log(bump("_nnnnnnn_n__n______nn__nn_nnn")); //, "Car Dead");
// console.log(bump("______n___n_")); //, "Woohoo!");

// function getDecimal(n) {
//   let array = n.toString().split(".");
//   if (array.length <= 1) {
//     return 0;
//   }
//   let result = `0.${array[1]}`;
//   return +result;
// }

// console.log(getDecimal(10)); //, 0);
// console.log(getDecimal(-1.2)); //, 0.2);
// console.log(getDecimal(4.5)); //, 0.5);

// function mergeArrays(a, b) {
//   let result = [];
//   for (let i = 0; i < Math.max(a.length, b.length); i++) {
//     a[i] !== undefined ? result.push(a[i]) : null;
//     b[i] !== undefined ? result.push(b[i]) : null;
//   }
//   return result;
// }

// console.log(mergeArrays([1, 2, 3, 4, 5, 6, 7, 8], ["a", "b", "c", "d", "e"])); //, [1, "a", 2, "b", 3, "c", 4, "d", 5, "e", 6, 7, 8]);
// console.log(mergeArrays(["a", "b", "c", "d", "e"], [1, 2, 3, 4, 5])); //, ['a', 1, 'b', 2, 'c', 3, 'd', 4, 'e', 5]);
// console.log(mergeArrays([2, 5, 8, 23, 67, 6], ["b", "r", "a", "u", "r", "s"])); //, [2, 'b', 5, 'r', 8, 'a', 23, 'u', 67, 'r', 6, 's']);
// console.log(
//   mergeArrays(
//     ["b", "r", "a", "u", "r", "s", "e", "q", "z"],
//     [2, 5, 8, 23, 67, 6]
//   )
// ); //, ['b', 2, 'r', 5, 'a', 8, 'u', 23, 'r', 67, 's', 6, 'e', 'q', 'z']);
// var list1 = [
//   {
//     firstName: "Harry",
//     lastName: "K.",
//     country: "Brazil",
//     continent: "Americas",
//     age: 22,
//     language: "JavaScript",
//     githubAdmin: "yes"
//   },
//   {
//     firstName: "Kseniya",
//     lastName: "T.",
//     country: "Belarus",
//     continent: "Europe",
//     age: 49,
//     language: "Ruby",
//     githubAdmin: "no"
//   },
//   {
//     firstName: "Jing",
//     lastName: "X.",
//     country: "China",
//     continent: "Asia",
//     age: 34,
//     language: "JavaScript",
//     githubAdmin: "yes"
//   },
//   {
//     firstName: "Piotr",
//     lastName: "B.",
//     country: "Poland",
//     continent: "Europe",
//     age: 128,
//     language: "JavaScript",
//     githubAdmin: "no"
//   }
// ];

// function findAdmin(list, lang) {
//   return list.filter((item) => {
//     return item.language === lang && item.githubAdmin === "yes";
//   });
// }

// console.log(findAdmin(list1, "JavaScript")); //, answer1);
// console.log(findAdmin(list1, "Ruby")); //, []);
// console.log(findAdmin(list1, "Python")); //, []);

// function getMissingElement(superImportantArray) {
//   for (let i = 0; i <= 9; i++) {
//     if (!superImportantArray.includes(i)) {
//       return i;
//     }
//   }
// }

// console.log(getMissingElement([0, 5, 1, 3, 2, 9, 7, 6, 4])); //, 8);
// console.log(getMissingElement([9, 2, 4, 5, 7, 0, 8, 6, 1])); //, 3);
// let before = {
//   Ice: "Cream",
//   Age: "21",
//   Light: "Cream",
//   Double: "Cream"
// };

// let expectedAns = {
//   Cream: ["Ice", "Double", "Light"],
//   21: ["Age"]
// };
// function switchDict(dic) {
//   const result = {};
//   for (let item in dic) {
//     if (!result[dic[item]]) {
//       result[dic[item]] = [item];
//     } else {
//       result[dic[item]] = result[dic[item]].concat(item);
//     }
//   }
//   return result;
// }

// console.log(switchDict(before));

// function findDeletedNumber(arr, mixArr) {
//   for (let item of arr) {
//     if (!mixArr.includes(item)) {
//       return item;
//     }
//   }
//   return 0;
// }

// console.log(findDeletedNumber([1, 2, 3, 4, 5], [3, 4, 1, 5])); //, 2, 'Deletion')
// console.log(
//   findDeletedNumber([1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 9, 7, 4, 6, 2, 3, 8])
// ); //, 5, 'Deletion')
// console.log(
//   findDeletedNumber([1, 2, 3, 4, 5, 6, 7, 8, 9], [5, 7, 6, 9, 4, 8, 1, 2, 3])
// ); //, 0, 'No deletion')

// function adjacentElementsProduct(array) {
//   let maxValue = -Infinity;
//   for (let i = 0; i < array.length; i++) {
//     let multiplyValues = array[i] * array[i + 1];
//     if (multiplyValues > maxValue) {
//       maxValue = multiplyValues;
//     }
//   }
//   return maxValue;
// }

// console.log(adjacentElementsProduct([5, 8])); //, 40);
// console.log(adjacentElementsProduct([1, 2, 3])); //, 6);
// console.log(adjacentElementsProduct([1, 5, 10, 9])); //, 90);
// console.log(adjacentElementsProduct([4, 12, 3, 1, 5])); //, 48);
// console.log(adjacentElementsProduct([5, 1, 2, 3, 1, 4])); //, 6);

// // describe("Both positive and negative values", function() {
// console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3])); //, 21);
// console.log(adjacentElementsProduct([9, 5, 10, 2, 24, -1, -48])); //, 50);
// console.log(adjacentElementsProduct([5, 6, -4, 2, 3, 2, -23])); //, 30);
// console.log(adjacentElementsProduct([-23, 4, -5, 99, -27, 329, -2, 7, -921])); //, -14);
// console.log(adjacentElementsProduct([5, 1, 2, 3, 1, 4])); //, 6);
// // });

// // describe("Contains zeroes", function() {
// console.log(adjacentElementsProduct([1, 0, 1, 0, 1000])); //, 0);
// console.log(adjacentElementsProduct([1, 2, 3, 0])); //, 6);

// function iTri(s) {
//   if (s === 0) return "Starting Line... Good Luck!";
//   if (s > 0 && s <= 2.4) {
//     return { Swim: `${(140.6 - s).toFixed(2)} to go!` };
//   }
//   if (s > 2.4 && s <= 114.4) {
//     return { Bike: `${(140.6 - s).toFixed(2)} to go!` };
//   }
//   if (s > 114.4 && s < 130.6) {
//     return { Run: `${(140.6 - s).toFixed(2)} to go!` };
//   }
//   if (s >= 130.6 && s < 140.6) {
//     return { Run: "Nearly there!" };
//   }
//   return "You're done! Stop running!";
// }

// console.log(iTri(36)); //,{'Bike':'104.60 to go!'});
// console.log(iTri(103.5)); //,{'Bike':'37.10 to go!'});
// console.log(iTri(0)); //,'Starting Line... Good Luck!');
// console.log(iTri(2)); //,{'Swim':'138.60 to go!'});

// function lastSurvivor(letters, coords) {
//   let array = letters.split("");
//   for (let item of coords) {
//     array.splice(item, 1);
//   }
//   return array[0];
// }

// console.log(lastSurvivor("abc", [1, 1])); //, "a");
// console.log(lastSurvivor("kbc", [0, 1])); //, "b");
// console.log(lastSurvivor("zbk", [2, 1])); //, "z");
// console.log(lastSurvivor("c", [])); //, "c");
// console.log(
//   lastSurvivor(
//     "foiflxtpicahhkqjswjuyhmypkrdbwnmwbrrvdycqespfvdviucjoyvskltqaqirtjqulprjjoaiagobpftywabqjdmiofpsr",
//     [
//       8, 59, 52, 93, 21, 40, 88, 85, 59, 10, 82, 18, 74, 59, 51, 47, 75, 49, 23,
//       56, 1, 33, 39, 33, 34, 44, 25, 0, 51, 25, 36, 32, 57, 10, 57, 12, 51, 55,
//       24, 55, 31, 49, 6, 15, 10, 48, 27, 29, 38, 30, 35, 42, 23, 32, 9, 39, 39,
//       36, 8, 29, 2, 33, 14, 3, 13, 25, 9, 25, 18, 10, 1, 2, 20, 8, 2, 11, 5, 7,
//       0, 10, 10, 8, 12, 3, 5, 1, 7, 7, 5, 1, 4, 0, 4, 0, 0, 1
//     ]
//   )
// ); //,
// ("d");

// function squareDigits(num) {
//   let result = "";
//   for (let ele of num.toString()) {
//     result += Math.pow(ele, 2);
//   }
//   return result;
// }

// console.log(squareDigits(3212)); //,

// console.log(squareDigits(2112)); //, 4114))//;

// console.log(squareDigits(0), 0);

// const object = {
//   1: "golf",
//   2: "tennis",
//   3: "rugby"
// };
// const findKey = () => {
//   for (let key in object) {
//     if (object[key] === "golf") {
//       return key;
//     }
//   }
// };

// const obj2 = { ...object };
// obj2[1] = "swimming";
// console.log(object === obj2);

// console.log(obj2, "OBJ2");

// console.log(Object.keys(object));
// console.log(Object.values(object));
// console.log(Object.entries(object));
// console.log(findKey());
// function maximumOccurringCharacter(text) {
//   let result = {};
//   for (let char of text) {
//     if (!result[char]) {
//       result[char] = 1;
//     } else {
//       result[char]++;
//     }
//   }
//   let vals = Object.values(result);
//   for (let key in result) {
//     if (result[key] === Math.max(...vals)) {
//       return key;
//     }
//   }
// }

// console.log(maximumOccurringCharacter("helloworld"));

// function findFulcrum(numbers) {
//   for (let i = 1; i < numbers.length - 1; i++) {
//     let leftSum = 0;
//     let rightSum = 0;
//     let leftArray = numbers.slice(0, i);
//     let rightArray = numbers.slice(i + 1, numbers.length);
//     leftSum = leftArray.reduce((acc, val) => acc + val);
//     rightSum = rightArray.reduce((acc, val) => acc + val);
//     if (leftSum === rightSum) {
//       return i;
//     }
//   }
//   return -1;
// }

// console.log(findFulcrum([4, 12, 13, 14, 2]));

// function PowerSet(inputStr) {
//   let result = [];
//   for (let i = 0; i < inputStr.length; i++) {
//     if (result.includes(inputStr[i])) {
//       continue;
//     } else {
//       result.push(inputStr[i]);
//     }
//     for (let j = i; j < inputStr.length; j++) {
//       if (result.includes(inputStr.slice(j, inputStr.length))) {
//         continue;
//       } else {
//         result.push(inputStr.slice(j, inputStr.length));
//       }
//     }
//   }
//   return result.sort();
// }

// console.log(PowerSet("abc"));

// function productArray(numbers) {
//   let result = [];
//   for (let i = 0; i < numbers.length; i++) {
//     let array = [...numbers];
//     array.splice(i, 1);
//     result.push(
//       array.reduce((acc, val) => {
//         return acc * val;
//       })
//     );
//   }
//   return result;
// }

// console.log(productArray([12, 20])); //, [20,12]);
// console.log(productArray([12, 20])); //, [20,12]);
// console.log(productArray([3, 27, 4, 2])); //, [216,24,162,324]);
// console.log(productArray([13, 10, 5, 2, 9])); //, [900,1170,2340,5850,1300]);
// console.log(productArray([16, 17, 4, 3, 5, 2])); //, [2040,1920,8160,10880,6528,16320]);

// function evenLast(numbers) {
//   let result = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     if (i % 2 === 0) {
//       result += numbers[i] * numbers[numbers.length - 1];
//     }
//   }
//   return result;
// }

// console.log(evenLast([2, 3, 4, 5])); //, 30)
// let results1 = twoOldestAges([1, 5, 87, 45, 8, 8]);
// // let results2 = twoOldestAges([6, 5, 83, 5, 3, 18]);

// function twoOldestAges(ages) {
//   let result = [];
//   result.push(Math.max(...ages));
//   ages.splice(ages.indexOf(Math.max(...ages)), 1);
//   result.push(Math.max(...ages));
//   return result.reverse();
// }

// console.log(twoOldestAges([1, 5, 87, 45, 8, 8]));

// function duplicateElements(m, n) {
//   if (m.length === 0 || n.length === 0) return false;
//   for (let item of m) {
//     if (n.includes(item)) {
//       return true;
//     }
//   }
//   return false;
// }
// function trouble(x, t) {
//   for (let i = 0; i < x.length; i++) {
//     if (x[i] + x[i + 1] === t) {
//       x.splice(i + 1, 1);
//       i--;
//     }
//   }
//   return x;
// }

// console.log(trouble([1, 3, 5, 6, 7, 4, 3], 7)); //, [1, 3, 5, 6, 7, 4]);
// console.log(trouble([4, 1, 1, 1, 4], 2)); //, [4, 1, 4]);
// console.log(trouble([2, 2, 2, 2, 2, 2], 4)); //, [2]);
// console.log(trouble([2, 6, 2], 8)); //, [2, 2]);
// function stringMerge(string1, string2, letter) {
//   let result = '';
//   return (
//     result +
//     string1.substring(0, string1.indexOf(letter)) +
//     string2.substring(string2.indexOf(letter))
//   );
// }

// console.log(stringMerge('person', 'here', 'e')); //, "pere");
// console.log(stringMerge('apowiejfoiajsf', 'iwahfeijouh', 'j')); //, "apowiejouh");
// console.log(stringMerge('abcdefxxxyzz', 'abcxxxyyyxyzz', 'x')); //, "abcdefxxxyyyxyzz");
// console.log(stringMerge('12345654321', '123456789', '6')); //, "123456789");
// console.log(stringMerge('JiOdIdA4', 'oopopopoodddasdfdfsd', 'd')); //, "JiOdddasdfdfsd");
// console.log(stringMerge('incredible', 'people', 'e')); //, "increople");
// function product(string) {
//   let excl = 0;
//   let question = 0;
//   for (let i = 0; i < string.length; i++) {
//     if (string[i] === '!') {
//       excl++;
//     } else if (string[i] === '?') {
//       question++;
//     }
//   }
//   return excl * question;
// }

// console.log(product('', 0)); //;
// console.log(product('!', 0)); //;
// console.log(product('!!', 0)); //;
// console.log(product('!??', 2)); //;
// console.log(product('!???', 3)); //;
// console.log(product('!!!??', 6)); //;
// console.log(product('!!!???', 9)); //;
// console.log(product('!???!!', 9)); //;
// console.log(product('!ab? ?', 2)); //;
// console.log(product('!????!!!?', 20)); //;

// function filter_list(l) {
//   return l.filter((item) => {
//     return typeof item !== 'string';
//   });
// }

// console.log(filter_list([1, 2, 'a', 'b'])); //,[1,2])
// console.log(filter_list([1, 'a', 'b', 0, 15])); //,[1,0,15])
// console.log(filter_list([1, 2, 'aasf', '1', '123', 123])); //,[1,2,123])
// function sumTwoSmallestNumbers(numbers) {
//   return numbers
//     .sort((a, b) => a - b)
//     .slice(0, 2)
//     .reduce((a, b) => {
//       return a + b;
//     });
// }

// console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22])); //, 13 , "Sum should be 13");
// console.log(sumTwoSmallestNumbers([15, 28, 4, 2, 43])); //, 6 , "Sum should be 6");
// console.log(sumTwoSmallestNumbers([3, 87, 45, 12, 7])); //, 10 , "Sum should be 10");
// console.log(sumTwoSmallestNumbers([23, 71, 33, 82, 1])); //, 24 , "Sum should be 24");
// console.log(sumTwoSmallestNumbers([52, 76, 14, 12, 4])); //, 16 , "Sum should be 16");

// function minMax(arr) {
//   return [Math.min(...arr), Math.max(...arr)];
// }

// console.log([1, 2, 3, 4, 5]); //, [1,5]);
// console.log([2334454, 5]); //, [5, 2334454]);

// function greetDevelopers(list) {
//   for (let item of list) {
//     item.greeting = `Hi ${item.firstName}, what do you like the most about ${item.language}?`;
//   }
//   return list;
// }

// var list1 = [
//   {
//     firstName: 'Sofia',
//     lastName: 'I.',
//     country: 'Argentina',
//     continent: 'Americas',
//     age: 35,
//     language: 'Java'
//   },
//   {
//     firstName: 'Lukas',
//     lastName: 'X.',
//     country: 'Croatia',
//     continent: 'Europe',
//     age: 35,
//     language: 'Python'
//   },
//   {
//     firstName: 'Madison',
//     lastName: 'U.',
//     country: 'United States',
//     continent: 'Americas',
//     age: 32,
//     language: 'Ruby'
//   }
// ];

// var answer = [
//   {
//     firstName: 'Sofia',
//     lastName: 'I.',
//     country: 'Argentina',
//     continent: 'Americas',
//     age: 35,
//     language: 'Java',
//     greeting: 'Hi Sofia, what do you like the most about Java?'
//   },
//   {
//     firstName: 'Lukas',
//     lastName: 'X.',
//     country: 'Croatia',
//     continent: 'Europe',
//     age: 35,
//     language: 'Python',
//     greeting: 'Hi Lukas, what do you like the most about Python?'
//   },
//   {
//     firstName: 'Madison',
//     lastName: 'U.',
//     country: 'United States',
//     continent: 'Americas',
//     age: 32,
//     language: 'Ruby',
//     greeting: 'Hi Madison, what do you like the most about Ruby?'
//   }
// ];

// console.log(greetDevelopers(list1)); //, answer);

// function validateWord(s)
// {
//   let obj = {}
//   let word = s.split('').map((item) => {
//     return item.toLowerCase()
//   })

//   for (let letter of word) {
//     if (!obj[letter]) {
//       obj[letter] = 1
//     } else {
//       obj[letter] += 1
//     }
//   }

//   let array = Object.values(obj)
//   let sum = array.reduce((a, b) => {
//     return a + b
//   })
//   if (sum === array[0] * array.length) {
//     return true
//   }
//   return false
// }

// console.log(validateWord("abcabc"))//,true, "The word was: \"abcabc\" \n");
// console.log(validateWord("Abcabc"))//,true, "The word was: \"Abcabc\" \n");
// console.log(validateWord("abc123"))//,true, "The word was: \"abc123\" \n");
// console.log(validateWord("abcabcd"))//,false, "The word was: \"abcabcd\" \n");
// console.log(validateWord("abc!abc!"))//,true, "The word was: \"abc!abc!\" \n");
// console.log(validateWord("abc:abc"))//,false, "The word was: \"abc:abc\" \n");

// function solve(nums, div) {
//   return nums.map((item) => {
//     return item += item % div
//   })

// }

// console.log(solve([2,7,5,9,100,34,32,0],3))//,[4,8,7,9,101,35,34,0])
//     console.log(solve([],2))//,[])
//     console.log(solve([1000,999,998,997],5))//,[1000,1003,1001,999])
//     console.log(solve([0,0,0,0],5))//,[0,0,0,0])
//     console.log(solve([4,3,2,1],5))//,[8,6,4,2])
//     console.log(solve([33,23,45,78,65],10))//,[36,26,50,86,70])

// function getMiddle(s)
// {

//   return s.length % 2 === 1 ? s[Math.floor(s.length / 2)] : s.slice((s.length) / 2 - 1, (s.length) / 2 + 1)
// }

// console.log(getMiddle("test"))//,"es");
//     console.log(getMiddle("testing"))//,"t");
//     console.log(getMiddle("middle"))//,"dd");
//     console.log(getMiddle("A"))//,"A");

// function lastDigit(n, d) {
//   return d <= 0 ? [] : n.toString().split('').slice(-d).map((item) => Number(item)
//   )
// }

// console.log(lastDigit(1,1))//,[1])
//     console.log(lastDigit(123767,4))//,[3,7,6,7])
//     console.log(lastDigit(0,1))//,[0])
//     console.log(lastDigit(34625647867585,10))//,[5,6,4,7,8,6,7,5,8,5])
//     console.log(lastDigit(1234,0))//,[])
//     console.log(lastDigit(24134,-4))//,[])
//     console.log(lastDigit(1343,5))//,[1,3,4,3])

// function longestConsec(strarr, k) {
//   let longest = 0;
//   let longArray = [];
//   if (k <= 0 || k > strarr.length) return '';
//   for (let i = 0; i < strarr.length; i++) {
//     if (strarr.slice(i, i+ k).join('').length > longest) {
//       longest = strarr.slice(i, i + k).join('').length
//       longArray.push(strarr.slice(i, i + k).join(''))
//     }
//   }
//   return longArray.pop()
// }

// console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2), "abigailtheta")
//     console.log(longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1), "oocccffuucccjjjkkkjyyyeehh")
//     console.log(longestConsec([], 3), "")
//     console.log(longestConsec(["itvayloxrp","wkppqsztdkmvcuwvereiupccauycnjutlv","vweqilsfytihvrzlaodfixoyxvyuyvgpck"], 2), "wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck")
//     console.log(longestConsec(["wlwsasphmxx","owiaxujylentrklctozmymu","wpgozvxxiu"], 2), "wlwsasphmxxowiaxujylentrklctozmymu")
//     console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], -2), "")
//     console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 3), "ixoyx3452zzzzzzzzzzzz")
//     console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 15), "")
//     console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 0), "")

// function numberOfWays(arr, k) {
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] + arr[j] === k) {
//         count++
//       }
//     }
//   }
//   return count;
// }

// console.log(numberOfWays([1, 5, 3, 3, 3], 6))
// console.log(numberOfWays( [1, 2, 3, 4, 3], 6))

// function getMinCodeEntryTime(N, M, C) {
//   let total = 0;
//   let start = Math.min(1 + (N - C[0]), C[0] - 1)
//   // console.log(start)
//   for (let i = 0; i < C.length - 1; i++) {
//     total += Math.abs(C[i] - C[i + 1])
//   }
//   return total + start;
// }

// console.log(getMinCodeEntryTime(3, 3, [1, 2, 3]))
// console.log(getMinCodeEntryTime(10, 4, [9, 4, 4, 8]))
// function solution(s) {
//   let result = [];
//   let tempTotal = 0
//   if (tempTotal < 0 ) return -1
//   let array = s.split(' ')
//   for (let i = 0; i < array.length; i++) {
//     if (!isNaN(array[i])) result.push(Number(array[i]))

//     if (array[i] === 'POP') result.pop()
//     if (array[i] === 'DUP') result.push(result[result.length - 1])
//     if (array[i] === '+') {
//       if (result.length <= 1) return -1
//       tempTotal += result[result.length - 1] + result[result.length - 2]
//       if (tempTotal > 1048575) return -1
//       result = result.slice(0, result.length - 2)
//       result.push(tempTotal);
//       tempTotal = 0;
//     }
//     if (array[i] === '-') {
//       if (result.length <= 1) return -1
//       tempTotal += result[result.length - 1] - result[result.length - 2]
//       result = result.slice(0, result.length - 2)
//       result.push(tempTotal);
//       tempTotal = 0;
//     }
//   }
//   return result[result.length - 1];
// }

// console.log(solution('4 5 6 - 7 +'))
// console.log(solution('13 DUP 4 POP 5 DUP + DUP + -'))
// console.log(solution('5 6 + -'))
// console.log(solution('3 DUP 5 - -'))
// console.log(solution('1048575 DUP +'))

// function twoNumberSum(array, targetSum) {

//   for (let i = 0; i < array.length; i++) {
//     if (array.includes(targetSum - array[i], i + 1)) {
//       return [array[i], targetSum - array[i]]
//     } else {
//       continue;
//     }
//   }
//   return []
// }

// console.log(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10))

// function isValidSubsequence(array, sequence) {
//   if (sequence.length === 0) return true;
//   let curIndex = 0;
//   for (let i = 0; i < array.length; i++) {
//     if (sequence[curIndex] === array[i]) {
//       curIndex++;
//     }
//     if (curIndex === sequence.length) break;
//   }
//   return curIndex === sequence.length;
// }

// console.log(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10]));
// console.log(isValidSubsequence([1, 1, 6, 1], [1, 1, 1, 6]));

// function sortedSquaredArray(array) {
//   return array.map((ele) => ele * ele).sort((a, b) => a - b);
// }

// console.log(sortedSquaredArray([1, 4, 9, 16, 25]));

// function tournamentWinner(competitions, results) {
//   let obj = {};
//   for (let i = 0; i < competitions.length; i++) {
//     if (results[i] === 0) {
//       if (!obj[competitions[i][1]]) {
//         obj[competitions[i][1]] = 1;
//       } else {
//         obj[competitions[i][1]]++;
//       }
//     } else if (results[i] === 1) {
//       if (!obj[competitions[i][0]]) {
//         obj[competitions[i][0]] = 1;
//       } else {
//         obj[competitions[i][0]]++;
//       }
//     }
//   }
//   let max = Math.max(...Object.values(obj));
//   for (let key in obj) {
//     if (obj[key] === max) {
//       return key;
//     }
//   }
// }
// console.log(
//   tournamentWinner(
//     [
//       ["HTML", "C#"],
//       ["C#", "Python"],
//       ["Python", "HTML"],
//     ],
//     [0, 0, 1]
//   )
// );
// function nonConstructibleChange(coins) {
//   let minChange = 0;
//   let sort = coins.sort((a, b) => a - b);
//   for (let coin of sort) {
//     if (coin > minChange + 1) return minChange + 1;
//     minChange += coin;
//   }
//   return minChange + 1;
// }

// console.log(nonConstructibleChange([1, 2, 5]));
// console.log(nonConstructibleChange([5, 7, 1, 1, 2, 3, 22]));

// function minimumWaitingTime(queries) {
//   queries.sort((a, b) => a - b);
//   let minWait = 0;
//   for (let i = 0; i < queries.length - 1; i++) {
//     minWait += queries[i] * (queries.length - i - 1);
//   }
//   return minWait;
// }

// console.log(minimumWaitingTime([3, 2, 1, 2, 6]));

// function classPhotos(redShirtHeights, blueShirtHeights) {
//   redShirtHeights.sort((a, b) => a - b).reverse();
//   blueShirtHeights.sort((a, b) => a - b).reverse();
//   console.log(redShirtHeights, blueShirtHeights);
//   let topRow = [],
//     bottomRow = [];

//   if (redShirtHeights[0] > blueShirtHeights[0]) {
//     topRow = redShirtHeights;
//     bottomRow = blueShirtHeights;
//   } else {
//     topRow = blueShirtHeights;
//     bottomRow = redShirtHeights;
//   }

//   for (let i = 0; i < topRow.length; i++) {
//     if (topRow[i] <= bottomRow[i]) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(classPhotos([5, 8, 1, 3, 4], [6, 9, 2, 4, 5]));
// console.log(classPhotos([6, 9, 2, 4, 5, 1], [5, 8, 1, 3, 4, 9]));

// function findThreeLargestNumbers(array) {
//   let threeLargest = ["None", "None", "None"];
//   for (let i = 0; i < array.length; i++) {
//     updateLargest(threeLargest, array[i]);
//   }
//   return threeLargest;
// }

// function updateLargest(threeLargest, num) {
//   if (threeLargest[2] === "None" || num > threeLargest[2]) {
//     shiftAndUpdate(threeLargest, num, 2);
//   } else if (threeLargest[1] === "None" || num > threeLargest[1]) {
//     shiftAndUpdate(threeLargest, num, 1);
//   } else if (threeLargest[0] === "None" || num > threeLargest[0]) {
//     shiftAndUpdate(threeLargest, num, 0);
//   }
// }

// function shiftAndUpdate(array, num, idx) {
//   for (let i = 0; i < idx + 1; i++) {
//     if (i === idx) {
//       array[i] = num;
//     } else {
//       array[i] = array[i + 1];
//     }
//   }
// }

// console.log(
//   findThreeLargestNumbers([141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7])
// );

// console.log(findThreeLargestNumbers([7, 8, 3, 11, 43, 55]));
// console.log(findThreeLargestNumbers([55, 43, 11, 3, -3, 10]));

// function firstRecurring(array) {
//   let result = {};
//   for (let i = 0; i < array.length; i++) {
//     if (!result[array[i]]) {
//       result[array[i]] = 1;
//     } else {
//       return array[i];
//     }
//   }
//   return undefined;
// }

// console.log(firstRecurring([2, 5, 1, 2, 3, 5, 1, 2, 4]));
// console.log(firstRecurring([2, 1, 1, 2, 3, 5, 1, 2, 4]));
// console.log(firstRecurring([2, 3, 4, 5, 3]));

// function save(sizes, hd) {
//   let count = 0;
//   for (let i = 0; i < sizes.length; i++) {
//     if (hd - sizes[i] >= 0) {
//       count++;
//       hd = hd - sizes[i];
//     } else {
//       break;
//     }
//   }
//   return count;
// }

// console.log(save([4, 4, 4, 3, 3], 12)); //, 3));
// console.log(save([4, 4, 4, 3, 3], 11)); //, 2));
// console.log(save([4, 8, 15, 16, 23, 42], 108)); //, 6));
// console.log(save([13], 13)); //, 1));
// console.log(save([1, 2, 3, 4], 250)); //, 4));
// console.log(save([100], 500)); //, 1));
// console.log(save([11, 13, 15, 17, 19], 8)); //, 0));
// console.log(save([45], 12)); //, 0));
// const myArray = [3, 4, 6, 10, 11, 15];
// const alicesArray = [1, 5, 8, 12, 14, 19];

// function mergeArrays(myArray, alicesArray) {
//   let result = [];
//   let pointMyArray = 0;
//   let pointAlicesArray = 0;
//   while (
//     pointMyArray <= myArray.length &&
//     pointAlicesArray < alicesArray.length
//   ) {
//     if (myArray[pointMyArray] < alicesArray[pointAlicesArray]) {
//       result.push(myArray[pointMyArray]);
//       pointMyArray++;
//     } else {
//       result.push(alicesArray[pointAlicesArray]);
//       pointAlicesArray++;
//     }
//   }
//   return result;
// }

// console.log(mergeArrays(myArray, alicesArray));
// logs [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19]

// var maxProfit = function (prices) {
//   let cache = {};
//   let maxProfit = 0;
//   let max = Math.max(...prices);
//   let newMax = max;
//   let desc = true;
//   for (let i = 0; i < prices.length; i++) {
//     if (prices[i] === max) {
//       newMax = Math.max(...prices.slice(i + 1));
//     }
//     if (newMax - prices[i] > maxProfit) {
//       maxProfit = newMax - prices[i];
//       desc = false;
//     }
//   }
//   return (desc = true ? 0 : maxProfit);
// };

// console.log(maxProfit([7, 1, 5, 3, 6, 4]));
// console.log(maxProfit([7, 6, 4, 3, 1]));

// function maxChar(str) {
//   let obj = {};
//   for (let i = 0; i < str.length; i++) {
//     if (obj[str[i]]) {
//       obj[str[i]]++;
//     } else {
//       obj[str[i]] = 1;
//     }
//   }
//   let values = Object.values(obj);
//   let max = Math.max(...values);
//   for (let item in obj) {
//     if (obj[item] === max) {
//       return item;
//     }
//   }
// }

// console.log(maxChar("abcccccccd"));
// console.log(maxChar("apple 1231111"));

// function generateDocument(characters, document) {
//   let obj = {};
//   let obj2 = {};
//   for (let char of characters) {
//     obj[char] = obj[char] + 1 || 1;
//   }
//   for (let ele of document) {
//     obj2[ele] = obj2[ele] + 1 || 1;
//   }
//   for (let key in obj2) {
//     for (let item in obj) {
//       if (obj[key] < obj2[key] || obj[key] === undefined) {
//         return false;
//       }
//     }
//   }
//   return true;
// }

// console.log(
//   generateDocument("Bste!hetsi ogEAxpelrt x ", "AlgoExpert is the Best!")
// );
// console.log(generateDocument("A", "a"));

// const max_sub_array_of_size_k = function (k, arr) {
//   if (arr.length === 0) return -1;
//   let sumLength = arr.slice(0, k).reduce((a, b) => a + b);
//   let maxSub = sumLength;
//   let nextSub = sumLength;
//   for (let i = 0; i < arr.length - k; i++) {
//     nextSub = nextSub - arr[i] + arr[i + k];
//     if (nextSub > maxSub) {
//       maxSub = nextSub;
//     }
//   }
//   return maxSub;
// };

// console.log(max_sub_array_of_size_k(3, [2, 1, 5, 1, 3, 2]));
// console.log(max_sub_array_of_size_k(2, [2, 3, 4, 1, 5]));

// function anagrams(stringA, stringB) {
//   let object = {};
//   let object2 = {};

//   for (let item of stringA) {
//     object[item] = object[item] + 1 || 1;
//   }
//   for (let item of stringB) {
//     object2[item] = object2[item] + 1 || 1;
//   }
//   if (Object.keys(object).length !== Object.keys(object2).length) {
//     return false;
//   }
//   for (let char in object) {
//     if (object[char] !== object2[char]) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(anagrams("rail safety", "fairy tales"));
// console.log(anagrams("hello", "llohe"));
// console.log(anagrams("rail sa", "fairy tales"));

// function isPalindrome(s) {
//   s.toLowerCase().replace(/[\W_]/g, "");
//   console.log(s, "s");

//   let left = s[0];
//   let right = s[s.length - 1];

//   while (left < right) {
//     if (s[left] !== s[right]) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(isPalindrome("racecar"));
// console.log(isPalindrome("lol"));
// console.log(isPalindrome("race a car"));

// function dataReverse(data) {
//   const result = [];
//   let left = 0;
//   while (left < data.length) {
//     result.unshift(...data.slice(left, left + 8));
//     left += 8;
//   }
//   return result;
// }

// const data1 = [
//   1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0,
//   1, 0, 1, 0, 1, 0,
// ];
// const data2 = [
//   1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1,
//   1, 1, 1, 1, 1, 1,
// ];
// const data3 = [0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1];
// const data4 = [0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 1, 1, 0];

// console.log(dataReverse(data1));
// console.log(dataReverse(data2));
// console.log(dataReverse(data3));
// console.log(dataReverse(data4));

// function threeSum(array, targetSum) {
//   array = array.sort((a, b) => a - b);
//   const result = [];
//   for (let i = 0; i < array.length - 2; i++) {
//     let currentNum = array[i];
//     let left = i + 1;
//     let right = array.length - 1;
//     while (left < right) {
//       let sum = currentNum + array[left] + array[right];
//       console.log(sum, "SUM");
//       if (sum === targetSum) {
//         result.push([currentNum, array[left], array[right]]);
//         left++;
//         right--;
//       } else if (sum < targetSum) {
//         left++;
//       } else if (sum > targetSum) {
//         right--;
//       }
//     }
//   }
//   return result;
// }

// console.log(threeSum([12, 3, 1, 2, -6, 5, -8, 6], 0)); //([-8, 2, 6], [-8, 3, 5], [-6, 1, 5], 0))
// console.log(threeSum([-1, 0, 1, 2, -1, -4], 0)); //([-8, 2, 6], [-8, 3, 5], [-6, 1, 5], 0))

var threeSum = function (array) {
  array = array.sort((a, b) => a - b);
  if (array.length === 1) return [];
  const result = [];
  for (let i = 0; i < array.length - 2; i++) {
    // if (array[i] !== array[i - 1]) {
    let currentNum = array[i];
    let left = i + 1;
    let right = array.length - 1;
    while (left < right) {
      let sum = currentNum + array[left] + array[right];
      if (sum === 0) {
        result.push([currentNum, array[left], array[right]]);
        while (array[left] === array[left + 1]) left++;
        while (array[right] === array[right - 1]) right--;
        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else if (sum > 0) {
        right--;
      }
    }
    // }
  }
  return result;
};

console.log(threeSum([12, 3, 1, 2, -6, 5, -8, 6], 0)); //([-8, 2, 6], [-8, 3, 5], [-6, 1, 5], 0))
console.log(threeSum([-1, 0, 1, 2, -1, -4], 0)); //([-8, 2, 6], [-8, 3, 5], [-6, 1, 5], 0))
console.log(threeSum([-2, 0, 0, 2, 2], 0)); //([-8, 2, 6], [-8, 3, 5], [-6, 1, 5], 0))
