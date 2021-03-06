import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {environment} from '../../../environments/environment.prod';
import {AuthApiService, RawApiService} from '../../_core/services/api.service';

@Injectable()
export class TaskService {
  private TASK_URL = `${environment.baseURL}/tasks`;
  constructor(private raw: RawApiService, private auth: AuthApiService, private router: Router) {
  }
  getCategories() {
    return this.auth.get(`${this.TASK_URL}/categories/`);
  }
  createCategory(context) {
    return this.auth.post(`${this.TASK_URL}/category/new/`, JSON.stringify(context));
  }
  getCategory(category_id) {
    return this.auth.get(`${this.TASK_URL}/task/${category_id}/`);
  }
  updateCategory(category_id, context) {
    return this.auth.post(`${this.TASK_URL}/category/${category_id}/`, JSON.stringify(context));
  }
  deleteCategory(category_id) {
    return this.auth.delete(`${this.TASK_URL}/category/${category_id}/`);
  }
  getTasksForCategory(category_id) {
    return this.auth.get(`${this.TASK_URL}/category-tasks/?category_id=${category_id}`);
  }
  createTask(context) {
    return this.auth.post(`${this.TASK_URL}/task/new/`, JSON.stringify(context));
  }
  updateTask(task_id, context) {
    return this.auth.post(`${this.TASK_URL}/task/${task_id}/`, JSON.stringify(context));
  }
  deleteTask(task_id) {
    return this.auth.delete(`${this.TASK_URL}/task/${task_id}/`);
  }
}
