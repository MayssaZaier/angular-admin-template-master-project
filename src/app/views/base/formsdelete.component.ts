import { Component } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  templateUrl: 'formsdelete.component.html'
})
export class FormsdeleteComponent {

  constructor(private router: Router, private route: ActivatedRoute) {}

  isCollapsed: boolean = false;
  iconCollapse: string = 'icon-arrow-up';

  collapsed(event: any): void {
    // console.log(event);
  }

  expanded(event: any): void {
    // console.log(event);
  }
  deleteForm: FormGroup = new FormGroup({
    class: new FormControl(),
    dnsname: new FormControl(),
    adress: new FormControl(),
  });

  
  delete() {
    console.log("button clicked");
    const delete_data = this.deleteForm.value;
    console.log("delete_data", delete_data);
    
  }

  toggleCollapse(): void {
    this.isCollapsed = !this.isCollapsed;
    this.iconCollapse = this.isCollapsed ? 'icon-arrow-down' : 'icon-arrow-up';
  }

}
