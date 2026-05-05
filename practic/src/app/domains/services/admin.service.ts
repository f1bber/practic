export interface Admin {
  id: number;
  username: string;
  email: string;
  role: string;
  isActive: boolean;
  createdAt: string;
}

class AdminService {
  private baseUrl = '/api/admins';

  async getAdmins() {
    const response = await fetch(this.baseUrl);
    if (!response.ok) throw new Error('Ошибка загрузки');
    return response.json();
  }

  async getAdminById(id: number) {
    const response = await fetch(`${this.baseUrl}/${id}`);
    if (!response.ok) throw new Error('Админ не найден');
    return response.json();
  }

  async createAdmin(data: { username: string; email: string; password: string }) {
    const response = await fetch(this.baseUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    if (!response.ok) throw new Error('Ошибка создания');
    return response.json();
  }

  async updateAdmin(id: number, data: any) {
    const response = await fetch(`${this.baseUrl}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    if (!response.ok) throw new Error('Ошибка обновления');
    return response.json();
  }

  async deleteAdmin(id: number) {
    const response = await fetch(`${this.baseUrl}/${id}`, {
      method: 'DELETE'
    });
    if (!response.ok) throw new Error('Ошибка удаления');
    return response.json();
  }
}

export const adminService = new AdminService();
