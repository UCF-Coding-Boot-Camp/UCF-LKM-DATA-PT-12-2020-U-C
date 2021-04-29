# A Note on the S3a Connector:

* S3a is Amazon's file system client connector to its S3 storage service.

* For better compatibility with Zeppelin, files are downloaded using the `https` protocol in the Big Data unit  activities and homework assignment.

* However, it is possible to use the s3a connector to retrieve datasets in Spark.

* For example, take the dataset for video game reviews in [Amazon's review dataset](https://s3.amazonaws.com/amazon-reviews-pds/tsv/index.txt):

  * The URL is `https://s3.amazonaws.com/amazon-reviews-pds/tsv/amazon_reviews_us_Video_Games_v1_00.tsv.gz`

  * To access it with the s3a connector in ZEPL, use the following code:

  ```python
  video_games_df = spark.read.option("header", "true").csv("s3a://amazon-reviews-pds/tsv/amazon_reviews_us_Video_Games_v1_00.tsv.gz", inferSchema=True, sep="\t")
  ```

* To convert an `https` URL to its `s3a` counterpart, remove the highlighted portion of the URL and replace it with `s3a://`:

  * `**https://s3.amazonaws.com/**amazon-reviews-pds/tsv/amazon_reviews_us_Video_Games_v1_00.tsv.gz`

  * `s3a://amazon-reviews-pds/tsv/amazon_reviews_us_Video_Games_v1_00.tsv.gz`
