<!-- @format -->

# Lesson Overview

**Note:** These lecture notes are not final - just a handy reference. Notes may be updated any time depending on what we cover.

Lectures are linked to the corresponding Panopto video.

Office Hours are linked to the corresponding Panopto videos where available.

## <!-- 00 Panopto -->

<details><summary><h3 style="display: inline; padding-top: 0">Panopto</h3></summary>

Panopto recordings are searchable! Both audio and video feeds are processed.

To search within a specific video, open the video. The search bar appears on the left, under the camera feed. You can search multiple videos by using the search bar at the top of a Panopto folder.

Links to our class's Panopto folders are below. As part of your tuition, you have access to these videos forever.

Recordings:

-   [Lecture Recordings](https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Sessions/List.aspx?folderID=2c76d6e4-8319-419b-a635-ac8c003c1a6a)
-   Office Hours Recordings
    -   [Homework Help and Solutions](https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Sessions/List.aspx?folderID=3e647d04-dc2b-4c88-9d07-ac8c01721eb8)
    -   [Misc (i.e. Git tutorials, installs, career services chats)](https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Sessions/List.aspx?folderID=b128a7f9-6114-4e56-8bc5-ac8c01725a4f)
    -   [Open Office Hours Recordings (not always recorded, but when they are, they're here)](https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Sessions/List.aspx?folderID=8efab66d-f657-4bec-8cab-acb60031f398)

<details><summary>Raw Files:</summary>
In case I forgot to include something in the processed videos above, you can check out the full class folder here:

-   [Class Panopto Recordings](https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Sessions/List.aspx?folderID=188ece76-73ee-44c8-ba5b-ac8b017afaad)
    -   Contains all recordings (lecture, office hours, _and copies of the raw recordings before I combine them_).
    -   Searching this folder will return duplicates because it includes those raw copies.
    -   You can't see folders, so this will look empty (I put all the videos in folders). But you can search with the bar at the top and the videos will show up in the search results.

</details>

</details>

---

## <!-- 00 Installs -->

<details><summary><h3 style="display: inline; padding-top: 0">Software Installs and Logins</h3></summary>

Please consult your prework for the basic programs we install, such as Git Bash and Anaconda.

This list contains only the additional installs and API signups we cover in class.

You are free to use additional libraries for your projects; this list is just a reference.

<details><summary><strong>Excel Addons</strong></summary>

-   Statistics Addon (Moving Average)
-   Enable Developer Tools (VBA)

</details>

<details><summary><strong>VSCode Plugins</strong></summary>

-   Windows users: Set Git Bash to your primary terminal.
-   Rainbow CSV
-   [Git Graph](https://marketplace.visualstudio.com/items?itemName=mhutchie.git-graph)
-   Live Share
-   Python (may already be installed)
-   Live Server

</details>

<details><summary><strong>Chrome Extensions</strong></summary>

-   JSON Formatter (just google "json formatter chrome" and install whatever comes up first, they're all pretty much the same)

</details>

<details><summary><strong>Jupyter Extensions</strong></summary>

Be sure you are in your `PythonData` environment before running these install commands, or you'll install your extensions to the wrong environment.

-   <details><summary>Enable Jupyter Extensions - DO THIS FIRST</summary>

    -   Jupyter Lab
        -   Be sure you've updated Jupyter: `pip install -U jupyterlab`.
        -   If you don't see the Puzzle Icon on the left sidebar:
            -   Install the latest version of nodejs from the node.js website.
            -   Restart Jupyter
        -   Click the puzzle icon on the left sidebar. Accept the disclaimer to enable extensions.
    -   Jupyter Notebook

        -   `pip install jupyter_contrib_nbextensions`
        -   `jupyter contrib nbextension install --user`
        -   Restart Jupyter and you should now see the "nbextensions" tab on the file directory page. Go there to read about and install all the supported Jupyter Notebook plugins, such as Hinterland (auto-complete).

        </details>

</details>

<details><summary><strong>Python Libraries</strong></summary>

-   Anaconda
-   `conda create -n PythonData python=3.6 anaconda`
-   `citipy` (used for Homework only)
-   `census`
-   `gmaps` (Jupyter Extension)

</details>

<details><summary><strong>APIs</strong></summary>

-   [SpaceX API](https://github.com/r-spacex/SpaceX-API)
-   [Star Wars API](https://swapi.dev/)
-   [A small NYT headlines scraper](http://nyt-mongo-scraper.herokuapp.com/api/headlines)
-   [TVmaze API's Show Search endpoint](https://www.tvmaze.com/api#show-search)
-   [World Bank API](https://datahelpdesk.worldbank.org/knowledgebase/topics/125589-developer-information)
-   Requires sign up:
    -   [OMDb API](http://www.omdbapi.com/apikey.aspx)
    -   [New York Times API](https://developer.nytimes.com/accounts/create)
    -   [OpenWeatherMap](https://openweathermap.org/guide#how)
    -   [Quandl (stocks)](https://docs.quandl.com/docs#section-authentication)
    -   [Mapbox](https://docs.mapbox.com/api/#access-tokens)
    -   US Census API
    -   Google Maps APIs (Maps JavaScript, Geocoding, and Places APIs)

</details>

<details><summary><strong>Cloud Systems</strong></summary>

-   Google CoLab - Hosted Jupyter Notebooks
    -   We'll use these for machine learning at the end of class, but for now these are a good way to get going with Jupyter if you can't install locally.

</details>

</details>

---

## <!-- 01-02 Excel, VBA -->

<details><summary><em>Module 01-02: Intro to Programming with Excel and VBA</em></summary>

<br/>

<details><summary><strong>Module 01 - Excel</strong></summary>

### [01-1 Course Intro](https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=945aebe9-2ac7-4112-8b25-ac8b018498d6)

[Zoom Recording](https://zoom.us/rec/share/VelJsDmIXp1E22mo9jBV0RH84kSuTrvZYrJByIc2d7n6w0cqfd_mi84j3DNA9g-m.8j8kRfchlyr8gxva)

-   Introductions
-   Thought experiments
-   Data Modeling Strategy (Analytics Paradigm)

##### 01-1 Additional Coverage

-   [Git Intro 1](https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=ba3c7078-083f-44dd-9d7b-ac8c002bd395)
    -   `git clone`
    -   `git pull`
    -   _Never_ edit files in the cloned folder!
        -   Copy to "InClass" instead.
    -   Bash Commands: `ls`, `cd`, `..`, `open` (`explorer` on windows), `pwd`

### [01-2 Excel Basics](https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=deaa8e10-66a1-46b5-9fc4-ac8d017d8fd3)

[Zoom Recording](https://zoom.us/rec/share/eiE-MNi53gYlq6Ku47iZXzdPWgCRWjD0XT2YD5gQlPvRkgVzwPXAhl88svKyvOFx._4NTCFe3ca-5rX7Q)

The first ~10 mins of this recording are missing, I go through how to navigate the Github repo. Read though the [README.md](../README.md) and this file, [00-Lecture-Overview](), to see what I covered.

-   Functions and arguments
-   Pivot Tables
-   Formatting
-   Vlookup
-   Named Ranges
-   Multiple worksheets
-   Conditionals

##### 01-2 Additional Coverage

-   [Git Intro 2](https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=0a51cb65-a3a2-4762-9f9d-ac8e002cf338)
    -   Git Installation
    -   Adding SSH Key
    -   (Training Wheels) "Open Terminal Window Here" from Finder and "Open Git Bash Here" from Windows Explorer
    -   Review:
        -   `git clone`
        -   `git pull`
        -   _Never_ edit files in the cloned folder!
            -   Copy to "InClass" instead.
        -   Bash Commands: `ls`, `cd`, `..`, `open` (`explorer` on windows), `pwd`
-   Open OH for TA assistance (custom for questions/ install issues)

### [01-3 Excel Charting](https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=43f4346a-f834-4b34-9e7b-ac8f00e95262)

[Zoom Recording](https://zoom.us/rec/share/fmOz8_8Wl1-GOzPdAeYYQEPCy2Jcw_qSDLBnQdnTf6qswoYTrRN7zttcqyrA4jQ.82I9y2-cjvPCI-Es)

-   Line, Scatter, Bar, Pie charts
-   Trend lines
-   Pivot Charts
-   Statistical Summaries
    -   Variance, Standard Deviation
    -   Z-Score
    -   Outliers, Quartiles, Quantiles
    -   Box-and-Whisker Plots

##### 01-3 Additional Coverage

-   [01 Excel Homework Help 1/1](https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=6f9e4a43-15a8-41d5-8960-ac8f0121f79a)
    -   Conditional Formatting
    -   Pivot Table Breakout Columns
    -   Class Questions
        -   Splitting categories
        -   Date conversion
        -   Finding live campaigns
        -   Variance & Std Deviation
-   Open Office Hours for install help/ questions

</details>

<details><summary><strong>Module 02 - VBA</strong></summary>

### [02-1 VBA Day 1 - Intro to Programming](https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=6878a1ba-2284-4be5-bcca-ac920179fdf2)

[Zoom Recording](https://zoom.us/rec/share/ppVQMz497qsaYR6m9c1g_Ha13-rLeCjA-50lfeZagd2jRUlnu4kguONyp9sbAwtl.Yed1O_L7ildQuSAb)

-   Installs
    -   VSCode
        -   Git Bash/ Terminal Integration
    -   Excel Developer Tools
    -   Excel Statistics Addon (for moving average calcs)
-   Hello World!
-   Excel Buttons
-   Accessing Cells and Ranges in VBA
-   Fundamentals of programming
    -   Primitives (aka basic types)
    -   Conditionals - `If`, `Elseif`, `Else`, `End If`
-   Basics of navigating bash terminals
    -   Bash Commands: `mkdir`, `~`, `code`, `cp`

##### 02-1 Additional Coverage

-   After Class:
    -   [02 VBA Homework Help 1/3](https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=039eeab3-e6d4-4b6f-a2d1-ac93002bf51d)
        -   Review of VSCode set up and creating a git repo (used a local repo tonight)
        -   Getting started - reading values out of columns

### [02-2 VBA Day 2 - Loops](https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=1c3aea1c-8b4d-4a60-acaa-ac94017e222f)

[Zoom Recording](https://zoom.us/rec/share/0KmRA_77KwCVgl_vbj7tPa2HxETLNBNF5pnu2eUFEQDTBmyU4wnXDwYtrt6wRpVC.s1W9NVKDOpEVd2KA)

-   2-1 Review Ex 09-10
-   Warm up: 2-1 Ex 11
-   Loops
-   Conditionals (includes 2-1 Ex 12, 13)
-   Installations for Module 3
    -   Jupyter Notebook
    -   Conda
    -   Python

##### 02-2 Additional Coverage

-   After Class:
    -   [02 VBA Homework Help 2/3](https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=36bfc6b0-594b-4b42-8ecc-ac9500165044)

### [02-3 VBA Day 3 - More Practice](https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=65c42e5c-c01b-4954-ad66-ac9600ea57b5)

[Zoom Recording](https://zoom.us/rec/share/EDZ7fB3Q7SjF5o-pX3X_QwCcwMQFcYJGyhOvaLP1OYi8h01oWZTd2BNIk2BlnAm3.qISPBlONhBoRyy-j)

-   Formatting sheets with VBA
-   Nested Loops
-   Lots of practice

##### 02-3 Additional Coverage

_No office hours before class._

-   After Class:
    -   [02 VBA Homework Help 3/3 - Creating a Github Repo](https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=2b220836-c9c3-4b71-bfde-ac9601262249)

</details>

</details>

---

## <!-- 03-06 Python, Pd, Plots, JSON -->

<details><summary><em>Module 03-06: Python, Pandas, Plotting, and APIs</em></summary>

<br/>

<details><summary><strong>Module 03 - Python</strong></summary>

### [03-1 Python Day 1 - Intro to Programming](https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=f26bdb6c-4160-4fb1-b0d1-ac9b0014dfc1)

[Zoom Recording](https://zoom.us/rec/share/4R8DGCJueVRRIMttMkEaR1Sru2EKXETTStLsBlo6SyTaC1oiFwjdr_X1Tv0eQzwA.AxyogBFtlgM-kbRe)

-   Review Installations and PythonData environment
-   Variables
-   User Input
-   Conditionals - `if`, `elif`, `else`
-   Loops - `for` and **`while`**

##### 03-1 Additional Coverage

-   Before Class:
    -   03 Python Installation Help
-   After Class:
    -   03 Python Installation Help

### [03-2 Python Day 2 - CSVs, Python, and Lists](https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=d1528e56-f864-4e8c-b13a-aca70183d34b)

[Zoom Recording](https://zoom.us/rec/share/meIovFPS_nXNvz5_BqglfKMr7MNFl6uB6VjLa-P0A4bL19LBRKyL-UrOSnm07EQ8.pN61E6sb2gLjjdfL)

-   Review Python, VSCode, Git
-   Conditionals - `if`, `elif`, `else`
-   Loops - `for` and `while`
-   Read/ write CSVs

##### 03-2 Additional Coverage

-   Before Class:
    -   Open Office Hours
-   After Class:
    -   [03 Python Homework Help 1/3 + Git LFS Install Help](https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=b8ed0a29-1b4a-4817-a151-aca8002ccc5b)

### [03-3 Python Day 3 - Intermediate Python](https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=f4d1e63f-83bb-4172-b10e-aca901833eba)

[Zoom Recording](https://zoom.us/rec/share/B_is_r9vb4vumdYez4HUN4X4h4ccwYvoBnDs5NofiKQWGDrPmetk_RpNDHnuzJmu.nZCxpbHwus-4AEyP)

-   Dictionaries
-   List Comprehensions
    -   Btw, you can also do dictionary comprehensions ...
        -   ... but we won't cover that just yet.
        -   If you're comfortable with list comprehensions, check 'em out!
-   Functions
    -   Later on, we'll talk about using lists and dictionaries to pass arguments to functions
    -   aka `*args` and `**kwargs`.
-   Sets (Extra Material)

##### 03-3 Additional Coverage

-   Before Class:
    -   03 Python Installation Help
-   After Class:
    -   [01 Excel Homework Solution](https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=4109e75c-e5ab-4ab5-b7a2-acaa00310789)
    -   [03 Python Help 2/3](https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=b9996c0f-bb81-4aa2-8eba-acaa002c4c2b)

</details>

<details><summary><strong>Module 04 - Pandas</strong></summary>

### [04-1 Pandas Day 1 - Intro to DataFrames](https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=35515ab7-1467-466e-a01e-acab00e7b104)

[Zoom Recording](https://zoom.us/rec/share/KaSkjCh3OJra4nkaGJQsW0C0ie0pS6UQkCtqRRSuHnS2Xrbgq2J3NJ22Q6_a5aA.NMb8-KZOK6GKNu3O)

-   Intro to Jupyter Notebooks
-   Review Python (`input`, loops, `open`, `csv.reader`, conditionals)
-   Intro to Pandas
    -   Lists/ dictionaries -> DataFrames
    -   CSVs <-> DataFrames
-   Intro to summarizing data

##### 04-1 Additional Coverage

_No office hours before class._

-   After Class:
    -   [03 Python Homework Help 3/3](https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=51b0be79-29e6-4762-856d-acab0122cdd4)

### [04-2 Pandas Day 2 - Data Cleaning](https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=169c97de-bad5-4a2a-9a3c-acae017c3cb3)

[Zoom Recording](https://zoom.us/rec/share/x06_PjAopyQVboitustDtDb8Cis5oAvtTHa8HHknPE7raRuwjoiY3cV0Z1NnAdbZ.hKxosNlzbZSWKC4f)

-   Filtering (`loc` and `iloc`, `dropna`)
-   Cleaning duplicates
-   Data Types
-   Grouped DataFrames and Aggregations
-   Sorting

##### 04-2 Additional Coverage

-   Before Class:
    -   Open Office Hours
-   After Class:
    -   [04 Pandas Homework Help 1/3](https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=1577f8b1-c832-479e-aca4-acaf002b0173)
    -   [Personalizing Your Environments](https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=081a7e4b-6281-4def-8cee-acaf003034e0)
        -   Tips and Tricks for Jupyter 1/2
            -   Enabling Jupyter Extensions
        -   Pimp My Terminal 1/2
            -   Terminal Emulators And U
                -   Mac: iTerm (can also check out Alacritty, Kitty)
                -   Windows: WSL2 (we'll be installing Alacritty later on)

### [04-3 Pandas Day 3 - Intermediate Data Cleaning](https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=0111a9e1-7655-466e-9eb4-acb00174e990)

[Zoom Recording](https://zoom.us/rec/share/yoIHRInwoXfZs39AHNP6c_VBRFvXY4TESS_KyCS-ncbvP6v5pqaoXKUvsBPGMtgp.IrKyGCoNEoe80mgN)

-   Merging DataFrames
-   Binning
-   Mapping (`df.map`)
-   Fixing Bugs in Python

##### 04-3 Additional Coverage

-   Before Class:
    -   Open Office Hours
-   After Class:
    -   [04 Pandas Homework Help 2/3](https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=5c80d4f4-6236-4247-b72c-acb1002c932b) - no audio, use the zoom recording

</details>

<details><summary><strong>Module 05 - Intro to Plots and Statistics</strong></summary>

### [05-1 Intro to Plots and Statistics Day 1 - Matplotlib](https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=8a43e4aa-b707-4ad6-b300-acb200e88a3b)

[Zoom Recording](https://zoom.us/rec/share/E-T0EIiVPwf-K19J36Lqwr_Nr7qtmZHuYtY5QUf64Z0pXvJyQ7wlltLeTEf9tLeZ.CZZv1bbDFrUJOOFe)

-   Using Matplotlib in Jupyter Notebook
    -   Interactive and static inline plots
    -   `%matplotlib notebook`
-   Line, bar, scatter, pie charts
-   Basic plot configuration

##### 05-1 Additional Coverage

_No office hours before class._

-   After Class
    -   [04 Pandas Homework Help 3/3](https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=6c95b560-fde4-4b9a-8006-acb2011a423e)
    -   [02 VBA Homework Solution](https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=ecef5e6f-e35f-4448-9436-acb2011a5e9a)

### [05-2 Intro to Plots and Statistics Day 2 - Pandas Plots](https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=6f5c8fc9-3175-4269-9184-acb5017dd703)

[Zoom Recording](https://zoom.us/rec/share/CGFjcZzfKql4Drn3uTqPoRQKYB_xrbN0IsRxf06oHF1cArUuI8xj2xGswg8VgmAl.OKLbwaQBH_Nm2nLv)

-   `DataFrame.plot()`
-   Line, bar, scatter, pie charts
-   Pros & cons vs. Matplotlib

##### 05-2 Additional Coverage

-   Before Class
    -   [Open Office Hours](https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=b858cdcf-e451-4c5e-a32a-acb5017b678c)
-   After Class
    -   Statistics (video canceled)
        -   [You can review the following material instead (will be helpful for 05-3, but not required)](https://ucflkmdatapt1-3my1247.slack.com/archives/C01FDRD8LLF/p1611114150000300)
    -   [05 Python Plotting Homework Help 1/3](https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=b56bb2ba-4f6d-45fd-8f90-acb6002ce4eb)

### [05-3 Intro to Plots and Statistics Day 3 - Intro to Statistics](https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=6b2d21d0-d0ab-475e-ab59-acb70182ff73)

[Zoom Recording](https://zoom.us/rec/share/rjUFF48z4L8bH88qIHovrk5bmumb_wy4aILlLkvmuxsI-FwsK5tOpJ5ZSFFRMh2B.NlQ4b0LYNlX0dKG3)

-   Basic measures of central tendency: Mean, median, mode
-   Variance and standard deviation
-   Handling outliers
-   Quartiles
-   Standard Error calculations with `pandas`
-   Error Bar plots with `pandas`
-   Student's T-Test
-   Fits and Regression with `pandas` and `scipy`

##### 05-3 Additional Coverage

-   Before Class
    -   [Open Office Hours](https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=66a9c10c-9ff4-49b3-a197-acb70176bd09)
-   After Class
    -   [05 Python Plotting Homework Help 2/3](https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=7aff4e7b-4533-4bb0-8222-acb8002bbcbd)
    -   [Pimp My Terminal 2/2](https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=8df929e2-92fa-4222-aae0-acb8002e37ca)
        -   Easy Themes And Extensions with ZSH
            -   Installing ZSH
            -   Installing Oh-My-Zsh (for plugins)
            -   Installing Powerlevel10k (snazzy theme)
            -   What Is .zshrc Anyway?
                -   Ok, so I didn't cover this, but this is basically a configuration file for your terminal settings! More literally, it contains code/ setup that gets run whenever you start your terminal.

</details>

<details><summary><strong>Module 06 - Python and APIs - Intro</strong></summary>

### [06-1 Python and APIs](https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=158ace44-356c-4395-bbf3-acb900e832cf)

[Zoom Recording](https://zoom.us/rec/share/-nqKnHgCm9DWCQXrwPWdFKuJPsj1DwrW7rBFclpeEn7Lqr_ZGJYoEwO2LK0ISMnZ.psYAQn9ZQ2RPfWZy)

-   GET requests using the `requests` library
-   JSON -> Python dictionaries
-   API Documentation and sign ups
    -   SpaceX
    -   swapi (Star Wars API)
    -   Number Facts
    -   OMDb
    -   New York Times

##### 06-1 Additional Coverage

_No office hours before class._

-   After Class
    -   [05 Python Plotting Homework Help 3/3](https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=7456f18c-b711-42fb-8c39-acb90123b132)
        -   Also includes:
            -   04 Pandas HW Student Questions
            -   03 Python HW Student Questions
            -   Jupyter Notebook Extensions and Markdown Viewer

### [06-2 Python and APIs - JSON](https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=d7396e7d-5fe4-4f8a-90e6-acbc01849bb6)

[Zoom Recording](https://zoom.us/rec/share/yFDP0S9AF01LJWP79AzFG1CuYfFCbP-lSJAh2i_dAfpK5_WiFfKZcAzk4Web-rEF.TJlBL7rlIVGv44mN)

-   More API practice
    -   OpenWeatherMaps
    -   WorldBank API
-   JSON -> DataFrame
-   Exception Handling (`try` and `except`)

##### 06-2 Additional Coverage

-   Before Class
    -   [Open Office Hours](https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=33b84580-a017-4acc-8aa2-acbc017ab487https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=33b84580-a017-4acc-8aa2-acbc017ab487)
-   After Class
    -   [06 APIs Homework Help 1/3](https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=b6eb5af5-c81d-4567-a6ad-acbd003018ad)
        -   Key: "Managing" your API keys and git (don't commit your api key to github!!)
            -   We only touched on this briefly - I'll review in more detail Thursday.
    -   [03 Python HW Solution](https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=ff1d188b-dfc7-4975-9584-acbd001aec3b)

### [06-3 Python and APIs](https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=81196c9d-3fcc-4eba-b8ea-acbe0181b70a)

[Zoom Recording](https://zoom.us/rec/share/wbOg9bWTKsALVp5LZ-vnzWvZRAmRPw5HSFB4HVyaACIETMYsk_suIoVgWJpANSUl.WteeBgJp1_XOJ7gJ)

-   Practice Google Maps and Places APIs
-   Visualizations with Maps
    -   `gmaps` Jupyter Extension

##### 06-3 Additional Coverage

-   Before Class
    -   Open Office Hours
-   After Class
    -   [06 APIs Homework Help 2/3 - Hiding config.py with .gitignore](https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=fb8155a9-f078-46ca-9b2c-acbf002cbc68)

</details>

</details>

---

## <!-- 07-08 Project 1 -->

<details><summary><em>Module 07-08: Project 1</em></summary>

<br/>

<details><summary><strong>Module 07 - Git Practice + Project 1</strong></summary>

### [07-1 In-Class Git Practice + Project 1](https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=5c2c5789-91ee-43ff-9e08-acc000e9dd9f)

[Zoom Recording](https://zoom.us/rec/share/Q0HPPN8CjxeQRZBerueZuqo72lQ2UNgU_Yz0dwf07yf2qRU1cWVGsdIvJyBe_VBE.egx6PCsiK50PJOM2)

-   Git Tutorial
    -   Managing Git and Jupyter Notebooks
    -   Git Branch and PR tutorial
    -   Git Best Practices with small groups
-   [Project 1 Guidelines](../Projects/Project-1)
-   Project 1 Work

##### 07-1 Additional Coverage

_No office hours before class_

After Class:

-   Open Office Hours

### [07-2 In-Class Git Practice + Project 1](https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=56a95978-cf66-4d6b-9e50-acc301802d49)

[Zoom Recording](https://zoom.us/rec/share/qApaj6iOh08XaV425A2Ryj9ur2jaDRdXJ2U6j4Gu0JJEsZlo6nD_uhpA7KmzSn02.kiz3Ha39PvGhbPAz)

-   Git Tutorial
    -   Managing bad merges
    -   Review of git branch and PR best practices
-   Project 1 Work

##### 07-2 Additional Coverage

Before Class

-   Open Office Hours

After Class

-   Open Office Hours

### 07-3 Hypothesis Testing and Statistical Tests + Project 1

No Panopto recording for today (sub).

[Zoom Recording](https://zoom.us/rec/share/ooeL1U8_lDjqAE4pTvsYAsPH0lqufgxgpDfqI12fhWTdtTWOfltFWNtbZMpya8VN.LIl9ko5TogElnFd2)

-   T-Test
-   ANOVA
-   P-Values
-   Chi Square tests
-   Project work

##### 07-3 Additional Coverage

Before Class

-   Open Office Hours

After Class

-   Open Office Hours
-   Project work

</details>

<details><summary><strong>Module 08 - Project 1 + Presentations</strong></summary>

### 08-1 Project 1

No Panopto recording for today (sub).

[Zoom Recording](https://zoom.us/rec/share/_OwTF9IVcFyZ0TvsnJ_7rUVGyp2ynE3-duj67cY0c9z6Q5aHMS1OhrWOeTZhUwh3.fjxPD6viy2039Vtr)

-   Install Postgres and pgAdmin
-   Project work

##### 08-1 Additional Coverage

Before Class

-   Open Office Hours

After Class

-   Open Office Hours
-   Project work

### 08-2 Project 1

Project work day = all-class open office hours, no recordings.

-   Project work

##### 08-2 Additional Coverage

Before Class

-   Open Office Hours

After Class

-   Open Office Hours
-   Project work

### [08-3 Project 1 Presentations](https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=ef199b9c-e708-475b-af0f-accc01840507)

[Zoom Recording](https://zoom.us/rec/share/NNjvkumLMVKLd8CtyKQeDWVqk2GfvNkfOmi6t39ZhaeuV0kYJIWsutjmGHEOCY-_.7Ikq3DBqysBR0bRh?startTime=1613083553000)

_No after-class office hours today_

-   Project Presentations

##### 08-3 Additional Coverage

Before Class

-   Open Office Hours
-   Presentation Prep

</details>

</details>

---

## <!-- 09-10 DBs, ORMs, OOP, APIs -->

<details open><summary><em>Module 09-10: Databases, ORMs, OOP, and Making APIs</em></summary>

<br/>

<details open><summary><strong>Module 09 - Databases (Postgres)</strong></summary>

### [09-1 Intro to Postgres](https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=3f92c1b2-8bb7-4aa0-954a-accd0027382f)

[Zoom Recording](https://zoom.us/rec/share/a7HFneqEmgskH7EQRseDXjzlUvxFQqdx3ZGdg56Wl3G8jOTgSrjUy2YKR6RwLebn.RiwZbhmS-pAMKisg)

-   Database vs. Schema
-   Create a Database and tables
-   pSQL data types
-   Primary and Unique Keys
-   CSV -> Database Table
-   CRUD (Create, Read, Update, Delete) applications
    -   Database commands: `INSERT`, `SELECT`, `UPDATE`, `DELETE`
-   Joins

##### 09-1 Additional Coverage

-   After Class
    -   [09 Homework Help 1/3](https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=405c9d30-6126-40f8-9374-acce0123a0ab)
    -   [04 Pandas Homework Solution](https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=52fd4e0e-30ee-4349-a77e-acce01240252)

### [09-2 Advanced Queries](https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=25bd0495-1758-403f-a1e9-acd100f0877f)

[Zoom Recording](https://zoom.us/rec/share/Jk1sTae2AWw_CeWBlLfvGKSs5KiP25QZWbi8tBJOxHO_CXf1dCq-dKsZG0SlsnW_.Um9AqKSRmGemepcy)

-   Aggregation Queries
-   Subqueries (sub-selects)
-   Views

##### 09-2 Additional Coverage

-   Before Class
    -   Project Grading (ping us on slack for questions)
-   After Class
    -   Project Grading
    -   [09 Homework Help 2/3](https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=ca748b1f-ce09-479c-8934-acd100faaaa9)
    -   [05 Matplotlib Homework Solution](https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=76558588-8ade-449b-a613-acd100fac89b)

### [09-3 Data Modeling](https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=fbc023dd-8758-462c-b750-acd2003be1fb)

-   Database Design Techniques And Best Practices
-   Data normalization
-   Data relationships
-   ERD Diagrams - visualizing DB relationships

##### 09-3 Additional Coverage

-   Before Class
    -  Project Grading (ping us on slack for questions)
-   After Class
    -  [09 Homework Help 3/3](https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=c9619169-1975-4646-9a50-acd2003c184c)

</details>

<details><summary><strong>Module 10 - Programming with SQLAlchemy (Advanced Databases) and Making APIs</strong></summary>

### 10-1 Intro to SQLAlchemy

-   SQLAlchemy
    -   Connect to a database
    -   Run raw queries using `engine.execute()`
    -   CRUD (Create/ Read/ Update/ Delete) using ORM (Object Relational Models)
-   Intro to Object Oriented Programming (OOP)
    -   Creating Python classes to represent database tables (ORM)

##### 10-1 Additional Coverage

-   After Class
    -   10 Homework Help 1/3
    -   Object Oriented Programming (maybe, depends on interest/ time)

### 10-2 SQLAlchemy ORM++

-   More practice creating and using ORM classes
-   Using SQLAlchemy to inspect database:
    -   Reflection (ORM with auto-generated classes)
    -   Inspector - viewing database Schema
-   Using Pandas to plot SQL results

##### 10-2 Additional Coverage

-   Before Class
    -   Open Office Hours
-   After Class
    -   10 Homework Help 2/3

### 10-3 Flask + SQLAlchemy = My First API

-   Create and run a server with Flask
-   Define endpoints
-   Read query strings (i.e. function args) from GET requests
-   Run database queries from an endpoint
-   Return results as JSON

##### 10-3 Additional Coverage

-   Before Class
    -   Open Office Hours
-   After Class
    -   10 Homework Help 3/3

</details>

</details>

---

## <!-- 11-12 Basic Viz Websites -->

<details><summary><em>Module 11-12: Basic Viz Websites</em></summary>

<br/>

<details><summary><strong>Module 11 - HTML</strong></summary>

### 11-1 Intro To HTML

-   Website Frontend Ingredients (HTML + CSS + JavaScript)
-   DOM Basics
-   Common HTML Tags
    -   `<p>`
    -   `<h1> - <h6>`
    -   `<hr/>`
    -   `<img/>`
    -   `<ul>` / `<ol>` and `<li>`
    -   `<table>`, `<th>`, `<tr>`, `<td>`
    -   `<div>`
    -   `<summary>`
-   HTML Structure
    -   Tags
    -   Attributes
    -   Sections of the document
-   _NOTE_: Use Mozilla MDN for documentation, not W3Schools!!

##### 11-1 Additional Coverage

-   After Class
    -   11 HTML Homework Help 1/3

### 11-2 Styling (CSS) and Deploying Static Sites Using Github Pages

-   CSS Basics: styling and positioning elements
-   Box Model of HTML elements
-   Github Pages **(Needed for your Career Services Milestones)**

##### 11-2 Additional Coverage

-   Before Class
    -   Open Office Hours
-   After Class
    -   11 HTML Homework Help 2/3 - Wireframing Demo

### 11-3 Mobile-first (Responsive) CSS

-   Media Queries
-   Bootstrap (CSS library by Twitter) and the Bootstrap Grid
-   Using Bootstrap to get a website up and running quickly

##### 11-3 Additional Coverage

-   Before Class
    -   Open Office Hours
    -   ETL Project Questions
-   After Class
    -   11 HTML Homework Help 3/3

</details>

<details><summary><strong>Module 12 - Web Scraping, Document Databases (NoSQL), and Making Data Viz Websites</strong></summary>

### 12-1 Intro to MongoDB

-   ETL Project Questions
-   Installing and Connecting to MongoDB
-   Using the Mongo Shell for CRUD
-   Using PyMongo for CRUD with Python

##### 12-1 Additional Coverage

-   After Class
    -   12 Web Scraping Homework Help 1/3

### 12-2 Simple Web Scraping

-   Use BeautifulSoup to scrape websites with Python
    -   `html.parser` and `lxml` parser
-   Use Pandas to scrape websites
-   Save results to MongoDB
-   Use Splinter (with chromedriver) to scrape websites

##### 12-2 Additional Coverage

-   Before Class
    -   Open Office Hours
-   After Class
    -   12 Web Scraping Homework Help 2/3

### 12-3 BeautifulSoup + MongoDB + (new) Serving Templates With Flask

-   Use and render flask templates
-   Integrate MongoDB data into Flask Templates
    -   Include static resources (i.e. css files) in Flask Templates via `static` folder
-   Capstone: Allow client to trigger a web scrape using Flask, then view results
-   ETL Project Overview and Questions

##### 12-3 Additional Coverage

-   Before Class
    -   Open Office Hours
-   After Class
    -   12 Web Scraping Homework Help 3/3

</details>

</details>

---

## <!-- 13 ETL Proj -->

<details><summary><em>Module 13: ETL Project</em></summary>

<br/>

<details><summary><strong>Module 13 - ETL Project</strong></summary>

### 13-1 Project Guidelines and Warm Up Exercise

-   ETL with Pandas warm up
-   Project Overview - the audio's missing for part of this, grab us for any questions.
-   Today's Project Goals:
    -   Project Proposals Due
    -   Retrieve Datasets
    -   Review Data Structures
    -   Database ERD design
    -   Discuss your websites

##### 13-1 Additional Coverage

-   After Class
    -   Open Office Hours
    -   09 SQL Homework Solution
    -   Deploying to Heroku
        -   [Demo website to try deploying](https://github.com/froggercat-work/simple-flask-deploy)
        -   Deploying is a reach goal for the ETL Project

### 13-2 ETL Project Work Day

-   Project Work
-   Today's Project Goals:
    -   Load Datasets into Database
    -   Design and split up website work
        -   APIs
        -   Documentation
        -   Visualization/ Project Analysis

##### 13-2 Additional Coverage

-   Before/ During Class:
    -   Open Office Hours
-   After Class:
    -   Deploying to AWS EC2 with Dokku

### 13-3 ETL Project Work Day

-   Project Work
-   Today's Project Goals:
    -   Finish your documentation
    -   Submit your projects
    -   OPTIONAL: Deploy your work to heroku
        -   We won't require until later in class, so this is a _reach_ goal.
        -   This will be required for Project 2 and the Final Project.

##### 13-3 Additional Coverage

-   Before Class
    -   Open Office Hours
-   After Class
    -   Open Office Hours

</details>

</details>

---
