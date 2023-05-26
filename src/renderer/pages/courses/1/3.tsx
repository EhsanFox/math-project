import React, { useEffect, useRef, useState } from 'react';
import Variant from '../../../components/variant';
import { Variants, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Controllers, HomeButton } from '../../../components';

import img from './3.jpg';
import sound from './3.wav';
import { IPCEvents } from 'main/constants';

export default function Third1Page() {
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

    window.ipc.callFor(IPCEvents.updateStorage, 'set', 'exams.1', 'start');
    window.ipc.callFor(IPCEvents.updateStorage, 'set', 'lessons.1', 'finish');
    window.ipc.callFor(IPCEvents.updateStorage, 'set', 'lessons.2', 'start');

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
            خب بچه های گلم،
            <br />
            <br />
            بیاین باهمدیگه، یک شعر بخونیم
            <br />
            <br />
            تا اعداد رو یادمون باشه
          </p>
        </motion.div>

        <Controllers nextLink="/exams/1/1" prevLink="/courses/1/3" />
      </div>
    </section>
  );
}
