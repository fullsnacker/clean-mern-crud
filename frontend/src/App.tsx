import { BrowserRouter as Router, Routes, Route } from "react-router";
import UserProfiles from "./presentation/pages/UserProfiles";
import Videos from "./presentation/pages/UiElements/Videos";
import Images from "./presentation/pages/UiElements/Images";
import Alerts from "./presentation/pages/UiElements/Alerts";
import Badges from "./presentation/pages/UiElements/Badges";
import Avatars from "./presentation/pages/UiElements/Avatars";
import Buttons from "./presentation/pages/UiElements/Buttons";
import LineChart from "./presentation/pages/Charts/LineChart";
import BarChart from "./presentation/pages/Charts/BarChart";
import Calendar from "./presentation/pages/Calendar";
import BasicTables from "./presentation/pages/Tables/BasicTables";
import FormElements from "./presentation/pages/Forms/FormElements";
import Blank from "./presentation/pages/Blank";
import AppLayout from "./presentation/layout/AppLayout";
import { ScrollToTop } from "./presentation/components/common/ScrollToTop";
import Home from "./presentation/pages/Dashboard/Home";
import SignIn from "./presentation/pages/AuthPages/SignIn";
import SignUp from "./presentation/pages/AuthPages/SignUp";
import NotFound from "./presentation/pages/OtherPage/NotFound";
import Test from "./presentation/pages/Test";

export default function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          {/* Dashboard Layout */}
          <Route element={<AppLayout />}>
            <Route index path="/dashboard" element={<Home />} />
            <Route path="/" element={<Test />} />
            {/* Others Page */}
            <Route path="/profile" element={<UserProfiles />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/blank" element={<Blank />} />

            {/* Forms */}
            <Route path="/form-elements" element={<FormElements />} />

            {/* Tables */}
            <Route path="/basic-tables" element={<BasicTables />} />

            {/* Ui Elements */}
            <Route path="/alerts" element={<Alerts />} />
            <Route path="/avatars" element={<Avatars />} />
            <Route path="/badge" element={<Badges />} />
            <Route path="/buttons" element={<Buttons />} />
            <Route path="/images" element={<Images />} />
            <Route path="/videos" element={<Videos />} />

            {/* Charts */}
            <Route path="/line-chart" element={<LineChart />} />
            <Route path="/bar-chart" element={<BarChart />} />
          </Route>

          {/* Auth Layout */}
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />

          {/* Fallback Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}
