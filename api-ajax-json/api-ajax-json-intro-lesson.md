
# Intro to APIs, AJAX & JSON

---


### Lesson Objectives
- Define `API` in basic terms
- Read technical documentation with confidence!
- Make API calls in the browser
- Define `endpoint` and `query strings`
- Make an API call from your website using `jQuery AJAX`
- Define `JSON` and describe when it can be used


---


### What is an API?

**API:** Application programming interface

It can be a tricky concept to define, but at the end of the day, it's just a set of data provided for public use.

Sometimes it's literal data stored in a database that you are given access to, or it could be functions/code that another developer has written that you are allowed to use.


---


### Stand on the shoulders of giants

Ok, we know an API offers us data. Let's talk about a real-world example.

You want to build a weather app. You know just what you want it to look like and how it will work, but when a user enters their city, how are you going to get weather data?

You'll use an API for that. The API provides the raw weather data and you will build the `interface` that the user interacts with.


---


# Making API calls in the browser


---


### Concept:

- We know that APIs are just sets of data provided for public use.
- We access that data through a URL called an `endpoint`


---


### OMDB API:

- What does the OMDB API offer? Movie data.
- It returns a single movie that best matches your search
- Example: I want all the data about the movie "Titanic"
- I will make a request to the OMDB API & get back the data I want


---


### Let's check out the OMDB docs!

- Check out the [OMDB docs](http://www.omdbapi.com) to find out how to **construct** queries
- The only way to find out how an API works is to read the docs
- **Every API works differently**


---


### Parts of the API:

What is an `endpoint`?
- The URL we use to access the data. In this case: http://www.omdbapi.com
- Must look at the docs to see which endpoints are available to us
- OMDB only has one; some APIs have multiple


What are `parameters`?
- The way we specify the data we want
- Every API offers different parameters
- OMDB offers 16
- You can search by movie title, search by type (movie or tv show), and you can specify if you want a long or short plot, to name a few.


What are `query strings`?
- A `parameter` + a value = a `query string`
- Example `t="titanic"`
- `t` is the parameter (which stands for "title"), "titanic" is the value
- Must look at the docs to see which query strings are available to us


---


##### JSON Formatter Chrome Extension

I like this one, but there are many:

https://chrome.google.com/webstore/detail/json-formatter/bcjindcccaagfpapjjmafapmmgkkhgoa?hl=en


---


### How do I compose a query?

The formula of a query:

`endpoint` + `?` + `query string` + `&` + `query string`

Example queries:
- http://www.omdbapi.com/?t=lord+of+the+rings+the+fellowship+of+the+ring
- http://www.omdbapi.com/?t=buffy
- http://www.omdbapi.com/?t=buffy&y=1992&type=movie
- http://www.omdbapi.com/?t=buffy&type=series


---


### What are the "?" and "&"

The question mark "?" separates the `endpoint` from the `query strings`

The ampersand (&) chains `query strings` together.


---


### A deeper look: Why do we need query strings?

- We don't want all the data from the set, right? That would be millions of movies.
- We want to **constrain** the information & only receive data back that matches our specifications.
- I don't want **all** movies back, I only want movies that have **Titanic** in the title, for example.
- You are essentially sending instructions to the API about how to narrow down the results that are sent back to you.
- We specify our constraints by using `query strings` & `parameters`
- The people who built the API designed the query strings for this purpose
- The developers choose how you get to constrain, or narrow down, the data.
- Every API has different parameters; you must read the documentation to find out what they are and how to use them.


---


### What is this Javascript object thingie it's returning?

It looks like a JS `object`, but there are quotes around the keys.


---


### What is serialized data?

The API needs to send us data about the movie Titanic, but it has to send it a specific way.

Because of security concerns, all data sent via HTTP must be in string format. That is why the keys are in quotes. This is called `JSON`.  

We need to send structured data, meaning `arrays` & `objects`, but for security reasons we aren't allowed to. To get around those security constraints, we put the structured data in *string representation* of that data. Strings do not pose a security threat the way other data types do.

We can then transmit that string. After it is received, we can parse it back into Javascript.


---


### Making API calls from our websites


---


### We've been making API calls in the browser, but how do we make them from our website?

Laptops closed!

- Show demo
- Discuss how it works
- Build it from scratch!


---


### Building the demo

Part I:
- New HTML & JS files
- When we click button, make API call (hard coded)
- Log the response

Part II:
- Add HTML elements where we want to append text
- Parse response into variables
- Append to DOM with vanilla JS


---


### What is jQuery?

- A library that extends the functionality of Javascript
- Only going to be looking at the AJAX method today
- But jQuery offers so much more!


---


### What is AJAX?

- AJAX stands for "Asynchronous Javascript and XML"
- Nowadays indicates a set of technologies that allow us to make requests *without* reloading the page
- How does it work? Server-side requests are sent asynchronously on the client without having to send an actual browser request that would reload the page.
- The result is a much faster experience.


---


### Parts of the jQuery AJAX method

**Promises:**
Kind of like an `if` statement -- tells the computer what to do upon `done`, `fail` or `always`.

- **Done:** What to do when the AJAX call is complete
- **Fail:** What to do if AJAX fails
- **Always:** What to do regardless of success/fail


---


### API keys

While the majority of APIs are free to use, many of them require an API "key" that is used to identify the developer that is requesting data access. This is done to regulate usage and prevent abuse. Some APIs also rate-limit developers, meaning they have caps on the free data allowed during a given time period.

**Try hitting the Giphy API:**

* No key: [http://api.giphy.com/v1/gifs/search?q=funny+cat](http://api.giphy.com/v1/gifs/search?q=funny+cat)

* With key: [http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC](http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC)

> It is very important that you not push your API keys to a public Github repo.


---
