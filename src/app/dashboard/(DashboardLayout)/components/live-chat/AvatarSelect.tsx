import {
  FormControl,
  Select,
  MenuItem,
  SelectChangeEvent,
  Avatar,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { AVATARS } from "@/utils/constants";

const StyledSelect = styled(Select)(({ theme }) => ({
  "& .MuiSelect-select": {
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(1),
  },
}));

interface AvatarSelectProps {
  value: string;
  onChange: (id: string) => void;
}

const AvatarSelect = ({ value, onChange }: AvatarSelectProps) => {
  return (
    <FormControl fullWidth>
      <StyledSelect
        value={value}
        onChange={(e) => onChange(e.target.value as string)}
        displayEmpty
        sx={{ mb: 3 }}
      >
        <MenuItem value="" disabled>
          Select an AI Assistant
        </MenuItem>
        {AVATARS.map((avatar) => (
          <MenuItem key={avatar.id} value={avatar.id}>
            <Avatar
              src={`/avatars/${avatar.id}.png`}
              alt={avatar.name}
              sx={{ width: 32, height: 32 }}
            />
            {avatar.name}
          </MenuItem>
        ))}
      </StyledSelect>
    </FormControl>
  );
};

export default AvatarSelect;
