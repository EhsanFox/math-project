import React from 'react';
import Variant from '../components/variant';
import { Variants, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { CButton } from 'renderer/components';
import { IPCEvents } from 'main/constants';

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
        <CButton
          className="btnOne"
          variant={
            Variant('fadeLeft', 'tween', 0.5, 0.1) as unknown as Variants
          }
        >
          <Link to="/courses" className="button_top">
            <span> لیست درس ها </span>
          </Link>
        </CButton>

        <CButton
          className="btnTwo"
          variant={
            Variant('fadeRight', 'tween', 0.5, 0.1) as unknown as Variants
          }
        >
          <Link to="/exams" className="button_top">
            <span>امتحانات</span>
          </Link>
        </CButton>

        {/*
        <CButton
          className="btnThree"
          variant={
            Variant('fadeLeft', 'tween', 0.5, 0.1) as unknown as Variants
          }
        >
          <Link to="/course-template" className="button_top">
            <span>نمرات</span>
          </Link>
        </CButton>
        */}

        <CButton
          className="btnThree"
          variant={
            Variant('fadeRight', 'tween', 0.5, 0.1) as unknown as Variants
          }
        >
          <div
            className="button_top"
            style={{ cursor: 'pointer' }}
            onClick={() => {
              window.ipc.sendMessage(IPCEvents.openAbout);
            }}
          >
            <span>درباره نرم افزار</span>
          </div>
        </CButton>
      </div>
    </section>
  );
}
