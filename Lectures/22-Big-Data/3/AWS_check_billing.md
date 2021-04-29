## Checking AWS billing

* With everything shut down in AWS you should no longer accrue any costs. To ensure that you have properly shut down all AWS services, follow the steps to check your AWS billing:

  * From the AWS Management Console search for Billing and click on the result.

  ![aws billing dashboard](Images/billing_dashboard.png)

  * This will bring you to your Billing & Cost Management Dashboard. If you scroll down you will see your **Spend Summary**. This is only a forecast and not what you will actually be charged and is this doesn't apply your AWS free usage credits. However, this should be no more than a few dollars.

  ![spend summary](Images/billing_spend_summary.png)

  * If you keep scrolling down you will find the **Top Free Tier Services** by Usage section. Double check to make sure all your services are within the Free Tier Usage. If they are close to full or higher than expected be sure to delete that service and limit future usage for the month.

  ![top free tier services](Images/billing_top_free_tier.png)

  * Scroll back up and select **Bills** on the navigation menu located on the  left hand side of the page.

  ![bills](Images/billing_bills.png)

  * The **Bills** dashboard displays your up-to-date service charges. You should see **$0.00** listed next to each service. You can explore individual services by selecting the arrow to the left of the service.

  ![service charges](Images/billing_service_charges.png)

  * This page will also display where the AWS Free tier credits will be applied. Clicking the arrow next to **Relational Database Services** will show the charge you accrued and the AWS credits applied to it.

  ![expanded charges](Images/billing_expanded_charges.png)

  * For the next few months, be sure to check any AWS statements and the Bills page to make sure that there are no surprise costs or reoccurring paid services. For more information regarding AWS free tier please checkout this [AWS article](https://aws.amazon.com/premiumsupport/knowledge-center/stop-future-free-tier-charges/) about handling free tier.
