# Variance, Standard Deviation and Z-Score Review

It is now your turn to practice summarizing the variability of a data set using 2017 NBA player statistics.

## Instructions

* Open the [varience_review.xlsx](Unsolved/Variance_Review_Unsolved.xlsx) workbook that contains your raw data.

* Create a new sheet in the workbook and name the sheet "Summary Table".

  * If you are uncertain how to make a new sheet in an Excel workbook, refer to [this](https://support.office.com/en-ie/article/insert-or-delete-a-worksheet-19d3d21e-a3b3-4e13-a422-d1f43f1faaf2) Microsoft Office support page.

* Within the new sheet, create a `Team` column, which contains the following teams:

  * `CLE` - the Cleveland Cavaliers

  * `GSW` - the Golden State Warriors

  * `LAL` - the Los Angeles Lakers

  * `MIA` - the Miami Heat

  * `SAS` - the San Antonio Spurs

* For each team, determine the **mean**, **variance** and **standard deviation** for the following statistics:

  * `PTS` - overall points scored for the season per player

  * `AGE` - age of each player

  * `FGA` - field goals attempted (i.e., all shots attempted that are not free throws)

* Based upon your calculated summary statistics, determine which team had the biggest difference in total season points scored across all of their players.

* Based upon your calculated summary statistics, determine which team had the lowest variance in player age. What was their average player age?

* Based upon your calculated summary statistics, determine which team had the lowest variance in field goal attempts per player.

* Create a new sheet in the workbook and name the sheet "Cleveland Z-Scores".

* Within this new sheet, copy over the `Player` and `PTS` columns from the raw data for only the `CLE` team.

* Calculate the **z-score** for the overall points per player across the whole team.

* Based upon your calculated z-scores, determine which player had the largest difference in total points from the mean of the team.

## Bonus

* Use pivot tables to recreate your "Summary Table" worksheet for all teams.

  * **Reminder**: You must calculate the mean, variance and standard deviation for overall points, player age and field goals attempted.

  * **Hint**: In pivot tables, use `Var` for variance and `StdDev` for standard deviation.
