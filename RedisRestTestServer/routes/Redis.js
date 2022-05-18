import express from "express";
import axios from "axios";

const router = express.Router();

router.get("/", async(req, res) => {
  const {data} = await axios.get(`https://jsonplaceholder.typicode.com/photos`);
  return res.json(data);
});

export default router;