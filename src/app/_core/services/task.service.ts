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
  getTasksForCategory(category_id) {
    return this.raw.get(`${this.TASK_URL}/category-tasks/?category_id=${category_id}`);
  }
  updateTask(task_id, context) {
    return this.auth.post(`${this.TASK_URL}/task/${task_id}/`, JSON.stringify(context));
  }
  deleteTask(task_id) {
    return this.auth.delete(`${this.TASK_URL}/task/${task_id}/`);
  }
}
