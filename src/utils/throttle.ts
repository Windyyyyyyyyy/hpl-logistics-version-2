type ThrottleFunc = () => void;

const throttle = (func: () => void, delay: number): ThrottleFunc => {
  let timeoutId: number | null;
  return () => {
    if (!timeoutId) {
      timeoutId = setTimeout(() => {
        func();
        timeoutId = null;
      }, delay);
    }
  };
};

export default throttle;
