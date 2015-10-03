## developer notes

This note is formatted as a [markdown](http://daringfireball.net/projects/markdown/basics) document.

#### Prereq
- npm (node package manager) is installed in the system 
    - verify with npm -v (2.14.0 for example)
- tsc (typescript) and tsd (typescript definition manager) are installed in the system
    - verify with tsc -v and tsd --version (1.5.3 and 0.6.4 respectively for example)
    - if not, install them with npm (npm install typescript -g, npm install tsd -g)
- IntelliJ IDEA with Angular plugin installed

#### Seeding
- Create an Angular IntelliJ project
- Link to VCS (github was used initially)
- Remove .idea folder from .gitignore
- Remove  node_modules/ bower_components/ from .gitignore
 (like to track the libs; we can remove it later if needed)
- npm install (at the project root) to fetch node and bower components
 (file count of 13,000 and 100 respectively, almost 80MB total size)
- npm start at the project root as a test
> angular-seed@0.0.0 start /Users/bjjeong/dev/github/monman
>
> http-server -a localhost -p 8000 -c-1
- http://localhost:8000/app/index.html and http://localhost:8000 responds ok
- as of 9/25/2015, angular stable version is at 1.4.6 which the seed project uses.
  "bower list" shows 1.4.7 angular libs are available with the latest 1.5.0 (beta).
- bower install --save bootstrap (installs bootstrap3 with dependant jquery); boostrap 3.3.5 / jquery 2.1.4
 

#### CSS
- sign in page [bootstrap](http://getbootstrap.com/examples/signin/)
    - signin.css added to /css
- fixed header with sticky footer from [bootstrap](http://getbootstrap.com/examples/sticky-footer-navbar/#)
    - sticky-footer-navbar.css added to /css

#### Angular UI Layout (v 1.0.5)
- [angular-ui reference](https://github.com/angular-ui/ui-layout/blob/master/README.md)
- if you use IE<=9, iOS<7 or Android<4 please include the requestAnimationFrame polyfill in your application.
- version 1.x is only compatible with IE>=10. If you use IE<=9 you need to use version 0.x
- index-main2.html, index-main3.html, and index-main4.html were used to try out Angular UI Layout
- One draw back at the moment (9/30/2015) seems to be that the layout redraws to its intital proportional sizes
on window resize rather than one main area is responding to the window resize

#### Telerik KendoUI
- [http://docs.telerik.com/kendo-ui/AngularJS/introduction](http://docs.telerik.com/kendo-ui/AngularJS/introduction)
- KendoUI seems to be an excellent companion to Angular as all KendoUI widgets are built with Angular hooks
- open source portion is free (but the professional version will be needed eventually)
- bower install kendo-ui-core: installs Angular 1.4.6 (as of 10/1/2015) and jQuery 2.1.1
- index-main5.html with monmank.js as an initial test of KendoUI splitter
