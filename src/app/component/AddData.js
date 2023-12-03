"use client"

import { useState, useEffect } from "react"
import { getAds, postAd } from "../config/firebase"


const AddData = () => {

    const [input, setInput] = useState("")
    const [updateFile, setUpdateFile] = useState("")
    const [adpost, setAdPost] = useState()

    const postData = () => {

        postAd(input, updateFile[0])
    }

    useEffect(() => {

        getData()

    }, [])

    const getData = async () => {
        const adpost = await getAds()
        setAdPost(adpost)
    }

    if (!adpost) {
        return <>Loading...</>
    }




    console.log('input....', input)
    console.log("updateFile", updateFile)

    return (
        <div className="flex gap-4 border-b border-gray-300 pb-4 ">
            <div>
            <img className="w-[44px] h-[44px] object-cover rounded-full mt-[20px]" src="./avatar.png" alt="dp" />

            <input
                className="outline-none border-none w-[100%] text-[18px] placeholder:text-gray-600 mt-[20px]"
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="What's on your mind?"
            />

            <button
                onClick={postData}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
                Post
            </button>
            <input className="mt-[20px]" type="file" onChange={(e) => setUpdateFile(e.target.files)} />

            </div>

            <div className="outline-none border-none w-[100%] text-[18px] placeholder:text-gray-600 mt-[100px] overflow-y-scroll h-72">
                {adpost.map(function (items) {
                    return (
                        <>


                            {items.input}

                            <img src={items.imageUrl} style={{width:"600px", height:"400px", alignItems:"center"}}/>

                        </>
                    )
                })}
            </div>


        </div>
    )
}

export default AddData