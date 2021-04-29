# Creating a PostgreSQL Database in AWS RDS

* Log in to the AWS Management Console and navigate to the **RDS** section under **Database**.

  ![rds_console](Images/rds_console.png)

* Click **Create database** from the **Create database** section to the right. This button will take you to the **Engine options** page, which brings up a menu of different relational databases.

* **Note:** AWS may have a different screen than the one pictured below. If this is the first time using the service, the orange **Create database** will still be on the right.

  ![create_db_button](Images/create_db_button.png)

  **Note:** There may be an option to create a database with Amazon Aurora, which is a paid database. We will not be using this in today's lesson.

* **IMPORTANT:** Check the box next to **Only enable options eligible for RDS Free Usage Tier** at the bottom of the menu.

* Select **PostgreSQL**.

  ![postgres_select](Images/postgres_select.png)

* Under **Templates** select **Free Tier**.

  ![Free Tier](Images/free_tier.png)

* Fill out the fields under Settings. Use **myPostgresDB** as the database instance identifier and **root** as the master username.

  **Note**: While the database instance identifier and master username can be anything, we recommend sticking to these settings in this case for consistency.

* Uncheck the **Auto generate password** box. Enter a password and be sure to record it somewhere. The other settings will be accessible in the future, but the password will not.

  ![db settings](Images/db_settings.png)

* Under **Connectivity** click the down arrow next to **Additional connectivity configuration**. Select **Yes** under the **Public accessibility** option. Explain that this does not mean anyone can access the database, as a password is still required, but it allows connections from outside sources like pgAdmin.

  ![public accessible](Images/public_accessible.png)

* Under **Additional configuration**, click the down arrow and make the database name **my_data_class_db**. (Use this name for the sake of consistency. In the future, any name can be used.) Keep the default settings in the other fields.

  ![database_options](Images/database_options.png)

* Uncheck the boxes for **Enable automatic backups**, **Enable Performance Insights**, and **Enable auto minor version upgrade**.

  ![additional options](Images/additional_options.png)

* Click **Create Database** followed by **View DB Instance details** to navigate to the instance console page. The database creation on AWS's end will take anywhere from 10 to 15 minutes.
