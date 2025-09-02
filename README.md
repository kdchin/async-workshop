# Async Workshop

In this workshop, you will:

- learn how to use and translate between thee asynchronous concepts in TypeScript
- understand how asyncronicity impacts ordering of code execution
- learn how to test asynchronous code

A reference solution is found on the `solution` branch.
We recommend you practice this exeercie **without** AI tools -- it's meant to help you learn!

The exercises for you to complete are specified below.
Please check in with your TA to discuss your answers once you are complete!

## Commands for getting started
These are specified in [package.json](package.json) if you are curious or want to edit!

**Installing Packages**
```sh
yarn install
```

**Build**

```sh
yarn build
```

**Run Script**

```sh
yarn execute
```


**Test**

```sh
yarn test
```


## Exercises

The code you will be writing identifies lines from movie script(s) that contain keywords.


#### 0. Examine `logLinesWithKeywordCallback`

This function is defined in [src/readfile.tx](src/readfile.ts). You can run it with the following command:

```sh
yarn execute
```

**Question 0.A:** In plain English does this function do? Is the provided JSDoc comment complete? If not, add the missing information to the JSDoc.

**Question 0.B:** Do the results of the `console.log` and the return value of the function match up? Why not? In your explanation, reference the possible orders of executions of the annotated lines of code.

#### 1. Translate to use Promises

Using `fs.promises.readFile()`, fill in `logLinesWithKeywordPromise` so that it behaves the same as `logLinesWithKeywordCallback` but uses the Promise syntax (using `.then()`) and verify it by modifying and running [src/main.tx](src/main.ts).

**Question 1.A:** Which version do you like better (or do you like them about the same)? WHy?

**Question 1.B:** Does the bug from **0.B** still exist? Why? In your explanation, reference the possible orders of executions of the lines of code.


#### 2. Translate to use `await`

Now, uing `async/await` syntax, fill in `logLinesWithKeywordAwait` and verify it works by modifying and running [src/main.tx](src/main.ts).

**Question 2.A:** Which version do you like better (or do you like them all about the same)? WHy?

**Question 2.B:** Does the bug from **0.B** and **1.B** still exist? Why or why not? In your explanation, reference the possible orders of executions of the lines of code.


#### 3. Using the results!

Using `async/await` makes it easier for us to return values and actually use them! Now we will try to do something useful with the results! Instead of logging the lines and returning the count, we just want to return all the lines.
If the function is successful, it should return a `Promise` containing the appropriate lines, and if it is unsuccessful, it should return a rejected promise that says `"Error!!"`.

**Task 3.A:** Fill in  `getLinesWithKeyword` (hint: it will be very similar to part 2's code!). Remember to fill in the return type annotation for the function signature!

**Task 3.B:** Write tests for the successful execution case in [test/readfile.spec.ts](test/readfile.spec.ts). You can run tests with the command `yarn test`!

**Task 3.C:** A test already exists for the error case. It's a bit confusing why the test is written in the way that it is. Why is it written like that? Leave your thoughts in a comment that will help you and other developers when they come across it!

**Task 3.D:** Modify the code and test case to return a better error message!

#### 4. Multiple Promises!

Now we want to extract keywords from all the movie scripts in a directory (skipping any file that does not contain `"-script"` in it).
You will learn how to do this two ways (only one of them is the preferred way!).

**Task 4.A:** Write `getAllKeywordLinesSlow`, which executes `getLinesWithKeyword` using `await` in a loop.

**Task 4.B:** Write `getAllKeywordLines` which executes `getLinesWithKeyword` using `Promise.all()`.

**Task 4.C:** Write a new test for `getLinesWithKeyword`. One is already provided for you!

**Task 4.D:** `getAllKeywordLines` is the preferred version. Why do you think that is?


Hint: you should use `fs.promises.readdir()`!

### Check off
Once you have completed all the questions and tasks through **Task 4.D**, raise your hand and a TA will discuss your answers with you and check you off!

