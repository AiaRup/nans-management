export const menus = [
  {
    title: 'dashboard',
    path: '/dashboard',
    icon: 'user',
    tabs: [{ title: 'tableView', path: '/table-view', icon: 'user' }]
  },
  {
    title: 'reservations',
    icon: 'user',
    tabs: [
      { title: 'OverviewToday', path: '/overview', icon: 'user' },
      {
        title: 'manage',
        path: '/manage',
        children: [
          {
            title: 'addReservation',
            path: '/add-reservation',
            icon: 'user',
            child: true
          },
          {
            title: 'updateReservation',
            path: '/update-reservation',
            icon: 'user',
            child: true
          },
          {
            title: 'deleteReservation',
            path: '/delete-reservation',
            icon: 'user',
            child: true
          }
        ]
      },
      {
        title: 'archive',
        path: '/archive',
        icon: 'user'
      }
    ]
  },
  {
    title: 'employees',
    path: '/employees',
    icon: 'user',

    tabs: [
      {
        title: 'manage',
        path: '/manage',
        icon: 'user',

        children: [
          {
            title: 'addEmployee',
            path: '/add-employee',
            icon: 'user',
            child: true
          },
          {
            title: 'updateDetails',
            path: '/update-details',
            icon: 'user',
            child: true
          }
        ]
      },
      {
        title: 'workingHours',
        path: '/working-hours',
        icon: 'user',

        children: [
          {
            title: 'updateHours',
            path: '/apdate-hours',
            icon: 'user',
            child: true
          },
          {
            title: 'addWorkingHours',
            path: '/add-hours',
            icon: 'user',
            child: true
          }
        ]
      },
      {
        title: 'archive',
        path: '/archive',
        icon: 'user'
      }
    ]
  },
  {
    title: 'payments',
    path: '/payments',
    icon: 'user',

    tabs: [
      {
        title: 'clients',
        path: '/clients',
        icon: 'user',

        children: [
          {
            title: 'addPayment',
            path: '/add-payment',
            icon: 'user',
            child: true
          },
          {
            title: 'deletePayment',
            path: '/delete-payment',
            icon: 'user',
            child: true
          },
          {
            title: 'updatePayment',
            path: '/update-payment',
            icon: 'user',
            child: true
          }
        ]
      },
      {
        title: 'vendors',
        path: '/vendors',
        icon: 'user',

        children: [
          {
            title: 'addPayment',
            path: '/add-payment',
            icon: 'user',
            child: true
          },
          {
            title: 'deletePayment',
            path: '/delete-payment',
            icon: 'user',
            child: true
          },
          {
            title: 'updatePayment',
            path: '/update-payment',
            icon: 'user',
            child: true
          }
        ]
      },
      {
        title: 'employees',
        path: '/employees',
        icon: 'user',

        children: [
          {
            title: 'addPayment',
            path: '/add-payment',
            icon: 'user',
            child: true
          },
          {
            title: 'deletePayment',
            path: '/delete-payment',
            icon: 'user',
            child: true
          },
          {
            title: 'updatePayment',
            path: '/update-payment',
            icon: 'user',
            child: true
          }
        ]
      }
    ]
  },
  {
    title: 'inventory',
    path: '/inventory',
    icon: 'user',

    tabs: [
      {
        title: 'manageInventory',
        path: '/manage',
        icon: 'user',

        children: [
          {
            title: 'addInventory',
            path: '/add-inventory',
            icon: 'user',
            child: true
          },
          {
            title: 'updateInventory',
            path: '/update-inventory',
            icon: 'user',
            child: true
          },
          {
            title: 'deleteInventory',
            path: '/delete-inventory',
            icon: 'user',
            child: true
          }
        ]
      },
      {
        title: 'currentInventory',
        path: '/current-inventory',
        icon: 'user'
      },
      {
        title: 'archive',
        path: '/archive',
        icon: 'user'
      }
    ]
  },
  {
    title: 'orders',
    path: '/orders',
    icon: 'user',

    tabs: [
      {
        title: 'todaysOrders',
        path: '/today-orders',
        icon: 'user',

        children: [
          { title: 'all', path: '/all', icon: 'user', child: true },
          {
            title: 'onPreparation',
            path: '/on-preparation',
            icon: 'user',
            child: true
          },
          { title: 'Finished', path: '/finished', icon: 'user', child: true }
        ]
      },
      {
        title: 'manageOrder',
        path: '/manage',
        icon: 'user',

        children: [
          { title: 'newOrder', path: '/new-order', icon: 'user', child: true },
          {
            title: 'updateOrder',
            path: '/update-order',
            icon: 'user',
            child: true
          },
          {
            title: 'deleteOrder',
            path: '/delete-order',
            icon: 'user',
            child: true
          }
        ]
      },
      { title: 'archive', path: '/archive', icon: 'user' }
    ]
  },
  {
    title: 'menu',
    path: '/menu',
    icon: 'user',

    tabs: [
      { title: 'currentMenu', path: '/curren-menu', icon: 'user' },
      {
        title: 'manageMenu',
        path: '/manage',
        icon: 'user',

        children: [
          { title: 'newDish', path: '/new-dish', icon: 'user', child: true },
          {
            title: 'updateDish',
            path: '/update-dish',
            icon: 'user',
            child: true
          },
          {
            title: 'deleteDish',
            path: '/delete-dish',
            icon: 'user',
            child: true
          }
        ]
      },
      { title: 'archive', path: '/archive', icon: 'user' }
    ]
  }
];
