## developer notes

This note is formatted as a [markdown](http://daringfireball.net/projects/markdown/basics) document.

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
- as of 9/25/2015, angular stable version is at 1.4.6 which the seed project uses (1.5.0.beta available)
 

