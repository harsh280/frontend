"use client"
import HomeNav from "@/components/home-nav"
import HomeSearch from "@/components/home-pages/home-search"
import HomeSave from "@/components/home-pages/home-save"
import HomeShop from "@/components/home-pages/home-shop"
import HomeSignUp from "@/components/home-pages/home-signup"

export default function Home() {
  return (
    <main className="w-full h-full">
      <HomeNav />
      <HomeSearch/>
      <HomeSave/>
      <HomeShop/>
      <HomeSignUp/>
    </main>
  )
}
