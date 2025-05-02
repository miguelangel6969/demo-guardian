import {Component} from '@angular/core';
import {PrimeNgModule} from '../../../core/modules/PrimeNgModule';
import {Tag} from 'primeng/tag';

@Component({
  selector: 'app-upload',
  imports: [
    PrimeNgModule,
    Tag,
  ],
  templateUrl: './upload.component.html',
  styleUrl: './upload.component.css'
})
export class UploadComponent {
// Datos dummy para la tabla
  dummyData : any = [];

  selectedFolder: File[] = [];
  selectedFolderName: string = '';

  triggerFolderInput() {
    const input = document.getElementById('folderInput') as HTMLInputElement;
    input.click();
  }

  getSeverity(status: string) {
    switch (status) {
      case 'qualified':
      case 'instock':
      case 'INSTOCK':
      case 'DELIVERED':
      case 'delivered':
      case 'Cargado':
        return 'success';

      case 'negotiation':
      case 'lowstock':
      case 'LOWSTOCK':
      case 'PENDING':
      case 'pending':
      case 'Pendiente':
        return 'warn';

      case 'unqualified':
      case 'outofstock':
      case 'OUTOFSTOCK':
      case 'CANCELLED':
      case 'cancelled':
      case 'Error':
        return 'danger';

      default:
        return 'info';
    }
  }

  onFolderSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFolder = Array.from(input.files);

      // Obtener el nombre de la carpeta del primer archivo
      const firstPath = this.selectedFolder[0].webkitRelativePath;
      const parts = firstPath.split('/');
      this.selectedFolderName = parts.length > 1 ? parts[0] : '(Carpeta desconocida)';

      // // Rellenar tabla dummy
      // this.dummyData = this.selectedFolder.map(file => ({
      //   nombreContenedor: file.name,
      //   estado: 'Pendiente',
      //   observaciones: 'Por revisar',
      // }));
    }
  }

  onClearSelection() {
    this.selectedFolder = [];
    this.selectedFolderName = '';
    this.dummyData = []

    // Limpiar también el input de tipo file por si el usuario quiere volver a seleccionar la misma carpeta
    const input = document.getElementById('folderInput') as HTMLInputElement;
    if (input) {
      input.value = '';
    }
  }


  onUploadInvoices() {
    if (!this.selectedFolder || this.selectedFolder.length === 0) {
      alert('Debes seleccionar una carpeta primero.');
      return;
    }
    this.dummyData = [
      { nombreContenedor: 'Factura_001.zip', estado: 'Cargado', observaciones: 'Correcto' },
      { nombreContenedor: 'Factura_002.zip', estado: 'Error', observaciones: 'Formato incorrecto' },
      { nombreContenedor: 'Factura_003.zip', estado: 'Pendiente', observaciones: 'Esperando validación' }
    ];
  }
}
