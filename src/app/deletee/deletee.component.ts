import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-deletee",
  templateUrl: "./deletee.component.html",
  styleUrls: ["./deletee.component.css"],
})
export class DeleteeComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {}

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

  // toggleCollapse(): void {
  //   this.isCollapsed = !this.isCollapsed;
  //   this.iconCollapse = this.isCollapsed ? "icon-arrow-down" : "icon-arrow-up";
  // }
}
