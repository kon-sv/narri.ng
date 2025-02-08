import express from "express";
import { DictionaryService } from './dictionary.js';

const SERVER_PORT = 3003
const app = express()


const service = DictionaryService();


const paginationFromReq = (req) => {
  return [req.query.page ?? 1, req.query.pageSize ?? 100];
}

app.get('/index', async (req, res) => {
  const pagination = paginationFromReq(req);
  res.json(service.getSimpleRecordsIndex(...pagination))
});

app.get('/entries', async (req, res) => {
  const pagination = paginationFromReq(req);
  res.json(service.getSimpleRecordsIndex(...pagination))
});

app.listen(SERVER_PORT, () => {
  console.log(`simpleserver ready and listening at http://localhost:${SERVER_PORT}`)
})

