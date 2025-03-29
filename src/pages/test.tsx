import { useSectionNavigation } from "@/components/common/scroll-to-hash";

const TestPage = () => {
  const { navigateToSection } = useSectionNavigation();
  const handleNavigation = () => {
    navigateToSection("/#principal");
  };
  return (
    <div>
      <button onClick={handleNavigation}>fly me</button>
    </div>
  );
};

export default TestPage;
