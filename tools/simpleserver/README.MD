## simpleserver

A server made in nodejs with express for consumption by narri.ng frontend app

Run `npm install` and serve with `npx nodemon`


## endpoints

### Dictionary

GET /dictionary/entries
GET /dictionary/index
GET /dictionary/:seq_id


## pagination

Every listing GET request should accept `page` and `pageSize` parameters.

The responding data should contain an object with `data` containing the requested resources and `meta` with the current `page`, `pageSize` and `total` records
