import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppContainer from "./components/AppContainer";
import AppHeader from "./components/AppHeader";
import AppMainSection from "./components/AppMainSection";
import VideoWatch from "./components/VideoWatch";

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppContainer />,
    children: [
      {
        path:'/',
        element: <AppMainSection />
      },
      {
        path: '/watch',
        element: <VideoWatch />
      }
    ]
  }
])
function App() {
  return (
    <div className="App">
      <AppHeader />
      <RouterProvider router={appRouter} />
    </div>
  );
}


export default App;
