// import { useDisclosure } from "@chakra-ui/hooks";
// import { ViewIcon } from "@chakra-ui/icons";
// import { Button, IconButton, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from "@chakra-ui/react";
// import React from "react";

// const ProfileModal = ({ user, children }) => {
//   const { isOpen, onOpen, onClose } = useDisclosure();

//   return (
//     <>
//       {children ? (
//         <span onClick={onOpen}>{children}</span>
//       ) : (
//         <IconButton
//           display={{ base: "flex" }}
//           icon={<ViewIcon />}
//           onClick={onOpen}
//         />
//       )}

//       <Modal size={"md"} isOpen={isOpen} onClose={onClose} >
//         <ModalOverlay />
//         <ModalContent>
//           <ModalHeader
//            fontSize={"20px"}
//            display="flex"
//            justifyContent={"center"}
//           >{user.name}
//           </ModalHeader>
//           <ModalCloseButton />
//           <ModalBody display={"flex"} flexDir="column" alignItems={"center"} justifyContent="space-between">
//            <Image 
//            borderRadius={"full"}
//            boxSize="100px"
//            src={user.pic}
//            alt={user.name}
//            mb="10px"

//            />
           
//           </ModalBody>

//           <ModalFooter display={"flex"} alignItems="center">
            
           
//           </ModalFooter>
//         </ModalContent>
//       </Modal>
//     </>
//   );
// };

// export default ProfileModal;
