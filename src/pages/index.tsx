import Home from "@/components/Pages/Home";
import Head from "../components/Head";
import Achievement from "@/components/Pages/Achievement";
import Service from "@/components/Pages/Service";
import Explore from "@/components/Pages/Explore";
import CtaAgain from "@/components/Pages/CtaAgain";
import Blogs from "@/components/Pages/Blogs";
import Contact from "@/components/Pages/Contact";

export default () => {
  return (
    <>
      {/* HEAD SEO */}
      <Head title="Home" />
      <title>Home</title>

      <Home />
      <Achievement />
      <Service />
      <Explore />
      <CtaAgain />
      <Blogs />
      <Contact />
    </>
  );
};
