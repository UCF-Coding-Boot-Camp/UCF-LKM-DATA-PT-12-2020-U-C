## Cleaning in the Cloud

### Instructions

Before beginning, make sure your default interpreter uses PySpark and the higher power resource. When set to default, these will automatically be applied to imported notebooks.

**Part 1**

* Store the dataset in an S3 bucket.

* Load the dataset into a PySpark DataFrame using ZEPL.

* Transform the data to fit the following schema:

```sql
CREATE TABLE coffee_rating (
  coffee_shop_name TEXT,
  total_rating INTEGER,
  avg_rating FLOAT
)
```

* Transform the raw data into another DataFrame that fits the following schema:

```sql
CREATE TABLE date_table (
  review_dates DATE,
  review_count INTEGER
)
```

* Use the following Python code to help separate the date and text from a column:

```python
# Will import a function to extract from a column using regex
from pyspark.sql.functions import regexp_extract

# Will extract the date from the review_text column
regexp_extract("review_text", "\d+/\d+/\d+", 0)

# Will extract the text from the review_text column
regexp_extract("review_text", "\d+/\d+/\d+(?:\s)(.*)", 1)

# Up to you to figure out where to use these
```

* For more information on `regexp_extract`, check out the official [documentation](http://spark.apache.org/docs/2.2.0/api/python/pyspark.sql.html#pyspark.sql.functions.regexp_extract).

**Part 2**

* Create a second notebook in ZEPL.

* Import the data from S3 into a PySpark DataFrame.

* Transform the DataFrame to fit the following schema:

```sql
CREATE TABLE review_ratings (
  label TEXT,  -- This will be the review text
  num_ratings INTEGER,
  review_length INTEGER -- length of the review text
)
```

* Use the regex solution from above to separate the date from the text.

* Create a data pipeline and run Naive Bayes on the DataFrame to determine if the sentiment from the reviews can determine the rating.

What are your findings?
