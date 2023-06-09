import React, { useState, ChangeEvent } from 'react';
import { Link } from 'react-router-dom';
import Variant from '../../components/variant';
import { Variants, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HomeButton, Popup } from '../../components';

export default function ExamTemplate() {
  const [value, setValue] = useState<string>('option1');
  const [open, setOpen] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0,
    root: null,
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <section className="exam">
      <div className="blurBak">
        <HomeButton />

        <div className="leftContent">
          <div className="img" />
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
              <p>نمره 0/0</p>
            </motion.div>
          </div>
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
              <p>سوال</p>
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
              <span>Option 1</span>
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
              <span>Option 2</span>
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
              <span>Option 3</span>
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
              <span>Option 4</span>
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

        <Popup open={open} title="test" body="test" link="/" />
      </div>
    </section>
  );
}
