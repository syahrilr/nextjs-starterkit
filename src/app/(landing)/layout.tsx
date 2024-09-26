import Navbar from "@/components/navbar"

const LandingPageLayout = ({children} : {children: React.ReactNode}) => {
  return (
    <div>
        <Navbar />
        {children}
    </div>
  )
}
export default LandingPageLayout