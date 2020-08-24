import { Component } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  templateUrl: 'formsuser.component.html'
})
export class FormsuserComponent {
  constructor(private router: Router, private route: ActivatedRoute) {}

  isCollapsed: boolean = false;
  iconCollapse: string = 'icon-arrow-up';

  collapsed(event: any): void {
    // console.log(event);
  }

  expanded(event: any): void {
    // console.log(event);
  }
  UserForm: FormGroup = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
  });
  create() {
    console.log("button clicked");
    const create_data = this.UserForm.value;
    console.log("create_data", create_data);
    if (
      create_data.email == null ||
      create_data.password == null 
    ) {
      console.log("Informations Missing");
      alert("Informations Missing");
    } else {
      this.router.navigate(["/base/cardscreate"]);
    }
    console.log("create_data", create_data);
  }
  toggleCollapse(): void {
    this.isCollapsed = !this.isCollapsed;
    this.iconCollapse = this.isCollapsed ? 'icon-arrow-down' : 'icon-arrow-up';
  }

}
