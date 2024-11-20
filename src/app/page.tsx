'use client'

import { BackgroundWrapper } from '@/components/backgroundWrapper'
import { CountdownTimer } from '@/components/countdownTimer'
import { Footer } from '@/components/footer'
import { HeaderTitle } from '@/components/headerTitle'
import { TrailerPreview } from '@/components/trailerPreview'

export default function Home() {
  return (
    <BackgroundWrapper>
      <div className="flex flex-col items-center justify-center gap-12">
        <div className="bg-[#151515] backdrop-blur-sm bg-opacity-90 flex flex-col px-14 py-4 gap-5 items-center justify-center shadow-custom">
          <HeaderTitle />
          <CountdownTimer />
        </div>
        <TrailerPreview />
        <Footer />
      </div>
    </BackgroundWrapper>
  )
}
