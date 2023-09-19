import classes from "./hero.module.css";
import Image from "next/image";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image src="/images/site/Diego.png" alt="An image showing Diego" width={300} height={300} />
      </div>
      <h1>Hi, mi name is Diego</h1>
      <p>
        I blog about web development, specially frontend like angular or react
      </p>
    </section>
  );
}

export default Hero;
