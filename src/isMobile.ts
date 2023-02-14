import { useMediaQuery } from "@mui/material";

export function IsMobile() {
  return useMediaQuery("(max-width:992px");
}
