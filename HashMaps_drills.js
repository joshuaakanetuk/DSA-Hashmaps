const HashMap = require("./hashmaps");

function main() {
  let lotr = new HashMap();
  lotr.MAX_LOAD_RATIO = 0.5;
  lotr.SIZE_RATIO = 3;
  lotr.set("Hobbit", "Bilbo");
  lotr.set("Hobbit", "Frodo");
  lotr.set("Wizard", "Gandalf");
  lotr.set("Human", "Aragorn");
  lotr.set("Elf", "Legolas");
  lotr.set("Maiar", "The Necromancer");
  lotr.set("Maiar", "Sauron");
  lotr.set("RingBearer", "Gollum");
  lotr.set("LadyOfLight", "Galadriel");
  lotr.set("HalfElven", "Arwen");
  lotr.set("Ent", "Treebeard");
  console.log(lotr);
  console.log(lotr.get("Maiar"));
  console.log(lotr.get("Hobbit"));
  // grabs last added value
  // capacity is 8
}

main();

const WhatDoesThisDo = function () {
  let str1 = "Hello World.";
  let str2 = "Hello World.";
  let map1 = new HashMap();
  map1.set(str1, 10);
  map1.set(str2, 20);
  let map2 = new HashMap();
  let str3 = str1;
  let str4 = str2;
  map2.set(str3, 20);
  map2.set(str4, 10);

  console.log(map1.get(str1));
  console.log(map2.get(str3));
};

WhatDoesThisDo();

// 20, 10
//

function removeDupes(str) {
  let letters = [];
  for (let i = 0; i < str.length; i++) {
    if (!letters.includes(str[i])) letters.push(str[i]);
  }
  return letters.join("");
}

console.log(removeDupes("google"));

//  question
function palindrome(str) {
  let letters = str;
  for (let i = 0; i < str.length; i++) {
    for (let i = 0; i < str.length; i++) {

        if (!letters.includes(str[i])) letters.push(str[i]);
      }

  }
  return true;
}

console.log(palindrome("racecar"));


//
// https://medium.com/@646634/grouping-anagrams-together-in-javascript-4da359d6bb98
function groupAnagrams(strs) {
    let result = {};
  for (let word of strs) {
      let cleansed = word.split("").sort().join("");
      if (result[cleansed]) {
        result[cleansed].push(word);
      } else {
        result[cleansed] = [word];
      }
    }
  return Object.values(result);
  }

console.log(groupAnagrams(['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race']))


// separate chaining