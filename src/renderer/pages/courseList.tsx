import React, { useState, useEffect } from 'react';
import Variant from '../components/variant';
import { Variants, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CButton, HomeButton } from '../components';
import { IStoreData } from 'types';
import { IPCEvents } from 'main/constants';
import { Link } from 'react-router-dom';

export default function courseList() {
  const [courses, setCourses] = useState<IStoreData['lessons']>();
  const { ref, inView } = useInView({
    threshold: 0,
    root: null,
  });

  useEffect(() => {
    window.ipc
      .callFor<IStoreData['lessons']>(IPCEvents.updateStorage, 'get', 'lessons')
      .then((x) => setCourses(x))
      .catch((e) => {
        window.app.error(e);
      });
  }, []);

  return (
    <section className="startCourse">
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
            <p>لیست درس ها</p>
          </motion.div>
        </div>

        <div className="btns">
          <div className="buttons">
            {courses
              ? Object.keys(courses).map((z) =>
                  // @ts-ignore
                  courses[z] === 'lock' ? (
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
                      <Link to={`/courses/${z}/1`} className="disableLink">
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
