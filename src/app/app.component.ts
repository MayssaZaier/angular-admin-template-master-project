import { OnInit, Component } from "@angular/core";
import { Router, NavigationStart } from "@angular/router";

@Component({
  selector: "body",
  template: "<router-outlet></router-outlet>",
})
export class AppComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        console.log("event", event.url);
        if (event.url.match(/^\/#/)) {
          console.log("inside event match url format");
          this.router.navigateByUrl(event.url.replace("/#", ""));
        }
      }
    });
  }
}
