import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-admins',
    templateUrl: './admins.component.html',
    styleUrls: ['./admins.component.css']
})
export class AdminsComponent implements OnInit {
    admins = [
    { admin_id: 1, admin_login: 'admin1', is_active_admin: true, admin_birth_date: '1990-01-01' },
    { admin_id: 2, admin_login: 'admin_test1', is_active_admin: true, admin_birth_date: '2016-03-20' }
    ];

    constructor() { }

    ngOnInit(): void {
    }
}
