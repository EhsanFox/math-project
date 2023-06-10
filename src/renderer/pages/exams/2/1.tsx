import React, { useState, ChangeEvent, useRef, useEffect } from 'react';
import Variant from '../../../components/variant';
import { Variants, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HomeButton, Popup } from '../../../components';

import img from './1.jpg';
import sound from '../../../../../assets/audios/startExam.wav';

export default function First2Exam() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [value, setValue] = useState<string>('option1');
  const [open, setOpen] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0,
    root: null,
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

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <section className="exam">
      <div className="blurBak">
        <HomeButton />

        <div className="leftContent">
          <img className="img" src={img} alt="img" />
        </div>

        <div className="rightContent">
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
              <p>یکی از واحد های اندازه گیری توی خط کش ____ است</p>
            </motion.div>
          </div>

          <div className="buttons">
            <motion.label
              htmlFor="option1"
              className="btn"
              ref={ref}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true }}
              variants={
                Variant('fadeDown', 'tween', 0.5, 0.1) as unknown as Variants
              }
            >
              <input
                id="option1"
                type="radio"
                value="option1"
                checked={value === 'option1'}
                onChange={handleChange}
              />
              <span>کیلوگرم</span>
            </motion.label>

            <motion.label
              htmlFor="option2"
              className="btn"
              ref={ref}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true }}
              variants={
                Variant('fadeDown', 'tween', 0.5, 0.1) as unknown as Variants
              }
            >
              <input
                id="option2"
                type="radio"
                value="option2"
                checked={value === 'option2'}
                onChange={handleChange}
              />
              <span>کیلومتر</span>
            </motion.label>

            <motion.label
              htmlFor="option3"
              className="btn"
              ref={ref}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true }}
              variants={
                Variant('fadeDown', 'tween', 0.5, 0.1) as unknown as Variants
              }
            >
              <input
                id="option3"
                type="radio"
                value="option3"
                checked={value === 'option3'}
                onChange={handleChange}
              />
              <span>سانتی متر</span>
            </motion.label>

            <motion.label
              htmlFor="option4"
              className="btn"
              ref={ref}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true }}
              variants={
                Variant('fadeDown', 'tween', 0.5, 0.1) as unknown as Variants
              }
            >
              <input
                id="option4"
                type="radio"
                value="option4"
                checked={value === 'option4'}
                onChange={handleChange}
              />
              <span>متر</span>
            </motion.label>
          </div>

          <motion.button
            className="doneBtn"
            ref={ref}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true }}
            variants={
              Variant('fadeDown', 'tween', 0.5, 0.1) as unknown as Variants
            }
            onClick={handleClickOpen}
          />
        </div>

        {value === 'option3' ? (
          <Popup
            open={open}
            title="آفرین 😘"
            body="درست گفتی عزیزم، بریم سوال بعدی"
            link="/exams/2/2"
          />
        ) : (
          <Popup
            open={open}
            title="ای وای 😣"
            body="دوباره تلاش کن عزیزم"
            link="none"
            close={() => setOpen(false)}
          />
        )}
      </div>
    </section>
  );
}
