# Bootcamp Data Set, Pt. 1

In this assignment, you will consolidate your knowledge of Pandas and NumPy by cleaning a data set containing over 15,000 records.

## Instructions

* The goal for this assignment is to recreate [BootcampOutputPart1.xlsx](output/BootcampOutputPart1.xlsx).

* Using Pandas, load the [CSV provided in Resources](Resources/2016-FCC-New-Coders-Survey-Data.csv)

* Create a new table using the following columns: `[0, 1, 2, 3, 4, 7, 8, 9, 10, 11, 29, 30, 32, 36, 37, 45, 48, 56, 110, 111]`.

* The data set currently uses 0.0 to represent "No" or "False", and "1.0" to represent "Yes"/"True"—an entry of 0.0 for row 2 in the **Attended Bootcamp** column, for instance, indicates that the respondent with ID 2 did not attend a bootcamp. Replace all instances of "0.0" with No, and all instances of "1.0" with "Yes".

* Calculate the total number of respondents in the subtable you built.

* Create a table out of the rows corresponding only to people who _did_ attend a bootcamp.

* Calculate the number of people who attended a bootcamp.

* Calculate the average age of bootcamp attendees.

* Calculate the number of bootcamp attendees who self-identify as male; female; or neither.

* Calculate the number of bootcamp attendees who hold college degrees.

* Calculate the percentage of respondents who attended a bootcamp.

* Calculate the percentage of people who attended a bootcamp and hold a college degree.

* Calculate the average post-bootcamp salary.

* Create a new, two-row table collecting the above data.

* Use the `format` method to prettify your table—i.e., use `format` to display percents as percents; display numbers to a reasonable number of decimal points; etc.

* Finally, export the final table into an Excel file.

### Hints

* When extracting columns, see the documentation for [iloc](http://pandas.pydata.org/pandas-docs/version/0.17.0/generated/pandas.DataFrame.iloc.html).

* See the documentation for [replace](http://pandas.pydata.org/pandas-docs/stable/generated/pandas.DataFrame.replace.html).

* When extracting rows matching a certain condition, see the documentation for [loc](http://pandas.pydata.org/pandas-docs/version/0.17.0/generated/pandas.DataFrame.loc.html).

* See the documentation for Python's [format](https://pyformat.info/) method.
