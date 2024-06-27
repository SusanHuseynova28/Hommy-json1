async function ApiData() {
    const response = await fetch("http://localhost:3001/data");
    const fromApi = await response.json();
    console.log(fromApi);
  
    let cardcreator = document.querySelector(".maincardcontainerfromapi");
  
    fromApi.map((item) => {
      cardcreator.innerHTML += `<div class="flex justify-center">
                <div
                class="w-[400px] h-[500px] mx-auto  bg-white rounded-lg shadow-md flex flex-col relative overflow-hidden">
                <div class="absolute top-2.5 left-2.5 right-2.5 flex justify-between items-center z-10">
                    <div class="flex gap-2">
                        <button class="px-3 py-1 h-[25px] text-xs font-bold text-white bg-green-700 rounded">${item?.btn1}</button>
                        <button
                            class="px-3 py-1 h-[25px]  text-xs font-bold text-white rounded bg-[rgba(11,33,50,0.4)] border border-[rgba(11,33,50,0.4)] hover:bg-red-700">${item?.btn2}
                            </button>
                    </div>
                    <div class="flex gap-2">
                        <div
                            class="w-[30px] h-[30px] flex justify-center items-center bg-[rgba(11,33,50,0.4)] border border-[rgba(11,33,50,0.4)] rounded cursor-pointer hover:bg-red-700">
                            <i class="fa-solid fa-arrow-right-arrow-left text-white"></i>
                        </div>
                        <div
                            class="w-[30px] h-[30px] flex justify-center items-center bg-[rgba(11,33,50,0.4)] border border-[rgba(11,33,50,0.4)] rounded cursor-pointer hover:bg-red-700">
                            <i class="fa-regular fa-heart text-white"></i>
                        </div>
                        <div
                            class="w-[30px] h-[30px] flex justify-center items-center bg-[rgba(11,33,50,0.4)] border border-[rgba(11,33,50,0.4)] rounded cursor-pointer hover:bg-red-700">
                            <i class="fa-regular fa-eye text-white"></i>
                        </div>
                    </div>
                </div>
                <div class="w-full h-[350px] rounded-t-lg overflow-hidden flex justify-center items-center relative ">
                    <img src="${item?.img}" alt=""
                        class="w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-110">
                    <button
                        class="absolute bottom-2.5 left-2.5 px-4 py-1 bg-white border border-gray-300 rounded text-xs font-bold text-black hover:bg-red-700 hover:border-red-700 hover:text-white mb-1.75">${item?.btn3}</button>
                </div>
                <div class="pr-6 pl-6 pt-3  flex flex-col gap-4">
                    <h1 class="text-xl  font-bold hover:text-red-600">${item?.text}</h1>
    
                    <p class="text-base text-gray-500 "><i class="fa-solid fa-location-dot pr-2"></i>${item?.location}</p>
                    
                    <div class="flex justify-start gap-6 ">
                        <div class="flex items-center text-l">
                            <i class="fa-solid fa-bed mr-1.25 pr-2"></i>
                            <span class="font-semibold">${item.bedroom}</span>
                        </div>
                        <div class="flex items-center text-l">
                            <i class="fa-solid fa-bath mr-1.25 pr-2"></i>
                            <span class="font-semibold">${item.bathroom}</span>
                        </div>
                        <div class="flex items-center text-l">
                            <i class="fa-solid fa-ruler mr-1.25 pr-2"></i>
                            <span class="font-semibold">600 SqFT</span>
                        </div>
                    </div>
                    <div class="w-full border">
    
                    </div>
                    <div class="flex justify-between items-center ">
                        <div class="flex items-center">
                            <img src=${item?.jpg} alt=""
                                class="w-[50px] h-[50px] rounded-full mr-3 mb-3">
                            <span class="mb-2"
                            >${item?.name} </span>
                        </div>
                        <div class="text-xl items-end font-bold flex mb-2 ">${item?.price}
                        <p class="text-base text-gray-500">${item?.sqft}</p></div>
                    </div>
                </div>
              </div>
    
              
            </div>
   
            

    `;
    });
  }
  ApiData();
  
