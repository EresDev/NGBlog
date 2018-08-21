import { Component, OnInit } from '@angular/core';
import {Router, NavigationEnd, ActivatedRoute} from '@angular/router';
import { filter, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

    currentUrl: string;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
      router.events.subscribe(x => {
        if(x instanceof NavigationEnd){
            this.currentUrl = x.url;
            console.log(x.url);
        }


      });


  }
  ngOnInit() {
  }

}
