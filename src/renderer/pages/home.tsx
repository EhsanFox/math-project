import React from 'react';
import Variant from '../components/variant';
import { Variants, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

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
          <Link to="/courses" className="button_top"><span> لیست درس ها </span></Link>
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
          <Link to="/exams" className="button_top"><span>امتحانات</span></Link>
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
          <Link to="/course-template" className="button_top"><span>نمرات</span></Link>
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
          <Link to="/exam-template" className="button_top"><span>درباره نرم افزار</span></Link>
        </motion.button>
      </div>
    </section>
  );
}
