export interface InterfaceRootObject {
  studente: InterfaceStudente[];
  cdl: InterfaceCdl[];
  insegnante: InterfaceInsegnante[];
  materia: InterfaceMateria[];
}

export interface InterfaceMateria {
  codice: string;
  nome: string;
  descrizione: string;
}

export interface InterfaceInsegnante {
  nome: string;
  cognome: string;
  matricola: string;
  materia: string;
}

export interface InterfaceCdl {
  codice: string;
  nome: string;
  anni: number;
  materie: string[];
}

export interface InterfaceStudente {
  nome: string;
  cognome: string;
  matricola: string;
  cdl: string;
}

export interface InterfaceStudenteMaterieSeguite {
  nome: string;
  cognome: string;
  matricola: string;
  cdl: string;
  materieSeguite: string[];
}

export interface propsWe {
  matricola: string;
  cdl: string;
}
