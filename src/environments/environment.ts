// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  appVersion: 'v717demo1',
  USERDATA_KEY: 'authf649fc9a5f55',
  isMockEnabled: false,
  // apiUrl: 'http://104.248.152.205:8082/sale/api/v1',
 // apiUrl:'http://192.168.100.56:3200/api'
  apiUrl:'http://localhost:3000'
  // apiUrl:'https://galaxy-api.vercel.app'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
//cd dist
//jar -cvf bss-kbzms-sale-portal.war *