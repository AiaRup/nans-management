export const menus = [
  {
    title: 'Dashboard',
    path: '/dashboard',
    icon: 'user',
    tabs: [{ title: 'Table View', path: '/table-view', icon: 'user' }]
  },
  {
    title: 'Reservations',
    icon: 'user',
    tabs: [
      { title: 'Overview - Today', path: '/overview', icon: 'user' },
      {
        title: 'Manage',
        path: '/manage',
        children: [
          {
            title: 'Add Reservation',
            path: '/add-reservation',
            icon: 'user',
            child: true
          },
          {
            title: 'Update Reservation',
            path: '/update-reservation',
            icon: 'user',
            child: true
          },
          {
            title: 'Delete Reservation',
            path: '/delete-reservation',
            icon: 'user',
            child: true
          }
        ]
      },
      {
        title: 'Archive',
        path: '/archive',
        icon: 'user'
      }
    ]
  },
  {
    title: 'Employees',
    path: '/employees',
    icon: 'user',

    tabs: [
      {
        title: 'Manage',
        path: '/manage',
        icon: 'user',

        children: [
          {
            title: 'Add Employee',
            path: '/add-employee',
            icon: 'user',
            child: true
          },
          {
            title: 'Update Details',
            path: '/update-details',
            icon: 'user',
            child: true
          }
        ]
      },
      {
        title: 'Working Hours',
        path: '/working-hours',
        icon: 'user',

        children: [
          {
            title: 'Update Hours',
            path: '/apdate-hours',
            icon: 'user',
            child: true
          },
          {
            title: 'Add Working Hours',
            path: '/add-hours',
            icon: 'user',
            child: true
          }
        ]
      },
      {
        title: 'Archive',
        path: '/archive',
        icon: 'user'
      }
    ]
  },
  {
    title: 'Payments',
    path: '/payments',
    icon: 'user',

    tabs: [
      {
        title: 'Clients',
        path: '/clients',
        icon: 'user',

        children: [
          {
            title: 'Add Payment',
            path: '/add-payment',
            icon: 'user',
            child: true
          },
          {
            title: 'Delete Payment',
            path: '/delete-payment',
            icon: 'user',
            child: true
          },
          {
            title: 'Update Payment',
            path: '/update-payment',
            icon: 'user',
            child: true
          }
        ]
      },
      {
        title: 'Vendors',
        path: '/vendors',
        icon: 'user',

        children: [
          {
            title: 'Add Payment',
            path: '/add-payment',
            icon: 'user',
            child: true
          },
          {
            title: 'Delete Payment',
            path: '/delete-payment',
            icon: 'user',
            child: true
          },
          {
            title: 'Update Payment',
            path: '/update-payment',
            icon: 'user',
            child: true
          }
        ]
      },
      {
        title: 'Employees',
        path: '/employees',
        icon: 'user',

        children: [
          {
            title: 'Add Payment',
            path: '/add-payment',
            icon: 'user',
            child: true
          },
          {
            title: 'Delete Payment',
            path: '/delete-payment',
            icon: 'user',
            child: true
          },
          {
            title: 'Update Payment',
            path: '/update-payment',
            icon: 'user',
            child: true
          }
        ]
      }
    ]
  },
  {
    title: 'Inventory',
    path: '/inventory',
    icon: 'user',

    tabs: [
      {
        title: 'Manage Inventory',
        path: '/manage',
        icon: 'user',

        children: [
          {
            title: 'Add Inventory',
            path: '/add-inventory',
            icon: 'user',
            child: true
          },
          {
            title: 'Update Inventory',
            path: '/update-inventory',
            icon: 'user',
            child: true
          },
          {
            title: 'Delete Inventory',
            path: '/delete-inventory',
            icon: 'user',
            child: true
          }
        ]
      },
      {
        title: 'Current Inventory',
        path: '/current-inventory',
        icon: 'user'
      },
      {
        title: 'Archive',
        path: '/archive',
        icon: 'user'
      }
    ]
  },
  {
    title: 'Orders',
    path: '/orders',
    icon: 'user',

    tabs: [
      {
        title: "Today's Orders",
        path: '/today-orders',
        icon: 'user',

        children: [
          { title: 'All', path: '/all', icon: 'user', child: true },
          {
            title: 'On Preparation',
            path: '/on-preparation',
            icon: 'user',
            child: true
          },
          { title: 'Finished', path: '/finished', icon: 'user', child: true }
        ]
      },
      {
        title: 'Manage Order',
        path: '/manage',
        icon: 'user',

        children: [
          { title: 'New Order', path: '/new-order', icon: 'user', child: true },
          {
            title: 'Update Order',
            path: '/update-order',
            icon: 'user',
            child: true
          },
          {
            title: 'Delete Order',
            path: '/delete-order',
            icon: 'user',
            child: true
          }
        ]
      },
      { title: 'Archive', path: '/archive', icon: 'user' }
    ]
  },
  {
    title: 'Menu',
    path: '/menu',
    icon: 'user',

    tabs: [
      { title: 'Current Menu', path: '/curren-menu', icon: 'user' },
      {
        title: 'Manage Menu',
        path: '/manage',
        icon: 'user',

        children: [
          { title: 'New Dish', path: '/new-dish', icon: 'user', child: true },
          {
            title: 'Update Dish',
            path: '/update-dish',
            icon: 'user',
            child: true
          },
          {
            title: 'Delete Dish',
            path: '/delete-dish',
            icon: 'user',
            child: true
          }
        ]
      },
      { title: 'Archive', path: '/archive', icon: 'user' }
    ]
  }
];
