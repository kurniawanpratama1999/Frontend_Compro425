export default () => {
  return (
    <section className="py-10 bg-black/8 grid lg:grid-cols-2 gap-y-10">
      <div className="flex flex-col gap-y-2 w-full max-w-lg mx-auto">
        <h6 className="text-3xl font-bold">Kunjungi kami</h6>
        <div className="aspect-video border w-full mt-5"></div>
        <div className="grid grid-cols-2 gap-y-3">
          <p className="text-left">+62 929 2932 8231</p>
          <p className="text-right">dapurraya@gmail.com</p>
          <p className="col-span-2 text-center">
            Jl. Saturnus, kecamatan Jupiter, No. 300
          </p>
        </div>
      </div>

      <div className="w-full max-w-lg mx-auto">
        <h6 className="font-bold text-3xl">Hubungi Kami</h6>
        <form action="" className="flex flex-col gap-3 mt-5">
          <label htmlFor="name" className="flex flex-col gap-1">
            <span className="">Full Name</span>
            <input
              className="border outline-0 py-1 px-3 rounded"
              type="text"
              name="name"
              id="name"
            />
          </label>
          <label htmlFor="porsi" className="flex flex-col gap-1">
            <span className="">Berapa banyak</span>
            <input
              className="border outline-0 py-1 px-3 rounded"
              type="number"
              name="porsi"
              id="porsi"
            />
          </label>
          <label htmlFor="email" className="flex flex-col gap-1">
            <span className="">Email address</span>
            <input
              className="border outline-0 py-1 px-3 rounded"
              type="email"
              name="email"
              id="email"
            />
          </label>
          <label htmlFor="whatsapp" className="flex flex-col gap-1">
            <span className="">Whatsapp number</span>
            <input
              className="border outline-0 py-1 px-3 rounded"
              type="number"
              name="whatsapp"
              id="whatsapp"
            />
          </label>
          <label htmlFor="address" className="flex flex-col gap-1">
            <span className="">Alamat</span>
            <input
              className="border outline-0 py-1 px-3 rounded"
              type="number"
              name="address"
              id="address"
            />
          </label>

          <button
            type="submit"
            className="px-4 py-1 border rounded bg-blue-400 block w-fit ml-auto text-white font-bold">
            Kirim
          </button>
        </form>
      </div>
    </section>
  );
};
