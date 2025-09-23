import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";



export default function Aos() {
  useEffect(() => {
      AOS.init({
        duration: 800,
        once: true,
      });
    }, []);
}
