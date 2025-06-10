import "./App.css";
import "./index.css";
import Login from "./pages/Login";
import { Routes, Route, useLocation } from "react-router-dom";
import Signup from "./pages/Signup";
import { AnimatePresence } from "motion/react";
import Container from "./components/Container";
import BlurOverlay from "./components/BlueOverlay";
import Dashboard from "./pages/Dashboard";
import AddNote from "./components/NoteForm";
import NotesArea from "./components/NotesArea";
import EditNote from "./components/EditNote";
import Slideup from "./components/framer-motion/Slideup";
import PageNotFound from "./pages/PageNotFound";
import ProtectedRoute from "./components/ProtectedRoute";
import RedirectIfLoggedIn from "./components/RedirectIfLoggedIn";
function App() {
  const location = useLocation();

  // Check if we are on /login or /signup
  const isAuthPage =
    location.pathname === "/login" || location.pathname === "/signup";

  return (
    <div className="relative min-h-screen bg-grid overflow-hidden">
      <div className="absolute inset-0 z-0">
        <BlurOverlay />
      </div>

      <div className="relative z-10">
        {isAuthPage ? (
          <Container>
            <AnimatePresence mode="wait">
              <Routes location={location} key={location.pathname}>
                <Route
                  element={
                    <RedirectIfLoggedIn>
                      <Login />
                    </RedirectIfLoggedIn>
                  }
                  path="/login"
                />
                <Route
                  element={
                    <RedirectIfLoggedIn>
                      <Signup />
                    </RedirectIfLoggedIn> 
                  }
                  path="/signup"
                />
              </Routes>
            </AnimatePresence>
          </Container>
        ) : (
          // Different container (or no container) for other pages
          <div className="">
            <AnimatePresence mode="wait">
              <Routes location={location} key={location.pathname}>
                <Route path="*" element={<PageNotFound />} />
                <Route
                  path="/"
                  element={
                   <ProtectedRoute>
                      <Dashboard />
                    </ProtectedRoute>
                  }
                >
                  <Route
                    index
                    element={
                      <Slideup>
                        <NotesArea />
                      </Slideup>
                    }
                  />{" "}
                  <Route
                    path="add"
                    element={
                      <Slideup>
                        <AddNote />
                      </Slideup>
                    }
                  />{" "}
                  <Route
                    path="edit/:id"
                    element={
                      <Slideup>
                        <EditNote />
                      </Slideup>
                    }
                  />{" "}
                </Route>
              </Routes>
            </AnimatePresence>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
