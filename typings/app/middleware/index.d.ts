// This file is created by egg-ts-helper@1.35.1
// Do not modify this file!!!!!!!!!
/* eslint-disable */

import 'egg';
import ExportMcAuthMcToken = require('../../../app/middleware/mc/authMcToken');
import ExportSysAuthAdminToken = require('../../../app/middleware/sys/authAdminToken');
import ExportSysRbac = require('../../../app/middleware/sys/rbac');

declare module 'egg' {
  interface IMiddleware {
    mc: {
      authMcToken: typeof ExportMcAuthMcToken;
    }
    sys: {
      authAdminToken: typeof ExportSysAuthAdminToken;
      rbac: typeof ExportSysRbac;
    }
  }
}
