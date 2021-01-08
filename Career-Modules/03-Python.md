# Career Connection

![career services logo](assets/logo.png)

Hey! Welcome to your week #3 Career Connection. We hope you’ve enjoyed digging into the wonderful world that is Python—it can be overwhelming at first, but it’s an incredibly important skill; it’s also one of the most diverse skills you will learn in this course, and can be used in so many different ways.

So let’s talk a little about how Python will be useful to you in the future.

The use cases for Python can be divided into a variety of different popular areas:

- Insurance industry
- Retail banking
- Aerospace industry
- Hardware automation
- General software development

Within each of these industries, Python usually falls into a couple of main use cases: data science or scripting, each of which is a slightly different way of using Python.

## Scripting

Scripting refers to writing small programs that automate small and simple tasks. Let’s say you needed a program that renames files for you by capitalizing all the names. You could use Python for this so that you didn’t have to manually rename all those files. The use cases are endless, but we don’t need to dive into those right now.

## Data Science

This is why you’re here, right? Data science. Python’s versatility and extensive package library lends itself nicely to data science. It can be used for a wide range of tasks such as data analysis, data visualization, and machine learning—over the next few months, you’ll learn how to do all of these and more.

But what is the demand for Python skills? The [Stack Overflow 2019 Developer Survey](https://insights.stackoverflow.com/survey/2019) showed that Python was the 4th most popular technology, behind JavaScript, HTML/CSS, and SQL. Now, considering that Python is used for completely different tasks than those other three, it is therefore arguably the most popular scripting language you can learn!

Additionally, 73.1% of respondents rated it the most loved language to use, coming in 2nd place only to a language called Rust. It was also the #1 most wanted language by employers, beating out even JavaScript!

## Technical Interview

### Git

Git is a commonly tested subject in interviews because it forms the foundation of team workflow. Consider each of the following questions and see if you can recall the answer from this week’s material. If you can’t, use Google to find an answer.

- What is a commit message and why are they important?
  - Commit messages are sent with each commit you make to a repository. They’re important because they allow other team members to see what code was changed and what was accomplished in your work.
- What is a “git conflict”?
  - A git conflict arises when there are two separate branches that have made edits to the same line in a file, or if a file has been deleted in a branch but edited in another. Conflicts must be manually resolved before the branch can be merged into main.
- What is “git stash”?
  - This wasn’t discussed this week, but remember there is a whole world of material out there we can’t cover. Git stash takes a working directory and saves a copy of the changes so that you can reapply at any time if you need to.

### Python

As you progress through the boot camp, you’ll learn how to apply Python to a wide range of data science topics—but one of the most important skills is using the versatility of Python to solve algorithmic problems. Employers often use sites like [HackerRank](https://www.hackerrank.com/) or [CodeSignal](https://codesignal.com/) to test these skills.

1. Go ahead and sign up to one or both of these platforms and explore the kinds of practice available.

2. See if you can write pseudocode to the problem below. Copy and paste the unsolved solution along with instructions into your IDE (VSCode), and then write the pseudocode steps you could take in order to solve it. If you feel up to it, give it a shot with Python to actually code a solution. Hint: You might have to Google some Python that we haven’t learned yet!

<details open>
<summary>
The Challenge
</summary>

```py
#  Write a function that takes a string input: 'str'
#  Return the number / count of vowels in the input string.
#  For the purpose of this assignment, consider 'a', 'e', 'i', 'o' and 'u'
#  as vowels
#  the input string will consist of lower case letters

def count_the_vowels(str):
```

</details>

<details>
<summary>
Pseudocoded Solution
</summary>

```py
def count_the_vowels(str):

    # initialize a counter variable  to 0

    # loop through each character in the string

    #  if the char matches one of the  vowels in upper case of lowercase

    # increment counter by one

    # return  the  counter
```

</details>

<details>
<summary>
Python Solution
</summary>

```py
def count_the_vowels(str):

    # initialize a counter variable  to 0
    num_vowels = 0

    # loop through each character in the string
    for char in str:

        #  if the char matches one of the  vowels in upper case of lowercase
        if char in "aeiouAEIOU":

            # increment counter by one
            num_vowels = num_vowels + 1

    # return  the  counter
    return num_vowels

print(count_the_vowels('this is a string'))
```

</details>

## Continue to Hone Your Skills

If you're interested in learning more about the technical interviewing process and practicing algorithms in a mock interview setting, check out our upcoming workshops.

![Events banner](./assets/events.png)
