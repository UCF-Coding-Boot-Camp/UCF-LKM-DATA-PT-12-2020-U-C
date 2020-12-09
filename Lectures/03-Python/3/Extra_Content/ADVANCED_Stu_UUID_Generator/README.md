# Instructions

* In this activity, you will generate a universally unique id (UUID) string using functions and module imports.

* See [link](https://stackoverflow.com/questions/292965/what-is-a-uuid) for more info on UUIDs.

* Import the [random](https://docs.python.org/3/library/random.html) and [string](https://docs.python.org/3/library/string.html) modules.


* Create a function that returns a universally unique id (UUID).

  * The function should accept a parameter for uuid length with the default size of 4.

  * The function should accept a parameter for a string of characters.

    * This string of characters will be the alphabet used to generate the uuid.

    * For example, if we pass `'abcdef'`, the uuid can only consist of the letters 'abcdef'.

  * The length and characters parameters should be optional and have default values.

  * Define a default character alphabet using the constants provided by the [string module](https://docs.python.org/3/library/string.html).

  * To select random characters for your uuid, use one of the functions available for sequence selection in the [random module](https://docs.python.org/3/library/random.html) to randomly select a character from the alphabet.


* Complete the test function to generate a variety of UUIDs and print them to the console.

## Hints

* Define a default character alphabet that combines ascii letters with digits.

* The random module has a function for making a random choice from an array. See the documentation on [functions for sequences](https://docs.python.org/3/library/random.html#functions-for-sequences).

* The code for the uuid function should create a list, append `length` random characters to the list, and then return the result of using `join` to create a string from it.

- - -

### Copyright

Coding Boot Camp © 2017. All Rights Reserved.
