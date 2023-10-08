import HomeNav from "@/components/home-nav"
import ImageCard from "@/components/ImageCard"
import HomeSearch from "@/components/home-pages/home-search"
import HomeSave from "@/components/home-pages/home-save"
import HomeShop from "@/components/home-pages/home-shop"
import HomeSignUp from "@/components/home-pages/home-signup"

export default function Home() {
  return (
    <main className="w-full h-full">
      <HomeNav />
      {/* <ImageCard 
        classnames="w-[320px] h-[500px] rounded-xl"
        productImage="https://s.pinimg.com/webapp/right-2bd1edfc.png"
      /> */}
      <HomeSearch/>
      <HomeSave/>
      <HomeShop/>
      <HomeSignUp/>
    </main>
  )
}
