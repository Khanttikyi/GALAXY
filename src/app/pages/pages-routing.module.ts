import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './_layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
      },
      {
        path: 'user-registration',
        loadChildren: () => import('./user-registration/user-registration.module').then( m => m.UserRegistrationPageModule)
      },
      {
        path: 'user-role',
        loadChildren: () => import('./user-role/user-role.module').then( m => m.UserRolePageModule)
      },
      {
        path: 'employee',
        loadChildren: () => import('./employee/employee.module').then( m => m.EmployeePageModule)
      },
      {
        path: 'attendance',
        loadChildren: () => import('./attendance/attendance.module').then( m => m.AttendancePageModule)
      },
      // {
      //   path: 'employee/add-new-employee',
      //   loadChildren: () => import('./employee/employee.module').then( m => m.EmployeePageModule)
      // },
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full',
      },
      {
        path: '**',
        redirectTo: 'error/404',
      },
    ],
  },
  {
    path: 'attendance',
    loadChildren: () => import('./attendance/attendance.module').then( m => m.AttendancePageModule)
  },

  





  

  

  

  



 

  

 

  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule { }
