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

Module 7 - D3 Jobs Search Engine
You are in charge of building a "Search Engine" for Job Posting.
The application should have a search page where the user can set the position (or tech) and the location.
_START FROM YESTERDAY'S WORK_

    Today's task is to add a Redux store to your project, and give the user the ability to set as "favourite" as many jobs as he/she like.
    This favourite jobs list must be entirely saved in the redux store, and rendered in a separate page (create a route on /favourites, for example).
    Also link your detail page on every entry in this favourites page, just like you did on the main results.

    //EXTRA
    Allow the user to also remove a job from his/her favourites.

    Handle every error that you can think of by using redux actions and reducers (eg. {type: "SET_ERROR", payload: "404"})
    and display it by reading the global state to inform the user.

Module 7 - D4 Jobs Search Engine
You are in charge of building a "Search Engine" for Job Posting.
The application should have a search page where the user can set the position (or tech) and the location.

    _START FROM YESTERDAY'S WORK_
    It's time to split our single reducer into multiple ones and introduce redux-thunk in our app for performing asynchronous action dispatching.
    Create two separate reducers: one will continue to store our favourites, and the other will be dedicated to host the array coming from the jobs search results.
    To fill this portion of the redux store, move your fetch method into a thunk action creator like we did this morning for dispatching the right action just when the search results are fully loaded.
    Keep intact the rest of the functionalities, and if you didn't already, give the user the ability to remove a job from the favourites list.
