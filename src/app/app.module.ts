import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import { AngularFireModule+ } from '@angular/fire' ;
import { environment } from '../environments/environment';
import { FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MainComponent } from './components/main/main.component';
import { InputComponent } from './components/input/input.component';
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    InputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    FormsModule,
    // AngularFireModule,
    // AngularFireModule.initializeApp(environment.firebase),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
