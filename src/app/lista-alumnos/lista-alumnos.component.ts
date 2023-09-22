import { Component } from '@angular/core';
import { Alumno } from '../models/alumno';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.scss'],
})
export class ListaAlumnosComponent {
  mostrarAlumnos = false;

  urlImagen =
    'https://img.freepik.com/vector-gratis/empresario-sosteniendo-lapiz-gran-lista-verificacion-completa-marcas-graduacion_1150-35019.jpg?w=1380&t=st=1695419860~exp=1695420460~hmac=d0de351c18343ce6d6d770a4c679b280b3c0e1b1209f36b4b99f8b1850e463f3';

  alumnos: Alumno[] = [
    {
      nombre: 'Noelia',
      apellido: 'Perez',
      fechaNacimiento: new Date('1996-04-15T00:00:00'),
      precioCuota: 55000.99,
      tieneDeuda: false,
    },
    {
      nombre: 'Melina',
      apellido: 'Perez',
      fechaNacimiento: new Date('1992-06-21T00:00:00'),
      precioCuota: 55000.99,
      tieneDeuda: true,
    },
    {
      nombre: 'Silvia',
      apellido: 'Perez',
      fechaNacimiento: new Date('1967-03-15T00:00:00'),
      precioCuota: 55000.99,
      tieneDeuda: false,
    },
    {
      nombre: 'Hernán',
      apellido: 'Perez',
      fechaNacimiento: new Date('1986-04-20T00:00:00'),
      precioCuota: 55000.99,
      tieneDeuda: false,
    },
    {
      nombre: 'Gonzalo',
      apellido: 'Piskorz',
      fechaNacimiento: new Date('1989-02-23T00:00:00'),
      precioCuota: 55000.99,
      tieneDeuda: true,
    },
  ];

  mostrarListaAlumnos = () => {
    this.mostrarAlumnos = !this.mostrarAlumnos;
  };
}
