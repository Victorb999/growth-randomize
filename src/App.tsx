import { useState } from "react";

export default function App() {
  const [randomized, setRandomized] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const startingList: string[] = [
    "Kayn3n",
    "Tony",
    "Carbon",
    "Ruds",
    "Marchena",
    "Vitu"
  ];
  const [devs, setDevs] = useState<string[]>(startingList);
  const shuffleRounds = 13;

  const gifArray = [
    "https://i.makeagif.com/media/5-04-2016/RCXmaq.gif",
    "https://thumbs.gfycat.com/GiganticAdmiredJohndory-size_restricted.gif",
    "https://www.ignboards.com/attachments/ezsykr-gif.381289/"
  ];

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDevs(e.currentTarget.value.split("\n"));
  };

  const returnTextArea = (): JSX.Element => {
    const devlist = startingList.join("\n");
    return (
      <textarea
        defaultValue={devlist}
        onChange={(e) => handleChange(e)}
        rows={8}
      />
    );
  };

  const shuffleDevs = (): void => {
    const checkboxes = document.getElementsByClassName("List__Checkbox");
    for (let i = 0; i < checkboxes.length; i++) {
      const checkbox = checkboxes[i] as HTMLInputElement;
      checkbox.checked = false;
    }
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
    }, 5000);
  };

  const listDevs = (devsArray: string[], check?: boolean): JSX.Element => (
    <>
      {devsArray.map((dev) => (
        <div key={dev} className="List__Items">
          {check && (
            <input className="List__Checkbox" id="checkbox" type="checkbox" />
          )}
          <span className="List__Devname">{dev}</span>
        </div>
      ))}
    </>
  );

  return (
    <main className="App">
      <div className="Container">
        <a href="https://www.gsuplementos.com.br/">
          <img
            alt="Big coin icon"
            className="TopImage"
            src="https://www.gsuplementos.com.br/tema/growth/img/pagina/link-rapido/logo.svg"
          />
        </a>
        <span className="Title">Growth Random Bolado</span>
        <section className="List__Container">
          {loading ? (
            <>
              <img
                className="loading"
                alt="birl"
                src={gifArray[Math.floor(Math.random() * gifArray.length)]}
              />
            </>
          ) : (
            <>
              <div className="List">
                <span className="List__Title">Starting list</span>
                {returnTextArea()}
              </div>

              <div className="List">
                <span className="List__Title">Random sem choro</span>
                {!!randomized.length && listDevs(randomized, true)}
              </div>
            </>
          )}
        </section>
        <button
          className="Button__Randomize"
          onClick={(): void => shuffleDevs()}
        >
          Birl{!!randomized.length && " again"}!
        </button>
      </div>
    </main>
  );
}
