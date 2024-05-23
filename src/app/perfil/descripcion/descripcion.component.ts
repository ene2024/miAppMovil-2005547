import { Component, OnInit, inject } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { UsuarioService } from 'src/services/usuario.service';
import { UserService } from 'src/services/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'perfil-descripcion',
  templateUrl: './descripcion.component.html',
  styleUrls: ['./descripcion.component.scss'],
  imports: [IonicModule],
  standalone: true,
})
export class DescripcionComponent implements OnInit {
  servicioUsuarios: UsuarioService = inject(UsuarioService)
  constructor(private userService: UserService,
    private router: Router) {}
  async logout(){
    this.userService.logout();
    this.router.navigateByUrl('login', {replaceUrl: true});
}

  ngOnInit() {}
}
