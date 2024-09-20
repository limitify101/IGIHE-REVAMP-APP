import express, { Router } from "express";
import {
  getAllFeeds,
  getFeed,
  updateFeed,
  deleteFeed,
  createFeed,
} from "../controllers/Feed";

export const router: Router = express.Router();

//Users
router.route("/").get(getAllFeeds);
router.route("/:id").get(getFeed);

//Admin
router.route("/create").post(createFeed);
router.route("/:id").patch(updateFeed).delete(deleteFeed);
