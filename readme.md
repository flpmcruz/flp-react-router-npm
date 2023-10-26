# To run local

```
npm install
npm run dev
```

# This is a router like react-router-dom

- Basic usage

```
import { Router, Route, Link, useQueryParams } from "flp-react-router";

import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
const SearchPage from "./pages/Search";

const routes = [
  {
    path: "/about",
    component: AboutPage,
  },
  {
    path: "/search/:query",
    component: SearchPage,
  },
];

function App() {
  const querys = useQueryParams()

  return (
    <main>
        <Router routes={routes}>

          <Route path="/" component={HomePage} />

          <Route path="/" component={() => {
            return (
              <div>
                <Link to="/en/about">About</Link>
                <Link to="/search/abc">Search</Link>
              </div>
            )
          }} />

        </Router>
    </main>
  );
}

export default App;
```
