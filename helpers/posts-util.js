import fs from "fs";
import path from "path";

import matter from "gray-matter";
import { getDefaultHighWaterMark } from "stream";

const postDirectory = path.join(process.cwd(), "posts");

export function getPostsFiles(){
    return fs.readdirSync(postDirectory);
}

export function getPostData(postIdentifier) {
  const PostSlug = postIdentifier.replace(/\.md$/, ""); //removes file extension (.md)
  const filePath = path.join(postDirectory, `${PostSlug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContent);

  const PostData = {
    slug: PostSlug,
    ...data,
    content: content,
  };
  return PostData;
}

export function getAllPosts() {
  const postFiles = getPostsFiles()

  const allPosts = postFiles.map((postFile) => {
    return getPostData(postFile);
  });
  const sortedPosts = allPosts.sort((PostA, PostB) =>
    PostA.date > PostB.date ? 1 : -1
  );

  return sortedPosts;
}

export function getFeaturedPosts() {
  const allPosts = getAllPosts();
  const featuredPosts = allPosts.filter((post) => post.isFeatured === true);
  return featuredPosts;
}
