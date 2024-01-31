import { ServiceService } from './service.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { AppComponent } from './app.component';

const firebaseConfig = {
  apiKey: "AIzaSyAAtLqaoAZAOBQw3MJPjjuiPLV7GO842Ng",
  authDomain: "gestionclientsangular.firebaseapp.com",
  databaseURL: "https://gestionclientsangular-default-rtdb.firebaseio.com",
  projectId: "gestionclientsangular",
  storageBucket: "gestionclientsangular.appspot.com",
  messagingSenderId: "654642979368",
  appId: "1:654642979368:web:0f1db9dfcc688f43600b1d",
  measurementId: "G-P0P3XFLFW4"
};
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    provideFirebaseApp(() => initializeApp(firebaseConfig )),
    provideFirestore(() => getFirestore()),
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
