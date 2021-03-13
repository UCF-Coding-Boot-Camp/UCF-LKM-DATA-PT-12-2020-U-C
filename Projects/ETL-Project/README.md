# Guidelines for ETL Project

This document contains guidelines, requirements, grading rubric, and suggestions for the ETL Project.

## Team Effort

Due to the short timeline, teamwork will be crucial to the success of this project! Work closely with your team through all phases of the project to ensure that there are no surprises at the end of the week.

Working in a group enables you to tackle more difficult problems than you'd be able to working alone. In other words, working in a group allows you to **work smart** and **dream big**. Take advantage of it!

## Technical Requirements

1. [20pts] 2 or more raw data sources
2. [20pts] SQLite database (or SQL/ Python scripts/ Jupyter Notebook to create a Postgres database)
    * Must contain 1 or more tables you derived by an ETL on your raw sources.
3. [20pts] Static project website on Github Pages containing your report and HTML of your SQLite/ Postgres datasets.

Item 3 is a custom requirement for our class, but is still considered a part of your base grade.

Submit links to your github repository **and** your project website (Github pages) on Bootcampspot.

## Project Proposal

Before you start writing any code, remember that you only have one week to complete this project. View this project as a typical assignment from work. Imagine a bunch of data came in and you and your team are tasked with migrating it to a production data base.

Take advantage of your Instructor and TA support during office hours and class project work time. They are a valuable resource and can help you stay on track.

## Finding Data

Your project must use 2 or more sources of data. We recommend the following sites to use as sources of data:

* [data.world](https://data.world/)

* [Kaggle](https://www.kaggle.com/)

You can also use APIs or data scraped from the web. However, get approval from your instructor first. Again, there is only a week to complete this!

## Data Cleanup & Analysis

Once you have identified your datasets, perform ETL on the data. Make sure to plan and document the following:

* The sources of data that you will extract from.

* The type of transformation needed for this data (cleaning, joining, filtering, aggregating, etc).

* The type of final production database to load the data into (relational or non-relational).

* The final tables or collections that will be used in the production database.

You will be required to submit a final technical report with the above information and steps required to reproduce your ETL process.

## Project Report

You will write a project report in HTML and add it to your project website.

At the end of the week, your team will submit a Final Report that describes the following:

* **E**xtract: your original data sources and how the data was formatted (CSV, JSON, pgAdmin 4, etc).

* **T**ransform: what data cleaning or transformation was required.

* **L**oad: the final database, tables/collections, and why this was chosen.

You should include an ERD showing your final database table structures and relationships (having relationships between tables is optional but may make sense for your data analysis).

## Data Presentation - Website

*This requirement is custom for our class.*

Create a website demonstrating your project results.

This website should be deployed to Github pages (unless you are doing the bonus below). 

**Your website *must* be styled using Bootstrap.** At a minimum, you should use the following components:

* Bootstrap grid
* Responsive design (page should be easy to read on mobile)
* Bootstrap Nav bar

Your website nav bar should have links to the following information:

* Project Report
* HTML table containing your transformed data set
    * Hint: Pandas has a `df.to_html()` method that may make creating your table much easier.

You should provide links to both items in a navigation bar on your website.

----

## Grading Rubric

*Custom for our class.*

### Grade Table

| | | | | | |
|-|-|-|-|-|-|
| A (+/-) | 60-55 | C (+/-) | 39-25 | F (+/-) | <10 |
| B (+/-) | 54-40 | D (+/-) | 24-10 | | |

### Rubric

| Area | Mastery <=20pts | Approching Mastery <=15pts | Progressing <=10pts | Emerging <=5pts| 
| :--- | :--- | :--- | :--- | :--- |
| **Data Sources** | <ul><li>Sources have a key in common for combining</li><li>Sources have different data columns</li><li>2 or more unique files</li><li>At least 50 records per source</li></ul> | <ul><li>Sources do not have a key in common for combining</li><li>Sources have different data columns</li><li>2 or more unique files</li><li>At least 50 records per source</li></ul> | <ul><li>Sources do not have a key in common for combining</li><li>Sources do not make sense when combined together</li><li>2 or more unique files</li><li>Less than 50 records per source</li></ul>  | <ul><li>Less than 2 sources</li></ul> |
| **Database** | <ul><li>Database tables all have a different structure than the raw data sources</li><li>Database tables create a meaningful combined view of the raw sources</li><li>Database contains 1+ tables, all populated via ETL</li><li>Relational Db used</li></ul> | <ul><li>Database tables have same structure as raw files</li><li>Relational Db used</li></ul> | <ul><li>Database does not exist; instead, data is saved to a JavaScript, JSON, or HTML file directly from the raw sources</li></ul>| <ul><li>No ETL manipulation</li></ul> |
| **Project Website** | <ul><li>Project has been deployed to a static HTML web page</li><li>Website meets requirements</li></ul> | <ul><li>Project has been deployed to a static HTML web page</li><li>Website meets some requirements</li></ul> | <ul><li>Website is a README or Jekyll site rather than HTML</li></ul>| <ul><li>No website or README</li></ul> |

All teammates must contribute to your github repo (via commits under their username) to get full credit.

----

### Copyright

Coding Boot Camp © 2019. All Rights Reserved.
