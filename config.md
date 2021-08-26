### Understand Scripts

**```start```**

It will start Express Server both locally and in Production (Will work for both Developer Build and Production Build of Webpack Bundle)

**```start:dev```**

It will start Express Server with Environment variables ( Will work only for Developer Build of Webpack Bundle )

**```dev```**

It will start Webpack Dev-server in Development Mode ( No need to build Webpack Bundle )

**```build:dev```**

It will build Webpack Bundle for Development Mode ( With Development Source Maps and Development Environment Variables )

**```build:prod```**

It will build Webpack Bundle for Production Mode ( With Production Source Maps and Production Environment variables )

**```heroku-postbuild```**

Whatever is inside this Script will run just after Deploying an App on Heroku

### Environmental Variables for Developer Mode

**```path:```** ```".env.development"```

**```.env.development```**

    FIREBASE_API_KEY=
    FIREBASE_AUTH_DOMAIN=
    FIREBASE_DATABASE_URL=
    FIREBASE_PROJECT_ID=
    FIREBASE_STORAGE_BUCKET=
    FIREBASE_MESSAGING_SENDER_ID=
    FIREBASE_APP_ID=
    FIREBASE_MEASUREMENT_ID=