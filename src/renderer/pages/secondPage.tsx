import React from 'react';
import Variant from '../components/variant';
import { Variants, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { NarrowButtons } from 'renderer/components';

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
          <p>اعداد و ارقام</p>
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
          عکس
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

      <NarrowButtons nextLink="" prevLink="" />
    </section>
  );
}
