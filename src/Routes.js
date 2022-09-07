/* eslint-disable react/no-array-index-key */
import React, { lazy, Suspense, Fragment } from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import DashboardLayout from './layouts/DashboardLayout';
import LoadingScreen from './components/LoadingScreen';
import AuthGuard from './components/AuthGuard';
// import GuestGuard from './components/GuestGuard';

const routesConfig = [
  {
    exact: true,
    //guard: GuestGuard,
    path: '/',
    component: lazy(() => import('./views/auth/LoginView'))
  },
  {
    exact: true,
    //guard: GuestGuard,
    path: '/login',
    component: lazy(() => import('./views/auth/LoginView'))
  },
  {
    exact: true,
    path: '/register',
    component: lazy(() => import('./views/auth/RegisterView'))
  },
  {
    exact: true,
    path: '/forgot-password',
    component: lazy(() => import('./views/pages/ForgotPassword'))
  },
  {
    exact: true,
    path: '/reset-password',
    component: lazy(() => import('./views/pages/ResetPassword'))
  },
  {
    path: '/app',
    guard: AuthGuard,
    layout: DashboardLayout,
    routes: [
      // first page to display
      {
        exact: true,
        path: '/app',
        component: () => <Redirect to="/app/dashboard" />
      },
      {
        exact: true,
        path: '/app/dashboard',
        component: lazy(() => import('./views/dashboard/DashboardView'))
      },
      {
        exact: true,
        path: '/app/account',
        component: lazy(() => import('./views/pages/AccountView'))
      },
      {
        exact: true,
        path: '/app/chargermanagement',
        component: lazy(() => import('./views/charger/ChargerManagementView'))
      },
      {
        exact: true,
        path: '/app/tariffmanagement',
        component: lazy(() => import('./views/tariff/TariffManagementView'))
      },
      {
        exact: true,
        path: '/app/usermanagement',
        component: lazy(() => import('./views/user/UserManagementView'))
      },
      {
        exact: true,
        path: '/app/revenue',
        component: lazy(() => import('./views/revenue/RevenueView'))
      },
      {
        exact: true,
        path: '/app/session-summary',
        component: lazy(() => import('./views/session/SessionSummaryView'))
      },
      {
        exact: true,
        path: '/app/ocpp-log',
        component: lazy(() => import('./views/log/OcppLogView'))
      },
      {
        exact: true,
        path: '/app/admins',
        component: lazy(() => import('./views/admins/AdminManagementView'))
      },
      {
        exact: true,
        path: '/app/gifts',
        component: lazy(() => import('./views/gifts/GiftsManagementView'))
      }
    ]
  }
];

const renderRoutes = (routes) =>
  routes ? (
    <Suspense fallback={<LoadingScreen />}>
      <Switch>
        {routes.map((route, i) => {
          const Guard = route.guard || Fragment;
          const Layout = route.layout || Fragment;
          const Component = route.component;

          return (
            <Route
              key={i}
              path={route.path}
              exact={route.exact}
              render={(props) => (
                <Guard>
                  <Layout>
                    {route.routes ? (
                      renderRoutes(route.routes)
                    ) : (
                      <Component {...props} />
                    )}
                  </Layout>
                </Guard>
              )}
            />
          );
        })}
      </Switch>
    </Suspense>
  ) : null;

function Routes() {
  return renderRoutes(routesConfig);
}

export default Routes;
