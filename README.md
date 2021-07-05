## NPM Initialize 

$ npm init

## Git initialize

$ git init

## Git commit local changes

El punto es para indicar que agregas todos los archivos nuevos/cambiados
a "stage"
$ git add . 

Confirmas los archivos nuevos/cambiados al repositorio local
$ git commit -m "Mensaje..."

Revisar los commits hechos...
$ git log

## Git enviar a repositorio remoto

Agregar el repositorio remoto

origin es el nombre arbitrario de el repositorio remoto...
$ git remote add origin <url>

Verificar que fue configurado con
$ git remote -v

"Empujar" los cambios de tu repositorio local
al repositorio remoto
origin siendo el repositorio remoto y master la branch del mismo...
$ git push origin master