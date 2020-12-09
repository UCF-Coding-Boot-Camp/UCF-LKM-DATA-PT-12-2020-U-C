# Bootcamp Data Set, Pt. 2

In this activity, you will be cleaning the same data set from before, but this time, extracting different data.

## Instructions

* The goal for this assignment is to recreate [BootcampOutputPart2.xlsx](output/BootcampOutputPart2.xlsx).

* Using Pandas, load the [CSV provided in Resources](Resources/2016-FCC-New-Coders-Survey-Data.csv). 

* Create a new table using the following columns: `[0, 1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 29, 30, 32, 36, 37, 45, 48, 56, 110, 111]`.

* The data set currently uses 0.0 to represent "No" or "False", and "1.0" to represent "Yes"/"True"—an entry of 0.0 for row 2 in the **Attended Bootcamp** column, for instance, indicates that the respondent with ID 2 did not attend a bootcamp. Replace all instances of "0.0" with No, and all instances of "1.0" with "Yes".

* Extract rows corresponding only to respondents who attended a bootcamp.

* Create a DataFrame with two columns: One with the bootcamp name, and one with the number of respondents who went to each bootcamp.

* Create another DataFrame with two columns: One for the bootcamp name, and one for the number of respondents who recommend it.

* Create a new DataFrame by merging the previous two DataFrames on the appropriate column.

* In your new DataFrame, create a new column containing the percentage of respondents for each bootcamp who would recommend that bootcamp.

* Sort the new DataFrame in descending order of the percentage of recommenders you just calculated.

* Use `map` and `format` to make the `"% Recommended"` column look more presentable.

* Finally, export your DataFrame to an Excel file.
