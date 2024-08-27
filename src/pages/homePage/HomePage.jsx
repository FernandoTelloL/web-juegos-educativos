import { HeroImage } from "../../components"
import { BannerPrincipal2 } from "./BannerPrincipal2"
import { EducationSection } from "./EducationSection"
import { PopularActivities } from "./PopularActivities"

export const HomePage = () => {
  return (
    <>
      <HeroImage />
      <PopularActivities/>
      <EducationSection />
      <BannerPrincipal2 />
    </>
  )
}
