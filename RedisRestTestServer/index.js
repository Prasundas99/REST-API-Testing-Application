import express from "express";
import cors from "cors";

import RestApifrom from './routes/Rest.js';
import RedisApi from './routes/Redis.js';


const app = express();
app.use(cors());

app.use('/rest', RestApifrom);
app.use('/redis', RedisApi);

app.listen(5000, () => {
  console.log("listening on port 5000");
});
