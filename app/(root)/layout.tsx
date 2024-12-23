import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <main className="flex">
        <Sidebar />
        <div className="p-5 flex-1"> {children}</div>
      </main>
    </>
  );
};
export default RootLayout;
