import { Montserrat } from "next/font/google";
import Footer from "../../components/footer/Footer";

const montserrat = Montserrat({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600", "700"],
});

type TapalkaLayoutProps = {
  children: React.ReactNode;
};

export default function TapalkaLayout({ children }: TapalkaLayoutProps) {
  return (
    <div
      className={`bg-white flex justify-center flex-col items-center select-none gap-2 h-screen`}
    >
      {children}
      <Footer />
    </div>
  );
}
