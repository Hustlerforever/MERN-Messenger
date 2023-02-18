// import {
//   Button,
//   Tooltip,
//   Text,
//   Menu,
//   MenuButton,
//   Avatar,
//   MenuList,
//   MenuItem,
//   MenuDivider,
// } from "@chakra-ui/react";
// import { BellIcon, ChevronDownIcon } from "@chakra-ui/icons";
// import { Box } from "@chakra-ui/layout";
// import React, { useState } from "react";
// import { ChatState } from "../../Context/ChatProvider";
// import ProfileModal from "./ProfileModal";

// const SideDrawer = () => {
//   const [search, setsearch] = useState();
//   const [searchResult, setsearchResult] = useState([]);
//   const [loading, setloading] = useState(false);
//   const [loadingChat, setloadingChat] = useState();
//   const { user } = ChatState();

  
//   return (
//     <div>
//       <Box
//         display="flex"
//         justifyContent="space-between"
//         alignItems="center"
//         background="blue.300"
//         w="100%"
//         p="10px 20px 10px 20px "
//         boxShadow="xl"
//       >
//         <Tooltip label="Search user to chat" hasArrow placement="bottom-end">
//           <Button variant="ghost">
//             <i class="fa-solid fa-magnifying-glass"></i>
//             <Text display={{ base: "none", md: "flex" }}>Search User</Text>
//           </Button>
//         </Tooltip>
//         <div>
//           <Menu>
//             <MenuButton p={1}>
//               <BellIcon fontSize={"2xl"} m="1" />
//             </MenuButton>
//           </Menu>
//           <Menu>
//             <MenuButton
//               as={Button}
//               rightIcon={<ChevronDownIcon />}
//               bg="blue.200"
//             >
//               {/*name = user.name gives initials in avatar if pic is not available */}
//               <Avatar
//                 size="sm"
//                 cursor="pointer"
//                 name={user.name}
//                 src={user.pic}
//               />
//             </MenuButton>
//             <MenuList>
//               <ProfileModal user={user}>

//               <MenuItem>My Profile</MenuItem>

//               </ProfileModal>
//               <MenuDivider/>
//               <MenuItem>Logout</MenuItem>
//             </MenuList>
//           </Menu>
//         </div>
//       </Box>
//     </div>
//   );
// };

// export default SideDrawer;
