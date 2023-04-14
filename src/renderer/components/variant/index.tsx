export default function variant(
  variant: unknown,
  type: unknown,
  duration: number | unknown,
  delay: number | unknown
) {
  switch (variant) {
    case 'fadeup':
      return {
        offscreen: {
          y: 100,
          opacity: 0,
        },
        onscreen: {
          y: 0,
          opacity: 1,
          transition: {
            delay,
            type,
            bounce: 0.4,
            duration,
          },
        },
      };

    case 'fadeDown':
      return {
        offscreen: {
          y: -100,
          opacity: 0,
        },
        onscreen: {
          y: 0,
          opacity: 1,
          transition: {
            delay,
            type,
            bounce: 0.4,
            duration,
          },
        },
      };
    case 'fadeRightImg':
      return {
        offscreen: {
          x: 100,
          opacity: 0,
        },
        onscreen: {
          x: 0,
          opacity: 1,
          transition: {
            delay,
            type,
            duration,
          },
        },
      };
    case 'fadeRight':
      return {
        offscreen: {
          x: 100,
          opacity: 0,
        },
        onscreen: {
          x: 0,
          opacity: 1,
          transition: {
            delay,
            type,
          },
        },
      };
    case 'fadeLeft':
      return {
        offscreen: {
          x: -100,
          opacity: 0,
        },
        onscreen: {
          x: 0,
          opacity: 1,
          transition: {
            delay,
            type,
          },
        },
      };
    default:
      return {};
  }
}
