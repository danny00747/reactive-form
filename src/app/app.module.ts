import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {ConfirmationService} from "primeng/api";
import {ConctactWarapperModule} from "@app/conctact-warapper/conctact-warapper.module";
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "@app/core/home/home.component";
import {CoreModule} from "./core/core.module";

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: '', loadChildren: () => import('@app/recap/recap.module').then(m => m.RecapModule)},
];

@NgModule({
  declarations: [AppComponent],
  imports: [ConctactWarapperModule, CoreModule, RouterModule.forRoot(routes)],
  providers: [ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
