import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const SharedRoute: Routes = [
    {
        path: '',
        component: DashboardComponent
    }
]
@NgModule({
    imports: [RouterModule.forChild(SharedRoute)]
})
export class SharedRoutingModule {

}