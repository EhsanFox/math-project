import React from 'react';
import Variant from '../components/variant';
import { Variants, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function SecondPage() {
  const { ref, inView } = useInView({
    threshold: 0,
    root: null,
    rootMargin: '-50% -0% -47.5%',
  });

  return (
    <section className="secondPage">
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
          <p>objectBox</p>
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
          شروع
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
            امفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون
            بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط
            فعلی تکنولوژی مورد نیاز و ک اربردهای متنوع با هدف بهبود ابزارهای
            کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده
            شناخت فراوان جامعه و متخصصان را می طلبد ت ا با نرم افزارها شناخت
            بیشتری را برای طراحان رایانه ای علی الخصوص طر و شرایط سخت تایپ به
            پایان رسد وزمان مورد نیاز شامل ح دنیای موجود طراحی اساسا مورد
            استفاده قرار گیرد.
          </p>
        </motion.div>
      </div>

      <div className="btns">
        <motion.button
          ref={ref}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true }}
          variants={
            Variant('fadeRight', 'tween', 0.5, 0.1) as unknown as Variants
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -2 24 24"
            width="44"
            height="44"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path
              fill="currentColor"
              d="M7.828 11H20v2H7.828l5.364 5.364-1.414 1.414L4 12l7.778-7.778 1.414 1.414z"
            />
          </svg>
        </motion.button>
        <motion.button
          ref={ref}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true }}
          variants={
            Variant('fadeLeft', 'tween', 0.5, 0.1) as unknown as Variants
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -2 24 24"
            width="44"
            height="44"
          >
            <path
              fill="currentColor"
              d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
            />
          </svg>
        </motion.button>
      </div>
    </section>
  );
}
