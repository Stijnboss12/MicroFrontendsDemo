# Micro-Frontends Demo application

This demo application demonstrates the possibilities of a Micro-Frontends architecture in combination with the Module Federation technique of Webpack 5.

To see the application in action go to https://mfdemoshell.azurewebsites.net

The application works by dynamically loading in the 2 booking modules into the app shell.
You can see this in the MicroFrontendsDemo/shell/src/app/app-routing.module.ts file.

## Shell
![image](https://user-images.githubusercontent.com/58070673/224314126-6e7eba84-d768-451e-85da-145c3d9184a9.png)

## Hotel-Booking
![image](https://user-images.githubusercontent.com/58070673/224314210-79241a35-3502-417a-a8ac-58edf1aaa765.png)

## Flight-Booking
![image](https://user-images.githubusercontent.com/58070673/224314252-02e6cbf3-c37f-4fb8-872d-2e92570ff2c5.png)

## Shell after importing Hotel-Booking module
![image](https://user-images.githubusercontent.com/58070673/224314361-14500846-e16c-4120-b548-34334b22abc3.png)

## The search component in the imported Flight-Booking module
![image](https://user-images.githubusercontent.com/58070673/224314666-7096406f-2d0d-4adc-9fa3-7a0bd04d379c.png)

The booking modules are exported angular modules which you can see in the MicroFrontendsDemo/<Name of booking app>/webpack.config.js file and in the images above.

The exported modules and their dependencies and imported code can be found in MicroFrontendsDemo/<Name of booking app>/src/app/<hotel or flight>booking/<hotel or flight>booking.module.ts file.

Once one of these routes is called the application will import the corresponding booking module with its own dependencies, routes, code, etc.
Module Federation helps in sorting and applying the correct dependencies so there are no conflicts.
  
Because of Module Federation the application is also updated at runtime if a change occurs in one of the booking modules.
  
Please visit https://mfdemoshell.azurewebsites.net for the working application demo.
  
## Author: Stijn van Oudheusden
