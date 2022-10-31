import Register from "../pages/register/Register";
import Login from "../pages/login/Login";
import Nurse from "../pages/nurse/Nurse";
import NurseList from "../pages/nurse/nurseList";
import { Routes, Route } from "react-router-dom";
import { store } from "../store/store";
import { Provider } from "react-redux";
import AuthRoute from "../AuthRoute";
import { initializeInterceptors } from "../utils/interceptor";
import NurseUpdate from "../pages/nurse/NurseUpdate";

function PageRoutes() {
  const interceptorId = initializeInterceptors();

  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Login interceptorId={interceptorId} />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/login"
          element={<Login interceptorId={interceptorId} />}
        />

        <Route path="/nurses" element={<AuthRoute />}>
          <Route path="/nurses/" element={<NurseList />} />
          <Route path="/nurses/add" element={<Nurse />} />
          <Route path="/nurses/update-nurse/:id" element={<NurseUpdate />} />
        </Route>
      </Routes>
    </Provider>
  );
}
export default PageRoutes;
