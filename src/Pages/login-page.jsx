import React from "react";
import { LoginForm } from "../component/LoginForm";

const LoginPage = () => {
  return (
    <div className="flex h-[80vh] w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <LoginForm />
      </div>
    </div>
  );
};
export default LoginPage;
