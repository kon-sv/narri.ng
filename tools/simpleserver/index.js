import express from "express";
import cors from 'cors';
import { DictionaryService } from './dictionary.js';
import * as swaggerUi from 'swagger-ui-express';

const SERVER_PORT = 3003
const app = express()
app.use(cors())

const service = DictionaryService();

const paginationFromReq = (req) => {
  return [req.query.page ?? 1, req.query.pageSize ?? 100];
}


app.get('/dictionary/index', async (req, res) => {
  res.json(service.getSimpleRecordsIndex(...paginationFromReq(req)))
});

app.get('/dictionary/entries', async (req, res) => {
  const pagination = paginationFromReq(req);
  res.json(service.getSimpleRecordsIndex(...pagination))
});


app.get('/dictionary/letter-lookup', async (req, res) => {
  res.json(service.letterLookup())
})

app.get('/dictionary/debug', async (req, res) => {
  res.json(service.debugDictionary())

})


app.use('/api-docs', swaggerUi.serve, swaggerUi.setup());

app.listen(SERVER_PORT, () => {
  console.log(`simpleserver ready and listening at http://localhost:${SERVER_PORT}`)
})

