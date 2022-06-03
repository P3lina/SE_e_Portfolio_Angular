# Angular e-Portfolio

# Table of Contents

## 1. Introduction
## 2. Installation
## 3. Getting Started

# 1. Introduction
Angular is a open source web application framework for building single page (SPA) applications. Angular applications can be segmented into building blocks. Building blocks are components, directives, pipes and services.
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
After installing the Angular CLI, you can create a new project by running the following command:
    ng new \<project-name\>
