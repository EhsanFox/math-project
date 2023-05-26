import { Variants, motion } from 'framer-motion';
import { ReactNode } from 'react';
import { useInView } from 'react-intersection-observer';
import clickEffect from '../../../../assets/audios/click.wav';

export default function Button({
  className,
  variant,
  children,
  clickable = true,
}: {
  className: string;
  children: ReactNode;
  // eslint-disable-next-line
  clickable?: boolean;
  variant: Variants;
}) {
  const { ref, inView } = useInView({
    threshold: 0,
    root: null,
  });

  const soundeffect = new Audio(clickEffect);
  soundeffect.volume = 0.5;

  return (
    <motion.button
      className={className}
      ref={ref}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true }}
      variants={variant}
      onClick={() => (clickable ? soundeffect.play() : null)}
      disabled={!clickable}
    >
      {children}
    </motion.button>
  );
}
