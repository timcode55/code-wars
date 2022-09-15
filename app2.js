// function findMissingLetter(array) {
//   let alphabet = [
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
//     "z",
//   ];
//   let index = alphabet.indexOf(array[0].toLowerCase());
//   for (let i = 1; i < array.length; i++) {
//     if (array[i].toLowerCase() !== alphabet[index + 1]) {
//       let result = alphabet[index + 1];
//       return array[0] === array[0].toUpperCase()
//         ? result.toUpperCase()
//         : result.toLowerCase();
//     }
//     index++;
//   }
// }

// console.log(findMissingLetter(["a", "b", "c", "d", "f"])); //, 'e');
// console.log(findMissingLetter(["O", "Q", "R", "S"])); //, 'P');
// console.log(findMissingLetter(["G", "H", "J", "K", "L", "M"])); //, 'I');

// function arrange(s) {
//   let result = [];
//   let count = 1;
//   if (s.length === 0) return [];
//   while (s.length) {
//     if (count % 2 === 1) {
//       result.push(s.shift());
//       if (s.length === 0) break;
//       result.push(s.pop());
//       count++;
//     } else {
//       result.push(s.pop());
//       if (s.length === 0) break;
//       result.push(s.shift());
//       count++;
//     }
//   }
//   return result;
// }

// console.log(arrange([1, 2])); //, [1,2]))//;
// console.log(arrange([4, 3, 2])); //, [4, 2, 3]);
// console.log(arrange([9, 7, -2, 8, 5, -3, 6, 5, 1])); //, [9, 1, 5, 7, -2, 6, -3, 8, 5]);
// console.log(arrange([1])); //, [1]);
// console.log(arrange([])); //, []);
// console.log(arrange([2, 4, 3, 4])); //,[2, 4, 3, 4]);
// console.log(arrange([-3, -10, -5, -9, 0, -5, 4])); //,[ -3, 4, -5, -10, -5, 0, -9 ]
// class ListNode {
//   constructor(val, next = null, prev = null, child = null) {
//     this.val = val;
//     this.next = next;
//     this.prev = prev;
//     this.child = child;
//   }
// }

// // ---- Generate our linked list ----
// const nodes = [1, [2, 7, [8, 10, 11], 9], 3, 4, [5, 12, 13], 6];

// const buildMultiLevel = function (nodes) {
//   const head = new ListNode(nodes[0]);
//   let currentNode = head;

//   for (let i = 1; i < nodes.length; i++) {
//     const val = nodes[i];
//     let nextNode;

//     if (Array.isArray(val)) {
//       nextNode = buildMultiLevel(val);
//       currentNode.child = nextNode;
//       continue;
//     }

//     nextNode = new ListNode(val);
//     currentNode.next = nextNode;
//     nextNode.prev = currentNode;
//     currentNode = nextNode;
//   }

//   return head;
// };

// let multiLinkedList = buildMultiLevel(nodes);

// // ---- Generate our linked list ----

// const printListMulti = (head) => {
//   if (!head) {
//     return;
//   }

//   console.log(head.val);

//   if (head.child) {
//     printListMulti(head.child);
//   }

//   printListMulti(head.next);
// };

// const printList = (head) => {
//   if (!head) {
//     return;
//   }

//   console.log(head.val);

//   printList(head.next);
// };

// // --------- Our solution -----------

// var flatten = function (head) {
//   if (!head) return head;

//   let currentNode = head;
//   while (currentNode !== null) {
//     if (currentNode.child === null) {
//       currentNode = currentNode.next;
//     } else {
//       let tail = currentNode.child;
//       while (tail.next !== null) {
//         tail = tail.next;
//       }

//       tail.next = currentNode.next;
//       if (tail.next !== null) {
//         tail.next.prev = tail;
//       }

//       currentNode.next = currentNode.child;
//       currentNode.next.prev = currentNode;
//       currentNode.child = null;
//     }
//   }

//   return head;
// };

// // var flatten = (head) => {
// //   if (!head) return head;

// //   let currentNode = head;
// //   while (currentNode !== null) {
// //     if (currentNode.child === null) {
// //       currentNode = currentNode.next;
// //     } else {
// //       let tail = currentNode.child;
// //       while (tail.next !== null) {
// //         tail = tail.next;
// //       }
// //       tail.next = currentNode.next;
// //       if (tail.next !== null) {
// //         tail.next.prev = tail;
// //       }
// //       currentNode.next = currentNode.child;
// //       currentNode.next.prev = currentNode;
// //       currentNode.child = null;
// //     }
// //   }
// //   return head;
// // };

// printListMulti(multiLinkedList);
// console.log("after flatten");
// printList(flatten(multiLinkedList));

/*
NOTE: The beginning portion builds our test case linked list. Scroll down to the section titled Our Solution for the code solution!
 */

/*
NOTE: The beginning portion builds our test case linked list. Scroll down to the section titled Our Solution for the code solution!
 */

