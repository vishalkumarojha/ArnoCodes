export interface Article {
    id: string
    title: string
    content: string
    stepId: number
    lectureId: number
    lessonId: number
  }
  
  // Sample articles data
  export const articles: Article[] = [
    {
      id: "intro-to-programming",
      title: "What is Programming?",
      content: `
  # Introduction to Programming
  
  Programming is the process of creating a set of instructions that tell a computer how to perform a task. These instructions can be written in various programming languages, each with its own syntax and rules.
  
  ## Why Learn Programming?
  
  1. **Problem Solving**: Programming helps develop logical thinking and problem-solving skills.
  2. **Career Opportunities**: The tech industry continues to grow, offering numerous career paths.
  3. **Innovation**: Programming enables you to create new solutions and bring ideas to life.
  
  ## Key Programming Concepts
  
  ### Variables
  Variables are containers for storing data values. Think of them as labeled boxes where you can store different types of information.
  
  \`\`\`javascript
  let name = "John";
  let age = 25;
  let isStudent = true;
  \`\`\`
  
  ### Control Structures
  Control structures determine the flow of program execution:
  
  \`\`\`javascript
  if (age >= 18) {
      console.log("You are an adult");
  } else {
      console.log("You are a minor");
  }
  \`\`\`
  
  ### Functions
  Functions are reusable blocks of code that perform specific tasks:
  
  \`\`\`javascript
  function greet(name) {
      return "Hello, " + name + "!";
  }
  \`\`\`
  
  ## Getting Started
  
  1. Choose a programming language
  2. Set up your development environment
  3. Learn the basic syntax
  4. Practice with simple projects
  5. Join coding communities
  
  Remember, programming is a journey of continuous learning. Start with the basics and gradually build your knowledge.
      `,
      stepId: 0,
      lectureId: 0,
      lessonId: 0,
    },
    {
      id: "programming-languages",
      title: "Programming Languages Overview",
      content: `
  # Programming Languages Overview
  
  A comprehensive look at different programming languages and their use cases.
  
  ## Types of Programming Languages
  
  ### 1. High-Level Languages
  - Python
  - JavaScript
  - Java
  - C++
  - Ruby
  
  ### 2. Low-Level Languages
  - Assembly
  - Machine Code
  
  ## Choosing Your First Language
  
  Consider these factors:
  1. Learning curve
  2. Community support
  3. Job market demand
  4. Available resources
  5. Project requirements
  
  ## Popular Languages and Their Uses
  
  ### Python
  - Data Science
  - Machine Learning
  - Web Development
  - Automation
  
  ### JavaScript
  - Front-end Development
  - Back-end Development
  - Mobile Development
  - Browser Extensions
  
  ### Java
  - Enterprise Applications
  - Android Development
  - Large-scale Systems
  
  ## Code Examples
  
  ### Python Example
  \`\`\`python
  def hello_world():
      print("Hello, World!")
  \`\`\`
  
  ### JavaScript Example
  \`\`\`javascript
  function helloWorld() {
      console.log("Hello, World!");
  }
  \`\`\`
  
  ### Java Example
  \`\`\`java
  public class HelloWorld {
      public static void main(String[] args) {
          System.out.println("Hello, World!");
      }
  }
  \`\`\`
      `,
      stepId: 0,
      lectureId: 0,
      lessonId: 1,
    },
    {
      id: "variables-and-data-types",
      title: "Variables and Data Types",
      content: `
  # Variables and Data Types in Programming
  
  Variables and data types are fundamental concepts in programming. They allow us to store, manipulate, and work with different kinds of information in our programs.
  
  ## What are Variables?
  
  Variables are containers for storing data values. Think of them as labeled boxes where you can put different types of information.
  
  ### Declaring Variables
  
  In most programming languages, you need to declare a variable before using it. Here's an example in JavaScript:
  
  \`\`\`javascript
  let age = 25;
  const name = "John";
  var isStudent = true;
  \`\`\`
  
  ## Common Data Types
  
  Different programming languages support various data types. Here are some of the most common ones:
  
  1. **Integers**: Whole numbers without decimal points.
     Example: \`let count = 10;\`
  
  2. **Floating-point numbers**: Numbers with decimal points.
     Example: \`let price = 19.99;\`
  
  3. **Strings**: Text enclosed in quotes.
     Example: \`let greeting = "Hello, World!";\`
  
  4. **Booleans**: True or false values.
     Example: \`let isLoggedIn = false;\`
  
  5. **Arrays**: Collections of multiple values.
     Example: \`let fruits = ["apple", "banana", "orange"];\`
  
  6. **Objects**: Collections of key-value pairs.
     Example: \`let person = { name: "Alice", age: 30 };\`
  
  ## Type Checking
  
  Some languages are statically typed, meaning you need to declare the type of a variable when you create it. Others are dynamically typed, allowing variables to hold different types of data.
  
  ### Example in Python (dynamically typed):
  
  \`\`\`python
  x = 5  # x is an integer
  x = "Hello"  # x is now a string
  \`\`\`
  
  ### Example in Java (statically typed):
  
  \`\`\`java
  int x = 5;  // x can only hold integer values
  String y = "Hello";  // y can only hold string values
  \`\`\`
  
  ## Conclusion
  
  Understanding variables and data types is crucial for writing effective and efficient code. They form the building blocks of more complex programming concepts and are essential for solving a wide range of programming problems.
  
  Practice working with different variables and data types in your chosen programming language to solidify your understanding of these fundamental concepts.
    `,
      stepId: 0,
      lectureId: 2,
      lessonId: 3,
    },
  ]
  
  