import { Box, ListItem, ListItemButton, ListItemText } from "@mui/material";
import React from "react";

const Sidebar = () => {
  return (
    <div className="w-[250px]">
      <h2 className="text-center mt-1 text-gray-600">Your Files</h2>
      <Box
        sx={{
          width: "100%",
          height: "92vh",
          maxWidth: 360,
          overflow: "scroll",
        }}
      >
        {[
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
          21, 22, 23, 24, 25,
        ].map((i) => (
          <ListItem key={i} component="div" disablePadding>
            <ListItemButton>
              <ListItemText primary={`File${i}.js`} />
            </ListItemButton>
          </ListItem>
        ))}
      </Box>
    </div>
  );
};

export default Sidebar;
