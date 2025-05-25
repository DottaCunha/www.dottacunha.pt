import * as React from "react"
import { Footer } from "../components/Footer/Footer";
import { Logo, Navbar } from "../components";

interface MainLayoutProps {
  children: React.ReactNode;
}


export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

export default MainLayout
