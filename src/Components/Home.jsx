import { useEffect } from "react"
import { Delivery } from "./Delivery"
import { Pics } from "./Pics"
import { TopPicks } from "./TopPicks"

export const Home = () => {
  useEffect(()=>{
    document.title = "QuickFood";
  },[])
  return (
    <>
        <Pics/>
        <Delivery/>
        <TopPicks/>
    </>
  )
}
