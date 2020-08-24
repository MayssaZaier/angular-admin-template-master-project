
import { Component } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  templateUrl: "delete.component.html",
})
export class FormsdeleteComponent {
  constructor(private router: Router, private route: ActivatedRoute) {}

  isCollapsed: boolean = false;
  iconCollapse: string = "icon-arrow-up";

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
    if (
      delete_data.class == null ||
      delete_data.dnsname == null ||
      delete_data.adress == null
    ) {
      console.log("Informations Missing");
      alert("Informations Missing");
    } else {
      this.router.navigate(["/base/cardsdelete"]);
    }
    console.log("delete_data", delete_data);
  }

  toggleCollapse(): void {
    this.isCollapsed = !this.isCollapsed;
    this.iconCollapse = this.isCollapsed ? "icon-arrow-down" : "icon-arrow-up";
  }
}
