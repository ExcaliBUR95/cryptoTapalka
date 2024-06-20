import { Clicker } from "@/components/Clicker/ui/Clicker";
import { Footer } from "./widgets/Footer/ui/Footer";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center max-w-md bg-brown-300 relative">
      <Clicker />
      <Footer />
    </main>
  );
}
