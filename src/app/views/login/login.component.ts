import { Component } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-dashboard",
  templateUrl: "login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent {
  loginForm: FormGroup = new FormGroup({
    login: new FormControl(),
    password: new FormControl(),
  });

  constructor(private router: Router, private route: ActivatedRoute) {}

  test() {
    console.log("button clicked");
    const login_data = this.loginForm.value;
    console.log("login", login_data.login, "password", login_data.password);
    if (login_data.login == "admin" && login_data.password == "admin") {
      this.router.navigate(["/dashboard"]);
    } else {
      alert("Wrong login informations");
    }
  }
}
