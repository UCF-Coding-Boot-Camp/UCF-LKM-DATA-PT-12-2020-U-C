
### Heroes Of Pymoli Data Analysis
* Of the 1163 active players, the vast majority are male (84%). There also exists, a smaller, but notable proportion of female players (14%).

* Our peak age demographic falls between 20-24 (44.8%) with secondary groups falling between 15-19 (18.60%) and 25-29 (13.4%).
-----


```python
# Dependencies and Setup
import pandas as pd

# File to Load (Remember to Change These)
file_to_load = "Resources/purchase_data.csv"

# Read Purchasing File and store into Pandas data frame
purchase_data = pd.read_csv(file_to_load)
```

## Player Count


```python
# Calculate the Number of Unique Players
player_demographics = purchase_data.loc[:, ["Gender", "SN", "Age"]]
player_demographics = player_demographics.drop_duplicates()
num_players = player_demographics.count()[0]# Display the total number of players
pd.DataFrame({"Total Players": [num_players]})
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

```
.dataframe tbody tr th {
    vertical-align: top;
}

.dataframe thead th {
    text-align: right;
}
```
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>Total Players</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>576</td>
    </tr>
  </tbody>
</table>
</div>



## Purchasing Analysis (Total)


```python
# Run basic calculations
average_item_price = purchase_data["Price"].mean()
total_purchase_value = purchase_data["Price"].sum()
purchase_count = purchase_data["Price"].count()
item_count = len(purchase_data["Item ID"].unique())

# Create a DataFrame to hold results
summary_table = pd.DataFrame({"Number of Unique Items": item_count,
                              "Total Revenue": [total_purchase_value],
                              "Number of Purchases": [purchase_count],
                              "Average Price": [average_item_price]})

# Minor Data Munging
summary_table = summary_table.round(2)
summary_table ["Average Price"] = summary_table["Average Price"].map("${:,.2f}".format)
summary_table ["Number of Purchases"] = summary_table["Number of Purchases"].map("{:,}".format)
summary_table ["Total Revenue"] = summary_table["Total Revenue"].map("${:,.2f}".format)
summary_table = summary_table.loc[:,["Number of Unique Items", "Average Price", "Number of Purchases", "Total Revenue"]]

# Display the summary_table
summary_table
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

```
.dataframe tbody tr th {
    vertical-align: top;
}

.dataframe thead th {
    text-align: right;
}
```
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>Number of Purchases</th>
      <th>Average Price</th>
      <th>Number of Purchases</th>
      <th>Total Revenue</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>183</td>
      <td>#3.05</td>
      <td>780</td>
      <td>$2379.77</td>
    </tr>
  </tbody>
</table>
</div>



## Gender Demographics


```python
# Calculate the Number and Percentage by Gender
gender_demographics_totals = player_demographics["Gender"].value_counts()
gender_demographics_percents = gender_demographics_totals / num_players * 100
gender_demographics = pd.DataFrame({"Total Count": gender_demographics_totals, "Percentage of Players": gender_demographics_percents})

# Minor Data Munging
gender_demographics = gender_demographics.round(2)

gender_demographics
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

```
.dataframe tbody tr th {
    vertical-align: top;
}

.dataframe thead th {
    text-align: right;
}
```
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>Total Count</th>
      <th>Percentage of Players</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Male</th>
      <td>484</td>
      <td>84.03</td>
    </tr>
    <tr>
      <th>Female</th>
      <td>81</td>
      <td>14.06</td>
    </tr>
    <tr>
      <th>Other / Non-Disclosed</th>
      <td>11</td>
      <td>1.91</td>
    </tr>
  </tbody>
</table>
</div>




## Purchasing Analysis (Gender)


```python
# Run basic calculations
gender_purchase_total = purchase_data.groupby(["Gender"]).sum()["Price"].rename("Total Purchase Value")
gender_average = purchase_data.groupby(["Gender"]).mean()["Price"].rename("Average Purchase Price")
gender_counts = purchase_data.groupby(["Gender"]).count()["Price"].rename("Purchase Count")

# Calculate Normalized Purchasing (Average Total Purchase per Person)
normalized_total = gender_purchase_total / gender_demographics["Total Count"]

# Convert to DataFrame
gender_data = pd.DataFrame({"Purchase Count": gender_counts, "Average Purchase Price": gender_average, "Total Purchase Value": gender_purchase_total, "Normalized Totals": normalized_total})

