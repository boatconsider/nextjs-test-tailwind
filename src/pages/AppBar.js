import {  Drawer } from 'antd';
import { useState } from 'react';
import styles from "./css/Appbar.module.css";
import { AiOutlineMenu } from "react-icons/ai";
import { useRouter } from 'next/router'
function AppBar() {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const router = useRouter()
  return (
    <>
      <div
        className="flex justify-between items-center pl-2 h-12 bg-gradient-to-r from-lime-300 to-lime-200 border-0 rounded-none"
        id={styles.BgAppbar}
      >
        <div className="flex items-center row ">
          <AiOutlineMenu className="text-lg ml-1 cursor-pointer hidden" id ={styles.HamMenu} onClick={showDrawer}/>
      <Drawer  placement="left" onClose={onClose} open={open}>
        <div className="flex flex-col text-xl ">
      <button  className="hover:bg-lime-300 rounded-md" onClick={() => router.push('/')}>
            Home
          </button>
          <button className=" mt-1 hover:bg-lime-300 rounded-md">
            Shop
          </button>
 
          <button className="mt-1 hover:bg-lime-300 rounded-md"onClick={() => router.push('/SignUpPage')}>
          Sign Up
          </button>
          <button className ="mt-1 hover:bg-lime-300 rounded-md" onClick={() => router.push('/LoginPage')}>
            Login
          </button>
          </div>
      </Drawer>
          <h1 className=" flex  items-center text-lg font-medium pl-1 cursor-pointer  "onClick={() => router.push('/')}>
            ShoeXpress
          </h1>
        </div>
        <div class="flex items-center justify-evenly pr-3">
          <button className="my-2 md:my-0 md:mx-3 " onClick={() => router.push('/')} id={styles.ButtonAppBar}>
            Home
          </button>
          <button className="my-2 md:my-0 md:mx-3" onClick={() => router.push('/Shop')} id={styles.ButtonAppBar}>
            Shop
          </button>

          <button className="my-2 md:my-0 md:mx-3" onClick={() => router.push('/SignUpPage')} id={styles.ButtonAppBar}>
          Sign Up
          </button>
          <button  onClick={() => router.push('/LoginPage')} className="my-2 md:my-0" id={styles.ButtonAppBar}>
            Login
          </button>
        </div>
      </div>
    </>
  );
}

export default AppBar;
