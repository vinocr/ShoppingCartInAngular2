// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase : {
  	apiKey: "AIzaSyBGTjwJavA3qXxhAc7ClKPt4Y9Yt0iuSOA",
    authDomain: "supermarket-134da.firebaseapp.com",
    databaseURL: "https://supermarket-134da.firebaseio.com",
    projectId: "supermarket-134da",
    storageBucket: "supermarket-134da.appspot.com",
    messagingSenderId: "223055552894"
  }
};
