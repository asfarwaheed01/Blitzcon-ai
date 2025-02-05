import { useMediaQuery, Box, Drawer, Typography } from "@mui/material";
import SidebarItems from "./SidebarItems";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import { Upgrade } from "./Updrade";
import { Sidebar, Logo } from "react-mui-sidebar";
import { Zap } from "lucide-react";
import theme from "@/utils/theme";
import { motion } from "framer-motion";

interface ItemType {
  isMobileSidebarOpen: boolean;
  onSidebarClose: (event: React.MouseEvent<HTMLElement>) => void;
  isSidebarOpen: boolean;
}

const MSidebar = ({
  isMobileSidebarOpen,
  onSidebarClose,
  isSidebarOpen,
}: ItemType) => {
  const lgUp = useMediaQuery((theme: any) => theme.breakpoints.up("lg"));

  const sidebarWidth = "270px";

  // Custom CSS for short scrollbar
  const scrollbarStyles = {
    "&::-webkit-scrollbar": {
      width: "7px",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "#eff2f7",
      borderRadius: "15px",
    },
  };

  if (lgUp) {
    return (
      <Box
        sx={{
          width: sidebarWidth,
          flexShrink: 0,
        }}
      >
        {/* ------------------------------------------- */}
        {/* Sidebar for desktop */}
        {/* ------------------------------------------- */}
        <Drawer
          anchor="left"
          open={isSidebarOpen}
          variant="permanent"
          PaperProps={{
            sx: {
              boxSizing: "border-box",
              ...scrollbarStyles,
            },
          }}
        >
          {/* ------------------------------------------- */}
          {/* Sidebar Box */}
          {/* ------------------------------------------- */}
          <Box
            sx={{
              height: "100%",
            }}
          >
            <Sidebar
              width={"270px"}
              collapsewidth="80px"
              open={isSidebarOpen}
              themeColor="#5d87ff"
              themeSecondaryColor="#49beff"
              showProfile={false}
            >
              {/* ------------------------------------------- */}
              {/* Logo */}
              {/* ------------------------------------------- */}
              {/* <Logo img="/images/logos/dark-logo.svg" /> */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  paddingX: "25px",
                  paddingTop: "25px",
                  gap: 1.5,
                  position: "relative",
                  "&:hover": {
                    "& .zap-icon": {
                      transform: "scale(1.1)",
                      filter: "drop-shadow(0 0 8px rgba(93, 135, 255, 0.5))",
                    },
                    "& .text-container": {
                      transform: "translateX(4px)",
                    },
                  },
                }}
              >
                <Box
                  className="zap-icon"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    transition: "all 0.3s ease-in-out",
                  }}
                >
                  <AutoGraphIcon
                    sx={{
                      display: { xs: "none", md: "flex" },
                      mr: 1,
                      color: "#2196f3",
                    }}
                  />
                </Box>
                <Typography
                  variant="h6"
                  noWrap
                  component={motion.div}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  sx={{
                    mr: 2,
                    display: { xs: "none", md: "flex" },
                    fontFamily: "Poppins",
                    fontWeight: 700,
                    color: "#1a237e",
                    fontSize: "25px",
                    textDecoration: "none",
                  }}
                >
                  Blitzcon-AI
                </Typography>
              </Box>
              <Box>
                {/* ------------------------------------------- */}
                {/* Sidebar Items */}
                {/* ------------------------------------------- */}
                <SidebarItems />
                {/* <Upgrade /> */}
              </Box>
            </Sidebar>
          </Box>
        </Drawer>
      </Box>
    );
  }

  return (
    <Drawer
      anchor="left"
      open={isMobileSidebarOpen}
      onClose={onSidebarClose}
      variant="temporary"
      PaperProps={{
        sx: {
          boxShadow: (theme) => theme.shadows[8],
          ...scrollbarStyles,
        },
      }}
    >
      {/* ------------------------------------------- */}
      {/* Sidebar Box */}
      {/* ------------------------------------------- */}
      <Box px={2}>
        <Sidebar
          width={"270px"}
          collapsewidth="80px"
          isCollapse={false}
          mode="light"
          direction="ltr"
          themeColor="#5d87ff"
          themeSecondaryColor="#49beff"
          showProfile={false}
        >
          {/* ------------------------------------------- */}
          {/* Logo */}
          {/* ------------------------------------------- */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              paddingX: "25px",
              paddingTop: "25px",
              gap: 1.5,
              position: "relative",
              "&:hover": {
                "& .zap-icon": {
                  transform: "scale(1.1)",
                  filter: "drop-shadow(0 0 8px rgba(93, 135, 255, 0.5))",
                },
                "& .text-container": {
                  transform: "translateX(4px)",
                },
              },
            }}
          >
            <Box
              className="zap-icon"
              sx={{
                display: "flex",
                alignItems: "center",
                transition: "all 0.3s ease-in-out",
              }}
            >
              <AutoGraphIcon
                sx={{
                  display: { xs: "flex", md: "none" },
                  mr: 1,
                  color: "#2196f3",
                }}
              />
            </Box>
            <Typography
              variant="h6"
              noWrap
              component={motion.div}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                fontFamily: "Poppins",
                fontWeight: 700,
                color: "#1a237e",
                fontSize: "20px",
                textDecoration: "none",
              }}
            >
              Blitzcon-AI
            </Typography>
          </Box>
          {/* ------------------------------------------- */}
          {/* Sidebar Items */}
          {/* ------------------------------------------- */}
          <SidebarItems />
          {/* <Upgrade /> */}
        </Sidebar>
      </Box>
      {/* ------------------------------------------- */}
      {/* Sidebar For Mobile */}
      {/* ------------------------------------------- */}
    </Drawer>
  );
};

export default MSidebar;
