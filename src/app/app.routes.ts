import { Routes } from "../../node_modules/@angular/router/types/_router_module-chunk";
import { ForgotPassword } from "./forgot-password/forgot-password";
import { Login } from "./login/login";
import { Error } from "./error/error";


export const routes: Routes = [
    {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component:Login},
  {path: 'forgot-password', component:ForgotPassword},
  { path: '**', component:Error},
];
