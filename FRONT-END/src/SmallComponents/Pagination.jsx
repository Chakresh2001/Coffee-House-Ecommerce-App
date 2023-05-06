import { Box, Button } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const Pagination = ({page,handelPage}) => {


    let [total, setTotal] = useState(0)

    useEffect(()=>{
        axios.get(`https://mock-chak.onrender.com/coffee`)
        .then((res)=>{
            let data = res.data
            let val = Math.ceil(data.length/6)
            setTotal(val)
        })
    },[])

    let arr = []
    for(let i=1; i<=total; i++){
        arr.push(i)
    }



  return (
    <div>
        <Box display={"flex"} justifyContent={"center"} gap="20px">
            {
                arr.map((ele)=>(
                    <Button borderRadius={"50%"} backgroundColor={ele==page ? "orange.400" : "white"} onClick={()=>handelPage(ele)} border="1px solid black">{ele}</Button>
                ))
            }
        </Box>
    </div>
  )
}
