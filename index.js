'use strict';

class CustomLinkedList {

  constructor (max = 5) {
    this.items = Object.create(null);
    this.first = null;
    this.last = null;
    this.max = max;
    this.size = 0;
  }
  
  get (key) {
    return this.items[key] || undefined;
  }

  insert (key, value) {
    let item;

    //if item already present move it to last
    if (this.items[key]) {

      item = this.items[key];
      item.value = value;

      if (this.last !== item) {
        const last = this.last,
          next = item.next,
          prev = item.prev;

        if (this.first === item) {
          this.first = item.next;
        }

        item.next = null;
        item.prev = this.last;
        last.next = item;

        if (prev !== null) {
          prev.next = next;
        }

        if (next !== null) {
          next.prev = prev;
        }
      }
    } else {
      //Evict as per strategy
      if (this.size === this.max) {
        this.evict();
      }

      item = this.items[key] = {
        key: key,
        prev: this.last,
        next: null,
        value: value
      };
      this.size ++;
      
      this.size === 1 ? this.first = item : this.last.next = item;
    }

    this.last = item;

    return this;
  }

  //Print state of cache 
  stateOfCache(){

    let item = this.first; 
    let arr = [];

    let output = "";

    while (item != null) { 
        
        output += item.key + " ";
      
        arr.push({
          key: item.key,
          value: item.value
        });
        item = item.next; 
    }

    //For testing purpose
    console.log(output);

    return arr;
    
  }

}

class LRU extends CustomLinkedList{

  constructor (max = 5) {
    super(max);
  }

  evict () {

    const item = this.first;
    delete this.items[item.key];
    this.first = item.next;
    this.first.prev = null;
    this.size--;

    return this;
  }
}

class MRU extends CustomLinkedList {

  constructor (max = 5) {
    super();
    this.items = Object.create(null);
    this.first = null;
    this.last = null;
    this.max = max;
    this.size = 0;
  }

  evict () {
    const item = this.last;
    delete this.items[item.key];
    this.last = item.prev;
    this.last.next = null;
    this.size--;

    return this;
  }
}

function CVP (max = 5, strategy = 'LRU') {
  if (isNaN(max) || max < 0) {
    throw new TypeError("Invalid max value");
  }

  switch(strategy.toLowerCase()) {
    case "mru": 
      return new MRU(max);
    case "lru":
      return new LRU(max);
  }

}

module.exports = CVP;

