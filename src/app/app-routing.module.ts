import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddamountComponent } from './components/addamount/addamount.component';
import { CreateComponent } from './components/create/create.component';
import { DeleteComponent } from './components/delete/delete.component';
import { DisplayComponent } from './components/display/display.component';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
import { GetAllWalletComponent } from './components/get-all-wallet/get-all-wallet.component';
import { GetWalletByIdComponent } from './components/get-wallet-by-id/get-wallet-by-id.component';
import { HelpComponent } from './components/help/help.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { OperationsbuttonComponent } from './components/operationsbutton/operationsbutton.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { TransferComponent } from './components/transfer/transfer.component';
import { UpdateComponent } from './components/update/update.component';
import { UpdateidComponent } from './components/updateid/updateid.component';
import { WithdrawComponent } from './components/withdraw/withdraw.component';
import { GuardserviceService } from './service/guardservice.service';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // redirect to `first-component`
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'help', component: HelpComponent,canActivate:[GuardserviceService] },
  { path: 'delete', component: DeleteComponent ,canActivate:[GuardserviceService]},
  { path: 'forgotpassword', component: ForgotpasswordComponent },
  { path: 'transfer', component: TransferComponent,canActivate:[GuardserviceService] },
  { path: 'withdraw', component: WithdrawComponent ,canActivate:[GuardserviceService]},
  { path: 'addAmount', component: AddamountComponent ,canActivate:[GuardserviceService]},
  { path: 'registration', component: RegistrationComponent },
  { path: 'page-not-found',component:PageNotFoundComponent}, 
  { path: 'get-wallet-by-id',component:GetWalletByIdComponent,canActivate:[GuardserviceService]},
  { path: 'profile',component:ProfileComponent,canActivate:[GuardserviceService]},
  { path: 'getAllWallet',component:GetAllWalletComponent,canActivate:[GuardserviceService]},
  {path: 'update/:id',component:UpdateComponent,canActivate:[GuardserviceService]},
  {path: 'updateid',component:UpdateidComponent,canActivate:[GuardserviceService]},
  {path: 'display/:wallet',component:DisplayComponent,canActivate:[GuardserviceService]},
  { path: 'operationsbutton/:incorrect', component: OperationsbuttonComponent ,canActivate:[GuardserviceService]},
  { path: 'create', component: CreateComponent ,canActivate:[GuardserviceService]},
  { path: '**', component: PageNotFoundComponent }, // Wildcard route for a 404 page
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
