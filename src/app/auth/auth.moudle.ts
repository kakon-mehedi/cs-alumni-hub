import { NgModule } from "@angular/core";
import { SignupComponent } from "./components/signup/signup.component";
import { LoginComponent } from "./components/login/login.component";
import { SharedModule } from "../../shared/shared.module";
import { RouterModule } from "@angular/router";
import { authModuleRoutes } from "./routes";

@NgModule({
    imports: [SharedModule, RouterModule.forChild(authModuleRoutes)],
    declarations: [SignupComponent, LoginComponent],
    bootstrap: [LoginComponent]
})
export class AuthModule {
    constructor() {
        console.log('Authenctication Module Loads');
    }
}