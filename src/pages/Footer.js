
import styles from "./css/MainPage.module.css";
function Footer() {
 
  return (
    <>
         <div className=" flex justify-center items-center w-full h-[20rem] bg-[#F6835F] text-white mt-[3rem]">
    <div className=" flex flex-row " >         
<div className ="text-3xl " id={styles.TextFooter}>
    <h1>product</h1>
    <h1 className="text-xl text-center">Shoes</h1>
</div>
<div className="text-3xl pl-[4rem]" id={styles.TextFooter2}>
    <h1>Category</h1>
    <div className="text-xl text-center">
    <h1  >men</h1>
    <h1  >New In</h1>
    <h1 >Weekly Pick</h1>
    </div>
</div>
<div className="text-3xl pl-[4rem]"id={styles.TextFooter}>
    <h1 className="text-center">Company</h1>
    <div className="text-xl text-center">
    <h1 >About us</h1>
    <h1 >Contact us</h1>
    <h1 >Payment Options</h1>
    <h1 >Track Order</h1>
    <h1 >Support</h1>
    <h1 >Vouchers</h1>
    <h1 >Size Charts</h1>
    </div>
</div>
<div className="text-3xl pl-[4rem] "id={styles.TextFooter}>
    <h1>Follow</h1>
    <h1 className="text-xl ">Fackbook</h1>
    <h1 className="text-xl ">Instagram</h1>
    <h1 className="text-xl ">Youtube</h1>
    </div>   
</div>
</div>
    </>
  );
}

export default Footer;
