import { Suspense, useEffect } from "react";
import routes from "~react-pages";
import { useRoutes } from "react-router-dom";
import { ApplicationFooter } from "./layouts/application-layout";
import { useApiMutation } from "./hooks/useApiMutation";
import endpoints from "./api/endpoints";

export function App() {
  const appRoutes = useRoutes(routes);
  const { mutate: visitorUpdate } = useApiMutation({
    route: endpoints.entities.schoolDetails.visitor_update,
    method: "POST",
  });
  useEffect(() => {
    // Optionally, check local storage to avoid duplicate hits on refreshes in the same session
    const hasVisited = sessionStorage.getItem("hasVisited");
    if (!hasVisited) {
      visitorUpdate({});
    }
  }, [visitorUpdate]);

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <ApplicationFooter>{appRoutes}</ApplicationFooter>
    </Suspense>
  );
}
