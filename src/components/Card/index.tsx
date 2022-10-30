/* eslint-disable @next/next/no-img-element */
import { useRef, useState } from "react";
// @ts-ignore
import Flippy, { FrontSide, BackSide } from "react-flippy";
// @ts-ignore
import CardAnimated from 'react-animated-3d-card'
import { spring } from "react-motion";

import styles from "./styles.module.scss";

interface Props {
  width: string;
  height: string;
  children:  React.ReactNode;
}

const round = (num:number, fix = 3) => parseFloat(num.toFixed(fix));
const clamp = (num:number, min = -20, max = 20 ) => Math.min(Math.max(num, min), max);

export function Card(props: Props) {

  const { width ,height,children} = props

  const [activeCard,setActiveCard] = useState<boolean>(false)

  const ref = useRef<any>(null);

  const springR = { stiffness: 0.066, damping: 0.25 };
	const springD = { stiffness: 0.033, damping: 0.45 };
	let springRotateX = spring(0, springR);
	let springRotateY = spring(0, springR);
	let springGlareX = spring(50, springR);
	let springGlareY = spring(50, springR);
	let springGlareO = spring(0, springR);
	let springBackgroundX = spring(50, springR);
	let springBackgroundY = spring(50, springR);
	let springRotateDeltaX = spring(0, springD);
	let springRotateDeltaY = spring(0, springD);
	let springScale = spring(1, springD);

  const activate = (e:any) => {
		const isTouch = e.pointerType === "touch";
		if ( !isTouch && activeCard) {
			// deactive if already active
			setActiveCard(false)
		} else {
      setActiveCard(false)
		}
	};


  const interact = (e:any) => {

		if ( e.type === "touchmove" ) {
			e.clientX = e.touches[0].clientX;
			e.clientY = e.touches[0].clientY;
		}

		const $el = e.target;
		const rect = $el.getBoundingClientRect(); // get element's current size/position
		const absolute = {
			x: e.clientX - rect.left, // get mouse position from left
			y: e.clientY - rect.top // get mouse position from right
		};
		const percent = {
			x: round((100 / rect.width) * absolute.x),
			y: round((100 / rect.height) * absolute.y)
		};
		const center = {
			x: percent.x - 50,
			y: percent.y - 50
		};

		springBackgroundX = spring( round(50 + percent.x / 4 - 12.5), springR);
	  springBackgroundY = spring(round(50 + percent.y / 3 - 16.67), springR);

		springRotateX = spring(round(-(center.x / 3.5)), springR);
		springRotateY =spring(round(center.y / 2), springR);

		springGlareX =spring(percent.x, springR);
		springGlareY = spring(percent.y, springR);
		springGlareO = spring(1, springR);

    const stylePersonalize =  {
    "--mx": `${springGlareX.val}%`,
		"--my": `${springGlareY.val}%`,
		"--s": `${springScale.val}`,
		"--o": `${springR.damping}`,
		"--rx": `${springRotateX.val + springRotateDeltaX.val}deg`,
		"--ry": `${springRotateY.val + springRotateDeltaY.val}deg`,
		"--pos": `${springBackgroundX.val}% ${springBackgroundY.val}%`,
		"--posx": `${springBackgroundX.val}%`,
		"--posy": `${springBackgroundY.val}%`,
		"--hyp": `${ Math.sqrt( (springGlareY.val-50) * (springGlareY.val-50) +  (springGlareX.val-50) * (springGlareX.val-50) ) / 50}`
    }
    
    var r = document.querySelector<HTMLElement>(':root');
    for (var [key, value] of Object.entries(stylePersonalize)) {
      r?.style?.setProperty(key, value) ;
    }
    // console.log("aqui",stylePersonalize)
	};

  const resetOpacity = () => {
    var r = document.querySelector<HTMLElement>(':root');
    r?.style.setProperty("--o",  '0.02') ;
    setActiveCard(false)
  }

  return (
    <>
      <Flippy
        flipOnHover={false} // default false
        flipOnClick={true} // default false
        flipDirection="horizontal" // horizontal or vertical
        ref={ref} // to use toggle method like ref.curret.toggle()
        // if you pass isFlipped prop component will be controlled component.
        // and other props, which will go to div
        style={{ width: width, height: height }} /// these are optional style, it is not necessary
      >
        <FrontSide animationDuration={2000}>
          <div 
          onPointerUp={e => activate(e)}
          onPointerMove={e=>interact(e)}
          onMouseOut={() => resetOpacity()}>
            <CardAnimated 
              style={{
                backgroundColor: 'none',
                width: width,
                height: height,
                cursor: 'pointer',
                boxShadow: '8px 7px 18px -3px rgba(0,0,0,0.75)'
              }}
              borderRadius="5px">
              <div className={styles.frontSide}>
                {!activeCard && <div className={styles.cardShine}></div>}
                <div className={styles.cardChildren}>{children}</div>
              </div>
            </CardAnimated>
          </div>
        </FrontSide>
        <BackSide animationDuration={2000}>
          <CardAnimated
            style={{
              backgroundColor: 'none',
              width: width,
              height: height,
              cursor: 'pointer'
            }}
            borderRadius="5px"
            >
            <div className={styles.backSide} 
              style={{
                width: width,
                height: height,
              }} >
              <img src="https://www.svgrepo.com/show/109426/gym-near.svg" alt="gym" />
            </div>
          </CardAnimated>
        </BackSide>
      </Flippy>
    </>
  );
}
