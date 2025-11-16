export default () => {
  return (
    <section className="py-10 bg-black/8">
      <div>
        <h6>Kunjungi kami</h6>
        <div></div>
        <div>
          <p>+62 929 2932 8231</p>
          <p>dapurraya@gmail.com</p>
          <p>Jl. Saturnus, kecamatan Jupiter, No. 300</p>
        </div>
      </div>
      <div>
        <h6>Hubungi Kami</h6>
        <form action="">
          <label htmlFor="name">
            <span>Full Name</span>
            <input type="text" name="name" id="name" />
          </label>
          <label htmlFor="porsi">
            <span>Berapa banyak</span>
            <input type="number" name="porsi" id="porsi" />
          </label>
          <label htmlFor="email">
            <span>Email address</span>
            <input type="email" name="email" id="email" />
          </label>
          <label htmlFor="whatsapp">
            <span>Whatsapp number</span>
            <input type="number" name="whatsapp" id="whatsapp" />
          </label>
          <label htmlFor="address">
            <span>Alamat</span>
            <input type="number" name="address" id="address" />
          </label>
        </form>
      </div>
    </section>
  );
};
