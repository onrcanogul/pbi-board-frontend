import BacklogWithRealTimeUpdates from "../components/backlog/BacklogWithRealTimeUpdates";
import ResponsiveLayout from "../components/layout/ResponsiveLayout";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const BacklogPage = () => {
  const location = useLocation();

  useEffect(() => {
    console.log("BacklogPage rendered with path:", location.pathname);
  }, [location]);

  return (
    <ResponsiveLayout title="Product Backlog - OO Team">
      <BacklogWithRealTimeUpdates />
    </ResponsiveLayout>
  );
};

export default BacklogPage;
