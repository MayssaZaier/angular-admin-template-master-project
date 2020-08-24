import { Component } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  templateUrl: 'formsArecord.component.html'
})
export class FormsArecordComponent {
  constructor(private router: Router, private route: ActivatedRoute) {}


  isCollapsed: boolean = false;
  iconCollapse: string = 'icon-arrow-up';

  collapsed(event: any): void {
    // console.log(event);
  }

  expanded(event: any): void {
    // console.log(event);
  }
  ArecordForm: FormGroup = new FormGroup({
    partition: new FormControl(),
    container: new FormControl(),
    dnsname: new FormControl(),
    adress: new FormControl(),
    ttl: new FormControl(),
    description: new FormControl(),
  });
  create() {
    console.log("button clicked");
    const create_data = this.ArecordForm.value;
    console.log("create_data", create_data);
    if (
      create_data.partition == null ||
      create_data.container == null ||
      create_data.dnsname == null ||
      create_data.adress == null ||
      create_data.ttl == null ||
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
