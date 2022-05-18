import express from "express";
import axios from "axios";
import Redis from 'redis'

const redisClient = Redis.createClient();


const router = express.Router();

const DEFAULT_EXPIRATION = 60 * 60 * 24; // 1 day

router.get("/", async(req, res) => {
  redisClient.get("photos", (err, photos) => {
    if (err) {
     return res.status(500).send(err);
    }
    if (photos != null) {
      return res.send(JSON.parse(photos));
    }else{
      const {data} = await axios.get(`https://jsonplaceholder.typicode.com/photos`);
      redisClient.setEx("photos", JSON.stringify(data), DEFAULT_EXPIRATION);
      return res.json(data);
    }
  });
});

export default router;