import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// Firebase
import { firebaseConfig } from './../config';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule, AngularFirestore } from 'angularfire2/firestore';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';

// Modules
import { AddNewListPageModule } from '../pages/shopping-lists/add-new-list/add-new-list.module';

// Pages
import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { MarketsPage } from '../pages/markets/markets';
import { ShoppingListsPage } from '../pages/shopping-lists/shopping-lists';
import { ConfigurationPage } from '../pages/configuration/configuration';
import { ProfilePage } from '../pages/profile/profile';
import { AboutPage } from '../pages/about/about';

// Providers
import { AuthenticationProvider } from '../providers/authentication/authentication';
import { MarketsProvider } from '../providers/markets/markets';
import { ShoppingListProvider } from '../providers/shopping-lists/shopping-list';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    HomePage,
    MarketsPage,
    ShoppingListsPage,
    ConfigurationPage,
    ProfilePage,
    AboutPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AddNewListPageModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    HomePage,
    MarketsPage,
    ShoppingListsPage,
    ConfigurationPage,
    ProfilePage,
    AboutPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AuthenticationProvider,
    MarketsProvider,
    ShoppingListProvider,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
  ]
})
export class AppModule {}
