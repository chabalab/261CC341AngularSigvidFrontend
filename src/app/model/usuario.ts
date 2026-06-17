export interface Usuario {
  idUsuario?: number;
  nombre: string;
  apellido: string;
  dni: string;
  email: string;
  telefono?: string;
  tipoUsuario: string;
  rol?: Rol;
}

export interface Rol {
  idRol: number;
  nombre: string;
  descripcion: string;
}