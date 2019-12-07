import React, { useReducer, lazy, Suspense } from 'react';
import { FormattedMessage } from 'react-intl';
import { Router, Redirect } from '@reach/router';
import { langReducer, initialLangState } from './AppContext';
import { IntlProvider } from 'react-intl';

import { GlobalStyles } from '../Common/styles/global';

import { appStructureData } from '../../static/data';

import moment from 'moment';
import 'moment/locale/en-gb';

moment.locale('en-gb');

const DashboardContainer = lazy(() => import('./pages/DashboardContainer/'));
const EmployeesContainer = lazy(() => import('./pages/EmployeesContainer/'));
const InventoryContainer = lazy(() => import('./pages/InventoryContainer'));
const OrdersContainer = lazy(() => import('./pages/ScheduleContentContainer'));
const MenuContainer = lazy(() => import('./pages/MenuContainer'));
const PaymentsContainer = lazy(() => import('./pages/PaymentsContainer'));

const ReservationsContainer = lazy(() =>
  import('./pages/LibraryContainer/ReservationsContainer')
);

const NotAllowedPage = () => <div>Not Allowed</div>;
const ServerErrorPage = () => <div>Server Error</div>;
const NotFoundPage = () => <div>Not Found</div>;
const RedirectToNotFound = () => <Redirect noThrow to="/not-found" />;

const App = () => {
  const [{ locale, messages }] = useReducer(langReducer, initialLangState);

  return (
    <>
      <GlobalStyles />
      <IntlProvider defaultLocale={locale} locale={locale} messages={messages}>
        <Suspense fallback={<p>Loading...</p>}>
          <Router>
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
          </Router>
        </Suspense>
      </IntlProvider>
    </>
  );
};

export default App;
