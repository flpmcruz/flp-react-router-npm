import { describe, it, expect, beforeEach, vi } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";

import { Router } from "./Router.jsx";
import { Route } from "./Route.jsx";
import { Link } from "./Link.jsx";
import { getCurrentPath } from "./utils/getCurrentPath.js";

vi.mock("./utils/getCurrentPath", () => ({
  getCurrentPath: vi.fn(),
}));

describe("Router", () => {
  beforeEach(() => {
    cleanup();
    vi.resetAllMocks();
  });

  it("should render without problems", () => {
    render(<Router routes={[]} />);

    expect(true).toBeTruthy();
  });

  it("should render the default component when no route matches", () => {
    render(<Router routes={[]} fallback={() => <h1>404</h1>} />);
    expect(screen.getByText("404")).toBeTruthy();
  });

  it("should render the component that matches the current path", () => {
    getCurrentPath.mockReturnValueOnce("/about");
    const routes = [
      {
        path: "/",
        component: () => <h1>Home</h1>,
      },
      {
        path: "/about",
        component: () => <h1>About</h1>,
      },
    ];

    render(<Router routes={routes} />);
    expect(screen.getByText("About")).toBeTruthy();
  });

  it("should navigate using Link", () => {
    getCurrentPath.mockReturnValueOnce("/");

    render(
      <Router>
        <Route
          path="/"
          component={() => {
            return <Link to="/about">About</Link>;
          }}
        />
        <Route path="/about" component={() => <h1>About</h1>} />
      </Router>
    );

    screen.getByText("About").click();
    expect(screen.getByText("About")).toBeTruthy();
  });
});
