# test-api-frisby

## Ejecución Local

Requiere node y npm instalados en la pc.

Moverse a carpeta raíz del proyecto y ejecutar en consola:
```shell
1-	npm install

2-	jest
```

## Ejecución en docker

Requiere docker instalado

Moverse a carpeta raíz del proyecto y ejecutar en consola:
```shell
1-	docker build -t testapi .

2-	docker run -d -v $PWD/test-report:/usr/src/app/test-report testapi
```

Si desea ver logs de la ejecución en consola elminar parámetro -d

Ver reportes dentro de la carpeta test-report
