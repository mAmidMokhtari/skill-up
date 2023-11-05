import MainLayout from "components/MainLayout";
import { Outlet } from "react-router-dom";

const HomePage = () => {
  return (
    <MainLayout>
      <div>
        <Outlet />
      </div>
    </MainLayout>
  );
};

export default HomePage;
