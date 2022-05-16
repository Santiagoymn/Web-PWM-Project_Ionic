import {Injectable, Input} from '@angular/core';
import {
  Actividad,
  Carrusel,
  Categoria,
  DiscoverGC,
  Evento,
  Persona,
  SobreNosotrosGeneral,
  Usuario,
  Empresa
} from '../objetos';

import {Observable} from 'rxjs';
import {AngularFirestore} from '@angular/fire/compat/firestore';
import {initializeApp} from 'firebase/app';
import {environment} from '../../environments/environment';
import {collection, getDocs, getFirestore, query, where} from '@angular/fire/firestore';



@Injectable({
  providedIn: 'root'
})
export class GetterFirebaseService {
  @Input() categoria!: Categoria;
  @Input() quienesSomos!: Persona;
  @Input() discoverGC!: DiscoverGC;
  @Input() sobreNosotros!: SobreNosotrosGeneral;
  @Input() carrusel!: Carrusel;
  @Input() usuario!: Usuario;
  @Input() actividad!: Actividad;

  app = initializeApp(environment);
  db = getFirestore(this.app);


  constructor(private firestore: AngularFirestore) {
  }

  getCategorias(){
    return this.firestore.collection<Categoria>('categorias').valueChanges();
  }

  getActividades() {
    return this.firestore.collection<Actividad>('actividades').valueChanges();
  }

  getEventos(){
    return this.firestore.collection<Evento>('eventos').valueChanges();
  }

  getQuienesSomos() {
    return this.firestore.collection<Persona>('sobreNosotrosPersonas').valueChanges();
  }

  getMunicipios() {
    return this.firestore.collection<DiscoverGC>('municipios').valueChanges();
  }

  getImagesCarrusel() {
    return this.firestore.collection<Carrusel>('imagenesCarrusel').valueChanges();
  }

  getAboutUs() {
    return this.firestore.collection<SobreNosotrosGeneral>('sobreNosotros').valueChanges();
  }

  async getCategoriaActividades(nombreCategoria: string) {
    const categorias = collection(this.db, 'categorias');
    const q = query(categorias, where('titulo', '==', nombreCategoria));
    const querySnapshot = await getDocs(q);

    const activities: string[] = [];

    querySnapshot.forEach((doc) => {
      const actividades = doc.get('actividades');

      // eslint-disable-next-line guard-for-in
      for (const acti in actividades){
        activities.push(acti);
      }
    });

    const todasActividades = collection(this.db, 'actividades');
    const q2 = query(todasActividades);
    const querySnapshot2 = await getDocs(q2);

    const solucion: Actividad[] = [];

    querySnapshot2.forEach((doc) => {
      // eslint-disable-next-line @typescript-eslint/prefer-for-of
      for (let i=0; i<activities.length; i++){
        if(activities[i] === doc.id){
          // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
          solucion.push((<Actividad>doc.data()));
        }
      }

    });
    return solucion;
  }

  async getActividadesEmpresas(nombreActividad: string) {

    const actividades = collection(this.db, 'actividades');
    const q = query(actividades, where('name', '==', nombreActividad));
    const querySnapshot = await getDocs(q);

    const companies: string[] = [];

    querySnapshot.forEach((doc) => {
      const empresas = doc.get('empresas');
      // eslint-disable-next-line guard-for-in
      for (const empre in empresas){
        companies.push(empre);
      }
    });
    const todasEmpresas = collection(this.db, 'empresas');
    const q2 = query(todasEmpresas);
    const querySnapshot2 = await getDocs(q2);

    const solucion: Empresa[] = [];

    querySnapshot2.forEach((doc) => {
      // eslint-disable-next-line @typescript-eslint/prefer-for-of
      for (let i=0; i<companies.length; i++){
        if(companies[i] === doc.id){
          // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
          solucion.push((<Empresa>doc.data()));
        }
      }

    });
    return solucion;
  }
}




