import React, { useState, useEffect } from 'react';
import Variant from '../components/variant';
import { Variants, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HomeButton, CButton } from '../components';
import { IStoreData } from 'types';
import { IPCEvents } from 'main/constants';
import { Link } from 'react-router-dom';

export default function examList() {
  const [exams, setExams] = useState<IStoreData['exams']>();
  const { ref, inView } = useInView({
    threshold: 0,
    root: null,
  });

  useEffect(() => {
    window.ipc
      .callFor<IStoreData['exams']>(IPCEvents.updateStorage, 'get', 'exams')
      .then((x) => setExams(x))
      .catch((e) => window.app.error(e));
  }, []);

  return (
    <section className="startCourse backgrundIMG">
      <HomeButton />
      <div className="blurBackground">
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
            <p>لیست امتحان ها</p>
          </motion.div>
        </div>

        <div className="btns">
          <div className="buttons">
            {exams
              ? Object.keys(exams).map((z) =>
                  // @ts-ignore
                  exams[z] === 'lock' ? (
                    <CButton
                      className="btnDisable"
                      variant={
                        Variant(
                          'fadeDown',
                          'tween',
                          0.5,
                          0.1
                        ) as unknown as Variants
                      }
                      clickable={false}
                    >
                      <p>درس {z}</p>
                    </CButton>
                  ) : (
                    <CButton
                      className="btn"
                      variant={
                        Variant(
                          'fadeDown',
                          'tween',
                          0.5,
                          0.1
                        ) as unknown as Variants
                      }
                    >
                      <Link to={`/exams/${z}/1`} className="disableLink">
                        <p>فصل {z}</p>
                      </Link>
                    </CButton>
                  )
                )
              : null}
          </div>
        </div>
      </div>
    </section>
  );
}
