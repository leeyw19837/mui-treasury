export default [
  { key: 'layout', label: 'Introduction', to: '/layout' },
  {
    key: 'tutorials',
    label: 'Tutorials',
    subMenus: [
      {
        key: 'dashboard-layout',
        label: 'Dashboard Layout',
        to: '/layout/tutorials/dashboard-layout/',
      },
      {
        key: 'blog-layout',
        label: 'Blog Layout',
        to: '/layout/tutorials/blog-layout/',
      },
    ],
  },
  { key: 'builder', label: 'Builder', to: '/layout/builder' },
  {
    key: 'presets',
    label: 'Presets',
    subMenus: [
      {
        key: 'default',
        label: 'Default',
        to: '/layout/presets/default',
      },
      {
        key: 'standard',
        label: 'Standard',
        to: '/layout/presets/standard',
      },
      {
        key: 'content-based',
        label: 'Content Based',
        to: '/layout/presets/content-based',
      },
      {
        key: 'cozy',
        label: 'Cozy',
        to: '/layout/presets/cozy',
      },
      {
        key: 'fixed',
        label: 'Fixed',
        to: '/layout/presets/fixed',
      },
      {
        key: 'mui-treasury',
        label: 'MUI Treasury',
        to: '/layout/presets/mui-treasury',
      },
    ],
  },
  {
    key: 'basic-examples',
    label: 'Basic Examples',
    subMenus: [
      {
        key: 'custom-theme',
        label: 'Custom theme',
        to: '/layout/basic-examples/custom-theme?bgColor=d4b397',
      },
      {
        key: 'custom-styles',
        label: 'Custom styles',
        to:
          '/layout/basic-examples/custom-styles?bgColor=213E9B&accent=rgb(17, 254, 220)&dark=true',
      },
      {
        key: 'control-sidebar',
        label: 'Control Sidebar',
        to:
          '/layout/basic-examples/control-sidebar?bgColor=e9e9e9&primary=36338E&accent=ff9600',
      },
      {
        key: 'secondary-sidebar',
        label: '2nd Sidebar',
        to: '/layout/basic-examples/secondary-sidebar',
      },
      {
        key: 'inset-sidebar',
        label: 'Inset Sidebar',
        to: '/layout/basic-examples/inset-sidebar',
      },
    ],
  },
  {
    key: 'clones',
    label: 'Clones',
    subMenus: [
      {
        key: 'reactjs',
        label: 'React Doc',
        to: '/layout/clones/reactjs?bgColor=b6c0d4',
      },
      {
        key: 'messenger',
        label: 'Messenger',
        to: '/layout/clones/messenger?bgColor=rgb(0,153,255)&dark=true',
      },
      {
        key: 'shopping-cart',
        label: 'Shopping Cart',
        to: '/layout/clones/shopping-cart?bgColor=EAEEF1',
      },
    ],
  },
];
