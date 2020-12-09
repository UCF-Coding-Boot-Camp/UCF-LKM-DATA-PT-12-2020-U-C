# Getting Started

## Check your conda version

* Open your console or git bash console.
* Type `conda -V` (note that the `V` is capitalized)
  * The return output should state conda with a version number
    * Something like `4.3.27`, but the version number may differ some
  * If you don't get this return output, you need to [reinstall anaconda on your computer][1]
* Familiarize yourself with the [conda cheatsheet][2] for all of your conda needs

## Create a new python environment

* We will be using python 3.6 in class, so it's important that you create an environment that has this version specifically.
* Run the follow commands:

  * `conda create --name PythonData python=3.6 anaconda`
    * This will take a little time to install
  * Activate the newly created environment
    * Windows
      * `activate PythonData`
    * Mac, Linux
      * `source activate PythonData`
  * Check that you can run Jupyter notebook
    * `jupyter notebook`
      * This will bring up a web browser that says `jupyter` in the upper left corner of the screen.
  * Check to make sure that your jupyter notebook opens in Chrome/Firefox, if not please seek out one of your friendly neighborhood TA's

[1]: https://www.anaconda.com/download/

[2]: ./conda-cheatsheet.pdf
