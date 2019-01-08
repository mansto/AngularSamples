import { Component } from '@angular/core';
import { UseClassService } from './Services/use-class.service';
import { UseFactoryService } from './Services/use-factory.service';
import { UseFactoryWithDependenciesService } from './Services/use-factory-with-dependencies.service';
import { UseValueService } from './Services/use-value.service';
import { UseExistingService } from './Services/use-existing.service';
import { UseClassWithIncorrectInterfaceService } from './Services/use-class-with-incorrect-interface.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'InjectableSample';
  public messageFromUseClassSvc: string;
  public messageFromUseClassWithIncorrectInterfaceSvc: string;
  public messageFromUseFactorySvc: string;
  public messageFromUseFactoryWithDependenciesSvc: string;
  public messageFromUseValueSvc: string;
  public messageFromUseExistingSvc: string;

  constructor(private readonly useClassSvc: UseClassService,
    private readonly useClassWithIncorrectInterfaceSvc: UseClassWithIncorrectInterfaceService,
    private readonly useFactorySvc: UseFactoryService,
    private readonly useFactoryWithDepsSvc: UseFactoryWithDependenciesService,
    private readonly useValueSvc: UseValueService,
    private readonly useExistingSvc: UseExistingService) {

      this.messageFromUseClassSvc = useClassSvc.log();
      this.messageFromUseFactorySvc = useFactorySvc.log();
      this.messageFromUseFactoryWithDependenciesSvc = useFactoryWithDepsSvc.log();
      this.messageFromUseValueSvc = useValueSvc.log();
      this.messageFromUseExistingSvc = useExistingSvc.log();

      try {
        // Dieser Aufruf führt zu einem Fehler da die Klasse UseClassWithIncorrectInterfaceService im Injectable Attribut
        // die Klasse UseClassWithIncorrectInterfaceService2 zur Verwendung angegeben ist. Die Klasse UseClassWithIncorrectInterfaceService2
        // hat aber keine Methode log().
        // Der Kompiler/Interpreter hindert uns hier nicht einen Typ mit ungültiger Signatur zu injizieren. :/
        this.messageFromUseClassWithIncorrectInterfaceSvc = useClassWithIncorrectInterfaceSvc.log();
      } catch (error) {
        this.messageFromUseFactoryWithDependenciesSvc = error;
        console.log(error);
      }
  }
}
