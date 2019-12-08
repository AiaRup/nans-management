import React, { lazy, Suspense } from 'react';
import { Router, Redirect, Location } from '@reach/router';

import { GlobalStyles } from '../Common/styles/global';
import TopMenu from '../App/components/TopMenu';
import {
  AppIntlProvider,
  AuthProvider,
  LocationProvider
} from '../Common/contexts';

const Home = lazy(() => import('./pages/Home'));
const Login = lazy(() => import('./pages/Login'));
const ForgotPassword = lazy(() => import('./pages/ForgotPassword'));
const Register = lazy(() => import('./pages/Register'));
const DashboardContainer = lazy(() => import('./pages/DashboardContainer'));
const EmployeesContainer = lazy(() => import('./pages/EmployeesContainer'));
const InventoryContainer = lazy(() => import('./pages/InventoryContainer'));
const OrdersContainer = lazy(() => import('./pages/OrdersContainer'));
const MenuContainer = lazy(() => import('./pages/MenuContainer'));
const PaymentsContainer = lazy(() => import('./pages/PaymentsContainer'));
const ReservationsContainer = lazy(() =>
  import('./pages/ReservationsContainer')
);

const NotAllowedPage = () => <div>Not Allowed</div>;
const ServerErrorPage = () => <div>Server Error</div>;
const NotFoundPage = () => <div>Not Found</div>;
const RedirectToNotFound = () => <Redirect noThrow to="/not-found" />;

const App = () => {
  return (
    <>
      <GlobalStyles />
      <AuthProvider>
        <AppIntlProvider>
          <LocationProvider>
            <TopMenu />
            <Suspense fallback={null}>
              <Router>
                <Login path="/login" />
                <Register path="/register" />
                <ForgotPassword path="/forgot-password" />
                <Home path="/">
                  <Redirect noThrow from="/" to="/dashboard" />
                  <DashboardContainer path="/dashboard" />
                  <EmployeesContainer path="/employees" />
                  <OrdersContainer path="/orders" />
                  <MenuContainer path="/menu" />
                  <PaymentsContainer path="/payments" />
                  <ReservationsContainer path="/reservations" />
                  <InventoryContainer path="/inventory" />
                  <RedirectToNotFound default />
                  <NotAllowedPage path="/not-allowed" />
                  <ServerErrorPage path="/server-error" />
                  <NotFoundPage path="/not-found" />
                </Home>
              </Router>
            </Suspense>
          </LocationProvider>
        </AppIntlProvider>
      </AuthProvider>
    </>
  );
};

export default App;
