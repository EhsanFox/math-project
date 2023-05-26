import React, { useEffect, useRef, useState } from 'react';
import Variant from '../../../components/variant';
import { Variants, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Controllers, HomeButton } from '../../../components';

import img from './2.jpg';
import sound from './2.wav';

export default function Second1Course() {
  const [isPlaying, setIsPlaying] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0,
    root: null,
    rootMargin: '-50% -0% -47.5%',
  });

  const myRef = useRef(new Audio(sound));
  useEffect(() => {
    myRef.current.play();
    setIsPlaying(true);

    return () => {
      myRef.current.pause();
      myRef.current.currentTime = 0;
      setIsPlaying(false);
    };
  }, []);

  return (
    <section className="secondPage">
      <HomeButton />

      <div className="objectBoxParent">
        <motion.div
          className="objectBox"
          ref={ref}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true }}
          variants={
            Variant('fadeDown', 'tween', 0.5, 0.1) as unknown as Variants
          }
        >
          <p>اعداد و ارقام</p>
        </motion.div>
      </div>

      <div className="main">
        <motion.button
          className="startBtn"
          ref={ref}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true }}
          variants={
            Variant('fadeLeft', 'tween', 0.5, 0.1) as unknown as Variants
          }
        >
          <img src={img} alt="img" style={{ width: '100%', height: '100%' }} />
        </motion.button>

        <motion.div
          className="textArea"
          ref={ref}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true }}
          variants={
            Variant('fadeRight', 'tween', 0.5, 0.1) as unknown as Variants
          }
        >
          <p>
            <br />
            <br />
            حالا میریم سراغ این عکس باحال
            <br />
            <br />
            <br />
            حالا بیاین باهم اعداد یک تا دهو بشماریم
          </p>
        </motion.div>

        <Controllers nextLink="/courses/1/3" prevLink="/courses/1/1" />
      </div>
    </section>
  );
}
