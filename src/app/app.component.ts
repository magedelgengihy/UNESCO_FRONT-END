import { Component, OnDestroy } from '@angular/core';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {

  title = 'uni';
  dir: string = "ltr";
  style: string = "text-align: left;";
  translate;
  currentStyles: {};
  subscription: Subscription;

  constructor(translateService: TranslateService) {
    this.translate = translateService;

    // this is being triggered many, many times
    this.subscription= this.translate.onLangChange
      .subscribe((event: LangChangeEvent) => {
        // REMOVE this line to make it work
        // this.translate.use(event.lang);
        this.changeStyling(this.translate.currentLang);
      });
  }

  changeStyling(lang:string)
  {
    if(lang=='ar')
    {
      this.dir='rtl';
    }
    else{
      this.dir='ltr';
    }
    this.setCurrentStyles(lang);
  }

  setCurrentStyles(lang:string) {
    // CSS styles: set per current state of component properties
    this.currentStyles = {
      'text-align':  lang == 'ar'     ? 'right' : ( lang == 'en' ? 'left':'left'),
      'font-family':  lang == 'ar'     ? 'Tajawal' : ( lang == 'en' ? 'Raleway':'Raleway'),
    };
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
