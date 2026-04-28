import { Outlet } from "react-router-dom";
import Header from "./header/Header";
import Footer from "./Footer/Footer";

const MainLayout = () => {
  return (
    <>
      <div
        style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
      >
        <Header />

        {/* Page content */}
        <main style={{ flex: 1 }}>
          <Outlet />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
