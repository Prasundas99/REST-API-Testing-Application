import express from "express";
import cors from "cors";

import RestApifrom from './routes/Rest.js';

const app = express();
app.use(cors());

app.use('/rest', RestApifrom);

app.listen(5000, () => {
  console.log("listening on port 5000");
});
