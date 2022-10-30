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
    color: "linear-gradient(90deg, hsla(197, 100%, 63%, 1) 0%, hsla(294, 100%, 55%, 1) 100%)",
  },
  Tony: {
    name: "Tony",
    role: "backend",
    img: "https://ca.slack-edge.com/T019HJHM7SB-U0282R3KSH2-8df7b8947c75-512",
    color: "linear-gradient(90deg, hsla(152, 100%, 50%, 1) 0%, hsla(186, 100%, 69%, 1) 100%)",
  },
  Carbon: {
    name: "Carbon",
    role: "backend",
    img: "https://ca.slack-edge.com/T019HJHM7SB-U028F3G9J05-041783998d44-512",
    color: "linear-gradient(90deg, hsla(333, 100%, 53%, 1) 0%, hsla(33, 94%, 57%, 1) 100%)",
  },
  Ruds: {
    name: "Ruds",
    role: "frontend",
    img: "https://ca.slack-edge.com/T019HJHM7SB-U027PSK5G6A-c1cb1125bc77-512",
    color: "linear-gradient(90deg, hsla(33, 100%, 53%, 1) 0%, hsla(58, 100%, 68%, 1) 100%)",
  },
  Marchena: {
    name: "Marchena",
    role: "frontend",
    img: "https://ca.slack-edge.com/T019HJHM7SB-U02NKC3HL65-be7fde7d59d9-512",
    color: "linear-gradient(90deg, hsla(284, 100%, 53%, 1) 0%, hsla(77, 100%, 64%, 1) 100%)",
  },
  Vitu: {
    name: "Vitu",
    role: "frontend",
    img: "https://ca.slack-edge.com/T019HJHM7SB-U02M7J5HN0G-2ef7835251b6-512",
    color: "linear-gradient(90deg, hsla(276, 91%, 79%, 1) 0%, hsla(254, 74%, 65%, 1) 100%)",
  },
};

export function RandomizeCards(props: Props) {
  const { listDevs } = props;

  return (
    <div className={styles.ContainerCards}>
      {listDevs.map((dev) => {
        return (
          <div key={dev}>
            <Card height="200px" width="150px">
              <div
                className={styles.CardContent}
                style={{ background: devsData[dev].color }}
              >
                <div className={styles.DevName}>{devsData[dev].name}</div>
                <div className={styles.DevImg}>
                  <img src={devsData[dev].img} alt={devsData[dev].name} />
                </div>
                <div className={styles.DevRole}>{devsData[dev].role}</div>
              </div>
            </Card>
          </div>
        );
      })}
    </div>
  );
}
