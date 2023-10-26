import "./App.css";
import { Suspense, lazy } from "react";

const HomePage = lazy(() => import("./pages/Home"));
const AboutPage = lazy(() => import("./pages/About"));
const SearchPage = lazy(() => import("./pages/Search"));

import { Router } from "./Router";
import { Route } from "./Route";

const routes = [
  {
    path: "/:lang/about",
    component: AboutPage,
  },
  {
    path: "/search/:query",
    component: SearchPage,
  },
];

function App() {
  return (
    <main>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Router routes={routes}>
          <Route path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
        </Router>
      </Suspense>
    </main>
  );
}

export default App;
