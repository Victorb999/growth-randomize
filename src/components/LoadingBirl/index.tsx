/* eslint-disable @next/next/no-img-element */
import styles from "./styles.module.scss";

export function LoadingBirl() {
  const gifArray = [
    "https://media.tenor.com/vIUb_quqN-sAAAAd/dance-boyfriend.gif",
    "https://media.tenor.com/6luTwcJhyTEAAAAM/porto-da-pedra-carnaval.gif",
    "https://media.tenor.com/9DMdw1-Ky5cAAAAC/carnival-party.gif",
    "https://media.tenor.com/2dZZK8ijaXMAAAAC/the-mask-carnaval.gif",
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
