import { Component, inject, signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogWindowComponent } from './dialog-window/dialog-window.component';


@Component({
  selector: 'app-callback-button',
  standalone: true,
  imports: [],
  templateUrl: './callback-button.component.html',
  styleUrl: './callback-button.component.css'
})
export class CallbackButtonComponent {
  phoneImage = signal({src: 'assets/mimi_phone.svg', alt: 'phone'});
  private dialog = inject(MatDialog);

  openDialogWindow() {
    this.dialog.open(DialogWindowComponent);
  }
}
