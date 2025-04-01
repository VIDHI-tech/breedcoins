import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import Notification from "@/components/common/Notification";
import { ScrollToHash } from "@/components/common/scroll-to-hash";
import MaxWidthContainer from "@/max-width-container";
import { useNavStore } from "@/stores/nav.store";
import { useEffect, useRef, useState } from "react";

interface ApplicationLayoutProps {
  children: React.ReactNode;
}
export function ApplicationFooter({ children }: ApplicationLayoutProps) {
  const navbarRef = useRef(null);
  const [navbarHeight, setNavbarHeight] = useState(0);
  const { setNavHeight } = useNavStore();

  useEffect(() => {
    if (navbarRef.current) {
      // Get the navbar height when the component mounts
      const height = navbarRef?.current?.offsetHeight;
      setNavbarHeight(height);
      setNavHeight(height);
    }
  }, [setNavHeight]);

  console.log("navbarHeight", navbarHeight);
  return (
    <div className="min-h-screen bg-black">
      <div className="sticky top-0 z-50 bg-white shadow-md w-full">
        {/* <MaxWidthContainer> */}
        <Navbar refElement={navbarRef} />

        {/* </MaxWidthContainer> */}
      </div>

      <MaxWidthContainer>
        <ScrollToHash />
        <main
          className="relative"
          style={{
            marginTop: navbarHeight,
          }}
        >
          <div className="py-4 bg-white">
            <Notification />
          </div>
          {children}
        </main>
      </MaxWidthContainer>
      <Footer />
    </div>
  );
}
