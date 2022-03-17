import { ROLES_API, ROLE_BLOCK_UNBLOCK_API, SUB_ADMINS_API, SUB_ADMIN_BLOCK_UNBLOCK_API } from './../../../../constants/api-end-point';
import { HttpService } from './../../../../services/http/http.service';
import { Injectable } from '@angular/core';

@Injectable()
export class RolesAndPermissionService {

  constructor(private _http: HttpService) { }

  getRolesList(query) {
    return this._http.get(ROLES_API, query);
  }

  addRole(body) {
    return this._http.post(ROLES_API, body);
  }

  updateRole(body) {
    return this._http.put(ROLES_API, body);
  }

  activateInactivateRole(body) {
    return this._http.patch(ROLE_BLOCK_UNBLOCK_API, body);
  }

  deleteRole(bannerId: string) {
    return this._http.delete(`${ROLES_API}/${bannerId}`);
  }

  getRoleDetail(bannerId: string) {
    return this._http.get(`${ROLES_API}/${bannerId}`);
  }

  getSubAdminsList(query) {
    return this._http.get(SUB_ADMINS_API, query);
  }

  addSubAdmin(body) {
    return this._http.post(SUB_ADMINS_API, body);
  }

  updateSubAdmin(body) {
    return this._http.put(SUB_ADMINS_API, body);
  }

  activateInactivateSubAdmin(body) {
    return this._http.patch(SUB_ADMIN_BLOCK_UNBLOCK_API, body);
  }

  deleteSubAdmin(bannerId: string) {
    return this._http.delete(`${SUB_ADMINS_API}/${bannerId}`);
  }

  getSubAdminDetail(bannerId: string) {
    return this._http.get(`${SUB_ADMINS_API}/${bannerId}`);
  }


}
