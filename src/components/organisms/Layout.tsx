import { Footer } from "@/components/organisms/Footer";
import { Header } from "@/components/organisms/Header";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="bg-background text-body dark:bg-dark-background dark:text-dark-text flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 p-4">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
