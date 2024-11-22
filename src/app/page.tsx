'use client'

import { BackgroundWrapper } from '@/components/backgroundWrapper'
import { CountdownTimer } from '@/components/countdownTimer'
import { Footer } from '@/components/footer'
import { HeaderTitle } from '@/components/headerTitle'
import { TrailerPreview } from '@/components/trailerPreview'
import { TimerProvider } from '@/contexts/timerContext'
import GithubCorner from 'react-github-corner'

export default function Home() {
  return (
    <TimerProvider>
      <BackgroundWrapper>
        <GithubCorner
          href={'https://github.com/iamdevmarcos/thegta6countdown.com'}
          target="_blank"
          bannerColor="#FFBF76"
          octoColor="#B11778"
          size={80}
          direction="right"
        />

        <div className="flex flex-col items-center justify-center gap-12">
          <div className="bg-[#151515] backdrop-blur-sm bg-opacity-90 flex flex-col px-14 py-4 gap-5 items-center justify-center shadow-custom">
            <HeaderTitle />
            <CountdownTimer />
          </div>
          <TrailerPreview />
        </div>
        <Footer />
      </BackgroundWrapper>
    </TimerProvider>
  )
}
