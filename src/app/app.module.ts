import { ContentAnimateDirective } from './shared/directives/content-animate.directive';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { CsgoComponent } from './components/games/csgo/csgo/csgo.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CsgoNewsComponent } from './components/games/csgo/csgo-news/csgo-news.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { ChartsModule, ThemeService } from 'ng2-charts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApexComponent } from './games/apex/apex.component';

@NgModule({
  declarations: [
    AppComponent,
    CsgoComponent,
    CsgoNewsComponent,
    NavbarComponent,
    FooterComponent,
    SidebarComponent,
    SpinnerComponent,
    ContentAnimateDirective,
    ApexComponent,    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule
  ],
  providers: [ThemeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