# Minor Data Munging
gender_data["Average Purchase Price"] = gender_data["Average Purchase Price"].map("${:,.2f}".format)
gender_data["Total Purchase Value"] = gender_data["Total Purchase Value"].map("${:,.2f}".format)
gender_data ["Purchase Count"] = gender_data["Purchase Count"].map("{:,}".format)
gender_data["Avg Total Purchase per Person"] = gender_data["Normalized Totals"].map("${:,.2f}".format)
gender_data = gender_data.loc[:, ["Purchase Count", "Average Purchase Price", "Total Purchase Value", "Avg Total Purchase per Person"]]

# Display the Gender Table
gender_data
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

```
.dataframe tbody tr th {
    vertical-align: top;
}

.dataframe thead th {
    text-align: right;
}
```
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th>Gender</th>
      <th>Purchase Count</th>
      <th>Average Purchase Price</th>
      <th>Total Purchase Value</th>
      <th>Avg Total Purchase per Person</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Female</th>
      <td>113</td>
      <td>$3.20</td>
      <td>$361.94</td>
      <td>$4.47</td>
    </tr>
    <tr>
      <th>Male</th>
      <td>652</td>
      <td>$3.02</td>
      <td>$1,967.64</td>
      <td>$4.07</td>
    </tr>
    <tr>
      <th>Other / Non-Disclosed</th>
      <td>15</td>
      <td>$3.35</td>
      <td>$50.19</td>
      <td>$4.56</td>
    </tr>
  </tbody>
</table>
</div>



## Age Demographics


```python
# Establish the bins
age_bins = [0, 9.90, 14.90, 19.90, 24.90, 29.90, 34.90, 39.90, 99999]
group_names = ["<10", "10-14", "15-19", "20-24", "25-29", "30-34", "35-39", "40+"]

# Categorize the existing players using the age bins
player_demographics["Age Ranges"] = pd.cut(player_demographics["Age"], age_bins, labels=group_names)

# Calculate the Numbers and Percentages by Age Group
age_demographics_totals = player_demographics["Age Ranges"].value_counts()
age_demographics_percents = age_demographics_totals / num_players * 100
age_demographics = pd.DataFrame({"Total Count": age_demographics_totals, "Percentage of Players": age_demographics_percents})

# Minor Data Munging
age_demographics = age_demographics.round(2)

# Display Age Demographics Table
age_demographics.sort_index()
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

```
.dataframe tbody tr th {
    vertical-align: top;
}

.dataframe thead th {
    text-align: right;
}
```
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>Total Count</th>
      <th>Percentage of Players</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>&lt;10</th>
      <td>17</td>
      <td>2.95</td>
    </tr>
    <tr>
      <th>10-14</th>
      <td>22</td>
      <td>3.82</td>
    </tr>
    <tr>
      <th>15-19</th>
      <td>107</td>
      <td>18.58</td>
    </tr>
    <tr>
      <th>20-24</th>
      <td>258</td>
      <td>44.79</td>
    </tr>
    <tr>
      <th>25-29</th>
      <td>77</td>
      <td>13.37</td>
    </tr>
    <tr>
      <th>30-34</th>
      <td>52</td>
      <td>9.03</td>
    </tr>
    <tr>
      <th>35-39</th>
      <td>31</td>
      <td>5.38</td>
    </tr>
    <tr>
      <th>40+</th>
      <td>12</td>
      <td>2.08</td>
    </tr>
  </tbody>
</table>
</div>



## Purchasing Analysis (Age)


```python
# Bin the Purchasing Data
purchase_data["Age Ranges"] = pd.cut(purchase_data["Age"], age_bins, labels=group_names)

# Run basic calculations
age_purchase_total = purchase_data.groupby(["Age Ranges"]).sum()["Price"].rename("Total Purchase Value")
age_average = purchase_data.groupby(["Age Ranges"]).mean()["Price"].rename("Average Purchase Price")
age_counts = purchase_data.groupby(["Age Ranges"]).count()["Price"].rename("Purchase Count")

# Calculate Normalized Purchasing (Average Purchase Total per Person)
normalized_total = age_purchase_total / age_demographics["Total Count"]

# Convert to DataFrame
age_data = pd.DataFrame({"Purchase Count": age_counts, "Average Purchase Price": age_average, "Total Purchase Value": age_purchase_total, "Normalized Totals": normalized_total})

