import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DadosService {


  constructor() { }

  setItem(key: string, value: any): void {
    const dados = JSON.stringify(value); 
    localStorage.setItem(key, dados); 
  }

  // Recuperar dados do LocalStorage
  getItem<T>(key: string): T | null {
    const dados = localStorage.getItem(key);
    return dados ? JSON.parse(dados) : null; 
  }
}
