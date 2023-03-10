# Micro-Frontends Demo application

This demo application demonstrates the possibilities of a Micro-Frontends architecture in combination with the Module Federation technique of Webpack 5.

To see the application in action go to https://mfdemoshell.azurewebsites.net

The application works by dynamically loading in the 2 booking modules into the app shell.
You can see this in the MicroFrontendsDemo/shell/src/app/app-routing.module.ts file.

The booking modules are exported angular modules which you can see in the MicroFrontendsDemo/<Name of booking app>/webpack.config.js file.

The exported modules and their dependencies and imported code can be found in MicroFrontendsDemo/<Name of booking app>/src/app/<hotel or flight>booking/<hotel or flight>booking.module.ts file.

Once one of these routes is called the application will import the corresponding booking module with its own dependencies, routes, code, etc.
Module Federation helps in sorting and applying the correct dependencies so there are no conflicts.
  
Because of Module Federation the application is also updated at runtime if a change occurs in one of the booking modules.
  
Please visit https://mfdemoshell.azurewebsites.net for the working application demo.
