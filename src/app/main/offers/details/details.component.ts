import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { Image } from '../../main.model';
import { DetailComponent } from "./detail/detail.component";
import { DetailService } from './details.service';

@Component({
    selector: 'app-details',
    standalone: true,
    templateUrl: './details.component.html',
    styleUrl: './details.component.css',
    imports: [DetailComponent]
})
export class DetailsComponent implements OnInit {
  generatorImage = signal({src:'assets/big_generator.svg', alt:'Generator'});
  private detailServices = inject(DetailService);
  private destroyRef = inject(DestroyRef);
  servicesDescription = this.detailServices.loadedServicesDescription;
  
  ngOnInit(): void {
    const subscription = this.detailServices.getDetails().subscribe({
      next: (resData) => {
      }
    });

    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    });

  }
}
