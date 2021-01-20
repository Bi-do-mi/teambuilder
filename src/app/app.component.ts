import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {filter, map} from 'rxjs/operators';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private titleService: Title,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private metaService: Meta) {
  }

  ngOnInit(): void {
    this.router.events.pipe(
      filter(a => a instanceof NavigationEnd),
      map(() => {
        let child = this.activatedRoute.firstChild;
        while (child.firstChild) {
          child = child.firstChild;
        }
        if (child.snapshot.data['title']) {
          this.titleService.setTitle(child.snapshot.data['title']);
        }
        if (child.snapshot.data['description']) {
          this.metaService.updateTag({name: 'description', content: child.snapshot.data['description']});
        }
        if (child.snapshot.data['keywords']) {
          this.metaService.updateTag({name: 'keywords', content: child.snapshot.data['description']});
        }
        if (child.snapshot.data['robots']) {
          this.metaService.updateTag({name: 'robots', content: child.snapshot.data['robots']});
        }
        return;
      })
    ).subscribe(() => {
    });
  }
}
