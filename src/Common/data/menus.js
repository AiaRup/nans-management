export const menus = [
  {
    title: 'dashboard',
    path: '/dashboard',
    icon: 'user',
    tabs: [{ title: 'tableView', path: '/table-view', icon: 'user', key: '1' }]
  },
  {
    title: 'reservations',
    icon: 'user',
    tabs: [
      { title: 'OverviewToday', path: '/overview', icon: 'user', key: '1' },
      {
        title: 'manage',
        path: '/manage',
        icon: 'user',
        key: 'sub1',

        children: [
          {
            title: 'addReservation',
            path: '/add-reservation',
            icon: 'user',
            key: '2'
          },
          {
            title: 'updateReservation',
            path: '/update-reservation',
            icon: 'user',
            key: '3'
          },
          {
            title: 'deleteReservation',
            path: '/delete-reservation',
            icon: 'user',
            key: '4'
          }
        ]
      },
      {
        title: 'archive',
        path: '/archive',
        icon: 'user',
        key: '5'
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
        key: 'sub1',

        children: [
          {
            title: 'addEmployee',
            path: '/add-employee',
            icon: 'user',
            key: '1'
          },
          {
            title: 'updateDetails',
            path: '/update-details',
            icon: 'user',
            key: '2'
          }
        ]
      },
      {
        title: 'workingHours',
        path: '/working-hours',
        icon: 'user',
        key: 'sub2',

        children: [
          {
            title: 'updateHours',
            path: '/apdate-hours',
            icon: 'user',
            key: '3'
          },
          {
            title: 'addWorkingHours',
            path: '/add-hours',
            icon: 'user',
            key: '4'
          }
        ]
      },
      {
        title: 'archive',
        path: '/archive',
        icon: 'user',
        key: '5'
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
        key: 'sub1',

        children: [
          {
            title: 'addPayment',
            path: '/add-payment',
            icon: 'user',
            key: '1'
          },
          {
            title: 'deletePayment',
            path: '/delete-payment',
            icon: 'user',
            key: '2'
          },
          {
            title: 'updatePayment',
            path: '/update-payment',
            icon: 'user',
            key: '3'
          }
        ]
      },
      {
        title: 'vendors',
        path: '/vendors',
        icon: 'user',
        key: 'sub2',

        children: [
          {
            title: 'addPayment',
            path: '/add-payment',
            icon: 'user',
            key: '4'
          },
          {
            title: 'deletePayment',
            path: '/delete-payment',
            icon: 'user',
            key: '5'
          },
          {
            title: 'updatePayment',
            path: '/update-payment',
            icon: 'user',
            key: '6'
          }
        ]
      },
      {
        title: 'employees',
        path: '/employees',
        icon: 'user',
        key: 'sub3',

        children: [
          {
            title: 'addPayment',
            path: '/add-payment',
            icon: 'user',
            key: '7'
          },
          {
            title: 'deletePayment',
            path: '/delete-payment',
            icon: 'user',
            key: '8'
          },
          {
            title: 'updatePayment',
            path: '/update-payment',
            icon: 'user',
            key: '9'
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
        key: 'sub1',

        children: [
          {
            title: 'addInventory',
            path: '/add-inventory',
            icon: 'user',
            key: '1'
          },
          {
            title: 'updateInventory',
            path: '/update-inventory',
            icon: 'user',
            key: '2'
          },
          {
            title: 'deleteInventory',
            path: '/delete-inventory',
            icon: 'user',
            key: '3'
          }
        ]
      },
      {
        title: 'currentInventory',
        path: '/current-inventory',
        icon: 'user',
        key: '4'
      },
      {
        title: 'archive',
        path: '/archive',
        icon: 'user',
        key: '5'
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
        key: 'sub1',

        children: [
          { title: 'all', path: '/all', icon: 'user', key: '1' },
          {
            title: 'onPreparation',
            path: '/on-preparation',
            icon: 'user',
            key: '2'
          },
          { title: 'Finished', path: '/finished', icon: 'user', key: '3' }
        ]
      },
      {
        title: 'manageOrder',
        path: '/manage',
        icon: 'user',
        key: 'sub2',

        children: [
          { title: 'newOrder', path: '/new-order', icon: 'user', key: '4' },
          {
            title: 'updateOrder',
            path: '/update-order',
            icon: 'user',
            key: '5'
          },
          {
            title: 'deleteOrder',
            path: '/delete-order',
            icon: 'user',
            key: '6'
          }
        ]
      },
      { title: 'archive', path: '/archive', icon: 'user', key: '7' }
    ]
  },
  {
    title: 'menu',
    path: '/menu',
    icon: 'user',

    tabs: [
      { title: 'currentMenu', path: '/curren-menu', icon: 'user', key: '1' },
      {
        title: 'manageMenu',
        path: '/manage',
        icon: 'user',
        key: 'sub1',

        children: [
          { title: 'newDish', path: '/new-dish', icon: 'user', key: '2' },
          {
            title: 'updateDish',
            path: '/update-dish',
            icon: 'user',
            key: '3'
          },
          {
            title: 'deleteDish',
            path: '/delete-dish',
            icon: 'user',
            key: '4'
          }
        ]
      },
      { title: 'archive', path: '/archive', icon: 'user', key: '5' }
    ]
  }
];
