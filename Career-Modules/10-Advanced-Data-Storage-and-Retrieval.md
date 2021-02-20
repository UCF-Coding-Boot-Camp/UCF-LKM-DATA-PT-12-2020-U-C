# Career Connection

![career services logo](assets/logo.png)

Nice work this week! You upped your database skills by adding in an ORM—SQLAlchemy—giving you increased power over your SQL database using Python! Using an ORM is insanely popular in the data world. Check out the following data, ranging from 21 October 2019 through 13 April 2020:

Source: [https://pypistats.org/packages/sqlalchemy](https://pypistats.org/packages/sqlalchemy)

![SQLAlchemy](./assets/storage1.png)

Almost 500,000 daily downloads! Isn’t that insane? Looking at SQLAlchemy’s GitHub repository, you’ll also notice it's used by some 151,000 major projects and has 312 forks:

![SQLAlchemy](./assets/storage2.png)

If these numbers don’t mean a whole lot to you, just trust us when we say, SQLAlchemy is very popular. And it’s only one of a whole host of ORM tools out there that you might end up using.

And just like we discussed for SQL varieties, the different flavors of ORM tools are mostly very similar. Their syntax is a little different, and some of them have different functionality, but for the most part, once you’ve learned SQLAlchemy well you’ll have no trouble moving on to the next one!

On top of this, you also tackled Flask—an extremely popular web framework for setting up web applications with Python. Flask, along with Django, is among the top 2 frameworks used by Python developers. Again, checking out its GitHub stats is revealing: 424,000 major packages use Flask, and there are some 13,400 forks and 49,900 users have starred this repository!

![Flask](./assets/storage3.png)

And if you’re really into the whole Flask thing, you might even check out PythonJobs.github.io, where Django and Flask positions are plentiful!

Find it here: [https://pythonjobs.github.io/](https://pythonjobs.github.io/)

And before we move on to some technical interview prep, here are a few things to get done:

### Add technical skills to your resume.

Before you move on to the next module, make sure to add SQLAlchemy or Python-based ORM to the “Technical Skills” section on your resume.

## Technical Interview

Look at the following code snippets, and try to answer the questions accompanying them.

### Snippet #1

```py
from sqlalchemy.engine.url import URL

postgres_db = {'drivername': 'postgres',
               'username': 'postgres',
               'host': '192.168.99.100',
               'port': 5432}
print(URL(**postgres_db))
```

**Question #1:** What line of code is missing from setting up postgres_db with SQLAlchemy?

<details>
<summary>
Answer
</summary>
'password': '<password>',  needs to be included in the setup object.
</details>

### Snippet #2

```py
# Declare a table
table = Table('Example',metadata,
            Column('id',Integer),
            Column('name',String))
```

**Question #2:** What line of code would you apply `primary_key=True` to?

<details>
<summary>
Answer
</summary>
The primary key could technically be either column, but common practice is to apply it to the id, so we’d get: `Column('id',Integer, primary_key=True)`

</details>

### Snippet #3

```py
from sqlalchemy import create_engine
from sqlalchemy import inspect

db_uri = 'sqlite:///db.sqlite'
engine = create_engine(db_uri)

inspector = inspect(engine)

# Get table information
print(inspector.get_table_names())

# Get column information
print(inspector.get_columns('EX1'))
```

**Question #3:** What does the above code do?

<details>
<summary>
Answer
</summary>
This code imports inspect from SQLAlchemy and uses the inspector to get the names of all tables and to get all columns from those tables in our database.
</details>

## Continue to Hone Your Skills

If you're interested in learning more about the technical interviewing process and practicing algorithms in a mock interview setting, check out our upcoming workshops.

![Events banner](./assets/events.png)
