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
        ref={ref}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true }}
        variants={
          Variant('fadeRight', 'tween', 0.5, 0.1) as unknown as Variants
        }
        onClick={() => ButtonClick(prevLink)}
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
        variants={Variant('fadeLeft', 'tween', 0.5, 0.1) as unknown as Variants}
        onClick={() => ButtonClick(nextLink)}
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
  );
}
