<!-- @format -->

# Lesson Overview

**Note:** These lecture notes are not final - just a handy reference. Notes may be updated any time depending on what we cover.

Lectures are linked to the corresponding Panopto/ Zoom video.

Office Hours are linked to the corresponding Panopto/ Zoom videos where available.

## <!-- 00 Panopto -->

<details><summary><h3 style="display: inline; padding-top: 0">Panopto</h3></summary>

_**NOTE:** As of day 11-3, Panopto has been discontinued as a Trilogy/ 2U resource. The Panopto recordings before that date should (?) continue to be accessible to you forever (but if they aren't, please use the Zoom links). For all lectures 11-3 and later, you will need to use the Zoom links._

Panopto recordings are searchable! Both audio and video feeds are processed.

To search within a specific video, open the video. The search bar appears on the left, under the camera feed. You can search multiple videos by using the search bar at the top of a Panopto folder.

Links to our class's Panopto folders are below. As part of your tuition, you have access to these videos forever.

Recordings:

* [Lecture Recordings](https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Sessions/List.aspx?folderID=2c76d6e4-8319-419b-a635-ac8c003c1a6a)
* Office Hours Recordings
  + [Homework Help and Solutions](https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Sessions/List.aspx?folderID=3e647d04-dc2b-4c88-9d07-ac8c01721eb8)
  + [Misc (i.e. Git tutorials, installs, career services chats)](https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Sessions/List.aspx?folderID=b128a7f9-6114-4e56-8bc5-ac8c01725a4f)
  + [Open Office Hours Recordings (not always recorded, but when they are, they're here)](https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Sessions/List.aspx?folderID=8efab66d-f657-4bec-8cab-acb60031f398)

<details><summary>Raw Files:</summary>
In case I forgot to include something in the processed videos above, you can check out the full class folder here:

* [Class Panopto Recordings](https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Sessions/List.aspx?folderID=188ece76-73ee-44c8-ba5b-ac8b017afaad)
  + Contains all recordings (lecture, office hours, _and copies of the raw recordings before I combine them_).
  + Searching this folder will return duplicates because it includes those raw copies.
  + You can't see folders, so this will look empty (I put all the videos in folders). But you can search with the bar at the top and the videos will show up in the search results.

</details>

</details>

---

## <!-- 00 Installs -->

<details><summary><h3 style="display: inline; padding-top: 0">Software Installs and Logins</h3></summary>

Please consult your prework for the basic programs we install, such as Git Bash and Anaconda.

This list contains only the additional installs and API signups we cover in class.

You are free to use additional libraries for your projects; this list is just a reference.

<details><summary><strong>Excel Addons</strong></summary>

* Statistics Addon (Moving Average)
* Enable Developer Tools (VBA)

</details>

<details><summary><strong>VSCode Plugins</strong></summary>

* Windows users: Set Git Bash to your primary terminal.
* Rainbow CSV
* [Git Graph](https://marketplace.visualstudio.com/items?itemName=mhutchie.git-graph)
* Live Share
* Python (may already be installed)
* [SQLite](https://marketplace.visualstudio.com/items?itemName=alexcvzz.vscode-sqlite)
* Live Server

</details>

<details><summary><strong>Chrome Extensions</strong></summary>

* JSON Formatter (just google "json formatter chrome" and install whatever comes up first, they're all pretty much the same)

</details>

<details><summary><strong>Jupyter Extensions</strong></summary>

Be sure you are in your `PythonData` environment before running these install commands, or you'll install your extensions to the wrong environment.

* <details><summary>Enable Jupyter Extensions - DO THIS FIRST</summary>

  + Jupyter Lab
    - Be sure you've updated Jupyter: `pip install -U jupyterlab`.
    - If you don't see the Puzzle Icon on the left sidebar:
      - Install the latest version of nodejs from the node.js website.
      - Restart Jupyter
    - Click the puzzle icon on the left sidebar. Accept the disclaimer to enable extensions.
  + Jupyter Notebook

    - `pip install jupyter_contrib_nbextensions`
    - `jupyter contrib nbextension install --user`
    - Restart Jupyter and you should now see the "nbextensions" tab on the file directory page. Go there to read about and install all the supported Jupyter Notebook plugins, such as Hinterland (auto-complete).
    </details>

</details>

<details><summary><strong>Python Libraries</strong></summary>

* Anaconda
* `conda create -n PythonData python=3.6 anaconda`
* `citipy` (used for Homework only)
* `census`
* `gmaps` (Jupyter Extension)
* `conda install tensorflow` (doesn't work if you use pip)
* `mrjob`

</details>

<details><summary><strong>APIs</strong></summary>

* [SpaceX API](https://github.com/r-spacex/SpaceX-API)
* [Star Wars API](https://swapi.dev/)
* [A small NYT headlines scraper](http://nyt-mongo-scraper.herokuapp.com/api/headlines)
* [TVmaze API's Show Search endpoint](https://www.tvmaze.com/api#show-search)
* [World Bank API](https://datahelpdesk.worldbank.org/knowledgebase/topics/125589-developer-information)
* Requires sign up:
  + [OMDb API](http://www.omdbapi.com/apikey.aspx)
  + [New York Times API](https://developer.nytimes.com/accounts/create)
  + [OpenWeatherMap](https://openweathermap.org/guide#how)
  + [Quandl (stocks)](https://docs.quandl.com/docs#section-authentication)
  + [Mapbox](https://docs.mapbox.com/api/#access-tokens)
  + US Census API
  + Google Maps APIs (Maps JavaScript, Geocoding, and Places APIs)

</details>

<details><summary><strong>Databases</strong></summary>

* Postgres
  + Install both Postgres and PgAdmin
  + Mac Users: We recommend using homebrew to install postgres
* MongoDB
  + Windows Users: You may need to create your `C:\data\db` folder manually.
    - You should add the `bin` folder from your Mongo install to your Windows path.
    - You should see Mongo in your Windows Services list. _If you don't, you can still run mongo by using a terminal to run `mongod` in the background._
  + Mac Users: We recommend using homebrew to install mongo, and start your server with `brew services run mongodb-community`. You should now be able to read/ write to your MongoDB database.

</details>

<details><summary><strong>Cloud Systems</strong></summary>

* Heroku CLI (needed to deploy Flask applications to Heroku)
* Google CoLab - Hosted Jupyter Notebooks
  + We use these for machine learning at the end of class, but these are also a good way to get going with Python and Jupyter if you can't install locally.

</details>

</details>

---

## <!-- 01-02 Excel, VBA -->

<details><summary><em>Module 01-02: Intro to Programming with Excel and VBA</em></summary>

<br/>

<details><summary><strong>Module 01 - Excel</strong></summary>

### [01-1 Course Intro](https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=945aebe9-2ac7-4112-8b25-ac8b018498d6)

[Zoom Recording](https://zoom.us/rec/share/VelJsDmIXp1E22mo9jBV0RH84kSuTrvZYrJByIc2d7n6w0cqfd_mi84j3DNA9g-m.8j8kRfchlyr8gxva)

* Introductions
* Thought experiments
* Data Modeling Strategy (Analytics Paradigm)

##### 01-1 Additional Coverage

* [Git Intro 1](https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=ba3c7078-083f-44dd-9d7b-ac8c002bd395)
  + `git clone`
  + `git pull`
  + _Never_ edit files in the cloned folder!
    - Copy to "InClass" instead.
  + Bash Commands: `ls`, `cd`, `..`,  `open` (`explorer` on windows), `pwd`

### [01-2 Excel Basics](https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=deaa8e10-66a1-46b5-9fc4-ac8d017d8fd3)

[Zoom Recording](https://zoom.us/rec/share/eiE-MNi53gYlq6Ku47iZXzdPWgCRWjD0XT2YD5gQlPvRkgVzwPXAhl88svKyvOFx._4NTCFe3ca-5rX7Q)

The first ~10 mins of this recording are missing, I go through how to navigate the Github repo. Read though the [README.md](../README.md) and this file, [00-Lecture-Overview](), to see what I covered.

* Functions and arguments
* Pivot Tables
* Formatting
* Vlookup
* Named Ranges
* Multiple worksheets
* Conditionals

##### 01-2 Additional Coverage

* [Git Intro 2](https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=0a51cb65-a3a2-4762-9f9d-ac8e002cf338)
  + Git Installation
  + Adding SSH Key
  + (Training Wheels) "Open Terminal Window Here" from Finder and "Open Git Bash Here" from Windows Explorer
  + Review:
    - `git clone`
    - `git pull`
    - _Never_ edit files in the cloned folder!
      - Copy to "InClass" instead.
    - Bash Commands: `ls`, `cd`, `..`, `open` (`explorer` on windows), `pwd`
* Open OH for TA assistance (custom for questions/ install issues)

### [01-3 Excel Charting](https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=43f4346a-f834-4b34-9e7b-ac8f00e95262)

[Zoom Recording](https://zoom.us/rec/share/fmOz8_8Wl1-GOzPdAeYYQEPCy2Jcw_qSDLBnQdnTf6qswoYTrRN7zttcqyrA4jQ.82I9y2-cjvPCI-Es)

* Line, Scatter, Bar, Pie charts
* Trend lines
* Pivot Charts
* Statistical Summaries
  + Variance, Standard Deviation
  + Z-Score
  + Outliers, Quartiles, Quantiles
  + Box-and-Whisker Plots

##### 01-3 Additional Coverage

* [01 Excel Homework Help 1/1](https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=6f9e4a43-15a8-41d5-8960-ac8f0121f79a)
  + Conditional Formatting
  + Pivot Table Breakout Columns
  + Class Questions
    - Splitting categories
    - Date conversion
    - Finding live campaigns
    - Variance & Std Deviation
* Open Office Hours for install help/ questions

</details>

<details><summary><strong>Module 02 - VBA</strong></summary>

### [02-1 VBA Day 1 - Intro to Programming](https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=6878a1ba-2284-4be5-bcca-ac920179fdf2)

[Zoom Recording](https://zoom.us/rec/share/ppVQMz497qsaYR6m9c1g_Ha13-rLeCjA-50lfeZagd2jRUlnu4kguONyp9sbAwtl.Yed1O_L7ildQuSAb)

* Installs
  + VSCode
    - Git Bash/ Terminal Integration
  + Excel Developer Tools
  + Excel Statistics Addon (for moving average calcs)
* Hello World!
* Excel Buttons
* Accessing Cells and Ranges in VBA
* Fundamentals of programming
  + Primitives (aka basic types)
  + Conditionals - `If`, `Elseif`, `Else`, `End If`
* Basics of navigating bash terminals
  + Bash Commands: `mkdir`, `~`, `code`, `cp`

##### 02-1 Additional Coverage

* After Class:
  + [02 VBA Homework Help 1/3](https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=039eeab3-e6d4-4b6f-a2d1-ac93002bf51d)
    - Review of VSCode set up and creating a git repo (used a local repo tonight)
    - Getting started - reading values out of columns

### [02-2 VBA Day 2 - Loops](https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=1c3aea1c-8b4d-4a60-acaa-ac94017e222f)

[Zoom Recording](https://zoom.us/rec/share/0KmRA_77KwCVgl_vbj7tPa2HxETLNBNF5pnu2eUFEQDTBmyU4wnXDwYtrt6wRpVC.s1W9NVKDOpEVd2KA)

* 2-1 Review Ex 09-10
* Warm up: 2-1 Ex 11
* Loops
* Conditionals (includes 2-1 Ex 12, 13)
* Installations for Module 3
  + Jupyter Notebook
  + Conda
  + Python

##### 02-2 Additional Coverage

* After Class:
  + [02 VBA Homework Help 2/3](https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=36bfc6b0-594b-4b42-8ecc-ac9500165044)

### [02-3 VBA Day 3 - More Practice](https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=65c42e5c-c01b-4954-ad66-ac9600ea57b5)

[Zoom Recording](https://zoom.us/rec/share/EDZ7fB3Q7SjF5o-pX3X_QwCcwMQFcYJGyhOvaLP1OYi8h01oWZTd2BNIk2BlnAm3.qISPBlONhBoRyy-j)

* Formatting sheets with VBA
* Nested Loops
* Lots of practice

##### 02-3 Additional Coverage

_No office hours before class._

* After Class:
  + [02 VBA Homework Help 3/3 - Creating a Github Repo](https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=2b220836-c9c3-4b71-bfde-ac9601262249)

</details>

</details>

---

## <!-- 03-06 Python, Pd, Plots, JSON -->

<details><summary><em>Module 03-06: Python, Pandas, Plotting, and APIs</em></summary>

<br/>

<details><summary><strong>Module 03 - Python</strong></summary>

### [03-1 Python Day 1 - Intro to Programming](https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=f26bdb6c-4160-4fb1-b0d1-ac9b0014dfc1)

[Zoom Recording](https://zoom.us/rec/share/4R8DGCJueVRRIMttMkEaR1Sru2EKXETTStLsBlo6SyTaC1oiFwjdr_X1Tv0eQzwA.AxyogBFtlgM-kbRe)

* Review Installations and PythonData environment
* Variables
* User Input
* Conditionals - `if`, `elif`, `else`
* Loops - `for` and **`while`**

##### 03-1 Additional Coverage

* Before Class:
  + 03 Python Installation Help
* After Class:
  + 03 Python Installation Help

### [03-2 Python Day 2 - CSVs, Python, and Lists](https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=d1528e56-f864-4e8c-b13a-aca70183d34b)

[Zoom Recording](https://zoom.us/rec/share/meIovFPS_nXNvz5_BqglfKMr7MNFl6uB6VjLa-P0A4bL19LBRKyL-UrOSnm07EQ8.pN61E6sb2gLjjdfL)

* Review Python, VSCode, Git
* Conditionals - `if`, `elif`, `else`
* Loops - `for` and `while`
* Read/ write CSVs

##### 03-2 Additional Coverage

* Before Class:
  + Open Office Hours
* After Class:
  + [03 Python Homework Help 1/3 + Git LFS Install Help](https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=b8ed0a29-1b4a-4817-a151-aca8002ccc5b)

### [03-3 Python Day 3 - Intermediate Python](https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=f4d1e63f-83bb-4172-b10e-aca901833eba)

[Zoom Recording](https://zoom.us/rec/share/B_is_r9vb4vumdYez4HUN4X4h4ccwYvoBnDs5NofiKQWGDrPmetk_RpNDHnuzJmu.nZCxpbHwus-4AEyP)

* Dictionaries
* List Comprehensions
  + Btw, you can also do dictionary comprehensions ...
    - ... but we won't cover that just yet.
    - If you're comfortable with list comprehensions, check 'em out!
* Functions
  + Later on, we'll talk about using lists and dictionaries to pass arguments to functions
  + aka `*args` and `**kwargs`.
* Sets (Extra Material)

##### 03-3 Additional Coverage

* Before Class:
  + 03 Python Installation Help
* After Class:
  + [01 Excel Homework Solution](https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=4109e75c-e5ab-4ab5-b7a2-acaa00310789)
  + [03 Python Help 2/3](https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=b9996c0f-bb81-4aa2-8eba-acaa002c4c2b)

</details>

<details><summary><strong>Module 04 - Pandas</strong></summary>

### [04-1 Pandas Day 1 - Intro to DataFrames](https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=35515ab7-1467-466e-a01e-acab00e7b104)

[Zoom Recording](https://zoom.us/rec/share/KaSkjCh3OJra4nkaGJQsW0C0ie0pS6UQkCtqRRSuHnS2Xrbgq2J3NJ22Q6_a5aA.NMb8-KZOK6GKNu3O)

* Intro to Jupyter Notebooks
* Review Python (`input`, loops, `open`, `csv.reader`, conditionals)
* Intro to Pandas
  + Lists/ dictionaries -> DataFrames
  + CSVs <-> DataFrames
* Intro to summarizing data

##### 04-1 Additional Coverage

_No office hours before class._

* After Class:
  + [03 Python Homework Help 3/3](https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=51b0be79-29e6-4762-856d-acab0122cdd4)

### [04-2 Pandas Day 2 - Data Cleaning](https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=169c97de-bad5-4a2a-9a3c-acae017c3cb3)

[Zoom Recording](https://zoom.us/rec/share/x06_PjAopyQVboitustDtDb8Cis5oAvtTHa8HHknPE7raRuwjoiY3cV0Z1NnAdbZ.hKxosNlzbZSWKC4f)

* Filtering (`loc` and `iloc`, `dropna`)
* Cleaning duplicates
* Data Types
* Grouped DataFrames and Aggregations
* Sorting

##### 04-2 Additional Coverage

* Before Class:
  + Open Office Hours
* After Class:
  + [04 Pandas Homework Help 1/3](https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=1577f8b1-c832-479e-aca4-acaf002b0173)
  + [Personalizing Your Environments](https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=081a7e4b-6281-4def-8cee-acaf003034e0)
    - Tips and Tricks for Jupyter 1/2
      - Enabling Jupyter Extensions
    - Pimp My Terminal 1/2
      - Terminal Emulators And U
        - Mac: iTerm (can also check out Alacritty, Kitty)
        - Windows: WSL2 (we'll be installing Alacritty later on)

### [04-3 Pandas Day 3 - Intermediate Data Cleaning](https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=0111a9e1-7655-466e-9eb4-acb00174e990)

[Zoom Recording](https://zoom.us/rec/share/yoIHRInwoXfZs39AHNP6c_VBRFvXY4TESS_KyCS-ncbvP6v5pqaoXKUvsBPGMtgp.IrKyGCoNEoe80mgN)

* Merging DataFrames
* Binning
* Mapping (`df.map`)
* Fixing Bugs in Python

##### 04-3 Additional Coverage

* Before Class:
  + Open Office Hours
* After Class:
  + [04 Pandas Homework Help 2/3](https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=5c80d4f4-6236-4247-b72c-acb1002c932b) - no audio, use the zoom recording

</details>

<details><summary><strong>Module 05 - Intro to Plots and Statistics</strong></summary>

### [05-1 Intro to Plots and Statistics Day 1 - Matplotlib](https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=8a43e4aa-b707-4ad6-b300-acb200e88a3b)

[Zoom Recording](https://zoom.us/rec/share/E-T0EIiVPwf-K19J36Lqwr_Nr7qtmZHuYtY5QUf64Z0pXvJyQ7wlltLeTEf9tLeZ.CZZv1bbDFrUJOOFe)

* Using Matplotlib in Jupyter Notebook
  + Interactive and static inline plots
  + `%matplotlib notebook`
* Line, bar, scatter, pie charts
* Basic plot configuration

##### 05-1 Additional Coverage

_No office hours before class._

* After Class
  + [04 Pandas Homework Help 3/3](https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=6c95b560-fde4-4b9a-8006-acb2011a423e)
  + [02 VBA Homework Solution](https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=ecef5e6f-e35f-4448-9436-acb2011a5e9a)

### [05-2 Intro to Plots and Statistics Day 2 - Pandas Plots](https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=6f5c8fc9-3175-4269-9184-acb5017dd703)

[Zoom Recording](https://zoom.us/rec/share/CGFjcZzfKql4Drn3uTqPoRQKYB_xrbN0IsRxf06oHF1cArUuI8xj2xGswg8VgmAl.OKLbwaQBH_Nm2nLv)

* `DataFrame.plot()`
* Line, bar, scatter, pie charts
* Pros & cons vs. Matplotlib

##### 05-2 Additional Coverage

* Before Class
  + [Open Office Hours](https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=b858cdcf-e451-4c5e-a32a-acb5017b678c)
* After Class
  + Statistics (video canceled)
    - [You can review the following material instead (will be helpful for 05-3, but not required)](https://ucflkmdatapt1-3my1247.slack.com/archives/C01FDRD8LLF/p1611114150000300)
  + [05 Python Plotting Homework Help 1/3](https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=b56bb2ba-4f6d-45fd-8f90-acb6002ce4eb)

### [05-3 Intro to Plots and Statistics Day 3 - Intro to Statistics](https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=6b2d21d0-d0ab-475e-ab59-acb70182ff73)

[Zoom Recording](https://zoom.us/rec/share/rjUFF48z4L8bH88qIHovrk5bmumb_wy4aILlLkvmuxsI-FwsK5tOpJ5ZSFFRMh2B.NlQ4b0LYNlX0dKG3)

* Basic measures of central tendency: Mean, median, mode
* Variance and standard deviation
* Handling outliers
* Quartiles
* Standard Error calculations with `pandas`
* Error Bar plots with `pandas`
* Student's T-Test
* Fits and Regression with `pandas` and `scipy`

##### 05-3 Additional Coverage

* Before Class
  + [Open Office Hours](https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=66a9c10c-9ff4-49b3-a197-acb70176bd09)
* After Class
  + [05 Python Plotting Homework Help 2/3](https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=7aff4e7b-4533-4bb0-8222-acb8002bbcbd)
  + [Pimp My Terminal 2/2](https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=8df929e2-92fa-4222-aae0-acb8002e37ca)
    - Easy Themes And Extensions with ZSH
      - Installing ZSH
      - Installing Oh-My-Zsh (for plugins)
      - Installing Powerlevel10k (snazzy theme)
      - What Is .zshrc Anyway?
        - Ok, so I didn't cover this, but this is basically a configuration file for your terminal settings! More literally, it contains code/ setup that gets run whenever you start your terminal.

</details>

<details><summary><strong>Module 06 - Python and APIs - Intro</strong></summary>

### [06-1 Python and APIs](https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=158ace44-356c-4395-bbf3-acb900e832cf)

[Zoom Recording](https://zoom.us/rec/share/-nqKnHgCm9DWCQXrwPWdFKuJPsj1DwrW7rBFclpeEn7Lqr_ZGJYoEwO2LK0ISMnZ.psYAQn9ZQ2RPfWZy)

* GET requests using the `requests` library
* JSON -> Python dictionaries
* API Documentation and sign ups
  + SpaceX
  + swapi (Star Wars API)
  + Number Facts
  + OMDb
  + New York Times

##### 06-1 Additional Coverage

_No office hours before class._

* After Class
  + [05 Python Plotting Homework Help 3/3](https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=7456f18c-b711-42fb-8c39-acb90123b132)
    - Also includes:
      - 04 Pandas HW Student Questions
      - 03 Python HW Student Questions
      - Jupyter Notebook Extensions and Markdown Viewer

### [06-2 Python and APIs - JSON](https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=d7396e7d-5fe4-4f8a-90e6-acbc01849bb6)

[Zoom Recording](https://zoom.us/rec/share/yFDP0S9AF01LJWP79AzFG1CuYfFCbP-lSJAh2i_dAfpK5_WiFfKZcAzk4Web-rEF.TJlBL7rlIVGv44mN)

* More API practice
  + OpenWeatherMaps
  + WorldBank API
* JSON -> DataFrame
* Exception Handling (`try` and `except`)

##### 06-2 Additional Coverage

* Before Class
  + [Open Office Hours](https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=33b84580-a017-4acc-8aa2-acbc017ab487https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=33b84580-a017-4acc-8aa2-acbc017ab487)
* After Class
  + [06 APIs Homework Help 1/3](https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=b6eb5af5-c81d-4567-a6ad-acbd003018ad)
    - Key: "Managing" your API keys and git (don't commit your api key to github!!)
      - We only touched on this briefly - I'll review in more detail Thursday.
  + [03 Python HW Solution](https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=ff1d188b-dfc7-4975-9584-acbd001aec3b)

### [06-3 Python and APIs](https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=81196c9d-3fcc-4eba-b8ea-acbe0181b70a)

[Zoom Recording](https://zoom.us/rec/share/wbOg9bWTKsALVp5LZ-vnzWvZRAmRPw5HSFB4HVyaACIETMYsk_suIoVgWJpANSUl.WteeBgJp1_XOJ7gJ)

* Practice Google Maps and Places APIs
* Visualizations with Maps
  + `gmaps` Jupyter Extension

##### 06-3 Additional Coverage

* Before Class
  + Open Office Hours
* After Class
  + [06 APIs Homework Help 2/3 - Hiding config.py with .gitignore](https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=fb8155a9-f078-46ca-9b2c-acbf002cbc68)

</details>

</details>

---

## <!-- 07-08 Project 1 -->

<details><summary><em>Module 07-08: Project 1</em></summary>

<br/>

<details><summary><strong>Module 07 - Git Practice + Project 1</strong></summary>

### [07-1 In-Class Git Practice + Project 1](https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=5c2c5789-91ee-43ff-9e08-acc000e9dd9f)

[Zoom Recording](https://zoom.us/rec/share/Q0HPPN8CjxeQRZBerueZuqo72lQ2UNgU_Yz0dwf07yf2qRU1cWVGsdIvJyBe_VBE.egx6PCsiK50PJOM2)

* Git Tutorial
  + Managing Git and Jupyter Notebooks
  + Git Branch and PR tutorial
  + Git Best Practices with small groups
* [Project 1 Guidelines](../Projects/Project-1)
* Project 1 Work

##### 07-1 Additional Coverage

_No office hours before class_

After Class:

* Open Office Hours

### [07-2 In-Class Git Practice + Project 1](https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=56a95978-cf66-4d6b-9e50-acc301802d49)

[Zoom Recording](https://zoom.us/rec/share/qApaj6iOh08XaV425A2Ryj9ur2jaDRdXJ2U6j4Gu0JJEsZlo6nD_uhpA7KmzSn02.kiz3Ha39PvGhbPAz)

* Git Tutorial
  + Managing bad merges
  + Review of git branch and PR best practices
* Project 1 Work

##### 07-2 Additional Coverage

Before Class

* Open Office Hours

After Class

* Open Office Hours

### 07-3 Hypothesis Testing and Statistical Tests + Project 1

No Panopto recording for today (sub).

[Zoom Recording](https://zoom.us/rec/share/ooeL1U8_lDjqAE4pTvsYAsPH0lqufgxgpDfqI12fhWTdtTWOfltFWNtbZMpya8VN.LIl9ko5TogElnFd2)

* T-Test
* ANOVA
* P-Values
* Chi Square tests
* Project work

##### 07-3 Additional Coverage

Before Class

* Open Office Hours

After Class

* Open Office Hours
* Project work

</details>

<details><summary><strong>Module 08 - Project 1 + Presentations</strong></summary>

### 08-1 Project 1

No Panopto recording for today (sub).

[Zoom Recording](https://zoom.us/rec/share/_OwTF9IVcFyZ0TvsnJ_7rUVGyp2ynE3-duj67cY0c9z6Q5aHMS1OhrWOeTZhUwh3.fjxPD6viy2039Vtr)

* Install Postgres and pgAdmin
* Project work

##### 08-1 Additional Coverage

Before Class

* Open Office Hours

After Class

* Open Office Hours
* Project work

### 08-2 Project 1

Project work day = all-class open office hours, no recordings.

* Project work

##### 08-2 Additional Coverage

Before Class

* Open Office Hours

After Class

* Open Office Hours
* Project work

### [08-3 Project 1 Presentations](https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=ef199b9c-e708-475b-af0f-accc01840507)

[Zoom Recording](https://zoom.us/rec/share/NNjvkumLMVKLd8CtyKQeDWVqk2GfvNkfOmi6t39ZhaeuV0kYJIWsutjmGHEOCY-_.7Ikq3DBqysBR0bRh?startTime=1613083553000)

_No after-class office hours today_

* Project Presentations

##### 08-3 Additional Coverage

Before Class

* Open Office Hours
* Presentation Prep

</details>

</details>

---

## <!-- 09-10 DBs, ORMs, OOP, APIs -->

<details><summary><em>Module 09-10: Databases, ORMs, OOP, and Making APIs</em></summary>

<br/>

<details><summary><strong>Module 09 - Databases (Postgres)</strong></summary>

### [09-1 Intro to Postgres](https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=3f92c1b2-8bb7-4aa0-954a-accd0027382f)

[Zoom Recording](https://zoom.us/rec/share/a7HFneqEmgskH7EQRseDXjzlUvxFQqdx3ZGdg56Wl3G8jOTgSrjUy2YKR6RwLebn.RiwZbhmS-pAMKisg)

* Database vs. Schema
* Create a Database and tables
* pSQL data types
* Primary and Unique Keys
* CSV -> Database Table
* CRUD (Create, Read, Update, Delete) applications
  + Database commands: `INSERT`, `SELECT`, `UPDATE`, `DELETE`
* Joins

##### 09-1 Additional Coverage

* After Class
  + [09 Homework Help 1/3](https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=405c9d30-6126-40f8-9374-acce0123a0ab)
  + [04 Pandas Homework Solution](https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=52fd4e0e-30ee-4349-a77e-acce01240252)

### [09-2 Advanced Queries](https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=25bd0495-1758-403f-a1e9-acd100f0877f)

[Zoom Recording](https://zoom.us/rec/share/Jk1sTae2AWw_CeWBlLfvGKSs5KiP25QZWbi8tBJOxHO_CXf1dCq-dKsZG0SlsnW_.Um9AqKSRmGemepcy)

* Aggregation Queries
* Subqueries (sub-selects)
* Views

##### 09-2 Additional Coverage

* Before Class
  + Project Grading (ping us on slack for questions)
* After Class
  + Project Grading
  + [09 Homework Help 2/3](https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=ca748b1f-ce09-479c-8934-acd100faaaa9)
  + [05 Matplotlib Homework Solution](https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=76558588-8ade-449b-a613-acd100fac89b)

### [09-3 Data Modeling](https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=fbc023dd-8758-462c-b750-acd2003be1fb)

[Zoom Recording](https://zoom.us/rec/share/9x6RFB_IBpSidx1wVdHYGwKG_BoLXsCbXRJYvwJbrV5rwqn_DOTM9wX0CqW2CzQZ.uQTSyEy56vhtyGfP)

* Database Design Techniques And Best Practices
* Data normalization
* Data relationships
* ERD Diagrams - visualizing DB relationships

##### 09-3 Additional Coverage

* Before Class
  + Project Grading (ping us on slack for questions)
* After Class
  + [09 Homework Help 3/3](https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=c9619169-1975-4646-9a50-acd2003c184c)

</details>

<details><summary><strong>Module 10 - Programming with SQLAlchemy (Advanced Databases) and Making APIs</strong></summary>

### [10-1 Intro to SQLAlchemy](https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=19b433d4-dda3-4753-9c91-acd2003c482f)

[Zoom Recording](https://zoom.us/rec/share/_btT8UfiggmM7nUo-rckFM7zC3By-w9sjg0XRQwWBd2bxYGr-CPWV-6btKxssAag.szJpnfIhbECUZPap)

* SQLAlchemy
  + Connect to a database
  + Run raw queries using `engine.execute()`
  + CRUD (Create/ Read/ Update/ Delete) using ORM (Object Relational Models)
* Intro to Object Oriented Programming (OOP)
  + Creating Python classes to represent database tables (ORM)

##### 10-1 Additional Coverage

* After Class
  + [10 Homework Help 1/3](https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=ccabeb2a-7379-4122-a655-acd501226fee)
  + [Opening SQLite Files With VSCode](https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=8f1e7645-093e-4fac-8004-acd501257666)

### [10-2 SQLAlchemy ORM++](https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=6b50246e-c705-4638-ab8d-acd5012c43a3)

[Zoom Recording](https://zoom.us/rec/share/yCTDTLGBLz_Drd8BXrzxElXkDuQNEC7JyILMoOWCqgaqcSrWm9j41UjbdWpoDSvt.aK3nd1wxOqyBhcmR)

* More practice creating and using ORM classes
* Using SQLAlchemy to inspect database:
  + Reflection (ORM with auto-generated classes)
  + Inspector - viewing database Schema
* Using Pandas to plot SQL results

##### 10-2 Additional Coverage

* Before Class
  + Open Office Hours
* After Class
  + [10 Homework Help 2/3](https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=528c95df-bbd7-4bb3-822b-acd5012c65a0)

### [10-3 Flask + SQLAlchemy = My First API](https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=bc4ec595-5c4a-489d-97ff-acda01758cec)

[Zoom Recording](https://zoom.us/rec/share/D4MCVHimV7WyQTiua9ILitU1wSu1lRa9WgioiP0IAOafHkFXpHkdxv9VEMhIdqR7.L8GtIsstYacKMAWh)

Today Chavon stops by for our midpoint :)

* Create and run a server with Flask
* Define endpoints
* Read query strings (i.e. function args) from GET requests
* Run database queries from an endpoint
* Return results as JSON

##### 10-3 Additional Coverage

* Before Class
  + Open Office Hours
* After Class
  + [10 Homework Help 3/3](https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=86c8d7d5-4e9b-461f-924f-acdb002bc482)

</details>

</details>

---

## <!-- 11-12 Basic Viz Websites -->

<details><summary><em>Module 11-12: Basic Viz Websites</em></summary>

<br/>

<details><summary><strong>Module 11 - HTML</strong></summary>

### [11-1 Intro To HTML](https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=9f2b49c5-8e89-4a94-915a-acdc00e80c9b)

[Zoom Recording](https://zoom.us/rec/share/rnDoKYv4TiJVsj7FOWALjM_FVtpHo_Db0BmMYOlrgkF7Q4mOXEFd517ECTRvCLel.oJqZXEl9Plc6fjXQ)

* Website Frontend Ingredients (HTML + CSS + JavaScript)
* DOM Basics
* Common HTML Tags
  + `<p>`
  + `<h1> - <h6>`
  + `<hr/>`
  + `<img/>`
  + `<ul>` / `<ol>` and `<li>`
  + `<table>`, `<th>`, `<tr>`, `<td>`
  + `<div>`
  + `<summary>`
* HTML Structure
  + Tags
  + Attributes
  + Sections of the document
* _NOTE_: Use Mozilla MDN for documentation, not W3Schools!!

##### 11-1 Additional Coverage

* After Class
  + [11 HTML Homework Help 1/3 - Wireframing Demo](https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=5647fd96-69c2-4b59-8839-acdc0117eb07)
  + [06 APIs Homework Solution](https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=848027fc-d816-455f-9ff3-acdc01180358)

### [11-2 Styling (CSS) and Deploying Static Sites Using Github Pages](https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=f5c9aa15-4f5b-4a03-93e7-acdf01761692)

[Zoom Recording](https://zoom.us/rec/share/Xs6gAjHcm4F56-ylfTOCvVN-MVsS8Bn05Rk1dbwyPGiuF1ppgYRN_2Z4x6rIaT6A.XUDVpuY_s_E6C2zJ)

* CSS Basics: styling and positioning elements
* Box Model of HTML elements
* Github Pages **(Needed for your Career Services Milestones)**

##### 11-2 Additional Coverage

* Before Class
  + Open Office Hours
* After Class
  + [11 HTML Homework Help 2/3 - Wireframing Demo](https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=005a62d3-c67e-4add-823f-ace0002dc516)

### [11-3 Mobile-first (Responsive) CSS](https://zoom.us/rec/share/s0xB4D_-2g5_PBsjxX-P1qindwU3PjW09Hk40Eor-zCGlvQitNa8gUKGfKdEWQSb.MN2POHMS9hnyw2xf)

Starting today, we no longer use Panopto as a recording tool. You will still be able old links using Panopto, but going forward, each class video will be recorded on Zoom in one continuous stream.

* Media Queries
* Bootstrap (CSS library by Twitter) and the Bootstrap Grid
* Using Bootstrap to get a website up and running quickly

##### 11-3 Additional Coverage

* Before Class
  + Open Office Hours
  + ETL Project Questions
* After Class
  + 11 HTML Homework Help 3/3

</details>

<details><summary><strong>Module 12 - Web Scraping, Document Databases (NoSQL), and Making Data Viz Websites</strong></summary>

### [12-1 Intro to MongoDB](https://zoom.us/rec/share/ooUjajWiU2hwPxuOdIpEHCJRr_ebI391iXAXmkKh3U9wbop8zVBIYr1ppJp4SGK3.2kdGXeM_-ESfH6LX)

* ETL Project Questions
* Installing and Connecting to MongoDB
* Using the Mongo Shell for CRUD
* Using PyMongo for CRUD with Python

##### 12-1 Additional Coverage

* After Class
  + 12 Web Scraping Homework Help 1/3
  + One-On-Ones 1/3 (not recorded ofc)

### [12-2 Simple Web Scraping](https://zoom.us/rec/share/_8etoRMgpnAPLBjqLO9eaYI8LgchLE0jzCRxATqlxUF0A5efThEhWA1VCj0r4ncu.FW2oZn6sjHeL5PA1)

* Use BeautifulSoup to scrape websites with Python
  + `html.parser` and `lxml` parser
* Use Pandas to scrape websites
* Save results to MongoDB
* Use Splinter (with chromedriver) to scrape websites

##### 12-2 Additional Coverage

* Before Class
  + Open Office Hours
* After Class
  + 12 Web Scraping Homework Help 2/3
  + One-On-Ones 2/3 (not recorded ofc)

### [12-3 BeautifulSoup + MongoDB + (new) Serving Templates With Flask](https://zoom.us/rec/share/bXftVis7OrUjptOexrkEzD1KCu5_zc0NhKLpHF10_-DsjIbGg8xQAocIXMQ0CAZo.P-gsZhPLp1sE6B8H)

* Use and render flask templates
* Integrate MongoDB data into Flask Templates
  + Include static resources (i.e. css files) in Flask Templates via `static` folder
* Capstone: Allow client to trigger a web scrape using Flask, then view results
* ETL Project Overview and Questions

##### 12-3 Additional Coverage

* Before Class
  + Open Office Hours
* After Class
  + 12 Web Scraping Homework Help 3/3
  + One-On-Ones 3/3 (not recorded ofc)

</details>

</details>

---

## <!-- 13 ETL Proj -->

<details><summary><em>Module 13: ETL Project</em></summary>

<br/>

<details><summary><strong>Module 13 - ETL Project</strong></summary>

### [13-1 Project Guidelines and Warm Up Exercise](https://zoom.us/rec/share/KC6zaiQyaOpCBfol1kbh6vTjoxueM7IKRGagAjyZ5cwO6eW4eZBP76n08n0G1441.qw-wuv0vOW0-O96e)

* ETL with Pandas warm up
* Project Overview - the audio's missing for part of this, grab us for any questions.
* Today's Project Goals:
  + Project Proposals Due
  + Retrieve Datasets
  + Review Data Structures
  + Database ERD design
  + Discuss your websites

##### 13-1 Additional Coverage

* After Class
  + Open Office Hours
  + 11 Web Homework Solution
  + 10 SQLAlchemy Homework OSlution

### 13-2 ETL Project Work Day

No recording today.

* Project Work
* Today's Project Goals:
  + Load Datasets into Database
  + Design and split up website work
    - APIs
    - Documentation
    - Visualization/ Project Analysis

##### 13-2 Additional Coverage

* Before/ During Class:
  + Open Office Hours
* After Class:
  + Deploying to AWS EC2 with Dokku

### [13-3 ETL Project Work Day](https://zoom.us/rec/share/GxH0FTGXLNgssIYYIhxNjX-ov5vCtAuIqegUNKNFu9t-MoqPI1mtKA_0eok5FOMT.kah4dw0nLG657_yj)

The recording only contains the homework solutions.

* Project Work
* Today's Project Goals:
  + Finish your documentation
  + Submit your projects

##### [13-3 Additional Coverage](https://zoom.us/rec/share/GxH0FTGXLNgssIYYIhxNjX-ov5vCtAuIqegUNKNFu9t-MoqPI1mtKA_0eok5FOMT.kah4dw0nLG657_yj)

* Before Class
  + Open Office Hours
* After Class
  + 09 SQL Homework Solution
  + 10 SQLAlchemy Homework Solution

</details>

</details>

---

## <!-- 14-17 JS, Plots -->

<details><summary><em>Module 14-17: Interactive Plots with JavaScript</em></summary>

<br/>

<details><summary><strong>Module 14 - Intro To JavaScript</strong></summary>

### [14-1 JavaScript Syntax](https://zoom.us/rec/share/i9U7Mh9CG09gBbCRGzygFvFESqBir4r96NybuO0jZhxpsdRlgZ7RPMtHAOUjkgo.Xf0qO_AuoajGpMbH?startTime=1616245107000)

* Variables, data types, statements
* Functions, loops, if/else
* Arrays
* Using built-in functions

##### 14-1 Additional Coverage

* After Class
  + 14 JavaScript Homework Help 1/3
    - Further Reading:
      - [🤪 A list of funny and tricky JavaScript examples](https://github.com/denysdovhan/wtfjs)
      - [Semicolons in JavaScript](https://flaviocopes.com/javascript-automatic-semicolon-insertion/)

### [14-2 Tables, Functional Programming, Objects](https://zoom.us/rec/share/ZGwYAPK4gu0Qr8SRPbiHrq2BTPMNdYw08N7MdchZhs699Mku365vzQnNrPQ1w0Ya.a-CxIkg3jebXwpdF)

* Using `foreach`, `map`, and `filter`
* Updating and iterating through JavaScript Objects
* Callbacks
* Arrow Functions (ES6 Syntax)
* Bootstrap HTML Tables

##### 14-2 Additional Coverage

* Before Class
  + Open Office Hours
* After Class
  + 14 JavaScript Homework Help 2/3
    - Further Reading:
      - [.forEach(), .map(), .filter() .... What's the difference?](https://dev.to/ogwurujohnson/foreach-map-filter--whats-the-difference-304l)

### [14-3 D3 for DOM Manipulation](https://zoom.us/rec/share/ZG06wUbycF16r7DzzTGC_bWcWETHumupsAcWIyy4a1FjWKHmhspayX7Y8WuoGNCB.6P1umhUo2mN0COMq)

* D3 DOM selection
* Building a table with D3
* Events
* `this`
* Making your website dynamic
* Arrow Functions and `this`

##### 14-3 Additional Coverage

* Before Class
  + Open Office Hours
* After Class
  + 14 JavaScript Homework Help 3/3
  + Ex 09 Solution
  + More on how HTML forms work

</details>

<details><summary><strong>Module 15 - Interactive Plots with Plotly</strong></summary>

### [15-1 Plotly Basics](https://zoom.us/rec/share/jHTccpYQ8VDk_vpPmMerRYWGGuuwk192e7bmlPtj353WItbyrtuGglfay8oo9ocL.lJpBda3JEEbBAm48)

* Line and Bar Charts with Plotly.js
  + `layout` - altering the plot design
  + Interactive plots
* JavaScript `math` library
* More Functional Programming practice

##### 15-1 Additional Coverage

* Before Class
  + Open Office Hours
* After Class
  + 15 Plotly Homework Help 1/3

### [15-2 Advanced Charts in Plotly](https://zoom.us/rec/share/FUEEb1UxrQT6icOWRhb1zqIFZEqJlIEtmNxeC0arlUsnFxqfXbaDWPiR8NY8Y6gL.hDVIPZZumQn-ugPT)

* Additional JavaScript methods (`array.sort`, `array.slice`)
* Charting data from APIs
* Additional plot types (box and pie plots)
* Adding dropdowns and click events
* Dynamic charts with `Plotly.restyle()`

##### 15-2 Additional Coverage

* Before Class
  + Open Office Hours
* After Class
  + 15 Plotly Homework Help 2/3

### [15-3 ... And Even More Cool Stuff Featuring Plotly](https://zoom.us/rec/share/U8wXdbwtASqgQmEfFXBEmt8_FXsBksdlU6xuh37Vq0dHXCefjqnTg9f5d7bZdP-4.DsAiCzSn2Kl9OmaT?startTime=1617317705000)

[Full Zoom Recording](https://zoom.us/rec/share/kwmLSeC4LaZAD1P2pn8Po-2eerXnZp_C6GkBdValVr7JU0c1QL8Fy339SMEhJBK1.7CkPQrXVbDnnIw0f)

* `switch` statements
* More plot types (candlestick plots)
* Flask and Plotly
* Create and deploy dashboards using Github Pages

##### 15-3 Additional Coverage

* After Class
  + [15 Plotly Homework Help 3/3](https://zoom.us/rec/share/U8wXdbwtASqgQmEfFXBEmt8_FXsBksdlU6xuh37Vq0dHXCefjqnTg9f5d7bZdP-4.DsAiCzSn2Kl9OmaT?startTime=1617327227000)

</details>

<details><summary><strong>Module 16 - Data Binding and SVG Basics with D3</strong></summary>

### [16-1 D3 Fundamentals](https://zoom.us/rec/share/kkiw1yraPXd9eisnygKBz0Z05x7SdQtxghXll4gXN1X41ihxDqwsBhxmevq6mnBy.LXX3ugWRP3icVKqF?startTime=1617454816000)

[Full Zoom Recording](https://zoom.us/rec/share/YMiedCOblhmxnzC-iINmm4iQzms1eKjFJILXkQ8FlzaMKSTHfI6rEyOlzw33vUXT.W8bQMMyU_DXNEIy7)

* What is an SVG?
* D3 Databinding (with SVGs and other DOM elements)
* Bar Charts using D3

##### [16-1 Additional Coverage](https://zoom.us/rec/share/kkiw1yraPXd9eisnygKBz0Z05x7SdQtxghXll4gXN1X41ihxDqwsBhxmevq6mnBy.LXX3ugWRP3icVKqF?startTime=1617467559000)

* Before Class
  + Open Office Hours
* After Class
  + 16 D3 Homework Help 1/3

### [16-2 More D3 Fundamentals](https://zoom.us/rec/share/SSTr0EETpnNYodA7X5PcP1LUCvHB7X4CYvQGETXyXXf2EHrRYcxdIReC5xfAIF2h.oY0WNPuc7VNPZZAZ?startTime=1617748331000)

[Full Zoom Recording](https://zoom.us/rec/share/4hTDMa918ysatOB5Xe5jaWlZpOHpbncfpsA1u4Ky_B_Hm-QB2mzwTlz7UYeBVyVO.p_-RuFHmvSMcy_Fu)

* More charts with D3
* Scaling data using D3
* Building axes with D3

##### 16-2 Additional Coverage

* Before Class
  + Open Office Hours
* After Class
  + [16 D3 Homework Help 2/3](https://zoom.us/rec/share/SSTr0EETpnNYodA7X5PcP1LUCvHB7X4CYvQGETXyXXf2EHrRYcxdIReC5xfAIF2h.oY0WNPuc7VNPZZAZ?startTime=1617759150000)
  + [12 Web Scraping Homework Solution](https://zoom.us/rec/share/SSTr0EETpnNYodA7X5PcP1LUCvHB7X4CYvQGETXyXXf2EHrRYcxdIReC5xfAIF2h.oY0WNPuc7VNPZZAZ?startTime=1617760414000)

### [16-3 Advanced D3](https://zoom.us/rec/share/39x9ffrv0PwoD9l2Tfs_JT5AARK3ORMMDXZtM7wUlTI4CLo2G-XP7gW_3x8fwwvu.l-l-eEyHovJX9SKS?startTime=1617921058000)

[Full Zoom Recording](https://zoom.us/rec/share/7jfMETDpa2JNbHstnNxZqWSn4e41OaRTr_COssXqMID411NFCYf9LLsjPzaBK6t-.8OghSZzh1yzHv5Rj)

* Multi-Plots with D3
* Adding transitions, tooltips, and event listeners to your plots with D3
* JavaScript - clean coding by reusing your code

##### 16-3 Additional Coverage

* Before Class
  + [Open Office Hours](https://zoom.us/rec/share/39x9ffrv0PwoD9l2Tfs_JT5AARK3ORMMDXZtM7wUlTI4CLo2G-XP7gW_3x8fwwvu.l-l-eEyHovJX9SKS?startTime=1617917907000)
* After Class
  + [16 D3 Homework 3/3](https://zoom.us/rec/share/39x9ffrv0PwoD9l2Tfs_JT5AARK3ORMMDXZtM7wUlTI4CLo2G-XP7gW_3x8fwwvu.l-l-eEyHovJX9SKS?startTime=1617932246000)

</details>

<details><summary><strong>Module 17 - Interactive Mapping with Leaflet.js</strong></summary>

### [17-1 Leaflet Basics](https://zoom.us/rec/share/6P8SPFiw_saa5AvBgdh8Pb4NhMCitJadbfzHiTOI6QE74eRMk-Eeo_hdcNQ9Z76F.b4xKMep_pJzp_irv?startTime=1618060334000)

[Full Zoom Recording](https://zoom.us/rec/share/cjx_NumvJdFTJZWQS7zk6ODe86KVAXfOfaCtz9CD4xf5XPZf9-m1L1xrgPsIXWa5.q65r51Nxnv9qVJRv)

* Map visualization examples
* Leaflet.js basics
  + Creating a map
  + Plotting data on a map (markers)
  + Map layers
* GeoJSON

##### 17-1 Additional Coverage

* Before class
  + Open Office Hours
* After class
  + [17 Leaflet Homework Help 1/1](https://zoom.us/rec/share/6P8SPFiw_saa5AvBgdh8Pb4NhMCitJadbfzHiTOI6QE74eRMk-Eeo_hdcNQ9Z76F.b4xKMep_pJzp_irv?startTime=1618072643000)
  + [14 JavaScript Homework Solution](https://zoom.us/rec/share/6P8SPFiw_saa5AvBgdh8Pb4NhMCitJadbfzHiTOI6QE74eRMk-Eeo_hdcNQ9Z76F.b4xKMep_pJzp_irv?startTime=1618073752000)

### [17-2 More Interesting Leaflet](https://zoom.us/rec/share/1XmkQEj20yTNadWS-ptInYfZb7m94OF9tmZh5DVUJz18q-8UhvqQUlV4BEDxg_6X.R7Ma2DrBe9om7m5p)

* Intro to JS Plugins via Leaflet plugins
* Effective visualization using maps
  + Clusters
  + Choropleths
  + Heatmaps
* Customizing your own maps with plugins

##### 17-2 Additional Coverage

* After class
  + Open Office Hours

### [17-3 Leaflet Mini-Project + Project 2 Proposals](https://zoom.us/rec/share/wEHC2LY_5OizzYeHJZSU5h_MmtMJ9e9r2JubjT7qYKsr1QNgfDrJs60u2DkVh0YG.ThPsyyRapMgFnLDk)

* Citi Bike mini-project
* Project 2 proposals
  + Project 2 requirements

##### 17-3 Additional Coverage

* After class
  + Open Office Hours

</details>

</details>

</details>

---

## <!-- 18-19 R and Project 2 -->

<details><summary><em>Module 18-19: Project 2 and R</em></summary>

<br/>

<details><summary><strong>Module 18 - Intro to R and Project 2 Work</strong></summary>

### [18-1 Intro to R (and Project 2 Work)](https://zoom.us/rec/share/AK4t1xAeK7eejOM7dC_OskO2pmHlJrblO87sqBlTVFZG_pw6k3x4OTgzg0gzAuE.Va88crtLtjNvBD_i)

* R environment set up
* How to use R Studio
* R Basic Data Types
* Intro to Project 2; second half of class is Project 2 Work
* Today's Project Goals:
  + Find a data source
  + Get high-level approval for your projects

##### 18-1 Additional Material

* After Class
  + Open Office Hours

### 18-2 Project 2 Work

No recording today.

* R day 2 postponed
* Project 2 work and proposal review

##### 18-2 Additional Material

* Before Class
  + Open Office Hours
* After Class
  + Open Office Hours

### 18-3 R and Tibbles (and Project 2 Work)

[Full Zoom Recording](https://zoom.us/rec/share/i_fIVh8VIwKAcZra0m7L7pCzfYjvfBsMwBzfxJ3HNTT9T13sXV81n0RA_-oQ2lo.A4r4vF11BN6O2ufn)

* During Class (optional videos, Heroku will be covered again later)
  + [Practice with R's `tibbles` (DataFrames/ arrays) - includes material from day 1](https://zoom.us/rec/share/oR8EWWUhBQy_3WUShlt67oZNLELRT2Fn6rBVU6eiT2u-v37Yliv7vgHBkbBlnA8.JznJSaq9m4T55NUT?startTime=1619128337000)

  -[~~14 JS Homework Solution~~ Whoops, check 17-1 for this, already released](https://zoom.us/rec/share/oR8EWWUhBQy_3WUShlt67oZNLELRT2Fn6rBVU6eiT2u-v37Yliv7vgHBkbBlnA8.JznJSaq9m4T55NUT?startTime=1619136382000)

  + [How to deploy your projects using Heroku + Heroku Postgres](https://zoom.us/rec/share/oR8EWWUhBQy_3WUShlt67oZNLELRT2Fn6rBVU6eiT2u-v37Yliv7vgHBkbBlnA8.JznJSaq9m4T55NUT?startTime=1619136968000)
    - Git Demo Repo: https://github.com/froggercat-work/simple-flask-deploy

##### 18-3 Additional Material

* Before Class
  + Open Office Hours
* After Class
  + Open Office Hours

</details>

<details><summary><strong>Module 19 - Project 2 Work</strong></summary>

### 19-1 Project 2 Work

No recording today.

* During Class
  + Open Office Hours

##### 19-1 Additional Material

* Before Class
  + Open Office Hours
* After Class
  + Open Office Hours

### 19-2 Project 2 Work

No recording today.

* During Class
  + Open Office Hours

##### 19-2 Additional Material

* Before Class
  + Open Office Hours
* After Class
  + Open Office Hours

### [19-3 Project 2 Presentations](https://zoom.us/rec/share/XXQxEKCSYVxyON0Uzn-v3OKMibxPGZDlqhffQYFC8kdJmL4jnW9re1_CbStxLy2n.xFPPMJsAJRkqdPo1)

* Presentation Recordings:
  + [Brook Miller, Candi Shanks, Gregory Brown](https://zoom.us/rec/share/7D4KNdp8j0J_qyLMUCQHI2QIq8147sj8gi7xfGVo3Z1l28cZx9-sjViCUXKVABJH.JPpJdbALh0ReMkvS?startTime=1619736084000)
  + [Altricia Latimer, Christina Gangi, JJ Williams, Sam Azhari](https://zoom.us/rec/share/7D4KNdp8j0J_qyLMUCQHI2QIq8147sj8gi7xfGVo3Z1l28cZx9-sjViCUXKVABJH.JPpJdbALh0ReMkvS?startTime=1619736912000)
  + [Howard Mayorga, Ian Correa, Kim Sommer, Stephanie Rivas](https://zoom.us/rec/share/7D4KNdp8j0J_qyLMUCQHI2QIq8147sj8gi7xfGVo3Z1l28cZx9-sjViCUXKVABJH.JPpJdbALh0ReMkvS?startTime=1619737908000)
  + [Alex Martinez, Corrie Thomas, Tabitha Head, Dan Larson](https://zoom.us/rec/share/7D4KNdp8j0J_qyLMUCQHI2QIq8147sj8gi7xfGVo3Z1l28cZx9-sjViCUXKVABJH.JPpJdbALh0ReMkvS?startTime=1619739729000)
  + [Alciluz Gomez, Jose Robles, Phillip Ogborn](https://zoom.us/rec/share/7D4KNdp8j0J_qyLMUCQHI2QIq8147sj8gi7xfGVo3Z1l28cZx9-sjViCUXKVABJH.JPpJdbALh0ReMkvS?startTime=1619740963000)
* [Tableau installs after presentations + Questions](https://zoom.us/rec/share/7D4KNdp8j0J_qyLMUCQHI2QIq8147sj8gi7xfGVo3Z1l28cZx9-sjViCUXKVABJH.JPpJdbALh0ReMkvS?startTime=1619742155000)

_No office hours today, enjoy your break!_
(If there are questions we're happy to stay if needed.)

</details>

</details>

---

## <!-- 20 Tableau -->

<details><summary><em>Module 20: Dashboarding Software</em></summary>

<br/>

<details><summary><strong>Module 20 - Tableau</strong></summary>

### 20-1 Intro to Tableau

[Full Zoom Recording](https://zoom.us/rec/share/7V_QnU1sdAgR1Aq0tiPp0zh0L2dl-buTGR03Dqw3v6gDMt8t4v5iaDdPw2qKrePf.a9LjOkKxGWxzeDlR)

Accidentally broke the lecture recording into two files:

* [First 40m of class](https://zoom.us/rec/share/bOo4vrLddW-aUfhkzceGYgzyFf5-BNMns3cv3rg1qPs62X1pAQdkGhaLXaCqb1PL.1SGtwvrbACFPyy-8?startTime=1619874663000)
* [Rest of class](https://zoom.us/rec/share/bOo4vrLddW-aUfhkzceGYgzyFf5-BNMns3cv3rg1qPs62X1pAQdkGhaLXaCqb1PL.1SGtwvrbACFPyy-8?startTime=1619877609000)

* Loading data into Tableau
* Building basic visualizations
  + Dimensions
  + Measures
  + Columns
  + Rows
  + Marks
  + Filters
* Data Joins
* Tableau Stories

##### 20-1 Additional Coverage

* After class
  + [Tableau Homework Help 1/3](https://zoom.us/rec/share/bOo4vrLddW-aUfhkzceGYgzyFf5-BNMns3cv3rg1qPs62X1pAQdkGhaLXaCqb1PL.1SGtwvrbACFPyy-8?startTime=1619887312000)

### [20-2 Calculations and Grouping in Tableau](https://zoom.us/rec/share/uzlxVdG95ST4oak4ijovSR42c8bghVPnD1P38DBVaqV39BZxdQhnR1UECHJLM7Hv._sHBOxrG3tU7FIlx?startTime=1620167390000)

[Full Zoom Recording](https://zoom.us/rec/share/RFIN0NMXciUnRFOlpB3T_YcQGOMboTy2puGJtjFkrlZmBHqgluJMXfGFPyC7BJPo.29Q8J2O6hRaMWI4t)

* Groups and Sets
* Calculations
* Maps
* LOD (Level of Detail) calculations

##### 20-2 Additional Coverage

* After class
  + [Tableau Homework Help 2/3](https://zoom.us/rec/share/uzlxVdG95ST4oak4ijovSR42c8bghVPnD1P38DBVaqV39BZxdQhnR1UECHJLM7Hv._sHBOxrG3tU7FIlx?startTime=1620178230000)

****

### [20-3 Dashboard A-Z](https://zoom.us/rec/share/Y9vkvGoOv6P6TIkg8L1N41SOzWSlgrZn8Kpf_fTRS6hVcx-MAUzLDkT9Gz03E0A7.epz_S1JyqdxVXReW?startTime=1620340270000)

[Full Zoom Recording](https://zoom.us/rec/share/CfK6wRpH_fHSnlkQFHgPoD23W9_Uy-ZXJT4X9WSfzk2xrMllEGswxyVoWa-I1vpU.xf5KE1jrqy1hynGQ)

* More practice with Tableau:
  + More exploratory data analysis using Tableau.
  + Cleaning data before visualizing.
  + Creating Tableau dashboards.

##### 20-3 Additional Coverage

* After class
  + [Tableau Homework Help 3/3](https://zoom.us/rec/share/Y9vkvGoOv6P6TIkg8L1N41SOzWSlgrZn8Kpf_fTRS6hVcx-MAUzLDkT9Gz03E0A7.epz_S1JyqdxVXReW?startTime=1620350783000)

</details>

</details>

---

## <!-- 21-22 Machine Learning -->

<details><summary><em>Module 21-22: Intro to Machine Learning, Big Data, and the Cloud</em></summary>

<br/>

<details><summary><strong>Module 21 - Intro to Machine Learning</strong></summary>

### [21-1 Regression with Machine Learning Using Linear Models](https://zoom.us/rec/share/djoTHVXsfzlAvE8_VMm-1vMGbPAOOuhU5yrZuSXCwMMJADg9MHbTm4BIj5hzMRAq.TRtFwuFvWuMKS7bm)

* Difference between linear and non-linear data
* Using machine learning for regression analysis
* Quantify and validate linear machine learning models
* Preprocessing Data: Scaling and normalization

##### 21-1 Additional Coverage

* Before Class
  + Open Office Hours
* After Class
  + Open Office Hours

### [21-2 Fundamentals of Machine Learning Classification Algorithms](https://zoom.us/rec/share/lCNXmAewFCmGmjo1WdP9aM0MQqyeJTZ4fZW-hIwpQMML3q34qlUEB6wFrQBi_lbO.lRVg_4BCqTSHeYNf?startTime=1620772330000)

[Full Zoom Recording](https://zoom.us/rec/share/cpwz0NUr1GZlIjX1YVeR4dvjoIrC-hlMz8r6EeWBApAnIbmhg0URGMFwzHVTnXpy.cHiP-TqP67Hgu1hz)

* Classification Algorithms:
  + Logistic Regression
  + SVM (Support Vector Machine)
  + KNN (K Nearest Neighbors)
  + Decision Trees
  + Random Forests
* Quantify and validate classification machine learning models
* Hypertuning classification algorithms using GridSearchCV

##### 21-2 Additional Coverage

* Before class
  + Open office hours
* After class
  + [21 Machine Learning Homework Help 1/2](https://zoom.us/rec/share/lCNXmAewFCmGmjo1WdP9aM0MQqyeJTZ4fZW-hIwpQMML3q34qlUEB6wFrQBi_lbO.lRVg_4BCqTSHeYNf?startTime=1620783510000)
  + [15 Plotly Homework Solution](https://zoom.us/rec/share/lCNXmAewFCmGmjo1WdP9aM0MQqyeJTZ4fZW-hIwpQMML3q34qlUEB6wFrQBi_lbO.lRVg_4BCqTSHeYNf?startTime=1620784296000)

### [21-3 Intro to Unsupervised Machine Learning: Neural Networks and KMeans Clustering](https://zoom.us/rec/share/3zzG7nAjNsUMMDGRNzmTE0w2Azl8K5rk1qKwjDxL_RwLbBtEc9vUu4vnNoVa7TKj.XhPUoJeD3Ah1zq8y?startTime=1620945115000)

[Full Zoom Recording](https://zoom.us/rec/share/AWlprpUoXJ4BC9NLOOnd3ATfvkHL6lMsWRQPco9imjteLUMnu_IcsY_tSKYHtlg7.GXasqUVFU3CvE8gA)

* When to use neural networks
  + As opposed to tuning previously shown Algorithms
* Deep Learning: Neural Networks versus Deep Neural Networks
* Building our own neural networks with Keras
* KMeans Clustering Algorithm

##### 21-3 Additional Coverage

* After class
  + [16 D3 Homework Solution](https://zoom.us/rec/share/3zzG7nAjNsUMMDGRNzmTE0w2Azl8K5rk1qKwjDxL_RwLbBtEc9vUu4vnNoVa7TKj.XhPUoJeD3Ah1zq8y?startTime=1620956290000)
  + [21 Machine Learning Homework Help 2/2](https://zoom.us/rec/share/3zzG7nAjNsUMMDGRNzmTE0w2Azl8K5rk1qKwjDxL_RwLbBtEc9vUu4vnNoVa7TKj.XhPUoJeD3Ah1zq8y?startTime=1620957223000)

</details>

<details><summary><strong>Module 22 - Big Data</strong></summary>

### [22-1 Introduction to Parallelized Processing with `mrjob` ](https://zoom.us/rec/share/xYHFlFKhcHVrKLKfB4H-0BZ7I0Bvxn6z_0bnZV3jKcb6FyAxp1V38gA73BzIvdw.ZuBjP-X6I_D8oAe0?startTime=1621083512000)

[Full Zoom Recording](https://zoom.us/rec/share/LXO7tIS8DY-bbHhsrX7umiFSPOJA4J74YH1gmOiDKHcUQwCqXvP7gAjGHyJcd8Q.Yu70lmx6J1-ESH66)

_Note:_ We will be using Google Colab notebooks to run these exercises. You may see ZEPL mentioned in the activities and homework, but we recommend using Google Colab instead. ZEPL is an alternative service for Spark notebooks, but we've found it to be a bit too temperamental for teaching.

* Identify the pieces of the Hadoop ecosystem.
* Identify the differences and similarities between Hadoop and Spark.
* Write MapReduce jobs locally with `mrjob`.
* Manipulate data using PySpark DataFrames.

##### 22-1 Additional Coverage

* Before class:
  + Open office hours
* After class:
  + [17 Leaflet Homework Solution](https://zoom.us/rec/share/xYHFlFKhcHVrKLKfB4H-0BZ7I0Bvxn6z_0bnZV3jKcb6FyAxp1V38gA73BzIvdw.ZuBjP-X6I_D8oAe0?startTime=1621096684000)
  + [22 Big Data Homework Help 1/1](https://zoom.us/rec/share/xYHFlFKhcHVrKLKfB4H-0BZ7I0Bvxn6z_0bnZV3jKcb6FyAxp1V38gA73BzIvdw.ZuBjP-X6I_D8oAe0?startTime=1621097468000)

### [22-2 NLP (Natural Language Processing)](https://zoom.us/rec/share/NCLvv1NIyBXOk-xvdY40RNedUdMgi1zQbY93BAOEH7pFtUwy3tKb9Gdg0U0cR85s.j8vIImr3HL-WuEsE?startTime=1621377074000)

[Full Zoom Recording](https://zoom.us/rec/share/tCvBadUwq3GVl1uIwgQt4ahuaqX_XB-VA8dZxHaOKpQ0FpsD8aEWw2VVsmcQNtt5.6uhAUsWsm8h6dvx_)

* Why is NLP a necessary part of your big data toolkit?
* Use PySpark DataFrames for NLP data processing.
* Text processing in PySpark
  + tokenization
  + stop words
  + n-grams - these are when you use `n` words per token instead of the default, `1`
  + term frequency
  + document frequency
* Understand the steps in an NLP data processing pipeline (and build one ourselves!)

##### 22-2 Additional Coverage

* Before class:
  + Open office hours
* After class:
  + [20 Tableau Homework Solution](https://zoom.us/rec/share/NCLvv1NIyBXOk-xvdY40RNedUdMgi1zQbY93BAOEH7pFtUwy3tKb9Gdg0U0cR85s.j8vIImr3HL-WuEsE?startTime=1621388536000)

### [22-3 ETL ~~again~~ but this time in AWS](https://zoom.us/rec/share/64f9iJRvorSK11OAMpMcL5I4Mp2Il_RDv-aB5XYzjr10YIlQ9V29X9pSk4az2tcP.31CiFQ8McBY9vyOS?startTime=1621549956000)

[Full Zoom Recording](https://zoom.us/rec/share/cXihBq46JomHnWOiB_Ksmp18vSqCQSDqHA2JRitxhwF0wR8r-PC-nQljjBi5G8OG.oNHv9m_rdDF8u1Ns)

_Note:_ This lecture uses AWS resources that are free for the first year after you sign up for an AWS account. For accounts over a year old, the material in the lecture will cost less than a few bucks to run in AWS.

* AWS hosting - RDS (relational data services) and S3 buckets
  + Creating our own databases using AWS
* Deploying an application with Heroku (~45m into [Lecture Recording](https://zoom.us/rec/share/64f9iJRvorSK11OAMpMcL5I4Mp2Il_RDv-aB5XYzjr10YIlQ9V29X9pSk4az2tcP.31CiFQ8McBY9vyOS?startTime=1621549956000))
  + Git Demo Repo: https://github.com/froggercat-work/simple-flask-deploy
  + Another Heroku Guide is here: [](23-Final-Project/1/Heroku_Deployment/Heroku_Deployment_Guide.md)

##### 22-3 Additional Coverage

* Before class
  + [Open Office Hours](https://zoom.us/rec/share/bcFI8Irj16Y_SGAQyoNTW4rPsBOJdW20YNQxHWmxQ6ua5yzO_4dWAUS92mZFbeLP.TFjNmBoYyTtnMggX?startTime=1621547310000)
* After class
  + Open Office Hours

</details>

</details>

---

## <!-- 23-24 Image ML and Final Project -->

<details open><summary><em>Module 23-24: Final Project and Building Convolutional Neural Networks</em></summary>

<br/>

<details open><summary><strong>Module 23 - Deep Neural Network Practice and CNNs</strong></summary>

### [23-1 Deep Neural Networks with MNIST Handwriting Dataset & Final Project](https://zoom.us/rec/share/CmsSreDJvEWwQMW9iPUam7_M1qdD7_lx9c_6Onwi_dcgYwtYW-yN0wefrXZK9Gyy.C5nU5Lg3eVJEok0j?startTime=1621689352000)

[Full Zoom Recording](https://zoom.us/rec/share/nBVpuOFX1uuY-FI1lBs-1xPInKWcIfY4KSE6Z0e5IdbRvnepf_FwPQXCGHN1TM8X.EP7dQ6gkGFMNuIve)

* [Final Project Requirements](https://zoom.us/rec/share/CmsSreDJvEWwQMW9iPUam7_M1qdD7_lx9c_6Onwi_dcgYwtYW-yN0wefrXZK9Gyy.C5nU5Lg3eVJEok0j?startTime=1621692620000): [](Lectures/23-Final-Project/1/Slideshows/data-23-1-final-project.pdf)
  + Project groups and proposals due today
* Use MNIST handwriting dataset to practice deep neural network applications
  + Intro to preparing image files
  + Practice building a neural network
  + Using trained models to recognize handwriting

##### 23-1 Additional Coverage

* Before class:
  + Open Office Hours
* After class:
  + Open Office Hours

### 23-2 Final Project Work

No recordings today.

* Work on final projects
* Goals: 
  + Finish proposals 
  + Begin working on data cleaning and preprocessing

##### 23-2 Additional Coverage

* Before class:_
  + Open office hours
* After class:
  + Open Office Hours

### 23-3 Final Project Work + Optional Material

[Full Zoom Recording](https://zoom.us/rec/share/G0RYrkiqOBuIJAYXWFaWI83iQkKMMOqgIoKXT8tOPIt_L6PVJRfCOzYO4plSBwcY.nGl3pH3dO4XDhPo-)

* [Time Series Modeling](https://zoom.us/rec/share/yUHdWB6j3pmSGMl5ah-alZiGeoCJJlM22DZBB0MGI8RibLcDil2yu5NLbbZlWUIR.pR6WDnYsRgAxBTAK?startTime=1622158830000)
  + AR, MA, ARIMA
* [Convolutional Neural Networks (CNNs)](https://zoom.us/rec/share/yUHdWB6j3pmSGMl5ah-alZiGeoCJJlM22DZBB0MGI8RibLcDil2yu5NLbbZlWUIR.pR6WDnYsRgAxBTAK?startTime=1622162230000)
  + Note: I mentioned a slideshow on the video, but there's actually no slideshow for this material.
  + Research CNNs vs. deep neural networks
  + Use a CNN to create and train an image recognition model
  + Learn how to learn about machine learning
* Work on final projects
* Goals:
  + Finish data prep
  + Begin building and training model(s)
  + Websites planned out

##### 23-3 Additional Coverage

* Before class:
  + Open office hours
* After class:
  + Open office hours

</details>

<details><summary><strong>Module 24 - The Last Week! Final Project Work</strong></summary>

### 24-1 Final Project Work

[Full Zoom Recording](https://zoom.us/rec/share/dyRlA6IIPjcXgTbJ3CN7iFwSgsQz4OpcLVE7PD6sCtej_blUx4WNvTiMWYv7SxlJ.nPt7ccvls-LYufLp)

* Work on final projects
* Goals:
  + Machine learning model training in progress

##### 24-1 Additional Coverage

* Before class:
  + Open office hours
* After class:
  + Open office hours
  + [21 ML Homework Solution](https://zoom.us/rec/share/cIxayzI_txjwqL4uQwmfSM3ZSHFmZgN9zDu4nLW7ybGIfqecDKMuhabv7MyvnwuY.RoIKa0sdpmQ6tkTn?startTime=1622598128000)
  + [22 Big Data Homework Solution](https://zoom.us/rec/share/cIxayzI_txjwqL4uQwmfSM3ZSHFmZgN9zDu4nLW7ybGIfqecDKMuhabv7MyvnwuY.RoIKa0sdpmQ6tkTn?startTime=1622599079000)

### 24-2 Final Project Work

* Work on final project
* Goals:
  + Come with questions!
  + Final stages of technical (code-related) pieces

##### 24-2 Additional Coverage

* Before class:
  + Open office hours
* After class:
  + Open office hours

### 24-3 Final Project Presentations + Commencement

* Congratulations!!!!
  + Receiving certificates
  + What to do next?
  + Staying in touch
* Final Presentations

##### 24-3 Additional Coverage

* After class:
  + Open office hours

</details>

</details>
