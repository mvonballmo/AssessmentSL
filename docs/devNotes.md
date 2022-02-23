# TODO

- ~~Set up Project skeleton~~
- ~~Set up Readme~~
- ~~Set up .NET Solution/``
- ~~Set up Client~~
- ~~Create controller~~
- ~~Build initial client with context/state/master/detail~~
- Add persistence API
- Tighten up CORS restrictions (right now it's all open)
- Right now it's a single-client API (retrieves only at the beginning; won't pick up changes from other clients)
- It's also single-user
- Improve error-handling in client when rate/add-comment fail
- Add tests for client logic (e.g. gets/posts)
- Integrate Entity Framework
- Set up Docker
- Set up SQL Server with DB Schema

## Notes

- Create folder
- Set up README
- Set up server solution
- Web server skeleton working
- Set up client solution
- Client working
- Getting data from API and returning via own API
- Data is all null; have to fix that, but API is available
- Set up some code in client to call that API
- Set up standard skeleton with context/reducer/list/item/master/detail
  - Adapted an existing skeleton that I use for master/detail apps
- Now we really need to solve the problem of data not translating properly
- Philippe helped me figure out I'd declared fields not properties
- Client is retrieving data from the server
- Added some more data
- Cleaned up appearance a bit
- Now to store a rating
- Add a persistence layer so we can avoid setting up SQL Server on this ARM machine 🥺
- Hook up the rate/add-comment APIs from the client
