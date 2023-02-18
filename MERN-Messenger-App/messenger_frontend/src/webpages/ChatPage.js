import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ChatState } from '../Context/ChatProvider';
import {Box} from "@chakra-ui/layout"
import SideDrawer from '../components/miscellaneous/SideDrawer';
import MyChats from '../components/MyChats';
import Chatbox from '../components/Chatbox';


const Chatpage = () => {
  const [fetchAgain, setFetchAgain] = useState(false);
  const { user } = ChatState();

  return (
    <div style={{ width: "100%" }}>
      {/* {user && <SideDrawer />}
      <Box display='flex' bg="" justifyContent="space-between"  w="100%" h="90vh" p="10px">
        
        {user && <MyChats fetchAgain={fetchAgain} />}
        

        
          {user && (<Chatbox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />)}
       
      </Box> */}
    </div>
  );
};

export default Chatpage;