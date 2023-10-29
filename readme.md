# This is a SPA router like react-router-dom but more simple and lightweight

- Basic usage

```
import { Router } from "flp-react-router";
import AboutPage from "./pages/About";

const routes = [
  {
    path: "/about",
    component: AboutPage,
  },
];

export default function App() {
  return (
    <main>
        <Router routes={routes} />
    </main>
  );
}

```

- Example with nested routes

```
import { Router, Route } from "flp-react-router";
const SearchPage from "./pages/Search";

export default function App() {
  return (
    <main>
        <Router>
          <Route path="/search/:id" component={SearchPage} />
        </Router>
    </main>
  );
}

export default function SearchPage({ routeParams }) {
  return <h1>Search {routeParams.id}</h1>;
}

```

- Example using useQueryParams hook and Link component

```
import { useQueryParams, Link } from "flp-react-router";

export default function MyPage() {
  const querys = useQueryParams() // http://localhost:5173/?limit=5

  return (
    <>
        <h1>{querys.limit}</h1> // print 5
        <Link to="/en/about">About</Link> // Render <a href="/en/about">About</a>
    <>
  );
}
```

- Example using fallback prop.
  fallback prop is a component that will be rendered when the route is not found. If not specified, the router will render <h1>404</h1>.

```
import { Router } from "flp-react-router";
import AboutPage from "./pages/About";

const routes = [
  {
    path: "/about",
    component: AboutPage,
  },
];

export default function App() {
  return (
    <main>
        <Router routes={routes} fallback={<h1>not found 404...</h1>}/>
    </main>
  );
}

```

## Repository to contribute: https://github.com/flpmcruz/flp-react-router-npm
