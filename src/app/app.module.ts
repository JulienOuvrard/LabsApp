import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Page0 } from '../pages/page0/page0';
import { RegisterPage } from '../pages/page0/registerPage';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import { Page3 } from '../pages/page3/page3';
import { Page4 } from '../pages/page4/page4';
import { Page5 } from '../pages/page5/page5';
import { CommentModal } from '../pages/page5/page5Modal';
import { GradeModal } from '../pages/page5/page5Modal2';
import { AuthService } from '../pages/page0/authService';

@NgModule({
  declarations: [
    MyApp,
    Page0,
    RegisterPage,
    Page1,
    Page2,
    Page3,
    Page4,
    Page5,
    CommentModal,
    GradeModal
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page0,
    RegisterPage,
    Page1,
    Page2,
    Page3,
    Page4,
    Page5,
    CommentModal,
    GradeModal
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, AuthService]
})
export class AppModule {}
