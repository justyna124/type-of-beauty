import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {SpringComponent} from './spring/spring.component';
import {SummerComponent} from './summer/summer.component';
import {AutumnComponent} from './autumn/autumn.component';
import {WinterComponent} from './winter/winter.component';
import {ColorTestComponent} from './color-test/color-test.component';
import {HomeComponent} from './home/home.component';
import {FormsModule} from '@angular/forms';
import {FileSelectDirective} from 'ng2-file-upload';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'spring', component: SpringComponent},
  {path: 'summer', component: SummerComponent},
  {path: 'autumn', component: AutumnComponent},
  {path: 'winter', component: WinterComponent},
  {path: 'color-test', component: ColorTestComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    SpringComponent,
    SummerComponent,
    AutumnComponent,
    WinterComponent,
    ColorTestComponent,
    HomeComponent,
    FileSelectDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
