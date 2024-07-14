
import { Montserrat } from "next/font/google";
import Footer from "../components/footer/Footer";

const montserrat = Montserrat({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600", "700"],
});

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div
      className={`bg-white flex justify-center flex-col items-center select-none gap-2 ${montserrat.className}`}
    >
      {children}
      <Footer />
    </div>
  );
}
