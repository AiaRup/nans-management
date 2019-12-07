export const appStructureData = {
  pages: [
    {
      name: 'Home',
      tabNumber: 1,
      subMenu: [{ name: 'Table View', tabNumber: 1 }]
    },
    {
      name: 'Reservations',
      tabNumber: 2,
      subMenu: [
        { name: 'Overview Today', tabNumber: 1 },
        {
          name: 'Manage Reservation',
          tabNumber: 2,
          subMenu: [
            { name: 'Add Reservation', tabNumber: 1 },
            { name: 'Delete Reservation', tabNumber: 2 }
          ]
        }
      ]
    },
    {
      name: 'Employees',
      tabNumber: 3,
      subMenu: [
        {
          name: 'Manage Employees',
          tabNumber: 2,
          subMenu: [
            { name: 'Add Employee', tabNumber: 1 },
            { name: 'Update Details', tabNumber: 2 }
          ]
        }
      ]
    },
    {
      name: 'Payments',
      tabNumber: 4,
      subMenu: [
        {
          name: 'Clients',
          tabNumber: 2,
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
          tabNumber: 2,
          subMenu: [
            { name: 'Add Payment', tabNumber: 1 },
            { name: 'Delete Payment', tabNumber: 2 },
            { name: 'Update Payment', tabNumber: 3 }
          ]
        }
      ]
    },
    {
      name: 'Menu',
      tabNumber: 5,
      subMenu: [
        {
          name: 'Manage Menu',
          tabNumber: 2,
          subMenu: [
            { name: 'Add Dish', tabNumber: 1 },
            { name: 'Update Dish', tabNumber: 2 },
            { name: 'Delete Dish', tabNumber: 3 }
          ]
        }
      ]
    },
    {
      name: 'Inventory',
      tabNumber: 5,
      subMenu: [
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
        }
      ]
    },
    {
      name: 'Archive',
      tabNumber: 5,
      subMenu: [
        { name: 'Employees', tabNumber: 1 },
        { name: 'Reservations', tabNumber: 2 },
        { name: 'Inventory', tabNumber: 3 },
        { name: 'Payments', tabNumber: 4 },
        { name: 'Menu', tabNumber: 5 }
      ]
    }
  ]
};
