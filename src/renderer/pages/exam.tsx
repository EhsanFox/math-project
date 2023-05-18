import React from 'react';
import Variant from '../components/variant';
import { Variants, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HomeBtn } from 'renderer/components';

export default function Exam() {
    const { ref, inView } = useInView({
        threshold: 0,
        root: null
      });

  return (
    <section className='exam'>
        <HomeBtn />

        <div className='leftContent'>
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
                    <p>اعداد و ارقام</p>
                </motion.div>
            </div>
        </div>

        <div className='rightContent'>
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
                    <p>اعداد و ارقام</p>
                </motion.div>
            </div>

            <div className="buttons">
                <motion.button
                    className="btn"
                    ref={ref}
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true }}
                    variants={
                        Variant('fadeDown', 'tween', 0.5, 0.1) as unknown as Variants
                    }
                    >
                    <p>اعداد و ارقام</p>
                </motion.button>

                <motion.button
                    className="btn"
                    ref={ref}
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true }}
                    variants={
                        Variant('fadeDown', 'tween', 0.5, 0.1) as unknown as Variants
                    }
                    >
                    <p>اعداد و ارقام</p>
                </motion.button>

                <motion.button
                    className="btn"
                    ref={ref}
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true }}
                    variants={
                        Variant('fadeDown', 'tween', 0.5, 0.1) as unknown as Variants
                    }
                    >
                    <p>اعداد و ارقام</p>
                </motion.button>

                <motion.button
                    className="btn"
                    ref={ref}
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true }}
                    variants={
                        Variant('fadeDown', 'tween', 0.5, 0.1) as unknown as Variants
                    }
                    >
                    <p>اعداد و ارقام</p>
                </motion.button>
            </div>   
            
            <motion.button
                className="doneBtn"
                ref={ref}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true }}
                variants={
                    Variant('fadeDown', 'tween', 0.5, 0.1) as unknown as Variants
                } />
        </div>

    </section>
  )
}
