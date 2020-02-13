export interface Poliza {
    nombre: string;
    descripcion: string;
    finicio: Date;
    fconsolidacion: Date;
    precio: number;
    cliente?: any;
    estado?: any;
    id?: number;
}