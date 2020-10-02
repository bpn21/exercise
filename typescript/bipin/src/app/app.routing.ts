import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from './auth/login/login.component';
import { PageNotFoundComponent } from './sharedModule/page-not-found/page-not-found.component';


const appRout: Routes = [                   //config
    {
        path: '',
        component: LoginComponent,
    },
    {
        path: 'auth',
        loadChildren: './auth/auth.module#AuthModule'
    },
    {
        path: '**',
        component: PageNotFoundComponent
    },
    {
        path: 'users',
        loadChildren: './auth/sharedModule#sharedModule'
    }

]
@NgModule({
    imports: [RouterModule.forRoot(appRout)],
    exports: [RouterModule],
})
export class AppRoutingModule {

}