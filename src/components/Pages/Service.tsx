import { GoPackage } from "@react-icons/all-files/go/GoPackage";
import { GiMeal } from "@react-icons/all-files/gi/GiMeal";
import { BiCrown } from "@react-icons/all-files/bi/BiCrown";

export default function () {
  return (
    <section className="min-h-dvh bg-black/10 flex flex-col justify-center py-10">
      <div className="container mx-auto">
        <h4 className="text-4xl font-bold max-w-2xl mx-auto text-center w-full px-5">
          Rangkaian Paket Katering Eksklusif untuk Setiap Momen
        </h4>
        <div className="mt-10 flex items-stretch justify-center gap-10 lg:gap-20 flex-wrap px-5 ">
          <div className="w-90 border p-5 rounded-2xl">
            <GoPackage className="text-5xl" />
            <h4 className="text-3xl font-bold">Paket Hemat</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus, cumque vel? Quo eaque, voluptatum quas, minus ut
              architecto numquam, distinctio eius quasi neque odio ad rerum
              itaque quibusdam cumque. Itaque.
            </p>
            <p className="font-bold text-2xl mt-10 w-">25K s.d 40K</p>
          </div>
          <div className="w-90 border p-5 rounded-2xl">
            <GiMeal className="text-5xl" />
            <h4 className="text-3xl font-bold">Paket Standar</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus, cumque vel? Quo eaque, voluptatum quas, minus ut
              architecto numquam, distinctio eius quasi neque odio ad rerum
              itaque quibusdam cumque. Itaque.
            </p>
            <p className="font-bold text-2xl mt-10 w-">25K s.d 40K</p>
          </div>
          <div className="w-90 border p-5 rounded-2xl">
            <BiCrown className="text-5xl" />
            <h4 className="text-3xl font-bold">Paket Premium</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus, cumque vel? Quo eaque, voluptatum quas, minus ut
              architecto numquam, distinctio eius quasi neque odio ad rerum
              itaque quibusdam cumque. Itaque.
            </p>
            <p className="font-bold text-2xl mt-10 w-">25K s.d 40K</p>
          </div>
        </div>
      </div>
    </section>
  );
}
