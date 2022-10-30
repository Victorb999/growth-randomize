/* eslint-disable @next/next/no-img-element */
import styles from "./styles.module.scss";

export function LoadingBirl() {

  const gifArray = [
    "https://i.makeagif.com/media/5-04-2016/RCXmaq.gif",
    "https://thumbs.gfycat.com/GiganticAdmiredJohndory-size_restricted.gif",
    "https://www.ignboards.com/attachments/ezsykr-gif.381289/"
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
