import { Suspense, useEffect } from "react";
import routes from "~react-pages";
import { useRoutes } from "react-router-dom";
import { ApplicationFooter } from "./layouts/application-layout";
import { useApiMutation } from "./hooks/useApiMutation";
import endpoints from "./api/endpoints";

export function App() {
  const appRoutes = useRoutes(routes);
  
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <ApplicationFooter>{appRoutes}</ApplicationFooter>
    </Suspense>
  );
}
