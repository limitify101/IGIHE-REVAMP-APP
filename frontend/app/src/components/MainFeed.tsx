import Banner from "./Banner"
import Recent from "./Recent"

const MainFeed = () => {
  return (
    <div className="w-full h-full px-1 m-0">
        <Banner/>
        <hr className="my-8"/>
        <Recent/>
        {/* Recent News */}
        {/* Actualities & Emergency */}
        {/* Ad Palette */}
        {/* General Feed  Filter Based On Dates*/}
        {/* Recommended Feed */}
    </div>
  )
}

export default MainFeed