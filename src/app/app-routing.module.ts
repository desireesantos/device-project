import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppModule } from './app.module';
import { AppAuthGuard } from './../app/app-auth-guard.guard';

const routes: Routes = [
  {
    path: '/',
    loadChildren: () => AppModule,
    canActivate: [AppAuthGuard],
    data: { roles: ['SuperUser'] },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AppAuthGuard],
})
export class AppRoutingModule {}
