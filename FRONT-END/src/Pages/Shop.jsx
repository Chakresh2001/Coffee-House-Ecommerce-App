import { Image, Box, Text, Flex, Button, Spinner   } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { CoffeCard } from '../SmallComponents/CoffeCard'
import axios from 'axios'
import { Pagination } from '../SmallComponents/Pagination'
import { Footer } from './Footer'

export const Shop = () => {

  let [order, setOrder] = useState("")

  let [category, setCategory] = useState("")

  let [data, setData] = useState([])

  let [load, setLoad] = useState(false)

  let [page, setPage] = useState(1)



  let getApi = (url, category, order)=>{

    if(category){
      return url = `${url}&category=${category}`
    }
    if(order){
      return url = `${url}&_sort=price&_order=${order}`
    }
    if(category && order){
      return url = `${url}&category=${category}&_sort=price&_order=${order}`
    }
    
    return url
  }

  let fetchData =()=>{

    setLoad(true)

    let api = getApi(`https://mock-chak.onrender.com/coffee?_limit=6&_page=${page}`, category, order)

    axios.get(api)
    .then((res)=>{
      setLoad(false)
      let result = res?.data
      setData(result)
    })

  }

  let handelPage = (val)=>{
    setPage(val)
  }

  useEffect(()=>{
    fetchData()
  },[category,order, page])







  return (
    <div>

      <Box mt="50px" backgroundImage="https://www.bialetti.com/media/wysiwyg/immersive-banner-ita-complete.png" backgroundRepeat={"no-repeat"} backgroundSize={"100% 500px"} h="300px"  backgroundPosition={"center"}>
        
        <Box color="white" fontWeight={"bold"} fontSize={"40px"} position={"absolute"} top="400px" left="60%">
        <Text>The essence of</Text>
        <Text>Italian coffee culture.</Text>
        </Box>
      
      </Box>
      
       <Box mt="30px" w="80%" >
        <Flex justifyContent={"space-evenly"}>
          <Button _hover={{borderRadius:"25px", backgroundColor:"#C93809", color:"white" }} backgroundColor={"white"} color={"black"} borderRadius={"none"} onClick={()=>setCategory("")}>ALL</Button>
          <Button _hover={{borderRadius:"25px", backgroundColor:"#C93809", color:"white" }} backgroundColor={"white"} color={"black"} borderRadius={"none"} onClick={()=>setCategory("Coffee Maker")}>COFFEE MACHINE</Button>
          <Button _hover={{borderRadius:"25px", backgroundColor:"#C93809", color:"white" }} backgroundColor={"white"} color={"black"} borderRadius={"none"} onClick={()=>setCategory("Bialetti system capsules ")}>BIALETTI CAPSULES</Button>
          <Button _hover={{borderRadius:"25px", backgroundColor:"#C93809", color:"white" }} backgroundColor={"white"} color={"black"} borderRadius={"none"} onClick={()=>setCategory("Ground")}>GROUND COFFEE</Button>
          <Button _hover={{borderRadius:"25px", backgroundColor:"#C93809", color:"white" }} backgroundColor={"white"} color={"black"} borderRadius={"none"} onClick={()=>setCategory("Espresso Machines")}> ESPRESSO MACHINES</Button>
          <Button _hover={{borderRadius:"25px", backgroundColor:"#C93809", color:"white" }} backgroundColor={"white"} color={"black"} borderRadius={"none"} onClick={()=>setCategory("Coffee accessories")}>COFFEE ACCESSORIES</Button>
        </Flex>
       </Box>
          <hr />

          <Box ml="100px" >
            <select style={{marginTop:"20px" , fontSize:"14px", fontWeight:"-moz-initial"}} name="price">
              <option value="" style={{border:"none"}} onChange={(e)=>setOrder(e.target.value)}>SORTING</option>
              <option value="asc" onChange={(e)=>setOrder(e.target.value)}>High to Low</option>
              <option value="desc" onChange={(e)=>setOrder(e.target.value)}>Low To High</option>
            </select>

            <Box mt="30px">

              <Text fontWeight={"bold"} fontSize={"30px"}>COFFEE</Text>
              
              <Text fontWeight={"light"} fontSize={"12px"} mt={"5px"}>A PERFECT COMBINATION OF FLAVORS AND AROMAS</Text>

            </Box>

          </Box>
            
            <Box  bg="#E0D5C5" mt="50px" padding={"20px"}>
            <Box mt="30px" w="95%" display={"grid"} gridTemplateColumns={"1fr 1fr 1fr"}  ml="80px" gap="10px" >


                {
                  load ? (
                    <Spinner
  thickness='4px'
  speed='0.65s'
  emptyColor='gray.200'
  color='blue.500'
  size='xl'
/>
                  ) : (
                    <>
                    
                    {
                  data.map((ele)=>(
                    <CoffeCard
                    {...ele}
                    />
                  ))
                }
                    
                    </>
                  )
                }

            </Box>
            </Box>

            <Box mt="80px">
                {/* pagination */}
                <Pagination
                page={page}
                handelPage={handelPage}
                />
            </Box>

                <Box my="80px">
                  <Footer/>
                </Box>
            






    </div>
  )
}