# Minor Data Munging
age_data["Average Purchase Price"] = age_data["Average Purchase Price"].map("${:,.2f}".format)
age_data["Total Purchase Value"] = age_data["Total Purchase Value"].map("${:,.2f}".format)
age_data ["Purchase Count"] = age_data["Purchase Count"].map("{:,}".format)
age_data["Avg Total Purchase per Person"] = age_data["Normalized Totals"].map("${:,.2f}".format)
age_data = age_data.loc[:, ["Purchase Count", "Average Purchase Price", "Total Purchase Value", "Avg Total Purchase per Person"]]

# Display the Age Table
age_data
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

```
.dataframe tbody tr th {
    vertical-align: top;
}

.dataframe thead th {
    text-align: right;
}
```
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>Purchase Count</th>
      <th>Average Purchase Price</th>
      <th>Total Purchase Value</th>
      <th>Avg Total Purchase per Person</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>10-14</th>
      <td>28</td>
      <td>$2.96</td>
      <td>$82.78</td>
      <td>$3.76</td>
    </tr>
    <tr>
      <th>15-19</th>
      <td>136</td>
      <td>$3.04</td>
      <td>$412.89</td>
      <td>$3.86</td>
    </tr>
    <tr>
      <th>20-24</th>
      <td>365</td>
      <td>$3.05</td>
      <td>$1,114.06</td>
      <td>$4.32</td>
    </tr>
    <tr>
      <th>25-29</th>
      <td>101</td>
      <td>$2.90</td>
      <td>$293.00</td>
      <td>$3.81</td>
    </tr>
    <tr>
      <th>30-34</th>
      <td>73</td>
      <td>$2.93</td>
      <td>$214.00</td>
      <td>$4.12</td>
    </tr>
    <tr>
      <th>35-39</th>
      <td>41</td>
      <td>$3.60</td>
      <td>$147.67</td>
      <td>$4.76</td>
    </tr>
    <tr>
      <th>40+</th>
      <td>13</td>
      <td>$2.94</td>
      <td>$38.24</td>
      <td>$3.19</td>
    </tr>
    <tr>
      <th>&lt;10</th>
      <td>23</td>
      <td>$3.35</td>
      <td>$77.13</td>
      <td>$4.54</td>
    </tr>
  </tbody>
</table>
</div>



## Top Spenders


```python
# Basic Calculations
user_total = purchase_data.groupby(["SN"]).sum()["Price"].rename("Total Purchase Value")
user_average = purchase_data.groupby(["SN"]).mean()["Price"].rename("Average Purchase Price")
user_count = purchase_data.groupby(["SN"]).count()["Price"].rename("Purchase Count")

# Convert to DataFrame
user_data = pd.DataFrame({"Total Purchase Value": user_total, "Average Purchase Price": user_average, "Purchase Count": user_count})

# Display Table
user_sorted = user_data.sort_values("Total Purchase Value", ascending=False)

# Minor Data Munging
user_sorted["Average Purchase Price"] = user_sorted["Average Purchase Price"].map("${:,.2f}".format)
user_sorted["Total Purchase Value"] = user_sorted["Total Purchase Value"].map("${:,.2f}".format)
user_sorted = user_sorted.loc[:,["Purchase Count", "Average Purchase Price", "Total Purchase Value"]]

# Display DataFrame
user_sorted.head(5)
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

```
.dataframe tbody tr th {
    vertical-align: top;
}

.dataframe thead th {
    text-align: right;
}
```
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th>SN</th>
      <th>Purchase Count</th>
      <th>Average Purchase Price</th>
      <th>Total Purchase Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Lisosia93</th>
      <td>5</td>
      <td>$3.79</td>
      <td>$18.96</td>
    </tr>
    <tr>
      <th>Idastidru52</th>
      <td>4</td>
      <td>$3.86</td>
      <td>$15.45</td>
    </tr>
    <tr>
      <th>Chamjask73</th>
      <td>3</td>
      <td>$4.61</td>
      <td>$13.83</td>
    </tr>
    <tr>
      <th>Iral74</th>
      <td>4</td>
      <td>$3.40</td>
      <td>$13.62</td>
    </tr>
    <tr>
      <th>Iskadarya95</th>
      <td>3</td>
      <td>$4.37</td>
      <td>$13.10</td>
    </tr>
  </tbody>
</table>
</div>



## Most Popular Items


```python
# Extract item Data
item_data = purchase_data.loc[:,["Item ID", "Item Name", "Price"]]

