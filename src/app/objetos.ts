export interface Categoria {
  titulo: string;
  descripcion: string;
  url: string;
  alt: string;
  actividades: Actividad[];
}
export interface Actividad {
  name: string;
  url: string;
  description: string;
  empresas: Empresa[];
}
export interface Empresa {
  name: string;
  place: string;
  price: number;
  tNumber: string;
  web: string;
}
export interface SobreNosotrosGeneral{
  logo: string;
  alt: string;
  descripcion: string;
}
export interface Carrusel {
  url: string;
  alt: string;
}
export interface Persona {
  foto: string;
  alt: string;
  descripcion: string;
}
export interface Galeria {
  url: string;
  descripcion: string;
}
export interface DiscoverGC {
  municipio: string;
  descripcion: string;
  urlImagen: string;
  imagenDropdown: string;
}
export interface Evento{
  nombre: string;
  fecha: string;
  lugar: string;
  municipio: string;
  url: string;
  descripcion: string;
  dia: string;
  mes: string;
}
export interface Usuario{
  usuario: string;
  email: string;
  nombre: string;
  apellidos: string;
  password: string;
  id: number;
}

export interface UsuarioFire{
  usuario: string;
  nombre: string;
  apellidos: string;
}

export class FileUpload {
  key!: string;
  name!: string;
  url!: string;
  file: File;
  constructor(file: File) {
    this.file = file;
  }
}

