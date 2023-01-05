import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setWinWidth } from "../redux/ui/uiSlice"

const useViewport = () => {
    const dispatch = useDispatch()
    const { winWidth } = useSelector((state)=> state.ui)


    const handleResize = () => {
        dispatch(setWinWidth(window.innerWidth))
    }
    useEffect(() => {
        window.addEventListener('resize', handleResize)

        return(()=>{
            window.removeEventListener('resize', handleResize)
        })
    }, [])

    return winWidth
}

export {useViewport}