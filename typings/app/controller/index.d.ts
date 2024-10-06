// This file is created by egg-ts-helper@1.35.1
// Do not modify this file!!!!!!!!!
/* eslint-disable */

import 'egg';
import ExportHome = require('../../../app/controller/home');
import ExportCmsClassify = require('../../../app/controller/cms/classify');
import ExportCmsComments = require('../../../app/controller/cms/comments');
import ExportCmsDoc = require('../../../app/controller/cms/doc');
import ExportCmsRecycle = require('../../../app/controller/cms/recycle');
import ExportCmsTemplate = require('../../../app/controller/cms/template');
import ExportCmsWeb = require('../../../app/controller/cms/web');
import ExportMcIndex = require('../../../app/controller/mc/index');
import ExportMcMember = require('../../../app/controller/mc/member');
import ExportMcSetup = require('../../../app/controller/mc/setup');
import ExportSysApplication = require('../../../app/controller/sys/application');
import ExportSysConfig = require('../../../app/controller/sys/config');
import ExportSysIndex = require('../../../app/controller/sys/index');
import ExportSysModels = require('../../../app/controller/sys/models');
import ExportSysNavigation = require('../../../app/controller/sys/navigation');
import ExportSysObjectStorage = require('../../../app/controller/sys/objectStorage');
import ExportSysRole = require('../../../app/controller/sys/role');
import ExportSysRoutes = require('../../../app/controller/sys/routes');
import ExportSysServer = require('../../../app/controller/sys/server');
import ExportSysUser = require('../../../app/controller/sys/user');

declare module 'egg' {
  interface IController {
    home: ExportHome;
    cms: {
      classify: ExportCmsClassify;
      comments: ExportCmsComments;
      doc: ExportCmsDoc;
      recycle: ExportCmsRecycle;
      template: ExportCmsTemplate;
      web: ExportCmsWeb;
    }
    mc: {
      index: ExportMcIndex;
      member: ExportMcMember;
      setup: ExportMcSetup;
    }
    sys: {
      application: ExportSysApplication;
      config: ExportSysConfig;
      index: ExportSysIndex;
      models: ExportSysModels;
      navigation: ExportSysNavigation;
      objectStorage: ExportSysObjectStorage;
      role: ExportSysRole;
      routes: ExportSysRoutes;
      server: ExportSysServer;
      user: ExportSysUser;
    }
  }
}
