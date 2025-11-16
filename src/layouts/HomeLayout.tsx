import { Outlet } from "react-router";
import { motion, useScroll } from "motion/react";
import { Suspense } from "react";

import UiLoading from "@/components/UiLoading";
import UiNavigation from "@/components/UiNavigation";
import UiFooter from "@/components/UiFooter";
export default function (): React.ReactNode {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <motion.div
        id="scroll-indicator"
        style={{ scaleX: scrollYProgress, originX: 0 }}
        className="fixed z-51 top-0 left-0 right-0 h-1 bg-indigo-400 rounded-r-full"
      />

      <Suspense fallback={<UiLoading />}>
        <UiNavigation />
        <main className="bg-white">
          <Outlet />
        </main>
        <UiFooter />
      </Suspense>
    </>
  );
}
