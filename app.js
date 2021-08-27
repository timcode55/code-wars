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

// var moveZeros = function(arr) {
// 	let result = [];
// 	let count = 0;
// 	for (let item of arr) {
// 		if (item === 0) {
// 			count++;
// 		} else {
// 			result.push(item);
// 		}
// 	}

// 	return result.concat(Array(count).fill(0));
// };

// var moveZeros = function(arr) {
// 	return arr.filter((item) => item !== 0).concat(arr.filter((item) => item === 0));
// };

// console.log(moveZeros([ 1, 2, 0, 1, 0, 1, 0, 3, 0, 1 ])); //,
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

function wordsToSentence(words) {
	return words.join(' ');
}

console.log(wordsToSentence([ 'hello', 'world' ])); //, 'hello world');
