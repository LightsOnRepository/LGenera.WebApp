import { Component, DestroyRef, inject, signal } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { DialogWindowService } from './dialog-window.service';
import { FormValue } from './dialog-window.model';

@Component({
  selector: 'app-dialog-window',
  standalone: true,
  imports: [    
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule
  ],
  templateUrl: './dialog-window.component.html',
  styleUrl: './dialog-window.component.css'
})
export class DialogWindowComponent {
  phoneImage = signal({src: 'assets/mimi_phone.svg', alt: 'phone'});
  private dialogWindowService = inject(DialogWindowService);
  private destroyRef = inject(DestroyRef);
  form = new FormGroup({
    name: new FormControl(''),
    phone: new FormControl(''),
    text: new FormControl('')
  });

  onSubmit() {
    const enteredName = this.form.value.name;
    const enteredPhone = this.form.value.phone;
    const enteredText = this.form.value.text;

    const formValue: FormValue = {name: enteredName, phoneNumber: enteredPhone, problemDescription: enteredText};

    const subscribe = this.dialogWindowService.postRequest(formValue).subscribe();
    
    this.destroyRef.onDestroy(() => {
      subscribe.unsubscribe();
    });
  }
}
