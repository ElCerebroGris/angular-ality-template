import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { SidebarComponent } from './components/layout/sidebar/sidebar.component';
import { BlankComponent } from './components/main/blank/blank.component';
import { LoginComponent } from './components/main/login/login.component';
import { DashboardComponent } from './components/main/dashboard/dashboard.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { InqueritosListarComponent } from './components/main/inqueritos/inqueritos-listar/inqueritos-listar.component';
import { InqueritosModalAddComponent } from './components/main/inqueritos/inqueritos-modal-add/inqueritos-modal-add.component';
import { InqueritosAddComponent } from './components/main/inqueritos/inqueritos-add/inqueritos-add.component';
import { InqueritosResponderComponent } from './components/main/inqueritos/inqueritos-responder/inqueritos-responder.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    BlankComponent,
    LoginComponent,
    DashboardComponent,
    FooterComponent,
    InqueritosListarComponent,
    InqueritosModalAddComponent,
    InqueritosAddComponent,
    InqueritosResponderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
