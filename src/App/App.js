import React, { lazy, Suspense } from 'react';
import { Router, Redirect } from '@reach/router';

import { GlobalStyles } from '../Common/styles/global';
import TopMenu from '../App/components/TopMenu';
import {
  AppIntlProvider,
  AuthProvider,
  LocationProvider
} from '../Common/contexts';

const Home = lazy(async () => {
  await import('./pages/Home');
  return { default: props => <Home {...props} /> };
});
const Login = lazy(async () => {
  await import('./pages/Login');
  return { default: props => <Login {...props} /> };
});

const ForgotPassword = lazy(async () => {
  await import('./pages/ForgotPassword');
  return { default: props => <ForgotPassword {...props} /> };
});

const Register = lazy(async () => {
  await import('./pages/Register');
  return { default: props => <Register {...props} /> };
});

const DashboardContainer = lazy(async () => {
  await import('./pages/DashboardContainer');
  return { default: props => <DashboardContainer {...props} /> };
});

const EmployeesContainer = lazy(async () => {
  await import('./pages/EmployeesContainer');
  return { default: props => <EmployeesContainer {...props} /> };
});

const InventoryContainer = lazy(async () => {
  await import('./pages/InventoryContainer');
  return { default: props => <InventoryContainer {...props} /> };
});

const OrdersContainer = lazy(async () => {
  await import('./pages/OrdersContainer');
  return { default: props => <OrdersContainer {...props} /> };
});

const MenuContainer = lazy(async () => {
  await import('./pages/MenuContainer');
  return { default: props => <MenuContainer {...props} /> };
});

const PaymentsContainer = lazy(async () => {
  await import('./pages/PaymentsContainer');
  return { default: props => <PaymentsContainer {...props} /> };
});

const ReservationsContainer = lazy(async () => {
  await import('./pages/ReservationsContainer');
  return { default: props => <ReservationsContainer {...props} /> };
});

const NotFoundPage = props => <div {...props}>Not Found</div>;
const RedirectToNotFound = props => <Redirect {...props} />;

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
                  <RedirectToNotFound noThrow to="/not-found" />
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
