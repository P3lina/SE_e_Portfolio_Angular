# Angular e-Portfolio
<img src="images/angular.png" width="200px" alt="Angular">

# Table of Contents

## 1. Introduction
## 2. Installation
## 3. Getting Started

# 1. Introduction
Angular is an open source web application framework for building single page (SPA) applications. Angular applications can be segmented into building blocks. Building blocks are components, directives, pipes and services.
### <u>Components</u>
    <app-custom-button></app-custom-button>
Components are used to describe a reusable, UI related piece of the application that has a custom DOM element. Components consist of an HTML template, a typescript implementation class, a stylesheet file and a unit testing class.

Learn more about components
### <u>Directives</u>
    <app-custom-button greenBackground></app-custom-button>
Directives are used to describe a DOM element. Therby directives are UI related and can be used in a reusable way.

Learn more about directives
### <u>Pipes</u>
    {{helloString | uppercase}} => HELLO
Pipes are used to transform displaying data without changing the underlying data.

Learn more about pipes
### <u>Services</u>
Services are non-UI related, can be used in a reusable way and provide logic to the application. Services consist of a typescript implementation class and a unit testing class.

Learn more about services

# 2. Installation
First, the <b>Angular CLI</b> needs to be installed. <br>
The Angular CLI is the command line interface for Angular. With the Angular CLI, you can create new projects, build and serve your Angular applications, install additional modules, and more.

Installing the Angular CLI (Node Package Manager (NPM) required):

    npm install -g @angular/cli

# 3. Getting Started
<u style="font-size:1.5rem;"><b>Creating a new project</b></u><br>
After installing the Angular CLI, you can create a new project by running the following command:
  
    ng new <project-name>

In the following dialog you will be asked if you also want to install Angular routing:
<img src="images/installRouting.png" alt="? Would you like to add Angular routing? (y/N)"/><br>
<b>Angular routing:</b><br>
As depicted above, Angular is a single page application framework that changes the views by showing or hiding portions of the display that correspond to particular components, rather than requesting the server for a new page. <br>
However, interacting with the application may require moving between different views. These navigations are handled by the Angular routing system.<br>

Next, you will be asked for the type of stylesheet format you want to use: <br>
<img src="images/installStylesheet.png"><br>
This may be personal preference, in this project however, Sass will be used.

<u style="font-size:1.5rem;"><b>Starting the development server</b></u><br>
After creating the project, all required files will be generated. To get a first look at the application, you can start the development server by running the following command: <br>

    ng serve
and open your browser to http://localhost:4200/ or

    ng serve --open
to open the application directly in your browser. <br>
Until now the application should only consist of an Angular template.

<u style="font-size:1.5rem;"><b>The working directory</b></u><br>
By creating the Angular project, many files are also generated. The main directory however, is the <b>src/app</b> directory. This directory contains the application code and will be exclusively dealt with in this tutorial.

By default, the <b>src/app</b> directory only contains the root component, the <b>app.module.ts</b> file, which describes how the application fits together, and the routing file.
Inside the root components html class (by default <b>app.component.html</b>) you can find the Angular template you have seen in the browser. To begin with developing the application this code can be deleted.

<u style="font-size:1.5rem;"><b>Creating a component</b></u><br>
To begin developing the application, you need to create a component. This is done by running the following command:

    ng generate component <component-name>
or

    ng g c <component-name>
The new component will be created in the <b>src/app</b> directory.
The html, stylesheet and typescript code can be written directly in the generated files. To be able to see the component however, it needs to be added to the root component. This is done by the syntax explained in the component section:

    <app-<component-name>></app-<component-name>>
