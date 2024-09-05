import MblLightThemeBg from "../../assets/img/bg-mobile-light.jpg"
import MblDarkThemeBg from "../../assets/img/bg-mobile-dark.jpg"
import DskLightThemeBg from "../../assets/img/bg-desktop-light.jpg"
import DskDarkThemeBg from "../../assets/img/bg-desktop-dark.jpg"

import MoonIcon from "../../assets/svg/icon-moon.svg"
import SunIcon from "../../assets/svg/icon-sun.svg"

import { useState } from "react"

export default function HeaderBanner () {

  const [isDark, setIsDark] = useState<boolean>(false)

  const handleTheme = () => {
    setIsDark(!isDark)
    const html = document.querySelector("html")
    html?.classList.toggle("dark")
  }

  return (
    <figure className="flex justify-center absolute top-0">
      <picture>
        <source srcSet={isDark?DskDarkThemeBg:DskLightThemeBg} media="(min-width:376px)"/>
        <img src={isDark?MblDarkThemeBg:MblLightThemeBg} alt="" className={`
          h-[214px] object-cover
          lg:h-[334px]
          2xl:h-[418px]
          3xl:h-[538px]
          `}/>
      </picture>
      <header className={`
        flex justify-between items-center absolute top-11 w-full max-w-[592px] px-6
        lg:top-[4.5rem]
        `}>
        <h1 className={`
          uppercase font-bold text-3xl tracking-widest text-dark-theme-very-light-gray
          lg:text-5xl
        `}>todo</h1>
        <button onClick={()=>{handleTheme()}} aria-label="Theme Change" title="Change Theme" className="size-5 lg:size-7">
          {<img src={isDark?SunIcon:MoonIcon} alt=""/>}
        </button>
      </header>
    </figure>
  ) 
}