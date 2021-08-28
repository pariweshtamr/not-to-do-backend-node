# Not to do backend api

this is the backend api for my not-to-do react app

## How to use

- Clone the project
- Run `npm install`
- Make sure to have `nodemmon`. Install globally in your system. If you don't have it then run `npm i -g nodemon`
- run `npm start`

### API Endpoints

- All the api endpoints will follow the `rootUrl/api/v1/` path
  | # | API | Method | Description |
  |------|----|----|------|
  |1.|`/`| GET | Fetch one single task if @id param is provided otherwise fetch all the tasks list from the server |
  |2.|`/`| POST | Add new ticket in the database |
  |3.|`/`| DELETE | Expects IDs to be deleted and deletes fromt the database |
  |4.|`/`| PATCH | Expects @ids to update the task from to do to not to do list and vice versa |
