import { Injectable } from '@angular/core';
import { Firestore, collectionData } from '@angular/fire/firestore';
import { addDoc, collection, deleteDoc, doc } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private fs:Firestore) { }

  getClients(){
    let clientCollection= collection(this.fs,'person');
    return collectionData(clientCollection,{idField:'id'});

  }

  addClient(name:string){
    let data = {name : name};
    let clientCollection = collection(this.fs,'person');
    return addDoc(clientCollection,data);

  }

  deleteClient(id:string)
  {
      let docRef=doc(this.fs,'person/'+id);
      return deleteDoc(docRef)
  }
}
