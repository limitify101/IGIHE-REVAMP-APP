import { Request, Response } from "express";
import Article from "../models/Feed";

export const getAllFeeds = async (req: Request, res: Response) => {
  const feed = await Article.find({});
  return res.status(200).json(feed);
};

export const getFeed = async (req: Request, res: Response) => {
  const feed = await Article.findById(req.params.id);
  return res.status(200).json(feed);
};

export const updateFeed = (req: Request, res: Response) => {
  return res.status(201).json({
    content: [],
    status: "success",
    msg: "Updated feed successfully",
  });
};

export const deleteFeed = (req: Request, res: Response) => {
  return res.status(201).json({
    content: [],
    status: "success",
    msg: "Deleted feed successfully",
  });
};
//Handle author names
const handleArticleAuthor = (obj: any, key: string): Object => {
  const keys = Object.keys(obj);
  const idx = keys.indexOf(key);
  let article: Object;
  let authors: Array<string>;

  if (obj[keys[idx]].includes(",")) {
    authors = obj[keys[idx]].split(",");
    obj[keys[idx]] = authors;
  } else {
    authors = [obj[keys[idx]]];
    obj[keys[idx]] = authors;
  }
  article = obj;
  return article;
};

export const createFeed = async (req: Request, res: Response) => {
  try {
    const feed = await Article.create(handleArticleAuthor(req.body, "author"));
    return res.status(201).json(feed);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Something went wrong!" });
  }
};
