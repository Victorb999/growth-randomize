/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Card } from "../Card";
import styles from "./styles.module.scss";

interface Props {
  listDevs: string[];
}

const devsData: any = {
  Kayn3n: {
    name: "Kayn3n",
    role: "backend",
    img: "https://ca.slack-edge.com/T019HJHM7SB-U027WK41M6W-ee3cc57aeb68-512",
    color: "linear-gradient(90deg, #EDC92B 0%, #EDE342 100%)",
  },
  Tony: {
    name: "Tony",
    role: "backend",
    img: "https://ca.slack-edge.com/T019HJHM7SB-U0282R3KSH2-8df7b8947c75-512",
    color: "linear-gradient(90deg, #EDC92B 0%, #EDE342 100%)",
  },
  Carbon: {
    name: "Carbon",
    role: "backend",
    img: "https://ca.slack-edge.com/T019HJHM7SB-U028F3G9J05-041783998d44-512",
    color: "linear-gradient(90deg, #EDC92B 0%, #EDE342 100%)",
  },
  Ruds: {
    name: "Ruds",
    role: "frontend",
    img: "https://ca.slack-edge.com/T019HJHM7SB-U027PSK5G6A-c1cb1125bc77-512",
    color: "linear-gradient(90deg, #EDC92B 0%, #EDE342 100%)",
  },
  Marchena: {
    name: "Marchena",
    role: "frontend",
    img: "https://ca.slack-edge.com/T019HJHM7SB-U02NKC3HL65-be7fde7d59d9-512",
    color: "linear-gradient(90deg, #EDC92B 0%, #EDE342 100%)",
  },
  Vitu: {
    name: "Vitu",
    role: "frontend",
    img: "https://ca.slack-edge.com/T019HJHM7SB-U02M7J5HN0G-2ef7835251b6-512",
    color: "linear-gradient(90deg, #EDC92B 0%, #EDE342 100%)",
  },
};

export function RandomizeCards(props: Props) {
  const { listDevs } = props;

  return (
    <div className={styles.ContainerCards}>
      {listDevs.map((dev) => {
        return (
          <div key={dev}>
            <Card height="200px" width="150px" id={devsData[dev].name}>
              <div
                className={styles.CardContent}
                style={{ background: devsData[dev].color }}
              >
                <div className={styles.DevImg}>
                  <img src={devsData[dev].img} alt={devsData[dev].name} />
                </div>
                <div className={styles.DevName}>{devsData[dev].name}</div>
                <div className={styles.DevRole}>{devsData[dev].role}</div>
              </div>
            </Card>
          </div>
        );
      })}
    </div>
  );
}
