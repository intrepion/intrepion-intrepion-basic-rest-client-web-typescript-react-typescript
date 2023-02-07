import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import About from "./pages/About";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Algorithms from "./pages/Learn/Algorithms/Algorithms";
import BestPractices from "./pages/Learn/BestPractices/BestPractices";
import DataStructures from "./pages/Learn/DataStructures/DataStructures";
import ArchitecturalPatterns from "./pages/Learn/DesignPatterns/ArchitecturalPatterns/ArchitecturalPatterns";
import BehavioralPatterns from "./pages/Learn/DesignPatterns/BehavioralPatterns/BehavioralPatterns";
import ConcurrencyPatterns from "./pages/Learn/DesignPatterns/ConcurrencyPatterns/ConcurrencyPatterns";
import CreationalPatterns from "./pages/Learn/DesignPatterns/CreationalPatterns/CreationalPatterns";
import DesignPatterns from "./pages/Learn/DesignPatterns/DesignPatterns";
import StructuralPatterns from "./pages/Learn/DesignPatterns/StructuralPatterns/StructuralPatterns";
import Learn from "./pages/Learn/Learn";
import Principles from "./pages/Learn/Principles/Principles";
import SolidPrinciples from "./pages/Learn/Principles/SolidPrinciples/SolidPrinciples";
import LogIn from "./pages/Authentication/LogIn";
import LogOut from "./pages/Authentication/LogOut";
import Navigating from "./Navigating";
import NotFound from "./pages/NotFound";
import Register from "./pages/Authentication/Register";
import Profile from "./pages/Profile";

const Routing = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Navigating />} errorElement={<Error />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="authentication">
          <Route path="log-in" element={<LogIn />} />
          <Route path="log-out" element={<LogOut />} />
          <Route path="register" element={<Register />} />
        </Route>
        <Route path="home" element={<Home />} />
        <Route path="learn">
          <Route index element={<Learn />} />
          <Route path="algorithms" element={<Algorithms />} />
          <Route path="best-practices" element={<BestPractices />} />
          <Route path="data-structures" element={<DataStructures />} />
          <Route path="design-patterns">
            <Route index element={<DesignPatterns />} />
            <Route
              path="architectural-patterns"
              element={<ArchitecturalPatterns />}
            />
            <Route
              path="behavioral-patterns"
              element={<BehavioralPatterns />}
            />
            <Route
              path="concurrency-patterns"
              element={<ConcurrencyPatterns />}
            />
            <Route
              path="creational-patterns"
              element={<CreationalPatterns />}
            />
            <Route
              path="structural-patterns"
              element={<StructuralPatterns />}
            />
          </Route>
          <Route path="principles">
            <Route index element={<Principles />} />
            <Route path="solid-principles" element={<SolidPrinciples />} />
          </Route>
        </Route>
        <Route path="profile/:userName" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default Routing;
