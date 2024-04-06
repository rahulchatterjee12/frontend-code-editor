import React, { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Box, ListItem, ListItemButton, IconButton } from "@mui/material";
import getProfile from "@/helper/auth/getProfile";
import deleteCode from "@/helper/code/deleteCode";
import DeleteIcon from "@mui/icons-material/Delete";

const getExtension = (lang) => {
  if (lang === "python") return "py";
  else if (lang === "cpp") return "cpp";
  else if (lang === "c") return "c";
  else if (lang === "javascript") return "js";
};

const CodeList = ({ codes, fetchCodeFiles }) => {
  const router = useRouter();
  const path = usePathname();
  const [loggedIn, setLoggedIn] = useState(false);

  const checkLogin = () => {
    getProfile().then((res) => {
      if (res?.status === 200) setLoggedIn(true);
    });
  };

  useEffect(() => {
    checkLogin();
  }, []);

  const deleteCodeById = (id) => {
    deleteCode(id).then((res) => {
      fetchCodeFiles();
      router.push("/");
    });
  };

  useEffect(() => {
    if (loggedIn) fetchCodeFiles();
  }, [loggedIn]);

  if (!loggedIn) return <></>;

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
        {codes.map((code) => (
          <ListItem
            key={code._id}
            component="div"
            disablePadding
            sx={{
              background: path === `/${code._id}` ? "#d0d0d0" : "",
              border: "1px solid gray",
              marginY: 0.5,
              borderRadius: 2,
            }}
          >
            <ListItemButton
              disableRipple
              onClick={() => router.push(`/${code._id}`)}
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div className="flex flex-nowrap">
                <img
                  src={`/icons/${code.language}.webp`}
                  alt="js"
                  className="w-[18px] h-[18px] content-center mr-2 rounded-sm"
                />
                <h5
                  className={`text-gray-${
                    path === `/${code._id}` ? "900" : "700"
                  } font-serif text-sm`}
                >{`${code.filename}.${getExtension(code.language)}`}</h5>
              </div>
              <IconButton
                size="small"
                sx={{
                  padding: 0,
                  margin: 0,
                }}
                variant="text"
                color="error"
                onClick={() => deleteCodeById(code._id)}
              >
                <DeleteIcon />
              </IconButton>
            </ListItemButton>
          </ListItem>
        ))}
      </Box>
    </div>
  );
};

export default CodeList;
