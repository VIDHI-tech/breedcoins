import StaffStudent from "@/components/modules/about/staff-student";
import AdminSection from "../../components/modules/about/administrators";
import LeaderSection from "../../components/modules/about/heads";
import OurHistory from "../../components/modules/about/ourhistory";
import OurSchool from "../../components/modules/about/ourschool";
import VisionMission from "../../components/modules/about/visionmission";
import Management from "@/components/modules/about/management";

const AboutPage = () => {
  return (
    <main className="w-full">
      <OurSchool />
      <OurHistory />
      <Management />
      <VisionMission />
      <AdminSection />
      <LeaderSection />
      <StaffStudent />
    </main>
  );
};

export default AboutPage;
