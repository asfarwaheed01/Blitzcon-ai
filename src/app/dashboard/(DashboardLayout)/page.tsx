"use client";
import { Grid, Box } from "@mui/material";
import PageContainer from "@/app/dashboard/(DashboardLayout)/components/container/PageContainer";
// components
import SalesOverview from "@/app/dashboard/(DashboardLayout)/components/dashboard/SalesOverview";
import YearlyBreakup from "@/app/dashboard/(DashboardLayout)/components/dashboard/YearlyBreakup";
import RecentTransactions from "@/app/dashboard/(DashboardLayout)/components/dashboard/RecentTransactions";
import ProductPerformance from "@/app/dashboard/(DashboardLayout)/components/dashboard/ProductPerformance";
import MonthlyEarnings from "@/app/dashboard/(DashboardLayout)/components/dashboard/MonthlyEarnings";
import { useRouter } from "next/navigation";
import LoadingComponent from "@/app/loading";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = () => {
    try {
      // Check if we're in the browser environment
      if (typeof window !== "undefined") {
        const token = localStorage.getItem("token");
        if (!token) {
          router.push("/");
          return;
        }
        setIsAuthenticated(true);
      }
    } catch (error) {
      console.error("Auth check error:", error);
      router.push("/login");
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <LoadingComponent />;
  }

  if (!isAuthenticated) {
    return null;
  }
  return (
    <PageContainer title="Dashboard" description="this is Dashboard">
      <Box>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={8}>
            <SalesOverview />
          </Grid>
          <Grid item xs={12} lg={4}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <YearlyBreakup />
              </Grid>
              <Grid item xs={12}>
                <MonthlyEarnings />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={4}>
            <RecentTransactions />
          </Grid>
          <Grid item xs={12} lg={8}>
            <ProductPerformance />
          </Grid>
          {/* <Grid item xs={12}>
            <Blog />
          </Grid> */}
        </Grid>
      </Box>
    </PageContainer>
  );
};

export default Dashboard;
