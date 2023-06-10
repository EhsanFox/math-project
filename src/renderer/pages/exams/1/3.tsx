import React, { useState, ChangeEvent, useRef, useEffect } from 'react';
import Variant from '../../../components/variant';
import { Variants, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HomeButton, Popup } from '../../../components';

import img from './3.png';
import { IPCEvents } from 'main/constants';

export default function ThirdExam() {
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
      window.ipc.callFor(IPCEvents.updateStorage, 'set', 'exams.1', 'finish');
      window.ipc.callFor(IPCEvents.updateStorage, 'set', 'lessons.2', 'start');
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
              <p>تو عکس سمت چپ، چندتا پرنده به سمت راست پرواز میکند؟</p>
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
              <span>1 عدد</span>
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
              <span>3 عدد</span>
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
              <span>4 عدد</span>
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
              <span>2 عدد</span>
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

        {value === 'option4' ? (
          <Popup
            open={open}
            title="آفرین 😘"
            body="درست گفتی عزیزم، بریم درس بعدی"
            link="/courses"
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
