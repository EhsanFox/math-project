import React, { useState } from 'react';
import Variant from '../components/variant';
import { Variants, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HomeButton } from '../components';
import { IStoreData } from 'types';
import { IPCEvents } from 'main/constants';

export default function examList() {
  const [exams, setExams] = useState<IStoreData['exams']>();
  const { ref, inView } = useInView({
    threshold: 0,
    root: null,
  });

  window.ipc
    .callFor<IStoreData['exams']>(IPCEvents.updateStorage, 'get', 'exams')
    .then((x) => setExams(x))
    .catch((e) => window.app.error(e));

  return (
    <section className="startCourse">
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
          <p>لیست درس ها</p>
        </motion.div>
      </div>

      <div className="btns">
        <div className="buttons">
          {exams
            ? Object.keys(exams).map((z) => (
                <motion.button
                  className="btn"
                  ref={ref}
                  initial="offscreen"
                  whileInView="onscreen"
                  viewport={{ once: true }}
                  variants={
                    Variant(
                      'fadeDown',
                      'tween',
                      0.5,
                      0.1
                    ) as unknown as Variants
                  }
                >
                  <p>درس {z}</p>
                </motion.button>
              ))
            : null}
        </div>
      </div>
    </section>
  );
}
