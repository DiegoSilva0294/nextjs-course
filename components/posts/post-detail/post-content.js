import PostHeader from "./post-header";
import classes from "./post-content.module.css";
import ReactMarkdown from "react-markdown";
import Image from "next/image";

function PostContent(props) {
  const { post } = props;
  const imagePath = `/images/posts/${post.slug}/${post.image}`;

  // const customRenderers = {
  //   image: (image) => (
  //     <Image
  //       src={`/images/posts/${post.slug}/${image.src}`}
  //       alt={`${image.alt} holis jejejse`}
  //       width={600}
  //       height={300}
  //     />
  //   ),
  // };

  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </article>
  );
}

export default PostContent;
