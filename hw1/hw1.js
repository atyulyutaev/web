//Task 1

Array.prototype.last = function() {
    if (this.length === 0) {
        return -1;
    }
    return this[this.length - 1];
};

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */


//Task 2
var createCounter = function(n) {
    let counter = n;
    return function() {
    return counter++;
  };
};

//Task 3

function sleep(millis) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("Done!");
    }, millis);
  });
}

//Task 4

var reduce = function (nums, fn, init) {
  let val = init;

  for (let i = 0; i < nums.length; i++) {
    val = fn(val, nums[i]);
  }

  return val;
}

//Task 5

var compose = function (functions) {
  if (functions.length === 0) {
    // If the array of functions is empty, return the identity function
    return function (x) {
      return x;
    };
  } else {
    // Define a helper function to compose two functions
    function compose(f, g) {
      return function (x) {
        return f(g(x));
      };
    }

    // Start with the last function in the array
    let result = functions[functions.length - 1];

    // Compose the functions from right to left
    for (let i = functions.length - 2; i >= 0; i--) {
      result = compose(functions[i], result);
    }

    return result;
  }
}

//Task 6

var filter = function (arr, fn) {
    const filteredArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) {
            filteredArr.push(arr[i]);
        }
    }

    return filteredArr;
}

//Task 7

var map = function (arr, fn) {
    const transformedArray = [];

    for (let i = 0; i < arr.length; i++) {
        transformedArray.push(fn(arr[i], i));
    }

    return transformedArray;
}

//Task 8
var fibGenerator =function* () {
    let a = 0;
    let b = 1;

    yield a;
    yield b;

    while (true) {
        const next = a + b;
        yield next;
        a = b;
        b = next;
    }
}


//Task 9

var createCounter = function (init) {
    let count = init;

    return {
        increment: function () {
            count += 1;
            return count;
        },
        decrement: function () {
            count -= 1;
            return count;
        },
        reset: function () {
            count = init;
            return count;
        },
    };
}

//Task 10

function once(fn) {
    let called = false;

    return (...args) => {
        if (called) return;

        called = true;

        return fn(...args);
    }
};

//Task 11

var createHelloWorld = function () {
    return function () {
        return "Hello World";
    };
}
//Task 12

var chunk = function (arr, size) {
    const chunkedArray = [];
    let index = 0;

    while (index < arr.length) {
        chunkedArray.push(arr.slice(index, index + size));
        index += size;
    }

    return chunkedArray;
}

//Task 13

var ArrayWrapper = function(nums) {
    this.nums = nums;
};

ArrayWrapper.prototype.valueOf = function() {
    return this.nums.reduce((acc,num) => acc + num,0);
}

ArrayWrapper.prototype.toString = function() {
    return `[${this.nums.join(',')}]`;
}

//Task 14

var argumentsLength = function() {
  return arguments.length;
}

//Task 15

var expect = function(val) {
  return {
    toBe: function (otherVal) {
      if (val !== otherVal) {
        throw new Error("Not Equal");
      }
      return true;
    },
    notToBe: function (otherVal) {
      if (val === otherVal) {
        throw new Error("Equal");
      }
      return true;
    },
  };
}


//Task 16

const cancellable = function(fn, args, t) {
    // cancelFn function//
    const cancelFn = function (){
      clearTimeout(timer);
  };
  const timer = setTimeout(()=>{
      fn(...args)
  }, t);
  return cancelFn ;
};

//Task 17

var addTwoPromises = function (promise1, promise2) {
  return Promise.all([promise1, promise2])
    .then((values) => {
      const [result1, result2] = values;
      const sum = result1 + result2;
      return sum;
    });
}


//Task 18

var sortBy = function (arr, fn) {
  // Use the Array.prototype.sort() method with a custom comparison function
  return arr.slice().sort((a, b) => fn(a) - fn(b));
};

//Task 19

var cancellable = function(fn, args, t) {

    fn(...args);

    let id = setInterval(() => {
        fn(...args);
    },t);

    let cancelFn = () => clearInterval(id);

    return cancelFn;
};

//Task 20

class Calculator {
  constructor(initialValue = 0) {
    this.result = initialValue;
  }

  add(value) {
    this.result += value;
    return this;
  }

  subtract(value) {
    this.result -= value;
    return this;
  }

  multiply(value) {
    this.result *= value;
    return this;
  }

  divide(value) {
    if (value === 0) {
      throw new Error("Division by zero is not allowed");
    }
    this.result /= value;
    return this;
  }

  power(value) {
    this.result **= value;
    return this;
  }

  getResult() {
    return this.result;
  }
}

//Task 21


ar isEmpty = function (obj) {
  if (Array.isArray(obj)) {
    // For arrays, check if the length is 0
    return obj.length === 0;
  } else if (typeof obj === 'object' && obj !== null) {
    // For objects, check if it has no keys
    return Object.keys(obj).length === 0;
  } else {
    // For other types or null/undefined, consider them as empty
    return true;
  }
}