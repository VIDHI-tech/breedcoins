// src/components/ScrollToHash.tsx
import { useLatestUpdatesStore } from "@/stores/latest_updates.store";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const ScrollToHash: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1);
      console.log(`ScrollToHash: Found hash #${id}`);
      const attemptScroll = (attempt = 0) => {
        const element = document.getElementById(id);
        console.log(`Attempt ${attempt} to scroll to #${id}`, element);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
          console.log(`Scrolled to #${id}`);
        } else if (attempt < 20) {
          setTimeout(() => attemptScroll(attempt + 1), 100);
        } else {
          console.warn(
            `Element with id "${id}" not found after multiple attempts.`
          );
        }
      };

      attemptScroll();
    }
  }, [location.hash]);

  return null;
};

export const useSectionNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { onClose } = useLatestUpdatesStore();

  /**
   * Navigates to the specified target (page with section).
   * @param target - The full target path including section (e.g. "/#principal").
   */
  const navigateToSection = (target: string): void => {
    const [page] = target.split("#");
    onClose();
    if (location.pathname !== page) {
      navigate(target);
    } else {
      // When already on the target page, update the URL hash and trigger scrolling
      navigate(target, { replace: true });
    }
  };

  return { navigateToSection };
};
