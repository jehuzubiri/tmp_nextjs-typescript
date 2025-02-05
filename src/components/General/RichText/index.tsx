import dynamic from "next/dynamic";

const PageComponent = dynamic(() => import("./components/RichText"), {
  ssr: false,
});

export default PageComponent;
