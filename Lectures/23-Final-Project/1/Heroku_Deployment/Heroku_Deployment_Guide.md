## Heroku Deployment

### Prerequisites

* Sign up for a [Heroku](https://www.heroku.com) account.

### Deploying an application

* In this activity, we will deploy a Pet Pals application to Heroku. The applications takes the name, latitude, and longitude of a pet and plot its location on a map. The actual code for the application is not nearly as import as the steps for deploying to Heroku. These steps can repeated for your own applications.

* This process consists of:

  1. Creating a repo for the application.
  2. Preparing the application with additional configuration files (`Procfile` and `requirements.txt`)
  3. Creating the Heroku application
  4. Preparing the Heroku database

#### Part 1: Create a New Repo

* **Files:** [Pet Pals app](./Starter)

* From Github create a new repo called **Pet_Pals** and clone it to your desktop.

* Add the starter files to this repo.

#### Part 1: Configuration Files

* Start by creating a new conda environment just for this app. All of our project dependencies will be installed in this environment. **Note:** This should only contain python 3.6 and not anaconda.

```sh
conda create -n pet_pals_env python=3.6
```

* Make sure to activate this new environment before proceeding.

```sh
conda activate pet_pals_env
```

* **Note** if you run into issues try the following command instead.

```sh
source activate pet_pals_env
```

* Next, we install `gunicorn` with `pip install gunicorn`. Explain that gunicorn is a high performance web server that can run their Flask app in a production environment.

* Install the remaining libraries into your new environment.

```sh
pip install flask
pip install flask-sqlalchemy
```

* You can test the application by running the following in your command line.

```python
python app.py
```
or
```sh
flask run
```

* Navigate to `127.0.0.1:5000` to view your webpage.

* Now that all of the the project dependencies are installed, we need to generate the `requirements.txt` file. This file is a list of the Python packages required to run the app. Heroku will use this file to install all of the app's dependencies.

```sh
pip freeze > requirements.txt
```

* **NOTE:** it is generally a good idea to check your `requirements.txt` file for any unnecessary packages. Only keep the packages that are required to run your application.

* The final configuration file that we need is `Procfile`. This file is used by Heroku to run the app. Create a new file in VS Code and name it `Procfile` (without any extension).

* Add the following code to the `Procfile` which instructs Heroku how to run the app.

```sh
web: gunicorn app:app
```

* Add, commit and push everything up to your repo.

#### Part 2: Creating the Heroku App

* Navigate to [Heroku](https://www.heroku.com) and create an account if you don't already have one.

* Once you are at the main dash click New in the type right and select **Create a new app**.

  * Give your app an unique name and leave region to default. A good "hack" is to put your username before the name of your app. That way it is always unique.

* On Heroku, go to the `Deploy` section of your app's homepage, and follow the steps to deploy the app.

  ![Images/deploy05.png](Images/deploy05.png)

  * In the Deployment method section select GitHub.

  * Once connected search for the pet-pals repo you created that contains your code from the previous step, and connect.

  * With your repo selected, navigate to the **Manual deploy** section below it and click **Deploy Branch**.

  * Once it is completed deploying, click the "View" button to open your web app.

#### Part 3: Preparing the Database

* This starter code uses a `.sqlite` file as the database, but you can also use postgres.

* After creating a new app on Heroku, navigate to `Resources`:

  ![Images/deploy01.png](Images/deploy01.png)

  * Under `Add-ons`, search `Heroku Postgres`. Make sure to use the free version then click Provision.

  ![provision database](Images/provision_database.png)

* Once `Heroku Postgres` is listed on click on it.

* From the new page, navigate to settings and click on `View Credentials`.

* The connection string to the database should now be available in the **URI** field:

  ![Images/database_connection.png](Images/database_connection.png)

* Heroku will automatically assign this URI string to the `DATABASE_URL` environment variable that is used within `app.py`. The code that is already in `app.py` will be able to use that environment variable to connect to the Heroku database.

  ```python
  # DATABASE_URL will contain the database connection string:
  app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('DATABASE_URL', '')
  # Connects to the database using the app config
  db = SQLAlchemy(app)
  ```

* Once this is connected, navigate to "more" in the top right and click "run console".

* In the input box enter:

```sh
python initdb.py
```

* Your database is now initialized and can be connected to your web app and even viewed from PGAdmin.
