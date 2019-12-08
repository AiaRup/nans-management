export const appStructureData = [
  {
    name: 'Dashboard',
    sideMenu: [{ name: 'Table View', tabNumber: 1 }]
  },
  {
    name: 'Reservations',
    sideMenu: [
      { name: 'Overview - Today', tabNumber: 1 },
      {
        name: 'Manage Reservation',
        tabNumber: 2,
        subMenu: [
          { name: 'Add Reservation', tabNumber: 1 },
          { name: 'Update Reservation', tabNumber: 2 },
          { name: 'Delete Reservation', tabNumber: 3 },
          { name: 'Archive', tabNumber: 4 }
        ]
      },
      {
        name: 'Archive',
        tabNumber: 3
      }
    ]
  },
  {
    name: 'Employees',
    sideMenu: [
      {
        name: 'Manage Employees',
        tabNumber: 1,
        subMenu: [
          { name: 'Add Employee', tabNumber: 1 },
          { name: 'Update Details', tabNumber: 2 }
        ]
      },
      {
        name: 'Working Hours',
        tabNumber: 2,
        subMenu: [
          { name: 'Update Hours', tabNumber: 2 },
          { name: 'Add Working Hours', tabNumber: 3 }
        ]
      },
      {
        name: 'Archive',
        tabNumber: 3
      }
    ]
  },
  {
    name: 'Payments',
    sideMenu: [
      {
        name: 'Clients',
        tabNumber: 1,
        subMenu: [
          { name: 'Add Payment', tabNumber: 1 },
          { name: 'Delete Payment', tabNumber: 2 },
          { name: 'Update Payment', tabNumber: 3 }
        ]
      },
      {
        name: 'Vendors',
        tabNumber: 2,
        subMenu: [
          { name: 'Add Payment', tabNumber: 1 },
          { name: 'Delete Payment', tabNumber: 2 },
          { name: 'Update Payment', tabNumber: 3 }
        ]
      },
      {
        name: 'Employees',
        tabNumber: 3,
        subMenu: [
          { name: 'Add Payment', tabNumber: 1 },
          { name: 'Delete Payment', tabNumber: 2 },
          { name: 'Update Payment', tabNumber: 3 }
        ]
      }
    ]
  },
  {
    name: 'Inventory',
    sideMenu: [
      {
        name: 'Manage Inventory',
        tabNumber: 1,
        subMenu: [
          { name: 'Add Inventory', tabNumber: 1 },
          { name: 'Update Inventory', tabNumber: 2 },
          { name: 'Delete Inventory', tabNumber: 3 }
        ]
      },
      {
        name: 'Current Inventory',
        tabNumber: 2
      },
      {
        name: 'Archive',
        tabNumber: 3
      }
    ]
  },
  {
    name: 'Orders',
    sideMenu: [
      {
        name: "Today's Orders",
        tabNumber: 1,
        subMenu: [
          { name: 'All', tabNumber: 1 },
          { name: 'On Preparation', tabNumber: 2 },
          { name: 'Finished', tabNumber: 3 }
        ]
      },
      {
        name: 'Manage Order',
        tabNumber: 2,
        subMenu: [
          { name: 'New Order', tabNumber: 1 },
          { name: 'Update Order', tabNumber: 2 },
          { name: 'Delete Order', tabNumber: 3 }
        ]
      },
      { name: 'Archive', tabNumber: 3 }
    ]
  },
  {
    name: 'Menu',
    sideMenu: [
      { name: 'Current Menu', tabNumber: 1 },
      {
        name: 'Manage Menu',
        tabNumber: 2,
        subMenu: [
          { name: 'New Dish', tabNumber: 1 },
          { name: 'Update Dish', tabNumber: 2 },
          { name: 'Delete Dish', tabNumber: 3 }
        ]
      },
      { name: 'Archive', tabNumber: 3 }
    ]
  }
];
