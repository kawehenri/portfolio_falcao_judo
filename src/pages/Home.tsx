import { Hero } from '@/sections/Hero'
import { About } from '@/sections/About'
import { Stats } from '@/sections/Stats'
import { Timeline } from '@/sections/Timeline'
import { Achievements } from '@/sections/Achievements'
import { Results } from '@/sections/Results'
import { Gallery } from '@/sections/Gallery'
import { TechnicalProfile } from '@/sections/TechnicalProfile'
import { Sponsors } from '@/sections/Sponsors'
import { Contact } from '@/sections/Contact'

export function Home() {
  return (
    <>
      <Hero />
      <About />
      <Stats />
      <Timeline />
      <Achievements />
      <Results />
      <Gallery />
      <TechnicalProfile />
      <Sponsors />
      <Contact />
    </>
  )
}
