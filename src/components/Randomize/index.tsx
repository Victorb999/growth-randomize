/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { LoadingBirl } from "../LoadingBirl";
import { RandomizeCards } from "../RandomizeCards";
import styles from "./styles.module.scss";

export function Randomize() {
  const [randomized, setRandomized] = useState<string[]>([]);
  const [showDevCards, setShowDevCards] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const startingList: string[] = [
    "Kayn3n",
    "Tony",
    "Carbon",
    "Ruds",
    "Marchena",
    "Vitu",
  ];
  const [devs, setDevs] = useState<string[]>(startingList);
  const shuffleRounds = 13;

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDevs(e.currentTarget.value.split("\n"));
  };

  const returnTextArea = (): JSX.Element => {
    const devlist = startingList.join("\n");
    return (
      <textarea
        className={styles.randomizeTextarea}
        defaultValue={devlist}
        onChange={(e) => handleChange(e)}
        rows={8}
      />
    );
  };

  const shuffleDevs = (): void => {
    setLoading(true);

    setTimeout(() => {
      const newDevs = devs;

      for (let i = 1; i <= shuffleRounds; i++) {
        for (let j = 0; j < newDevs.length; j++) {
          let randomIndex = Math.floor(Math.random() * (j + 1));
          let temp = newDevs[j];
          newDevs[j] = newDevs[randomIndex];
          newDevs[randomIndex] = temp;
        }
        console.log(`${i}: [${newDevs}]`);
      }
      console.log("Para fins de auditoria");
      setRandomized(newDevs);
      setLoading(false);
    }, 2500);
  };

  const listDevs = (devsArray: string[], check?: boolean): JSX.Element => (
    <>
      {devsArray.map((dev) => (
        <div key={dev} className={styles.ListItems}>
          {check && (
            <input
              className={styles.ListCheckbox}
              id="checkbox"
              type="checkbox"
            />
          )}
          <span className={styles.ListDevname}>{dev}</span>
        </div>
      ))}
    </>
  );

  const TITLE_CONTAINER = "WAR Growth Random";
  const BUTTON_LABEL = "This is war";

  return (
    <main>
      <div className={styles.Container}>
        <a href="https://www.gsuplementos.com.br/">
          <img
            alt="Big coin icon"
            className={styles.TopImage}
            src="https://www.gsuplementos.com.br/tema/growth/img/pagina/link-rapido/logo.svg"
          />
        </a>
        <span className={styles.Title}>{TITLE_CONTAINER}</span>
        <section className={styles.ListContainer}>
          {loading ? (
            <LoadingBirl />
          ) : (
            <>
              <div className={styles.List}>
                <span className={styles.ListTitle}>Lista inicial</span>
                {returnTextArea()}
              </div>

              <div className={styles.List}>
                <span className={styles.ListTitle}>Random sem choro</span>
                {!!randomized.length && listDevs(randomized, true)}
                {!!randomized.length && (
                  <button
                    onClick={() => setShowDevCards(!showDevCards)}
                    className={styles.ButtonRandomize}
                  >
                    Mostrar os cards
                  </button>
                )}
              </div>
            </>
          )}
        </section>

        {showDevCards && (
          <div className={styles.ContainerCards}>
            <button
              className={styles.CloseButton}
              onClick={() => setShowDevCards(false)}
            >
              X
            </button>
            <RandomizeCards listDevs={randomized} />
          </div>
        )}

        <button
          className={styles.ButtonRandomize}
          onClick={(): void => shuffleDevs()}
        >
          {BUTTON_LABEL} {!!randomized.length && " again"}!
        </button>
      </div>
    </main>
  );
}
