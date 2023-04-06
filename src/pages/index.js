import Appbar from "./AppBar";
import Image from "next/image";
import styles from "./css/MainPage.module.css";
import Footer from "./Footer"
export default function Home() {
  return (
    <>
      <div>
        <Appbar />
        <div className=" w-full h-[33rem] bg-white">
          <div className="flex ">
            <div className="flex flex-col flex-nowrap">
              <div className=" pt-20 ml-10 text-7xl" id={styles.TextShoes}>
                <h1>Sports Shoes</h1>
                <h1 className=" text-5xl" id={styles.TextShoes2}>
                  Men’s collection
                </h1>
              </div>
              <div></div>
              <div className="flex-col ml-10">
                <h3 className="  ">Find your true style with shoexpress</h3>
                <h3> and explore the variety of playful,</h3>
                <h3> colourful designs!</h3>
              </div>

              <div className="ml-10 pt-20" id={styles.FirstBuy}>
                <button className=" w-[6rem] h-[3rem] text-white bg-lime-300 rounded-lg hover:bg-slate-200">
                  Shop Now{" "}
                </button>
              </div>
            </div>
            <div className="flex flex-col">
              <div
                className="flex justify-center pl-[20rem] mt-5"
                id={styles.ImageShoes}
              >
                <div
                  className="flex justify-center items-center w-[15rem] h-[15rem] bg-lime-300 rounded-full"
                  id={styles.ImageShoes}
                >
                  <Image src="/image 4.png" alt="" width={500} height={500} />
                </div>
              </div>
              <div
                className="flex row justify-center pl-[20rem] mt-5"
                id={styles.ImageShoes}
              >
                <div
                  className="flex justify-center items-center w-[15rem] h-[15rem] bg-lime-300 rounded-full"
                  id={styles.ImageShoes}
                >
                  <Image src="/image 1.png" alt="" width={500} height={500} />
                </div>
              </div>
            </div>
            <div
              className="flex row justify-center items-center  mt-5"
              id={styles.ImageShoes1}
            >
              <div
                className="flex justify-center items-center w-[15rem] h-[15rem] bg-lime-300 rounded-full"
                id={styles.ImageShoes}
              >
                <Image src="/t.png" alt="" width={500} height={500} />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-3 w-full h-[35rem] bg-lime-300">
          <div className="flex justify-end pr-5 pt-5">
            <div className="flex text-2xl font-bold">
              <h2>70% off</h2>
            </div>
          </div>
          <div className="relative">
            <div
              className="flex justify-center items-center flex-col text-8xl text-[#12122] font-bold z-10 opacity-50"
              id={styles.TextShoesBlack}
            >
              <h1 className="pr-[30rem]" id={styles.TextShoesBlack2}>
                BLACK
              </h1>
              <h1>TOGETHER </h1>
              <h1 className="pl-[19rem]" id={styles.TextShoesPower}>
                IN POWER
              </h1>
              <h1 className="pl-[40rem]" id={styles.TextShoesFriday}>
                FRIDAY
              </h1>
            </div>
            <div
              className="absolute inset-0 z-40 flex justify-center items-center"
              id={styles.ImageShoesNew}
            >
              <Image
                id={styles.ImageShoesNew2}
                src="/image 16.png"
                alt=""
                width={500}
                height={500}
              />
            </div>
          </div>
          <div className="pl-[12rem]" id={styles.BuyShoes}>
            <button className="bg-white w-[8rem] h-[3rem]  rounded-lg hover:bg-lime-400 ">
              Shop Now
            </button>
          </div>
        </div>
        <div className="w-full h-[10rem] bg-white">
          <div className="  flex justify-center items-center text-5xl">
            <h1 className="mt-3 font-bold" id={styles.Popularnow}>
              POPULAR RIGHT NOW
            </h1>
          </div>
          <div className="flex justify-center items-center mt-2">
            <button className="mr-3  w-[8rem] h-[3rem] text-black border border-lime-300 rounded-lg hover:bg-lime-300">
              Sneakers
            </button>
            <button className="w-[8rem] h-[3rem] text-black border border-lime-300 rounded-lg hover:bg-lime-300">
              Sports Shoes
            </button>
            <button className="ml-3 w-[8rem] h-[3rem] text-black border border-lime-300 rounded-lg hover:bg-lime-300">
              Sale
            </button>
          </div>
        </div>

        <div className="text-4xl pl-[10rem]" id={styles.TextNewArrival}>
          <h1>New Arrival</h1>
        </div>

        <div className="w-full h-[30rem] ">
          <div
            className=" flex flex-row flex-wrap  items-center justify-center"
            id={styles.NewShoesSport}
          >
            <div
              className="relative w-[28rem] h-[25rem] ml-[1rem] "
              id={styles.NewShoesSport}
            >
              <Image
                src="/image 18.png"
                alt=""
                layout="fill"
                className="z-10"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
                <h1 className="text-white text-4xl font-bold flex flex-warp ">
                  Nike Shoes
                </h1>
                <h1 className="text-white text-4xl font-bold flex flex-warp ">
                  Zoom-X
                </h1>
              </div>
            </div>
            <div
              className="relative w-[28rem] h-[25rem] ml-[1rem]"
              id={styles.NewShoesSport}
            >
              <Image src="/b.png" alt="" layout="fill" className="z-10" />
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <h1 className="text-white text-4xl font-bold flex flex-warp "></h1>
              </div>
            </div>

            <div
              className="relative w-[28rem] h-[25rem] ml-[1rem]"
              id={styles.NewShoesSport}
            >
              <Image
                src="/image 19.png"
                alt=""
                layout="fill"
                className="z-10"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
                <h1 className="text-white text-4xl font-bold flex flex-warp ">
                  Asics
                </h1>
                <h1 className="text-white text-4xl font-bold flex flex-warp ">
                  Porter Japan
                </h1>
              </div>
            </div>
            <div
              className="relative w-[28rem] h-[25rem] ml-[1rem]"
              id={styles.NewShoesSport}
            >
              <Image src="/vans.jpg" alt="" layout="fill" className="z-10" />
              <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
                <h1 className="text-white text-4xl font-bold flex flex-warp ">
                  Vans
                </h1>
                <h1 className="text-white text-4xl font-bold flex flex-warp ">
                  Old Skool
                </h1>
              </div>
              
            </div>
            <div className="w-full h-[5rem] flex items-center justify-center" id={styles.TextWeekly}>
          <h1 className="text-4xl font-bold">Our weekly pick</h1>
        </div>
          <div className="  w-full h-[30rem] mt-[2rem] ">
  
          <div className="flex flex-warp" id ={styles.AllSell}>
            <div className="relative w-[28rem] h-[25rem] ml-[3rem]  " id ={styles.ImageShoesSell}>
              <Image
                src="/imgshoes.png"
                alt=""
                layout="fill"
                className="z-10"
                id={styles.ImageShoesSell2}
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
                <h1 className="text-white text-4xl font-bold flex  ">
                  Nike
                </h1>
                <h1 className="text-white text-4xl font-bold flex  ">
                  the joyride
                </h1>
              </div>
            </div>
          
            <div className="w-[50%] h-[auto] flex text-center  text-4xl font-bold flex-col   ">
            <div  id ={styles.InfoSell}  >
              <h1 className="">Nike- The Joyride</h1>

              <h1 className="text-[#007D8B] ">$390</h1>
              <div className="flex flex-row justify-center items-center">
                <div className="flex text-start mr-[5.5rem] flex-col">
                  <h1>Colour</h1>
                  <div>
                    <input
                      type="radio"
                      className="w-[2rem] h-[2rem] ml-[1rem]"
                    ></input>
                    <input
                      type="radio"
                      className="w-[2rem] h-[2rem] ml-[1rem]"
                    ></input>
                  </div>
                </div>
                <div className="flex text-center pl-[2rem] flex-col">
                  <h1>Size</h1>
                  <div>
                    <select className="border outline-white">
                      <option>38</option>
                      <option>39</option>
                      <option>40</option>
                      <option>41</option>
                      <option>42</option>
                      <option>43</option>
                      <option>44</option>
                      <option>45</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center flex-col">
                <Image
                  src="/Group 20.png"
                  alt=""
                  width={500}
                  height={500}
                  className=""
                />
                <div className="pt-[1rem] text-white w-[31rem] h-[4.5rem] bg-lime-400 text-center  rounded-3xl" id={styles.ButtonBuy}>
                  <button>Buy It Now!</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
      
      </div>
    
          </div>
          <div className="flex justify-center items-center flex-col  w-full h-[20rem] bg-lime-300" id ={styles.Become}>
      <div className=" ">
        <h1 className="text-5xl"id={styles.Member}>become a member and get 20% off</h1>
        <div className="flex justify-center items-center mt-3">
        <button className="text-xl w-[18rem] h-[4.5rem] bg-white  rounded-3xl">Sign up for free now</button>
        </div>
      </div>
      
      </div>
        <Footer/>
        </div>
      </div>
    </>
  );
}