// class ListNode {
//   constructor(val, next = null) {
//     this.val = val;
//     this.next = next;
//   }
// }
// // ---- Generate our linked list ----
// const linkedList = [8, 7, 6, 5, 4, 3, 2, 1].reduce(
//   (acc, val) => new ListNode(val, acc),
//   null
// );

// let curr = linkedList,
//   cycleNode;
// while (curr.next !== null) {
//   if (curr.val === 3) {
//     cycleNode = curr;
//   }

//   curr = curr.next;
// }

// curr.next = cycleNode;
// // ---- Generate our linked list ----

// // --------- Our solution -----------

// const findCycle = function (head) {
//   if (!head) return null;

//   let tortoise = head,
//     hare = head;

//   while (true) {
//     tortoise = tortoise.next;
//     hare = hare.next;

//     if (hare === null || hare.next === null) {
//       return null;
//     } else {
//       hare = hare.next;
//     }

//     if (tortoise === hare) break;
//   }

//   let p1 = head,
//     p2 = tortoise;

//   while (p1 !== p2) {
//     p1 = p1.next;
//     p2 = p2.next;
//   }

//   return p2;
// };

// console.log(findCycle(linkedList));

const string = "{()[]}";
// const string = "[[))";

const parens = {
  "(": ")",
  "{": "}",
  "[": "]",
};
const isValid = (s) => {
  if (s.length === 0) return true;

  const stack = [];
  for (let i = 0; i < s.length; i++) {
    if (parens[s[i]]) {
      stack.push(s[i]);
    } else {
      const leftBracket = stack.pop();
      const correctBracket = parens[leftBracket];
      if (s[i] !== correctBracket) return false;
    }
  }
  return stack.length === 0;
};

// var isValid = function(s) {
//   if(s.length === 0) return true;

//   const stack = [];

//   for(let i = 0; i < s.length; i++)  {
//     if(parens[s[i]]) {
//       stack.push(s[i]);
//     } else {
//       const leftBracket = stack.pop();
//       const correctBracket = parens[leftBracket];
//       if(s[i] !== correctBracket) return false
//     }
//   }

//   return stack.length === 0;
// };

// console.log(isValid(string));

// const string1 = "(ab(cd)";

// const minRemoveToMakeValid = function (str) {
//   const res = str.split("");
//   const stack = [];
//   for (let i = 0; i < res.length; i++) {
//     if (res[i] === "(") {
//       stack.push(i);
//       //   console.log(stack, "STACK");
//     } else if (res[i] === ")" && stack.length) {
//       stack.pop();
//       //   console.log(stack, "STACK");
//     } else if (res[i] === ")") {
//       res[i] = "";
//     }
//   }
//   while (stack.length) {
//     console.log(stack, "STACK");
//     const curIdx = stack.pop();
//     console.log(res, "RES IN WHILE");
//     res[curIdx] = "";
//   }
//   return res.join("");
// };

// console.log(minRemoveToMakeValid(string1));

// const pars = {
//   "(": ")",
//   "{": "}",
//   "[": "]",
// };

// var isValid2 = function (s) {
//   if (s.length === 0) return true;
//   const stack = [];
//   for (let i = 0; i < s.length; i++) {
//     if (pars[s[i]]) {
//       stack.push(s[i]);
//     } else {
//       const leftBracket = stack.pop();
//       const parsNeeded = pars[leftBracket];
//       if (s[i] !== parsNeeded) return false;
//     }
//   }
//   return stack.length === 0;
// };

// console.log(isValid2("()"));
// console.log(isValid2("()[]{}"));
// console.log(isValid2("(]"));

// function findMinRotated(arr) {
//   let left = 0;
//   let right = arr.length - 1;
//   let boundary_index = -1;
//   while (left <= right) {
//     let mid = left + Math.floor((right - left) / 2);
//     // if <= last element, then belongs to lower half
//     if (arr[mid] <= arr[arr.length - 1]) {
//       boundary_index = mid;
//       right = mid - 1;
//     } else {
//       left = mid + 1;
//     }
//   }
//   return boundary_index;
// }

// console.log(findMinRotated([5, 7, 11, 1, 2, 3, 4]));

const products = [
  {
    title: "Phone case",
    price: 23,
    quantity: 2,
    category: "Accessories",
  },
  {
    title: "Android phone",
    price: 150,
    quantity: 1,
    category: "Phones",
  },
  {
    title: "Headphones",
    price: 78,
    quantity: 1,
    category: "Accessories",
  },
  {
    title: "Sport Watch",
    price: 55,
    quantity: 2,
    category: "Watches",
  },
];

/* Create a function "quantityByCategories" with one parameter "products".

This function "quantityByCategories" should return an object with keys equal to categories and values equal to sum of all quantities in each category.
*/

const quantityByCategories = (products) =>
  products.reduce((categories, product) => {
    if (!categories[product.category]) {
      categories[product.category] = product.quantity;
    } else {
      categories[product.category] += product.quantity;
    }
    return categories;
    // console.log(categories, product);
  }, {});
console.log(quantityByCategories(products));
/* {
  Accessories: 3,
  Phones: 1,
  Watches: 2
} */
