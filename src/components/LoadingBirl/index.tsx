/* eslint-disable @next/next/no-img-element */
import styles from "./styles.module.scss";

export function LoadingBirl() {
  const gifArray = [
    "https://media.tenor.com/nnQsqX9g_YYAAAAM/tang916-happy-easter.gif",
    "https://media.tenor.com/NkoBZb8CJAkAAAAC/puppytalesphotos-puppytales.gif",
    "https://media.tenor.com/932TKz4sUNcAAAAM/party-simpsons.gif",
    "https://media.tenor.com/j4F2lymfxD0AAAAd/happy-easter.gif",
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
