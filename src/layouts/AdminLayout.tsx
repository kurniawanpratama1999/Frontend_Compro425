import { Outlet } from "react-router";
import { Suspense } from "react";

import UiLoading from "@/components/UiLoading";
import UiAside from "@/components/admin/UiAside";
export default (): React.ReactNode => {
  return (
    <>
      <Suspense fallback={<UiLoading />}>
        <UiAside />
        <main className="bg-neutral-200 fixed top-0 left-80 right-0 bottom-0 py-3 px-10">
          <Outlet />
        </main>
      </Suspense>
    </>
  );
};
