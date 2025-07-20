"use client"

import LocomotiveScroll from "locomotive-scroll";
import { useLayoutEffect } from "react"

const Initialize = () => {

  useLayoutEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
  }, []);

  return (
    <></>
  )
}

export default Initialize