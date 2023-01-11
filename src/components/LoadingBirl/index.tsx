/* eslint-disable @next/next/no-img-element */
import styles from "./styles.module.scss";

export function LoadingBirl() {
  const gifArray = [
    "https://media.tenor.com/Q_Tbu1YSl4kAAAAM/trisha-paytas.gif",
    "https://media.tenor.com/dL0_1CoB1BwAAAAC/war-war-calls.gif",
    "https://media.tenor.com/gAZOAL1Dh04AAAAC/guerra-war.gif",
    "https://media.tenor.com/Bx8KFoS-7McAAAAC/this-is-war-war.gif",
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
