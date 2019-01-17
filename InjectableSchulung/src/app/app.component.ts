import { Component } from '@angular/core';
import { UseValueService } from './Services/use-value.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'InjectableSchulung';

  public messageFromUseValueSvc: string;

  constructor(private readonly useValueSvc: UseValueService) {
    this.messageFromUseValueSvc = useValueSvc.log();
  }
}
