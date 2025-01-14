import { Box, keyframes } from "@mui/material";

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0px); }
`;

const AnimatedBackground: React.FC = () => {
  return (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        overflow: "hidden",
        zIndex: 0,
      }}
    >
      {[...Array(30)].map((_, i) => (
        <Box
          key={i}
          sx={{
            position: "absolute",
            width: "4px",
            height: "4px",
            background: "white",
            opacity: Math.random(),
            animation: `${float} ${Math.random() * 3 + 2}s linear infinite`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </Box>
  );
};

export default AnimatedBackground;
