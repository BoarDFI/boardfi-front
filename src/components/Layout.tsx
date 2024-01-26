import Navbar from "./shared/Navbar";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="container">
      <Navbar />
      <main>{children}</main>
    </div>
  );
};
