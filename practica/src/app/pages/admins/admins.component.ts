import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../domains/services/admin.service';
import { Admin } from '../../domains/modules/admin.model';

@Component({
  selector: 'app-admins',
  templateUrl: './admins.component.html',
  styleUrls: ['./admins.component.css']
})
export class AdminsComponent implements OnInit {
  admins: Admin[] = [];
  loading = true;
  error = '';

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.loadAdmins();
  }

  loadAdmins(): void {
    this.adminService.getAdmins().subscribe({
      next: (response) => {
        this.admins = response.admins || response;
        this.loading = false;
      },
      error: (err) => {
        console.error('Ошибка при загрузке админов:', err);
        this.error = 'Не удалось загрузить список администраторов';
        this.loading = false;
      }
    });
  }
}
