# Udemy - Web Course Breakdown

## Instructions

* Create a Python application that reads the data on Udemy Web Development offerings. 

* Then store the contents of the Title, Price, Subscriber Count, Number of Reviews, and Course Length into Python Lists.

* Then zip these lists together into a single tuple.

* Finally, write the contents of your extracted data into a CSV. Make sure to include the titles of these columns in your csv.

## Notes:

* Windows user may get an `UnicodeDecodeError`, to avoid this file pass in `encoding="utf8"` as an additional parameter when reading in the file.

* As, with many datasets, the file does not include the header line. Use the below as a guide on the columns: "id,title,url,isPaid,price,numSubscribers,numReviews,numPublishedLectures,instructionalLevel,contentInfo,publishedTime"

## Bonus

* Find the percent of subscribers that have also left a review on the course. Include this in your final output.

* Parse the string associated with course length, such that we store it as an integer instead of a string. (i.e. "4 hours" should be converted to 4).
Data Source: [Web Development Course Data from Udemy](https://data.world/chasewillden/web-development-courses-from-udemy)
