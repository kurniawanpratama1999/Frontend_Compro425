export default () => {
  return (
    <aside className="fixed top-0 left-0 bottom-0 w-80 shadow bg-neutral-100 z-10">
      <h1 className="px-3 pt-3 font-bold text-2xl">Admin Setting</h1>
      <nav className="flex flex-col gap-3 p-3 text-lg">
        <a href="#">Home</a>
        <a href="#">Explore</a>
        <a href="#">Service</a>
        <a href="#">Contact</a>
        <a href="#">Blog</a>
        <a href="#">Article</a>
      </nav>
    </aside>
  );
};
