import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AuthPage } from'../pages/auth/auth';
import { LoginPage } from '../pages/login/login';
import { AboutPage } from '../pages/about/about';
import { BoardPage } from '../pages/board/board';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { DetailPage } from '../pages/detail/detail';
import { WritePage } from '../pages/write/write';

import { AutosizeDirective } from '../directives/autosize/autosize';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';
import { IonicImageViewerModule } from 'ionic-img-viewer';
import * as ionicGalleryModal from 'ionic-gallery-modal';
import { HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';

@NgModule({
  declarations: [
    MyApp,
    AuthPage,
    LoginPage,
    AboutPage,
    BoardPage,
    HomePage,
    TabsPage,
    DetailPage,
    WritePage,
    AutosizeDirective
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicImageViewerModule,
    ionicGalleryModal.GalleryModalModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AuthPage,
    LoginPage,
    AboutPage,
    BoardPage,
    HomePage,
    TabsPage,
    DetailPage,
    WritePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    {
        provide: HAMMER_GESTURE_CONFIG,
        useClass: ionicGalleryModal.GalleryModalHammerConfig,
    },
    AuthServiceProvider
  ]
})
export class AppModule {}
