import "./App.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import {
  Catalog,
  Home,
  Library,
  RootLayout,
  SignLayout,
  SignIn,
  SignUp,
} from "./Pages/AllExports.js";
import { GlobalProvider } from "./Components/Context/GlobalState.jsx";
import Profile from "./Pages/Profile/Profile.jsx";

function App() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/library" element={<Library />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route element={<SignLayout />}>
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/signUp" element={<SignUp />} />
        </Route>
      </>
    )
  );
  return (
    <div className="App">
      <GlobalProvider>
        <RouterProvider router={routes} />
      </GlobalProvider>
    </div>
  );
}

export default App;
