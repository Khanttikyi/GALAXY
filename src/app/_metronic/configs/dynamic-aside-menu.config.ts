export const DynamicAsideMenuConfig = {
  items: [
    {
      title: 'Dashboard',
      root: true,
      icon: 'flaticon-home',
      svg: './assets/media/svg/icons/Design/Layers.svg',
      page: '/dashboard',
      bullet: 'dot',
      show: true,

    },
    {
      title: 'Employee Management',
      root: true,
      icon: 'flaticon-users',
      svg: './assets/media/svg/icons/Design/Layers.svg',
      page: '/employee',
      bullet: 'dot',
      show: true,
      submenu: [
        {
          title: 'Add New Employee',
          page: '/employee/add-new-employee'
        },
        
      ]
     

    },
    
   
    {
      title: 'User Management',
      root: true,
      icon: 'flaticon-user',
      svg: './assets/media/svg/icons/Design/Layers.svg',
      page: '/um',
      bullet: 'dot',
      show: true,

    },
    {
      title: 'Attendance',
      root: true,
      icon: 'flaticon-time-3',
      svg: './assets/media/svg/icons/Design/Layers.svg',
      page: '/attendance',
      bullet: 'dot',
      show: true,

    },
    {
      title: 'Leave',
      root: true,
      icon: 'flaticon-cogwheel-2',
      svg: './assets/media/svg/icons/Design/Layers.svg',
      page: '/lv',
      bullet: 'dot',
      show: true,

    },

  ]
};
