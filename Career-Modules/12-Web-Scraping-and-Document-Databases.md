# Career Connection

![career services logo](assets/logo.png)

Nice job this week. You learned how to web scrape libraries, which is an important set of skills to showcase when talking with prospective employers. This week we really want to emphasize why web scraping is a valuable skill to add to your resume and the various ways in which web scraping may show up in the technical interview.

In this section, you will:

- Learn how web scraping is used on the job.
- Learn how to showcase this new skill to be a more competitive candidate in the job market.
- Answer common interview questions about web scraping.

On-the-job web scraping involves using specialized web crawling tools to extract the desired data from other websites—usually, as you’ve learned in this module, this data will then be stored in a database and used for analysis. Companies that might use this technique of data extraction may use the data for competitor analysis, tracking market trends, price research on competitors, or simply to be a data-driven company to improve.

As a data analyst and engineer, you can use your web scraping skills to collect information for future employers—so don’t be shy about showcasing that you know how to do this.

> Employer-Competitive Advantage: Adding web scraping to your resume’s skills list will help you pass through the applicant screening filters.  It also tells a potential employer that you can capably harvest the data they need.

## Technical Interview

Consider the following possible scenarios, for which you might find yourself working with web scraping in the professional world.

After reading each case study, you will see some common technical interview questions around the scenario you were presented. During a technical interview, you may receive one of two types of questions—you might even get both. Typically, you can expect the technical interview to fall into two different categories:

- Technical questions with short answers
- Broader, less-technical questions that require reflective thinking

Let’s get started.

### Case Study No. 1: Price Comparison

> You’ve just been offered that job at NASA you’ve been dreaming about, and it’s time for that final technical interview. As part of the interview, they give you the following prompt to read and consider.
>
> *You recently started working at a major online clothing retailer (Company A) whose focus is on selling high volume to increase its profit margins. Because this e-retailer is not a boutique marketplace selling to a niche market, it depends on its product, and its competitive pricing, to reach the largest audience possible.*
>
> *However, a few months ago, a major competitor (Company B) entered the online market, and Company A wants to keep an eye on its competitor’s pricing so that it can offer the best possible prices to its own customers.*
>
> *You’ve been hired to do the data analysis, but because Company B isn’t going to just go ahead and release all of its pricing in a well-documented API for you (you wish!), you’ll have to regularly scrape the data off its pages and maintain a database of the products, prices, and any price changes.*

After reading this prompt, the NASA technical interviewers ask the following questions:

Q. Would you consider it legal to scrape data from your competitors?

<details>
<summary>Answer</summary>
This is a relatively gray area. The short answer is yes, unless there’s some sort of privacy/legal agreement on its website that specifically prohibits web scraping. However, even if it’s legal to scrape data from the page, do consider how you then use that data may have legal implications of its own. In other words, you couldn’t scrape data and then republish and represent it as your own.
</details>

Q. Can you scrape data behind a login page?

<details>
<summary>Answer</summary>
Yes, you could. But it is significantly more difficult. You would need to provide the web application with valid credentials, and then navigate to the authenticated portion of the site and scrape—to do this, you could use some sort of browser automation tool like Selenium Web Driver. This process, though, is not readily recommended.
</details>

### Case Study No. 2: Airline Tickets

> FlyCheap is a locally owned tech company with a big idea. Using its browser extension, customers can book flights to travel all over the world on essentially any airline. However, it’s facing a very real problem—its major competitors, Kayak and Google, change their flight prices multiple times per day. So how do FlyCheap customers know when the best time is to book their tickets?
>
> Well, that’s where you come in. You’ve just been hired to improve the functionality of the browser extension by allowing it to pop up with an alert, for those who have it installed, when the price of a flight has dropped. But because the Google Flights API was recently deprecated, and you can no longer just make an API request for it—you’re going to have to get the information yourself.

Of course, you can’t sit there all day monitoring the prices of flights manually—there are just too many. So your first task on the job with FlyCheap is to write an application that scrapes data from Kayak, Google Flights, and other companies and monitors price variations. When a flight drops or increases in price, that information will get fed to the browser extension and then on to the end-user.

#### Can you extract data from sites not written in English?

<details>
<summary>Answer</summary>
Of course. You can extract data in any language, even if it’s not in a Roman-style alphabet (i.e., Chinese, Japanese, Korean), but obviously the material you scrape remains in the language you scrape it in.
</details>

#### Can you republish data and/or information that you scraped from the web?

<details>
<summary>Answer</summary>
Another gray area—maybe! Watch out for policies that explicitly forbid redistribution of material and/or the citation guidelines. You might be able to freely republish, not republish at all, or republish with limitations and credits to the original authors. If you’re unsure, get in touch with the owner of the site you’re scraping from.
</details>

### Case Study No. 3: Customer Review Sentiment Analysis

> Companies and their products live and die on customer reviews—all hail the mighty five gold stars. Your current company sells its products on Amazon, but it needs access to comprehensive data analytics on the customer reviews.

There’s going to be two main steps to this tasks. First, you’ll use web scraping to crawl the Amazon product pages for your company’s products and extract the review text and numerical value, then using a sentiment analysis library like [VADER Sentiment Analysis](https://github.com/cjhutto/vaderSentiment) to analyze the text to provide useful and actionable feedback for your company

Q. How would you handle scraping data from HTML that has been dynamically generated using a client-side JavaScript framework such as ReactJS or Angular.

<details>
<summary>Answer</summary>
You can, but again it’s a challenging task. Imagine the site has an empty <div></div> tag where content is dynamically generated—if you try the ordinary web scraping approach, your data will come back empty because there’s nothing there. So you have a couple of options: (a) reverse engineering the JavaScript that is dynamically generating the content or (b) force the page to generate the content and then scrape it—to do this, you can use Selenium WebDriver to navigate to and load the page, then trigger your scrape.
</details>

Q. Would you say that web scraping is ethical?

<details>
<summary>Answer</summary>
This is not something we can really give you an answer to. In some cases it will be, and in others it won’t be. Before scraping data, consider the ethical implications of doing so, especially what you are going to do with that data.
</details>

## Continue to Hone Your Skills

If you're interested in learning more about the technical interviewing process and practicing algorithms in a mock interview setting, check out our upcoming workshops.

![Events banner](./assets/events.png)
