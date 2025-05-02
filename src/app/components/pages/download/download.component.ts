import { Component } from '@angular/core';
import {PrimeNgModule} from '../../../core/modules/PrimeNgModule';
import {CommonModule} from '@angular/common';
import {Tag} from 'primeng/tag';

@Component({
  selector: 'app-download',
  imports: [
    CommonModule,
    PrimeNgModule,
    Tag,
  ],
  templateUrl: './download.component.html',
  styleUrl: './download.component.css'
})
export class DownloadComponent {

  dummyData = [
    {
      entidad: 'Entidad 1',
      fecha: '2025-05-02',
      estado: 'Cargado',
      observaciones: 'Cargado correctamente'
    },
    {
      entidad: 'Entidad 2',
      fecha: '2025-05-01',
      estado: 'Pendiente',
      observaciones: 'En espera de revisión'
    },
    {
      entidad: 'Entidad 3',
      fecha: '2025-04-30',
      estado: 'Error',
      observaciones: 'Faltan documentos'
    }
  ];

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

  onDescargar(row: any) {
    console.log('Descargando reporte para:', row.entidad);
    // Lógica real de descarga aquí
  }
}
