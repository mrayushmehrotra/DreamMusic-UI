

import React from "react";

const ArtistDetails = () => {
  return (
    <div className="w-[882px] h-[400px] flex items-center justify-center ml-10 top-[104px] left-[537px] gap-[0px]">
<div className="skin relative bottom-[-50px]  ">
<img src="/Background.png"  />
</div>

<div className="absolute flex   text-white text-left">
       <div className="flex relative items-center gap-3 mb-2 left-14">
               {/* Verified Badge */}
           <img
             src="/Verified.png"
             alt="Verified"
             className="w-6 h-6 object-contain"
           />
           <div >

           <h1 className="text-4xl font-bold">Michael Jackson</h1>
         <p className="text-gray-300 text-xl">27,852,501 monthly listeners</p>
           </div>
         </div>
         <div className="relative overflow-x-hidden bottom-8">

       <img
         src="/Micheal_Jackson_img.png"
         alt="Michael Jackson"
         className=" h-[450px] "
         />
         </div>
       </div>

    </div>
  )

}

export default ArtistDetails;
