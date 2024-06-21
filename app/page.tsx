"use client"
import {Button} from "@/components/ui/button"
import {useState} from "react"

export default function Home(){
  const [showVideo, setShowVideo] = useState(false)

  const onBtnClick = () => setShowVideo(true)

  const infoContainer = (
      <div className="w-full h-full flex items-center justify-center flex-col">
        <p className="text-center mb-3">
          Ioann Korabelskyi <br/>
          Grupa 3, zaoczne <br/>
          119745
        </p>
        <Button onClick={onBtnClick}>Click me</Button>
      </div>
  )

  return (
      <div className="h-screen w-screen flex items-center justify-center flex-col">
        {!showVideo && infoContainer}

        {showVideo && <video id="video" className="w-full h-full" autoPlay={true}>
          <source src="/roll.mp4" type="video/mp4"/>
        </video>}
      </div>
  )
}

