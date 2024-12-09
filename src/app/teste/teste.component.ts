import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialog, MatDialogModule } from '@angular/material/dialog'; 
import { ModalComponent } from '../modal/modal.component'; 
@Component({
  selector: 'app-teste',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatDialogModule, // Import do módulo do MatDialog
  ],
  templateUrl: './teste.component.html',
  styleUrls: ['./teste.component.scss'],
})
export class TesteComponent {
  patientName: string = '';
  consultationRoom: string = '';
  lastCall: { patientName: string; consultationRoom: string } | null = null;
  previousCalls: { patientName: string; consultationRoom: string }[] = [];

  constructor(private dialog: MatDialog) {} // Injeção do MatDialog

  addCall() {
    if (this.patientName && this.consultationRoom) {
      if (this.lastCall) {
        this.previousCalls.unshift(this.lastCall);
        if (this.previousCalls.length > 3) {
          this.previousCalls.pop();
        }
      }

      this.lastCall = {
        patientName: this.patientName,
        consultationRoom: this.consultationRoom,
      };

      // Abrir o modal
      const dialogRef = this.dialog.open(ModalComponent, {
        data: {
          patientName: this.lastCall.patientName,
          consultationRoom: this.lastCall.consultationRoom,
        },
        width: '80%',
        height: '80%',
      });

      // Fechar automaticamente o modal após 5 segundos
      setTimeout(() => dialogRef.close(), 5000);

      // Falar o nome do paciente
      this.readAloud(`${this.lastCall.patientName} - ${this.lastCall.consultationRoom}`);

      // Adicionar o nome à lista
      this.previousCalls.unshift({
        patientName: this.patientName,
        consultationRoom: this.consultationRoom,
      });

      // Limpar os campos
      this.patientName = '';
      this.consultationRoom = '';
    }
  }

  readAloud(text: string) {
    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = 'pt-BR';
    speechSynthesis.speak(speech);
  }
}
