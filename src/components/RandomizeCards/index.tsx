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
    role: "EC",
    img: "https://ca.slack-edge.com/T019HJHM7SB-U027WK41M6W-ee3cc57aeb68-512",
    color: "var(--degrade)",
  },
  Tony: {
    name: "Tony",
    role: "backend",
    img: "https://ca.slack-edge.com/T019HJHM7SB-U0282R3KSH2-8df7b8947c75-512",
    color: "var(--degrade)",
  },
  Carbon: {
    name: "Carbon",
    role: "backend",
    img: "https://ca.slack-edge.com/T019HJHM7SB-U028F3G9J05-041783998d44-512",
    color: "var(--degrade)",
  },
  Ruds: {
    name: "Ruds",
    role: "frontend",
    img: "https://ca.slack-edge.com/T019HJHM7SB-U027PSK5G6A-c1cb1125bc77-512",
    color: "var(--degrade)",
  },
  Vitu: {
    name: "Vitu",
    role: "frontend",
    img: "https://ca.slack-edge.com/T019HJHM7SB-U02M7J5HN0G-2ef7835251b6-512",
    color: "var(--degrade)",
  },
  Fla: {
    name: "Fla",
    role: "PM",
    img: "https://ca.slack-edge.com/T019HJHM7SB-U0412R67ZQS-456ddc36e5e0-512",
    color: "var(--degrade)",
  },
  Purpz: {
    name: "Purpz",
    role: "PD",
    img: "https://ca.slack-edge.com/T019HJHM7SB-U02QYTHAC5V-ca68b3cafa76-512",
    color: "var(--degrade)",
  },
  Sky: {
    name: "Sky",
    role: "Data Analyst",
    img: "https://ca.slack-edge.com/T019HJHM7SB-U035XAY0PPV-7b10652c711c-512",
    color: "var(--degrade)",
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
