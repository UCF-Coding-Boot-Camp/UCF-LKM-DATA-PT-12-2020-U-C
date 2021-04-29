# Machine Learning on Google Colab

## Introduction

* Google Colab hosts Jupyter notebooks in the cloud. To make machine learning easier, TensorFlow and a number of other modules are pre-installed on Colab.

  ![Images/colab01.png](Images/colab01.png)

* Other conveniences offered by Colab include easy importing of local Jupyter notebooks both from local drives and from Github repositories.

## Instructions

### Creating a Notebook

* In order to use Colab, you will need a Google account. While logged in, go to [https://colab.research.google.com](https://colab.research.google.com).

* To create a new Jupyter notebook, click on `NEW PYTHON3 NOTEBOOK`:

  ![Images/colab02.png](Images/colab02.png)

  * The notebook will be saved to your Google Drive.

  * Like any other file on Google Drive, you can control the sharing, editing, and collaboration of your notebook.

* Now you are ready to start using Colab:

  ![Images/colab03.png](Images/colab03.png)

### Using a Colab Notebook

* Colab comes pre-installed with many modules necessary for machine learning, including TensorFlow:

  ![Images/colab03.png](Images/colab04.png)

  * Like Jupyter notebook, a cell can be run by pressing `SHIFT` + `ENTER` on the keyboard.

* Other modules, such as Flask, will not be installed.

  ![Images/colab05.png](Images/colab05.png)

* To install a module, run `!pip install`

  ![Images/colab06.png](Images/colab06.png)

* To upload a file, use the `google.colab` module's `upload()` method:

  ![Images/colab06.png](Images/colab07.png)

  * Click on `Choose Files` to select local files to upload to Google Drive.

* As in Jupyter notebook, command line interface (CLI) commands are available:

  ![Images/colab08.png](Images/colab08.png)

* If your notebook times out, click on the highlighted area to reconnect. It should then indicate that it's connected:

  ![Images/colab09.png](Images/colab09.png)

* To insert a new cell of code in the notebook, click either `+CODE` or `Insert` in the menu:

  ![Images/colab10.png](Images/colab10.png)

### Additional Information

* Code snippets provide useful boilerplate code for a number of tasks, such as building a plot:

  ![Images/colab11.png](Images/colab11.png)

* For particularly large datasets, or intensive tasks, Colab offers free hardware acceleration. To enable it, go to `Edit` and select `Notebook settings`, then choose `GPU` as the Hardware Accelerator.

  ![Images/colab12.png](Images/colab12.png)

  ![Images/colab13.png](Images/colab13.png)

* To import a local Jupyter notebook into Colab, go to [https://colab.research.google.com](https://colab.research.google.com) and select `UPLOAD`:

  ![Images/colab14.png](Images/colab14.png)

  * Likewise, Jupyter notebooks can also be imported from Github repositories.