# Perform basic calculations
total_item_purchase = item_data.groupby(["Item ID", "Item Name"]).sum()["Price"].rename("Total Purchase Value")
average_item_purchase = item_data.groupby(["Item ID", "Item Name"]).mean()["Price"]
item_count = item_data.groupby(["Item ID", "Item Name"]).count()["Price"].rename("Purchase Count")

# Create new DataFrame
item_data_pd = pd.DataFrame({"Total Purchase Value": total_item_purchase, "Item Price": average_item_purchase, "Purchase Count": item_count})

# Sort Values
item_data_count_sorted = item_data_pd.sort_values("Purchase Count", ascending=False)

# Minor Data Munging
item_data_count_sorted["Item Price"] = item_data_count_sorted["Item Price"].map("${:,.2f}".format)
item_data_count_sorted["Purchase Count"] = item_data_count_sorted["Purchase Count"].map("{:,}".format)
item_data_count_sorted["Total Purchase Value"] = item_data_count_sorted["Total Purchase Value"].map("${:,.2f}".format)
item_popularity = item_data_count_sorted.loc[:,["Purchase Count", "Item Price", "Total Purchase Value"]]

item_popularity.head(5)
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

```
.dataframe tbody tr th {
    vertical-align: top;
}

.dataframe thead th {
    text-align: right;
}
```
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th>Item ID</th>
      <th>Item Name</th>
      <th>Purchase Count</th>
      <th>Item Price</th>
      <th>Total Purchase Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>178</th>
      <th>Oathbreaker, Last Hope of the Breaking Storm</th>
      <td>12</td>
      <td>$4.23</td>
      <td>$50.76</td>
    </tr>
    <tr>
      <th>145</th>
      <th>Fiery Glass Crusader</th>
      <td>9</td>
      <td>$4.58</td>
      <td>$41.22</td>
    </tr>
    <tr>
      <th>108</th>
      <th>Extraction, Quickblade Of Trembling Hands</th>
      <td>9</td>
      <td>$3.53</td>
      <td>$31.77</td>
    </tr>
    <tr>
      <th>82</th>
      <th>Nirvana</th>
      <td>9</td>
      <td>$4.90</td>
      <td>$44.10</td>
    </tr>
    <tr>
      <th>19</th>
      <th>Pursuit, Cudgel of Necromancy</th>
      <td>8</td>
      <td>$1.02</td>
      <td>$8.16</td>
    </tr>
  </tbody>
</table>
</div>



## Most Profitable Items


```python
# Item Table (Sorted by Total Purchase Value)
item_total_purchase = item_data_pd.sort_values("Total Purchase Value", ascending=False)

# Minor Data Munging
item_total_purchase["Item Price"] = item_total_purchase["Item Price"].map("${:,.2f}".format)
item_total_purchase["Purchase Count"] = item_total_purchase["Purchase Count"].map("{:,}".format)
item_total_purchase["Total Purchase Value"] = item_total_purchase["Total Purchase Value"].map("${:,.2f}".format)
item_profitable = item_total_purchase.loc[:,["Purchase Count", "Item Price", "Total Purchase Value"]]

item_profitable.head(5)
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

```
.dataframe tbody tr th {
    vertical-align: top;
}

.dataframe thead th {
    text-align: right;
}
```
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th>Item ID</th>
      <th>Item Name</th>
      <th>Purchase Count</th>
      <th>Item Price</th>
      <th>Total Purchase Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>178</th>
      <th>Oathbreaker, Last Hope of the Breaking Storm</th>
      <td>12</td>
      <td>$4.23</td>
      <td>$50.76</td>
    </tr>
    <tr>
      <th>82</th>
      <th>Nirvana</th>
      <td>9</td>
      <td>$4.90</td>
      <td>$44.10</td>
    </tr>
    <tr>
      <th>145</th>
      <th>Fiery Glass Crusader</th>
      <td>9</td>
      <td>$4.58</td>
      <td>$41.22</td>
    </tr>
    <tr>
      <th>92</th>
      <th>Final Critic</th>
      <td>8</td>
      <td>$4.88</td>
      <td>$39.04</td>
    </tr>
    <tr>
      <th>103</th>
      <th>Singed Scalpel</th>
      <td>8</td>
      <td>$4.35</td>
      <td>$34.80</td>
    </tr>
  </tbody>
</table>
</div>
