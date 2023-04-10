/* eslint-disable @next/next/no-img-element */
import styles from "./styles.module.scss";

export function LoadingBirl() {
  const gifArray = [
    "https://media.tenor.com/9WFsBeb7sr8AAAAC/loading-gif.gif",
    "https://media.tenor.com/XasjKGMk_wAAAAAC/load-loading.gif",
    "https://media.tenor.com/pgO8hZgOW5AAAAAC/loading-bar.gif",
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
