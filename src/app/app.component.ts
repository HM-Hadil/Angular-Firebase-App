import { Component } from '@angular/core';
import { ServiceService } from './service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  [x: string]: any;
  title = 'angular_firebase_con';
  constructor(private share: ServiceService) {}
  ngOnInit(): void {
    this.getClient();
  }

  clients: any = [];
  getClient() {
    this.share.getClients().subscribe((res) => {
      this.clients = res;
    });
  }

  addClient(name: string) {
    this.share.addClient(name).then((res) => {
      console.log(res);
      this.getClient();
    });
  }

  deleteClient(id: string) {
    this.share.deleteClient(id).then((res) => {
      console.log(res);
      this.getClient();
    });
  }
}
