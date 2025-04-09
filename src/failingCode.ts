import node from "node";


// 1. Using `any` type, which should trigger `@typescript-eslint/no-explicit-any`
let foo: any = "Hello, world!";
foo = 42;  // No error, but using `any` is discouraged.

function bar(baz: any) {  // No return type declared, should trigger `explicit-function-return-type`
    return "This is a string";
}
bar()

// 2. Unused variable, should trigger `@typescript-eslint/no-unused-vars`
let unusedVar = "I'm not used anywhere";

// 3. Assigning `let` when `const` is preferred, should trigger `prefer-const`
let message = "Hello, world!";  // This should be `const` but we are using `let` for testing.

// 4. Console log, should trigger `no-console`
console.log("This is a console log!");  // Using console.log triggers the `no-console` rule.


const wtf = "adfd";
