import { motion } from "motion/react";

export default function () {
  return (
    <section
      id="home"
      className="min-h-dvh pt-17 relative bg-black/10 flex items-center overflow-x-hidden"
    >
      <div className="container mx-auto h-full grid lg:grid-cols-2 items-center">
        <motion.div
          initial={{ opacity: 0, x: "-100%" }}
          whileInView={{ opacity: 1, x: 0, transition: { duration: 1 } }}
          className="max-w-lg p-5"
        >
          <h2 className="text-4xl font-bold">
            Hidangan Premium, Layanan Tanpa Kompromi: Solusi Makanan Tanpa Ribet
          </h2>
          <p className="mt-2">
            Katering praktis dengan menu variatif dan rasa yang selalu fresh.
            Kami meracik setiap hidangan dengan standar kebersihan tinggi dan
            pengiriman tepat waktu. Solusi sempurna untuk kebutuhan makan
            harian, meeting kantor, hingga event kecil maupun besar.
          </p>

          <a
            href="#"
            className="px-7 py-2 text-center bg-blue-500 mt-10 rounded-lg block w-fit font-bold text-white"
          >
            Berlanggan Sekarang
          </a>

          <div className="grid grid-cols-[auto_1fr] mt-7 items-center">
            <div className="flex items-center">
              <div className="size-12 rounded-full border bg-white relative"></div>
              <div className="size-12 rounded-full border bg-white relative -left-6"></div>
              <div className="size-12 rounded-full border bg-white relative -left-12"></div>
            </div>
            <div className="text-xs flex flex-col relative -left-10">
              <span>Butuh Bantuan? Beritahu kami,</span>
              <span>Menu kesukaan anda kepada assisten kami.</span>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: "100%" }}
          whileInView={{ opacity: 1, x: 0, transition: { duration: 1 } }}
          className="max-lg:absolute left-0 top-0 max-lg:w-full"
        >
          <div className="border lg:w-xl w-full max-lg:h-full lg:aspect-square mx-auto lg:rounded-3xl"></div>
        </motion.div>
      </div>
    </section>
  );
}
