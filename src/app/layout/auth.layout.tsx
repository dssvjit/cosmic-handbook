import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <>
      <div className="w-full relative">
        <Outlet />
      </div>
    </>
  );
};

export default AuthLayout;
