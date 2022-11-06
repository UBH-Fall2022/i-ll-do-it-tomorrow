- Start here: tinyurl.com/starthereiditm
- Link to website: https://ubh-fall2022.github.io/i-ll-do-it-tomorrow
- Domain link: illdoittomorrow.tech (not operational)

## Inspiration

Given our increasing workload and inability to divide our time appropriately across multiple projects due at similar times, we thought, why not create a model that calculates this for us?

## What it does

This model takes in user info through a Google Form, and asks for UBIT name, credit hours, classes being taken, and confidence in programming in certain languages. We then use this data to calculate how long a given project will take a student based on their past time taken on projects and their confidence in that particular language, along with their other credit hours and how much consecutive time they can devote.

Using the Google Calendar API, the project is then split up into manageable chunks of time to work on it (90 minutes, as per Dr. Ethan Blanton's pro time management guide), and then is scheduled for the user on their personal calendar. This also takes into account days where the user says they are particularly busy, and avoids adding coding slots to those days.

## How we built it

We used the Google Form data and inputted it into a live CSV file, which our program then reads and interprets the fields it needs, such as credit hours and class names. Using our pre-coded list of upcoming deadlines for the classes in the form, we determine how to split the total hours the student needs across the days using an AI model. This model is designed using existing users' data for how long projects took them, and is also weighted based on the user's own history of needing more/less time than expected on a project.

We then split these hours up across the "non-busy" days, send Google Calendar API requests to create events on these days, and then display them on our webpage. We used Python, HTML, CSS, and JS for the webpage, along with the web app manifest to build a Chrome extension that shows a user an overview of their work (in agenda view versus week/month).

## Challenges we ran into

The primary challenge we ran into was misprioritization. We assumed the backend would take little time, such as getting the CSV data from the Google Form to the program or computing hours based on a user's own history, but this was much more intensive than we had expected. This led to us having a frontend with little content at one point, but we solved this by segueing to the backend work and trying different approaches to parsing the CSV file and getting the numbers to show up.

## Accomplishments that we're proud of

We're really proud of ourselves for having built a Chrome extension, and basing our logic off of an AI model. Having never gotten our feet wet in either of these before, it was so cool to see the Chrome extension unpacked and the AI model changing based on new information we inputted. We also managed to build a robust frontend with a strong UI and a minimalist design.

## What we learned

We learned so much about how to effectively manage moving parts of a large program, especially in a team of two. We worked to understand not just what we wanted to see in the website, but also what a user would most prioritize, and built those features first (such as editing their preferences in settings). We also opened our eyes to the world of AI and using JSON to build extension packages, and ended up with a product that exceeded our original vision.

## What's next for I'll Do It Tomorrow

One of the main things we want I'll Do It Tomorrow to do is to send notifications to users reminding them of their work, but with a catch — using our list of whitelisted websites (like netflix.com, instagram.com, etc.), we would send the user a notification reminding them of their work when they clearly are _not_ doing their work. In addition, we hope to train the AI model with hundreds of responses from new users so it much more accurately predicts what a user needs as far as time, and to expand the functionality to many more classes and other user priorities that could affect their project journeys.
