import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/loginPage';
import { RegisterPage } from '../pages/register/registerPage';
import { HomePage } from '../pages/home/homePage';
import { WorkshopsPage } from '../pages/workshops/workshopsPage';
import { CreateWorkshopPage } from '../pages/createWorkshop/createWorkshopPage';
import { WorkshopDetailPage } from '../pages/workshopDetail/workshopDetailPage';
import { CommentModal } from '../pages/workshopDetail/workshopDetailPage_CommentModal';
import { GradeModal } from '../pages/workshopDetail/workshopDetailPage_GradeModal';
import { AuthService } from '../services/authService';
import { WorkshopService } from '../services/workshopService';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    RegisterPage,
    HomePage,
    WorkshopsPage,
    CreateWorkshopPage,
    WorkshopDetailPage,
    CommentModal,
    GradeModal
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    RegisterPage,
    HomePage,
    WorkshopsPage,
    CreateWorkshopPage,
    WorkshopDetailPage,
    CommentModal,
    GradeModal
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, AuthService, WorkshopService]
})
export class AppModule {}
