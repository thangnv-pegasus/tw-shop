import { Route, Routes } from "react-router-dom";
import publicRoutes from "~/routes";
import NotFound from "~/page/404-page";

function App() {
  return (
    <div className="App font-monsterat_sans">
      {
        <Routes>
          {publicRoutes.map((item, index) => (
            <Route path={item.path} element={<item.component />} key={index} />
          ))}
          <Route path="*" element={<NotFound />} />
        </Routes>
      }
    </div>
  );
}

export default App;
