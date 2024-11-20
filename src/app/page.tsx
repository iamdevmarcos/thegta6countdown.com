'use client'

import { BackgroundWrapper } from '@/components/backgroundWrapper'
import { CountdownTimer } from '@/components/countdownTimer'
import { HeaderTitle } from '@/components/headerTitle'

export default function Home() {
  return (
    <BackgroundWrapper>
      <div className="flex flex-col items-center justify-center gap-12">
        <div className="bg-[#151515] backdrop-blur-sm bg-opacity-90 flex flex-col px-14 py-4 gap-5 items-center justify-center shadow-custom">
          <HeaderTitle />
          <CountdownTimer />
        </div>

        <div className="w-[310px] h-[170px] overflow-hidden bg-secondary-gradient border-[2px] border-transparent rounded-sm shadow-secondary">
          <div className="w-full h-full rounded-sm bg-white">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/QdBZY2fkU-0?si=zKHa_Y_GQeUEpvBJ"
              title="GTA 6 Trailer"
              allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; controls;"
            ></iframe>
          </div>
        </div>
      </div>
    </BackgroundWrapper>
  )
}
