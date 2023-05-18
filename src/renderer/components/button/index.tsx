import Variant from '../variant';
import { Variants, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


export default function Button({
  nextLink,
  prevLink,
}: {
  nextLink: string;
  prevLink: string;
}) {
  const { ref, inView } = useInView({
    threshold: 0,
    root: null,
    rootMargin: '-50% -0% -47.5%',
  });

  const ButtonClick = (loc: string) => {
    const audio = new Audio('./sound.wav');
    audio.play();

    setTimeout(() => {
      window.location = loc as unknown as Location;
    }, 1500);
  };

  return (
    <div className="btns">
      <motion.button
        className='prevBtn'
        ref={ref}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true }}
        variants={
          Variant('fadeRight', 'tween', 0.5, 0.1) as unknown as Variants
        }
        onClick={() => ButtonClick(prevLink)} />
      <motion.button
        className='nextBtn'
        ref={ref}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true }}
        variants={Variant('fadeLeft', 'tween', 0.5, 0.1) as unknown as Variants}
        onClick={() => ButtonClick(nextLink)} />
    </div>
  );
}
