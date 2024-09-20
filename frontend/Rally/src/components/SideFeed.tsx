import AdPalette from "./AdPalette"
import Archives from "./Archives"

const SideFeed = () => {
  return (
    <div className="h-full w-full px-2">
        <AdPalette/>   
        <hr className="my-8"/> 
        <Archives/>
    </div>
  )
}

export default SideFeed