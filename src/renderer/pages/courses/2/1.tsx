import React, { useEffect, useRef, useState } from 'react';
import Variant from '../../../components/variant';
import { Variants, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Controllers, HomeButton } from '../../../components';

import img from './1.jpg';
import sound from './1.wav';

export default function FirstCourse() {
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
          <p>واحد اندازه گیری</p>
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
            سلام قشنگام😍
            <br />
            <br />
            امروز میخوایم یه درس جالب راجب اندازه گیری یاد بگیریمم
            <br />
            !بریم سراغش
            <br />
            بچه ها میخوایم اندازه گیری و یاد بگیریم تا بتونیم وسایل و اسباب
            بازیو و تمام چیزایی که دوست داریمو بدونیم چقدر اندازشون هست
          </p>
        </motion.div>

        <Controllers nextLink="/courses/2/2" prevLink="/courses" />
      </div>
    </section>
  );
}
