COMANDOS: 
    rafce: Te crea una funcion en React
    rxslice: Te crea un slice para usar en Redux

1) En la carpeta "features" vamos a crear las "slices". Aca creamos las variables globales y las acciones para comunicarnos con ellas (exportamos las acciones y las variables)
2) Para poder comunicarnos en los distintos componentes con estas variables globales es importar las acciones que escribimos en el slice y "despacharlas", y tambien importar la variable
3) Para que todo funcione, tenemos que ir a "app/store.js" e importar el slice que hicimos y agregarlo al objeto "reducer"