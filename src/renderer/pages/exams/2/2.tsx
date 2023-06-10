import React, { useState, ChangeEvent, useRef, useEffect } from 'react';
import Variant from '../../../components/variant';
import { Variants, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HomeButton, Popup } from '../../../components';

import img from './2.jpg';
import { IPCEvents } from 'main/constants';

export default function SecondExam() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [value, setValue] = useState<string>('option1');
  const [open, setOpen] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0,
    root: null,
  });

  useEffect(() => {
    setIsPlaying(true);

    return () => {
      window.ipc.callFor(IPCEvents.updateStorage, 'set', 'exams.2', 'finish');
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
              <p>کدوم یکی از گزینه ها یک وسیله اندازه گیری هستش؟</p>
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
              <span>وزنه</span>
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
              <span>خط کش</span>
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
              <span>مداد</span>
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
              <span>پاک کن</span>
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

        {value === 'option2' ? (
          <Popup
            open={open}
            title="آفرین 😘"
            body="درست گفتی عزیزم، بریم سوال بعدی"
            link="/"
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
