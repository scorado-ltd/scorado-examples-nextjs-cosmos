# React Cosmos with Next.js

|Framework|Version|
|-|-|
|Node.js|20.x|
|Next.js|14.x|
|React Cosmos|6.x|

## Introduction

This repository allows you to seamlessly integrate React Cosmos (https://reactcosmos.org) into a Next.js application with minimal modifications.

## Purpose

The main objective of this project is to streamline the process of building a React Cosmos style guide by incorporating it as a sub-folder within a separate project. This approach grants the style guide access to the application's components while only building the necessary code from the main app.

## How to Use

### Setting up the main app (Next.js)

To run the main app, navigate to the root folder and execute the following commands:

```
npm install
npm run dev
```

The application will run in development mode on port 3000. For additional information on building or deploying the app, please refer to the Next.js documentation: https://nextjs.org

### Configuring the style guide (React Cosmos)
To set up the style guide, navigate to the .cosmos folder and run the following commands:

```
cd .cosmos
npm install
npm run cosmos-export
npm run build
npm start
```

React Cosmos will generate static pages for all the fixtures and create the app, running it on port `8080`.

## Key Differentiator
React Cosmos typically runs inside the main app but on a separate port, requiring the app to be running simultaneously. However, this project presents a different approach by allowing React Cosmos to function as an independent app while still having access to the main app's components. This separation ensures that the main app and React Cosmos remain distinct entities.

## Running Two Projects on Vercel
To run both the app and React Cosmos style guide on Vercel, you can create two projects; one for your app and the other for React Cosmos. Connect them to the same codebase, with the main app utilizing the default Next.js settings. For the `React-Cosmos` Vercel project to work correctly, using this repository, customize the build settings as follows:

|Setting|Value|
|-|-|
|Build Command|`npm run cosmos-vercel`|
|Output Directory|`.cosmos/.next`|
|Root Directory|"Include source files outside of the Root Directory" - `Enabled`|

This configuration allows both the main app and React Cosmos to share the same codebase while having separate deployments.

## Exporting React Cosmos as a Static Project
If you wish to export React Cosmos as a static project and run it independently from Next.js on a different server, follow these steps:

1. Edit the file `.cosmos/next.config.js`
2. Remove the `rewrites` configuration
3. Add `output: "export"`

With these settings in place, running the following commands inside the `.cosmos` folder will generate a static project within a new folder named `out`:

```
cd .cosmos
npm run cosmos-export
npm run build
```

You can now host the contents of the out folder on a separate server or use the commands 
```
npx http-server out -p 8080 
```
OR
```
npx serve out -p 8080
```
Or you can serve the files with any other server of your choice.
