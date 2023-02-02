/* eslint-disable @next/next/no-img-element */
import styles from "./styles.module.scss";

export function LoadingBirl() {
  const gifArray = [
    "https://media.tenor.com/qJaXbitGfJMAAAAC/meme-patrick-star.gif",
    "https://media.tenor.com/emUvpBHlOW0AAAAC/beet-complete-task.gif",
    "https://media.tenor.com/PgfvhIRWfrAAAAAd/jim-carrey-yes-sir.gif",
    "https://media.tenor.com/RAs4QxelrnQAAAAM/tasks.gif",
  ];

  return (
    <>
      <img
        className={styles.loading}
        alt="birl"
        src={gifArray[Math.floor(Math.random() * gifArray.length)]}
      />
    </>
  );
}
