// This file is created by egg-ts-helper@1.35.1
// Do not modify this file!!!!!!!!!
/* eslint-disable */

import 'egg';
type AnyClass = new (...args: any[]) => any;
type AnyFunc<T = any> = (...args: any[]) => T;
type CanExportFunc = AnyFunc<Promise<any>> | AnyFunc<IterableIterator<any>>;
type AutoInstanceType<T, U = T extends CanExportFunc ? T : T extends AnyFunc ? ReturnType<T> : T> = U extends AnyClass ? InstanceType<U> : U;
import ExportCmsClassify = require('../../../app/service/cms/classify');
import ExportCmsDoc = require('../../../app/service/cms/doc');
import ExportSysGenerate = require('../../../app/service/sys/generate');
import ExportSysNavigation = require('../../../app/service/sys/navigation');
import ExportSysObjectStorage = require('../../../app/service/sys/objectStorage');
import ExportSysPagination = require('../../../app/service/sys/pagination');
import ExportSysRbac = require('../../../app/service/sys/rbac');
import ExportSysServer = require('../../../app/service/sys/server');

declare module 'egg' {
  interface IService {
    cms: {
      classify: AutoInstanceType<typeof ExportCmsClassify>;
      doc: AutoInstanceType<typeof ExportCmsDoc>;
    }
    sys: {
      generate: AutoInstanceType<typeof ExportSysGenerate>;
      navigation: AutoInstanceType<typeof ExportSysNavigation>;
      objectStorage: AutoInstanceType<typeof ExportSysObjectStorage>;
      pagination: AutoInstanceType<typeof ExportSysPagination>;
      rbac: AutoInstanceType<typeof ExportSysRbac>;
      server: AutoInstanceType<typeof ExportSysServer>;
    }
  }
}
