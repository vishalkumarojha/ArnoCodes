export interface BlogPost {
    title: string;
    slug: string;
    author: string;
    date: string;
    views: number;
    content: string;
}

export const blogPosts: BlogPost[] = [
    {
        title: "Map Interface in Java - The Complete Guide",
        slug: "map-interface-java",
        author: "ArnoCodes",
        date: "2025-02-10",
        views: 500,
        content: `
        # Map Interface in TypeScript - The Complete Guide
        
        ## Introduction
        Have you ever needed to store data in key-value pairs? That’s where the Map object in TypeScript comes in handy! TypeScript provides a Map class that allows you to map unique keys to corresponding values.
        
        ## Basics of the Map Object
        ### Declaring a Map
        \`\`\`typescript
        let map: Map<string, number>;
        \`\`\`
        
        ### Creating and Initializing a Map
        \`\`\`typescript
        let map = new Map<string, number>();
        map.set("Alice", 85);
        map.set("Bob", 90);
        \`\`\`
        
        ### Accessing and Modifying Elements
        \`\`\`typescript
        let score = map.get("Alice");
        console.log("Alice's score:", score);
        map.set("Alice", 95);
        \`\`\`
        
        ### Checking Map Size
        \`\`\`typescript
        console.log("Map size:", map.size);
        \`\`\`
        
        ## Traversing a Map
        ### Using forEach Loop
        \`\`\`typescript
        map.forEach((value, key) => {
            console.log(\`\${key}: \${value}\`);
        });
        \`\`\`
        
        ## Types of Maps in TypeScript
        - **Map**: Standard ES6 Map with key-value pairs.
        - **WeakMap**: Holds "weak" references to keys, useful for garbage collection.
        
        ## Common Map Methods
        - set(key, value)
        - get(key)
        - has(key)
        - delete(key)
        - clear()
        - keys()
        - values()
        - entries()
        
        ## Handling Undefined Keys
        If a key is not found in the Map, \`get()\` returns \`undefined\`.
        
        ## Conclusion
        The Map object in TypeScript is a powerful tool for managing key-value pairs efficiently.
            `,
        }
        ,
    {
        title: "Binary Search in Java - The Complete Guide",
        slug: "binary-search-java",
        author: "ArnoCodes",
        date: "2025-02-12",
        views: 600,
        content: `
// Binary Search in TypeScript - The Complete Guide

// Introduction
/**
 * Searching for an element in a collection can sometimes feel like finding a needle in a haystack, 
 * but not with Binary Search! If you have a sorted array or list, Binary Search comes to the rescue, 
 * helping you find the target efficiently by repeatedly dividing the search range in half. 
 * This makes it one of the most efficient search algorithms out there, especially for large datasets.
 * 
 * In this guide, we'll walk through the basics of Binary Search, how to implement it in TypeScript, 
 * and explore different approaches you can use!
 */

// Basics of Binary Search

// What is Binary Search?
/**
 * Binary Search is an algorithm that works on sorted arrays or lists. The basic idea is simple: 
 * instead of checking every element one by one, we check the middle element. 
 * If the target is greater than the middle element, we search the right half, 
 * and if it's smaller, we search the left half. We repeat this process until we find the element 
 * or the search range becomes empty.
 */

// Binary Search Algorithm in TypeScript

// Steps for Binary Search Algorithm
/**
 * 1. Take the sorted array and target value as input.
 * 2. Initialize two pointers: start and end (start = 0, end = array size - 1).
 * 3. Calculate the middle index: mid = (start + end) / 2.
 * 4. Compare the middle element with the target:
 *    - If it's equal to the target, return the index.
 *    - If the middle element is smaller than the target, set start = mid + 1.
 *    - If the middle element is greater than the target, set end = mid - 1.
 * 5. Repeat the process until the target is found or the range is exhausted.
 * 6. If the element is not found, return -1.
 */

// Iterative Method for Binary Search in TypeScript

class BinarySearch {
  binarySearch(arr: number[], target: number): number {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
      const mid = Math.floor((start + end) / 2);

      if (arr[mid] === target) {
        return mid; // Element found at index mid
      } else if (arr[mid] > target) {
        end = mid - 1; // Search left half
      } else {
        start = mid + 1; // Search right half
      }
    }
    return -1; // Element not found
  }
}

// Test Iterative Binary Search
const binarySearchInstance = new BinarySearch();
const arr = [2, 3, 4, 10, 40];
const target = 10;
const result = binarySearchInstance.binarySearch(arr, target);

if (result === -1) {
  console.log("Element not present");
} else {
  console.log("Element found at index " + result);
}
// Output: Element found at index 3

// Recursive Method for Binary Search in TypeScript

class BinarySearchRecursive {
  binarySearch(arr: number[], start: number, end: number, target: number): number {
    if (start <= end) {
      const mid = Math.floor(start + (end - start) / 2);

      if (arr[mid] === target) {
        return mid; // Element found at index mid
      }

      if (arr[mid] > target) {
        return this.binarySearch(arr, start, mid - 1, target); // Search left half
      }
      return this.binarySearch(arr, mid + 1, end, target); // Search right half
    }
    return -1; // Element not found
  }
}

// Test Recursive Binary Search
const binarySearchRecursiveInstance = new BinarySearchRecursive();
const recursiveResult = binarySearchRecursiveInstance.binarySearch(arr, 0, arr.length - 1, target);

if (recursiveResult === -1) {
  console.log("Element not present");
} else {
  console.log("Element found at index " + recursiveResult);
}
// Output: Element found at index 3

// Built-in Method for Binary Search in TypeScript
const sortedArray: number[] = [10, 20, 15, 22, 35];
sortedArray.sort((a, b) => a - b); // Sorting the array

const index = sortedArray.indexOf(22);

if (index !== -1) {

} else {
  console.log("22 Not found");
}
// Output: 22 found at index = 3

// Binary Search in TypeScript Collections (Array)
const collectionArray: number[] = [1, 2, 3, 10, 20];
const collectionResult = collectionArray.indexOf(10);

if (collectionResult !== -1) {
  console.log("10 found at index = " + collectionResult);
} else {
  console.log("10 Not found");
}
// Output: 10 found at index = 3

// Conclusion
/**
 * Binary Search is an incredibly efficient algorithm for searching in sorted data,
 * cutting down the time complexity to O(log N), making it ideal for large datasets.
 * Whether you're using the iterative method, recursion, or TypeScript's built-in methods,
 * understanding Binary Search is a must for every TypeScript programmer!
 */

// Quick Recap:
// - Binary Search works on sorted arrays or lists.
// - Use the iterative method for simplicity, or recursion for elegance.
// - TypeScript's built-in indexOf() makes it easier to implement for arrays.
// - Remember, sort first if you're working with unsorted data!

Binary search is a fundamental searching algorithm with O(log N) complexity, making it highly efficient.
        `,
    },
    {
        title: "Arrays in Java - The Complete Guide",
        slug: "arrays-java",
        author: "ArnoCodes",
        date: "2025-02-14",
        views: 700,
        content: `
# Arrays in Java - The Complete Guide

## Introduction
Ever needed to store multiple values of the same type in a single variable? That's where arrays come in! In Java, an array lets you store and manage a collection of elements efficiently. Whether you're working with numbers, text, or objects, arrays provide a simple and structured way to handle data.

Unlike C/C++, Java treats arrays as objects, making them more flexible and powerful. Let's dive into how arrays work, how to use them, and some cool tricks along the way.

## Basics of Arrays

### Declaring an Array
\`\`\`java
// Method 1
int[] numbers;

// Method 2
int numbers[]; // Not recommended, but valid
\`\`\`

At this point, the array exists in name only—it hasn't been allocated memory yet.

### Creating and Initializing an Array
\`\`\`java
// Creating an array of 5 integers
numbers = new int[5];

// Directly initializing an array with values
int[] numbers = {1, 2, 3, 4, 5};
\`\`\`

### Accessing and Modifying Array Elements
\`\`\`java
// Setting and accessing an array element
numbers[0] = 10;
int firstElement = numbers[0];
System.out.println(firstElement); // Output: 10
\`\`\`

### Finding Array Length
\`\`\`java
System.out.println("Array length: " + numbers.length);
\`\`\`

## Traversing an Array

### Using a For Loop
\`\`\`java
for (int i = 0; i < numbers.length; i++) {
    System.out.print(numbers[i] + " ");
}
\`\`\`

### Using an Enhanced For Loop (For-Each)
\`\`\`java
for (int num : numbers) {
    System.out.print(num + " ");
}
\`\`\`

## Types of Arrays

### Single-Dimensional Arrays
\`\`\`java
int[] singleDimArray = {1, 2, 3, 4, 5};
\`\`\`

### Multi-Dimensional Arrays (Matrices)
\`\`\`java
int[][] matrix = {
    {1, 2, 3},
    {4, 5, 6},
    {7, 8, 9}
};

System.out.println(matrix[1][2]); // Output: 6
\`\`\`

## Arrays of Objects
\`\`\`java
class Student {
    String name;
    Student(String name) { this.name = name; }
    public String toString() { return name; }
}

Student[] students = { new Student("Alice"), new Student("Bob") };
for (Student s : students) {
    System.out.println(s);
}
\`\`\`

## Handling Out-of-Bounds Errors
\`\`\`java
int[] arr = new int[3];
System.out.println(arr[5]); // Error!
\`\`\`

Always check the array length before accessing an index.

## Conclusion

Arrays in Java are a powerful tool for handling collections of data. They are efficient, easy to use, and form the basis for many advanced data structures. Mastering arrays will set you up for success in Java programming!

🚀 **Quick Recap:**
- Declare an array: \`int[] arr;\`
- Create and initialize: \`arr = new int[5];\` or \`int[] arr = {1,2,3};\`
- Access elements via index 
- Use loops to traverse (for or for-each)
- Watch out for out-of-bounds errors!

**Happy coding! 🎯**
        `
    }
];
