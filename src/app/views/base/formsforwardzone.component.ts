import { Component } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  templateUrl: 'formsforwardzone.component.html'
})
export class FormsforwardComponent {
  constructor(private router: Router, private route: ActivatedRoute) {}


  isCollapsed: boolean = false;
  iconCollapse: string = 'icon-arrow-up';

  collapsed(event: any): void {
    // console.log(event);
  }

  expanded(event: any): void {
    // console.log(event);
  }

  ForwardzoneForm: FormGroup = new FormGroup({
    partition: new FormControl(),
    server: new FormControl(),
    view: new FormControl(),
    name: new FormControl(),
    zoneid: new FormControl(),
    description: new FormControl(),
  });
  create() {
    console.log("button clicked");
    const create_data = this.ForwardzoneForm.value;
    console.log("create_data", create_data);
    if (
      create_data.partition == null ||
      create_data.server == null ||
      create_data.view == null ||
      create_data.name == null ||
      create_data.zoneid == null ||
      create_data.description == null
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
