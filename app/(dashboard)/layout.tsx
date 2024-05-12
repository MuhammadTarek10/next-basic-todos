import TodoForm from "@/components/TodoForm";
import React from "react";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div className="p-8 flex-col text-center">
      <h1>Dashboard</h1>
      <TodoForm />
      <div>{children}</div>
    </div>
  );
};
export default DashboardLayout;
