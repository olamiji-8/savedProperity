import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import App from "./App";
import Coming from "./pages/Coming Soon/coming";
// Authetication page
import SignUpPage from "./pages/Signup";
import LoginPage from "./pages/Login";

// Dashboard pages
import WalletPage from "./features/Wallet/pages/Wallet";
import Wallet from "./pages/dashboard/Wallet";
import Dashboards from "./pages/dashboard/Dashboards";
import Dashboard from "./pages/dashboard/DashboardHome";
import Profile from "./pages/dashboard/Profile";
import SwitchMode from "./pages/dashboard/Switch-Mode";
import UploadProperty from "./pages/dashboard/Upload";
import SavedProperty from "./pages/dashboard/Saved-Property";
import Transactions from "./pages/dashboard/Transactions";
import Receipts from "./pages/dashboard/Receipts";
import Drafts from "./pages/dashboard/Drafts";
import PropertyData from "./pages/dashboard/Property-Data";
import ServiceProvider from "./pages/dashboard/Service-Provider";

import Referral from "./pages/dashboard/Referral";
import PropertyDetails from "./pages/dashboard/PropertyDetails";
import WalletDeposit from "./features/Wallet/pages/WalletDeposit";
import WalletWithdraw from "./features/Wallet/pages/WalletWithdraw";

import Subscription from "./pages/dashboard/Subscription";

import EmailNotification from "./pages/dashboard/EmailNotification";
import NoActivity from "./pages/dashboard/NoActivity";
import Notification from "./pages/dashboard/Notification";

import RecentActivities from "./pages/dashboard/RecentActivities";

//import SavedProperty from "./pages/dashboard/Saved-Property-Final";
// Services
import ServiceIndexPage from "./features/services/pages/ServiceIndexPage";
import ServiceListPage from "./features/services/pages/ServiceListPage";
import VendorListPage from "./features/services/pages/VendorListPage";
import VendorDetailPage from "./features/services/pages/VendorDetailPage";
import VendorPage from "./pages/VendorPage";

import ErrorPage from "./Error";
import RentPage from "./pages/Rent";

import FAQ from "./pages/FAQ";
import Due from "./pages/Due";

import RealEstate from "./pages/Real-Estate";

import SellPage from "./pages/SellPage";
import LeasePage from "./pages/LeasePage";
import MyAccount from "./components/ui/MyAccount";

import { TransitionGroup, CSSTransition } from "react-transition-group";
import ScrollToTop from "./components/ui/ScrollToTop";
import Navigation from "./layouts/Navbar";
import DashboardNavbar from "./layouts/dashboard/Navbar";
import Lease from "./pages/Lease";
import Sell from "./pages/Sell";
import Buy from "./pages/Buy";
import About from "./pages/About";
const RoutesComponents = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname.includes("dashboard") ||
      location.pathname.includes("saved") ? (
        <DashboardNavbar />
      ) : location.pathname === "/myaccount" ? null : (
        <Navigation />
      )}
      <TransitionGroup>
        <CSSTransition
          key={location.key}
          classNames={
            location.pathname.includes("dashboard") ||
            location.pathname.includes("saved")
              ? ""
              : "fade"
          }
          timeout={750}
        >
          <ScrollToTop>
            <Routes>
              <Route index path="/" element={<App />}></Route>
              <Route index path="/rent" element={<RentPage />}></Route>

              <Route
                path="/email-notification"
                element={<EmailNotification />}
              ></Route>

              <Route path="/about" element={<About />}></Route>

              {/* <Route path="/sell" element={<Sell />}></Route> */}
              <Route path="/buy" element={<Buy />}></Route>

              <Route path="/login" element={<LoginPage />}></Route>
              <Route path="/signup" element={<SignUpPage />}></Route>
              <Route path="/faq" element={<FAQ />}></Route>
              <Route path="/about" element={<About />}></Route>
              <Route path="/due" element={<Due />}></Route>
              <Route path="/error" element={<ErrorPage />}></Route>

              <Route path="/coming" element={<Coming />}></Route>
              <Route path="/service" element={<ServiceIndexPage />} />
              <Route path="/services" element={<ServiceListPage />} />
              <Route path="/myaccount" element={<MyAccount />} />
              <Route path="/vendors" element={<VendorPage />}>
                <Route path="" element={<VendorListPage />} />
                <Route path=":vendorId" element={<VendorDetailPage />} />
              </Route>
              <Route path="/realEstate" element={<RealEstate />}></Route>
              <Route path="*" element={<ErrorPage />}></Route>
              <Route path="/sell" element={<SellPage />}></Route>
              <Route path="/lease" element={<LeasePage />}></Route>
              {/* 
              
              Dashboard section
              
              */}
              <Route path="" element={<Dashboards />}>
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="dashboard/switch" element={<SwitchMode />} />
                <Route path="dashboard/upload">
                  <Route path="" element={<UploadProperty />}></Route>
                  <Route path="lease" element={<Lease />}></Route>
                  <Route path="sell" element={<Sell />}></Route>
                </Route>
                <Route path="saved-property" element={<SavedProperty />} />
                <Route
                  path="dashboard/transactions"
                  element={<Transactions />}
                />
                <Route path="dashboard/receipts" element={<Receipts />} />
                <Route path="dashboard/drafts" element={<Drafts />} />
                <Route path="dashboard/property-data">
                  <Route path="" element={<PropertyData />} />
                  <Route
                    path="dashboard/:details"
                    element={<PropertyDetails />}
                  />
                </Route>
                <Route
                  path="dashboard/service-provider"
                  element={<ServiceProvider />}
                />
                <Route path="dashboard/profile" element={<Profile />} />
                <Route path="dashboard/referral" element={<Referral />} />
                <Route path="dashboard/wallet" element={<Wallet />}>
                  <Route path="" element={<WalletPage />}></Route>
                  <Route path="deposit" element={<WalletDeposit />} />
                  <Route path="withdraw" element={<WalletWithdraw />} />
                </Route>

                {/* Other subsidaries on the dashboard */}
                <Route path="dashboard/renew" element={<Subscription />} />
                <Route
                  path="dashboard/no-activity"
                  element={<NoActivity />}
                ></Route>
                <Route
                  path="dashboard/notification"
                  element={<Notification />}
                ></Route>

                <Route
                  path="dashboard/recent-activities"
                  element={<RecentActivities />}
                ></Route>
              </Route>
            </Routes>
          </ScrollToTop>
        </CSSTransition>
      </TransitionGroup>
    </>
  );
};
// i added dashboard to all the nested dashboard pages because react coulldnt reach images in the public folder, absolute url mess. so once the images are properly structured we moved the dashboard to parent

export default RoutesComponents;
