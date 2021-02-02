#### Module 7 - D2 Jobs Search Engine

    You are in charge of building a "Search Engine" for Job Posting.
    The application should have a search page where the user can set the position (or tech) and the location.
    Example:
    - position = react
    - location = berlin
    or
    - position = frontend
    - location = rome
    From the search results, it should be possible to reach the detail page of that specific job post
    Features:
    - Home page with search bar for position and location
    - Detail page for each search result


    APIs:
    - Use the jobs.github apis to obtain the results
    https://jobs.github.com/positions.json?description={POSITION}&location={LOCATION}
    Example:
    https://jobs.github.com/positions.json?description=frontend&location=berlin
    You can find the details of this APIs here:
    https://jobs.github.com/api
