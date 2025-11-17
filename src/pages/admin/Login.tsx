export default () => {
  return (
    <main className="bg-neutral-200 min-h-dvh flex flex-col items-center justify-center">
      <div className="w-full max-w-lg mx-auto p-5 bg-white rounded-2xl shadow">
        <h1 className="text-center font-bold text-2xl mb-5">Please sign in to your account</h1>
        <form action="" className="flex flex-col gap-5">
          <label htmlFor="username" className="flex flex-col gap-1">
            <span>Username</span>
            <input
              className="px-3 py-1 border outline-0 rounded"
              type="text"
              name="username"
              id="username"
            />
          </label>
          <label htmlFor="password" className="flex flex-col gap-1">
            <span>Password</span>
            <input
              className="px-3 py-1 border outline-0 rounded"
              type="password"
              name="password"
              id="password"
            />
          </label>

          <button type="submit" className="px-3 py-1 border rounded bg-emerald-400 text-white font-bold">Login</button>
        </form>
      </div>
    </main>
  );
};
