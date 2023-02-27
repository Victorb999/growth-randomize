/* eslint-disable @next/next/no-img-element */
import styles from "./styles.module.scss";

export function LoadingBirl() {
  const gifArray = [
    "https://media.tenor.com/h2b3FKraS3EAAAAC/anime-naruto.gif",
    "https://media.tenor.com/vcancYPIgOMAAAAC/sad-cry.gif",
    "https://media.tenor.com/mPwhjlfyO90AAAAC/alone-free.gif",
    "https://media.tenor.com/a0vaEVOY-30AAAAM/naruto-narutouzumaki.gif",
    "https://media.tenor.com/gPbkAifeXnkAAAAM/naruto-sad.gif",
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
