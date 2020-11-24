
const CVP = require("./index");

console.log("...................LRU Policy ......................")
let cache = new CVP(5, "LRU");

cache.insert('A', 1);
cache.stateOfCache();
cache.insert('B', 1);
cache.stateOfCache();
cache.insert('C', 1);
cache.stateOfCache();
cache.insert('D', 1);
cache.stateOfCache();
cache.insert('E', 1);
cache.stateOfCache();
cache.insert('F', 1);
cache.stateOfCache();
cache.insert('B', 1);
cache.stateOfCache();
cache.insert('G', 1);
cache.stateOfCache();

console.log("...................MRU Policy ......................")
cache = new CVP(5, "MRU");

cache.insert('A', 1);
cache.stateOfCache();
cache.insert('B', 1);
cache.stateOfCache();
cache.insert('C', 1);
cache.stateOfCache();
cache.insert('D', 1);
cache.stateOfCache();
cache.insert('E', 1);
cache.stateOfCache();
cache.insert('F', 1);
cache.stateOfCache();
cache.insert('C', 1);
cache.stateOfCache();
cache.insert('G', 1);
cache.stateOfCache();
cache.insert('B', 1);
cache.stateOfCache();


