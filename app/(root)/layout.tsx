import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <nav>
        <Navbar />
        <Sidebar />
      </nav>
      <main>{children}</main>
    </>
  );
};
export default RootLayout;
