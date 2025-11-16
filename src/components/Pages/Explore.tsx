import { motion, useMotionValue, useAnimationFrame } from "motion/react";
import { useEffect, useState } from "react";

export default function () {
  const x = useMotionValue(0);
  const speed = 1;

  const [arr, setArr] = useState<number[]>([]);
  const [isPaused, setIsPaused] = useState(false);

  useAnimationFrame(() => {
    if (isPaused) return;
    const currentX = x.get();
    if (Math.abs(currentX) >= arr.length * 320) {
      x.set(0);
    } else {
      x.set(currentX - speed);
    }
  });

  useEffect(() => {
    const temp = [];
    for (let index = 1; index <= 10; index++) {
      temp.push(index);
    }

    setArr(temp);
  }, []);

  return (
    <section
      id="explore"
      className="min-h-dvh bg-black/8 py-10 flex items-center"
    >
      <div className="container mx-auto">
        <h5 className="text-center text-4xl font-bold px-5">
          Explore semua menu yang kami miliki
        </h5>
        <div className="mt-10 overflow-x-auto no-scrollbar">
          <motion.div style={{ x }} className="flex scroll-smooth flex-row p-5">
            {[...arr, ...arr].map((v, k) => {
              return (
                <div
                  key={k}
                  onMouseEnter={() => setIsPaused(true)}
                  onMouseLeave={() => setIsPaused(false)}
                  className="min-w-80 aspect-square p-5"
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.8 }}
                    className="border w-full h-full"
                  >
                    {v}
                  </motion.div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
