import { motion } from "motion/react";
import { BiStar } from "@react-icons/all-files/bi/BiStar";
import { BiUser } from "@react-icons/all-files/bi/BiUser";
import { BiDollar } from "@react-icons/all-files/bi/BiDollar";

export default function () {
  return (
    <section
      id="achievement"
      className="bg-black/8 flex flex-col items-center pt-10 pb-5 gap-10"
    >
      <div className="container mx-auto flex justify-center gap-10 items-stretch flex-wrap px-5 ">
        <motion.div
          initial={{ opacity: 0, y: "100%" }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
          className="flex flex-col items-center gap-3 text-center w-90"
        >
          <BiStar className="text-5xl" />
          <h3 className="text-5xl font-bold">4.95</h3>
          <p className="text-xl">
            Dari bintang 5 berdasarkan 1284 penilaian di Google Map.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: "100%" }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 1.5 } }}
          className="flex flex-col items-center gap-3 text-center w-90"
        >
          <BiUser className="text-5xl" />
          <h3 className="text-5xl font-bold">523</h3>
          <p className="text-xl">Testimoni selama 1 tahun terakhir.</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: "100%" }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 2 } }}
          className="flex flex-col items-center gap-3 text-center w-90"
        >
          <BiDollar className="text-5xl" />
          <h3 className="text-5xl font-bold">320</h3>
          <p className="text-xl">Box diantar setiap harinya.</p>
        </motion.div>
      </div>
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 items-center min-h-dvh">
          <div className="max-w-xl grid gap-5 p-5 items-center">
            <div className="lg:col-start-1 lg:row-start-1 border rounded-2xl max-lg:aspect-video lg:h-90"></div>
            <div className="lg:col-start-1 lg:row-start-2 border rounded-2xl max-lg:aspect-video lg:h-90"></div>
            <div className="lg:col-start-2 lg:row-span-2 border rounded-2xl max-lg:aspect-video lg:h-90"></div>
          </div>

          <div className="max-w-lg mx-auto space-y-6 px-5">
            <h3 className="text-3xl font-bold">
              Hadirkan hidangan lezat dengan layanan katering yang mudah dan
              praktis
            </h3>
            <p className="text-lg">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. At ut
              temporibus culpa expedita porro eveniet natus debitis non
              laboriosam sequi impedit asperiores, molestiae distinctio, ratione
              illum corporis maiores deleniti tempora.
            </p>
            <div className="space-y-7">
              <div>
                <h3>Orang Kantoran</h3>
                <progress
                  className="w-full rounded-full bg-indigo-300 h-2"
                  max={100}
                  value={50}
                />
              </div>
              <div>
                <h3>Anak Sekolah</h3>
                <progress
                  className="w-full rounded-full bg-indigo-300 h-2"
                  max={100}
                  value={50}
                />
              </div>
              <div>
                <h3>Rumahan</h3>
                <progress
                  className="w-full rounded-full bg-indigo-300 h-2"
                  max={100}
                  value={50}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
