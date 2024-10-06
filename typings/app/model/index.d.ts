// This file is created by egg-ts-helper@1.35.1
// Do not modify this file!!!!!!!!!
/* eslint-disable */

import 'egg';
import ExportCmsClassify = require('../../../app/model/cms_classify');
import ExportCmsComments = require('../../../app/model/cms_comments');
import ExportCmsCommentsReply = require('../../../app/model/cms_comments_reply');
import ExportCmsDoc = require('../../../app/model/cms_doc');
import ExportCmsDocArticle = require('../../../app/model/cms_doc_article');
import ExportCmsDocDownload = require('../../../app/model/cms_doc_download');
import ExportCmsDocPicture = require('../../../app/model/cms_doc_picture');
import ExportCmsTemplate = require('../../../app/model/cms_template');
import ExportCmsTemplateList = require('../../../app/model/cms_template_list');
import ExportMcMember = require('../../../app/model/mc_member');
import ExportSysApplication = require('../../../app/model/sys_application');
import ExportSysConfig = require('../../../app/model/sys_config');
import ExportSysInitData = require('../../../app/model/sys_initData');
import ExportSysModels = require('../../../app/model/sys_models');
import ExportSysModelsAssociate = require('../../../app/model/sys_models_associate');
import ExportSysModelsFields = require('../../../app/model/sys_models_fields');
import ExportSysModelsIndexes = require('../../../app/model/sys_models_indexes');
import ExportSysNavigation = require('../../../app/model/sys_navigation');
import ExportSysOpenApi = require('../../../app/model/sys_openApi');
import ExportSysRole = require('../../../app/model/sys_role');
import ExportSysRoutes = require('../../../app/model/sys_routes');
import ExportSysRoutesClassify = require('../../../app/model/sys_routes_classify');
import ExportSysUser = require('../../../app/model/sys_user');
import ExportSysUserGroup = require('../../../app/model/sys_user_group');
import ExportSysUserRole = require('../../../app/model/sys_user_role');

declare module 'egg' {
  interface IModel {
    CmsClassify: ReturnType<typeof ExportCmsClassify>;
    CmsComments: ReturnType<typeof ExportCmsComments>;
    CmsCommentsReply: ReturnType<typeof ExportCmsCommentsReply>;
    CmsDoc: ReturnType<typeof ExportCmsDoc>;
    CmsDocArticle: ReturnType<typeof ExportCmsDocArticle>;
    CmsDocDownload: ReturnType<typeof ExportCmsDocDownload>;
    CmsDocPicture: ReturnType<typeof ExportCmsDocPicture>;
    CmsTemplate: ReturnType<typeof ExportCmsTemplate>;
    CmsTemplateList: ReturnType<typeof ExportCmsTemplateList>;
    McMember: ReturnType<typeof ExportMcMember>;
    SysApplication: ReturnType<typeof ExportSysApplication>;
    SysConfig: ReturnType<typeof ExportSysConfig>;
    SysInitData: ReturnType<typeof ExportSysInitData>;
    SysModels: ReturnType<typeof ExportSysModels>;
    SysModelsAssociate: ReturnType<typeof ExportSysModelsAssociate>;
    SysModelsFields: ReturnType<typeof ExportSysModelsFields>;
    SysModelsIndexes: ReturnType<typeof ExportSysModelsIndexes>;
    SysNavigation: ReturnType<typeof ExportSysNavigation>;
    SysOpenApi: ReturnType<typeof ExportSysOpenApi>;
    SysRole: ReturnType<typeof ExportSysRole>;
    SysRoutes: ReturnType<typeof ExportSysRoutes>;
    SysRoutesClassify: ReturnType<typeof ExportSysRoutesClassify>;
    SysUser: ReturnType<typeof ExportSysUser>;
    SysUserGroup: ReturnType<typeof ExportSysUserGroup>;
    SysUserRole: ReturnType<typeof ExportSysUserRole>;
  }
}
