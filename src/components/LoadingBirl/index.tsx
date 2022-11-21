/* eslint-disable @next/next/no-img-element */
import styles from "./styles.module.scss";

export function LoadingBirl() {
  const gifArray = [
    "https://gifs.eco.br/wp-content/uploads/2021/10/imagens-e-gifs-de-futebol-2.gif",
    "https://gifs.eco.br/wp-content/uploads/2021/10/imagens-e-gifs-de-futebol-7.gif",
    "https://media.tenor.com/MqTJ8o4dUTwAAAAM/neymar-jr.gif",
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
