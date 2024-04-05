import React from "react";
import { usePathname, useRouter } from "next/navigation";
import { Box, ListItem, ListItemButton, ListItemText } from "@mui/material";

const Sidebar = () => {
  const router = useRouter();
  const path = usePathname();
  return (
    <div className="w-[250px]">
      <h2 className="text-center mt-1 text-gray-600">Your Files</h2>
      <Box
        sx={{
          width: "100%",
          height: "85vh",
          maxWidth: 360,
          overflowY: "scroll",
          paddingX: 1,
        }}
      >
        {[
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
          21, 22, 23, 24, 25,
        ].map((i) => (
          <ListItem
            key={i}
            component="div"
            disablePadding
            sx={{
              background: path === `/${i}` ? "#d0d0d0" : "",
              border: "1px solid gray",
              marginY: 0.5,
              borderRadius: 2,
            }}
          >
            <ListItemButton disableRipple onClick={() => router.push(`/${i}`)}>
              <img
                src="/icons/js.webp"
                alt="js"
                className="w-[18px] h-[18px] content-center mr-2 rounded-sm"
              />
              <h5
                className={`text-gray-${
                  path === `/${i}` ? "900" : "700"
                } font-serif text-sm`}
              >{`File${i}.js`}</h5>
            </ListItemButton>
          </ListItem>
        ))}
      </Box>
    </div>
  );
};

export default Sidebar;
