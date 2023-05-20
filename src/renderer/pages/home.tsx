import React from 'react';
import Variant from '../components/variant';
import { Variants, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function homePage() {
  const { ref, inView } = useInView({
    threshold: 0,
    root: null,
    rootMargin: '-50% -0% -47.5%',
  });

  return (
    <section className="firsPage">
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
          <p>ریاضی دوم دبستان</p>
        </motion.div>
      </div>

      <div className="btnBox">
        <motion.button
          className="btnOne"
          ref={ref}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true }}
          variants={
            Variant('fadeLeft', 'tween', 0.5, 0.1) as unknown as Variants
          }
        >
          <span className="button_top">لیست درس ها</span>
        </motion.button>

        <motion.button
          className="btnTwo"
          ref={ref}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true }}
          variants={
            Variant('fadeRight', 'tween', 0.5, 0.1) as unknown as Variants
          }
        >
          <span className="button_top">امتحانات</span>
        </motion.button>

        <motion.button
          className="btnThree"
          ref={ref}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true }}
          variants={
            Variant('fadeLeft', 'tween', 0.5, 0.1) as unknown as Variants
          }
        >
          <span className="button_top">نمرات</span>
        </motion.button>

        <motion.button
          className="btnFour"
          ref={ref}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true }}
          variants={
            Variant('fadeRight', 'tween', 0.5, 0.1) as unknown as Variants
          }
        >
          <span className="button_top">درباره نرم افزار</span>
        </motion.button>
      </div>
    </section>
  );
}
