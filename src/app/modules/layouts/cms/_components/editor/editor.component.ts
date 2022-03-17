import { isObjEmpty } from './../../../../../constants/helper';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Subscription } from 'rxjs';
import { CmsService } from '../../_service/cms.service';
import { ToastService } from '../../../../../components/toast-notification/toast.service';
import { BreadcrumbService } from '../../../../../components/breadcrumb/breadcrumb.service';
import { CommonService } from '../../../../../services/common/common.service';
import { TERM_CONDITIONS, PRIVACY_POLICY, ABOUT_US, } from '../../../../../constants/routes';
import { BC_TERM_CONDTIONS, BC_PRIVACY_POLICY, BC_ABOUT_US } from '../../../../../constants/breadcrumb-routes';
import { CONTENT_TYPES, EDITOR_COMMON_MESSAGES, MODULE_ID_OF } from '../../../../../constants/messages';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit, OnDestroy {
  @Input() currentUrl: any;
  cmsForm: FormGroup;
  contentData = '';
  isApiCallInProgress = false;
  showBtn = true;
  subscriptions: Subscription[] = [];

  constructor(
    private _fb: FormBuilder,
    private _cms: CmsService,
    private _toast: ToastService,
    private _bc: BreadcrumbService,
    private _common: CommonService
  ) { }

  ngOnInit() {
    this.createForm();
    this.getContent();
    this.roleHandler();
  }

  createForm() {
    this.cmsForm = this._fb.group({
      data: ['']
    })
  }
  get f() { return this.cmsForm.controls }  // return form controls

  roleHandler() {
    let permission = this._common.getPermissionByModuleId(MODULE_ID_OF.CMS);
    if (!isObjEmpty(permission)) {
      if (permission.add && permission.edit) {
        this.showBtn = true;
      } else {
        this.showBtn = false;
      }
    }
  }

  /**
   * @contentType get content basis of content type
   */
  getContent() {
    switch (this.currentUrl) {
      case TERM_CONDITIONS:
        this._bc.setBreadcrumb(BC_TERM_CONDTIONS);
        this.getContentOnType(CONTENT_TYPES.TERMS_AND_CONDITIONS);
        break;
      case PRIVACY_POLICY:
        this._bc.setBreadcrumb(BC_PRIVACY_POLICY);
        this.getContentOnType(CONTENT_TYPES.PRIVACY_POLICY);
        break;
      case ABOUT_US:
        this._bc.setBreadcrumb(BC_ABOUT_US);
        this.getContentOnType(CONTENT_TYPES.ABOUT_US);
        break;
      default:
        break;
    }
  }

  getContentOnType(type: string) {
    this.isApiCallInProgress = true;
    this.subscriptions.push(
      this._common.getCmsContents(type).subscribe((res: any) => {
        this.isApiCallInProgress = false;
        if (res && res.data) {
          this.contentData = res.data.data;
          this.f.data.setValue(res.data.data);
        }
      }, (error) => {
        this.isApiCallInProgress = false;
      })
    );
  }

  updateContentHandler() {
    switch (this.currentUrl) {
      case TERM_CONDITIONS:
        this.updateOnType(CONTENT_TYPES.TERMS_AND_CONDITIONS);
        break;
      case PRIVACY_POLICY:
        this.updateOnType(CONTENT_TYPES.PRIVACY_POLICY);
        break;
      case ABOUT_US:
        this.updateOnType(CONTENT_TYPES.ABOUT_US);
        break;
      default:
        break;
    }
  }

  /**
   * @contentType update content basis of content type
   */
  updateOnType(type: string) {
    if (this.f.data.value) {
      if (this.cmsForm.dirty) {
        this.cmsForm.value['type'] = type;
        this._cms.updateCmsContents(this.cmsForm.value).subscribe(() => {
          this._toast.success(EDITOR_COMMON_MESSAGES.CMS_ACTION(this.contentData ? 'updated' : 'added'));
          this.contentData = this.cmsForm.value.data;
        })
      }
    } else {
      this._toast.error(EDITOR_COMMON_MESSAGES.CONTENT_REQ);
    }
  }

  /**
   * @UNSUBSCRIPTION Unsubscribe all subscriptions to avoid memory leak
   */
  ngOnDestroy() {
    if (this.subscriptions.length > 0) {
      this._common.unsubscribe(this.subscriptions);
    }
  }

}
