import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { IonicModule } from '@ionic/angular';
import { HelpComponent } from './components/help/help.component';
import { UpdateComponent } from './components/update/update.component';
import { OperationsbuttonComponent } from './components/operationsbutton/operationsbutton.component';
import { CreateComponent } from './components/create/create.component';
import { DeleteComponent } from './components/delete/delete.component';
import { WithdrawComponent } from './components/withdraw/withdraw.component';
import { TransferComponent } from './components/transfer/transfer.component';
import { AddamountComponent } from './components/addamount/addamount.component';
import { GetWalletByIdComponent } from './components/get-wallet-by-id/get-wallet-by-id.component';
import { GetAllWalletComponent } from './components/get-all-wallet/get-all-wallet.component';

import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
import { HttpClientModule } from '@angular/common/http';
import { DisplayComponent } from './components/display/display.component';
import { UpdateidComponent } from './components/updateid/updateid.component';
import { ProfileComponent } from './components/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegistrationComponent,
    PageNotFoundComponent,
    HelpComponent,
    UpdateComponent,
    OperationsbuttonComponent,
    CreateComponent,
    DeleteComponent,
    WithdrawComponent,
    TransferComponent,
    AddamountComponent,
    GetWalletByIdComponent,
    GetAllWalletComponent,
    ForgotpasswordComponent,
    DisplayComponent,
    UpdateidComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    IonicModule.forRoot(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
