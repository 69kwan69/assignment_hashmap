import HashMap from './HashMap.js';

// TEST
const hashmap = new HashMap();
hashmap.set('0', 'Joy');
hashmap.set('1', 'Jay');
hashmap.set('2', 'Jane');
hashmap.set('3', 'John');
hashmap.set('4', 'Joe');
hashmap.set('5', 'Jeff');
console.log(hashmap.buckets);

hashmap.set('16', 'Janet');
console.log(hashmap.buckets);

console.log(hashmap.get('16'));
console.log(hashmap.remove('16'));
console.log(hashmap.has('16'));

console.log(hashmap.length());

console.log(hashmap.keys());
console.log(hashmap.values());
console.log(hashmap.entries());
console.log(hashmap.getLoadFactor());
