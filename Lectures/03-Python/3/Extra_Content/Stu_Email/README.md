# Generating Email Addresses

In this activity, you will write a Python script to generate an email address using fields from a csv data file.

## Instructions

* Use csv.DictReader to read the contents of a csv file into a dictionary.

  * Use the first_name and last_name keys to create a new email address using the first and last name of the employee. `{"first_name": "John", "last_name": "Glenn"}` would generate the email: `john.glenn@example.com`.

  * Create a new dictionary that includes the `first_name`, `last_name`, `ssn`, and `email`.

  * Append the new dictionary to a list called `new_employee_data`.

* Use csv.DictWriter to output the new_employee_data to a new csv file.

## Hints

* See the documentation for [DictReader](https://docs.python.org/3/library/csv.html#csv.DictReader).

- - -

### Copyright

Trilogy Education Services © 2018. All Rights Reserved.
