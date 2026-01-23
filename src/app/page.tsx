import FooterPage from "@/layout/Footer";
import HeaderPage from "@/layout/Header";
import MainPage from "@/layout/Main";


export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <HeaderPage />
      <MainPage />
      <FooterPage />
    </div>
  );
}
