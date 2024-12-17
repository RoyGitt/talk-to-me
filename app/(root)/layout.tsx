import Navbar from "@/components/navbar";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <main>{children}</main>
    </>
  );
};
export default RootLayout;
