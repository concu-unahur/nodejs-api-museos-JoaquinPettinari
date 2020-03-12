const superagent = require('superagent');
const fs = require('fs');

function guardarMuseos(error, respuesta) {
  if (error) { throw new Error('Algo anduvo mal al guardar los museos', error); }

  const museos = respuesta.body.results;
  var stringMuseo = ""

  museos.forEach(museo => {
    stringMuseo += `${museo.nombre}. Por cualquier consulta comunicarse al ${museo.telefono}. \n`
  });
  /*
  --- EJERCICIO NORMAL ---
  fs.appendFile('./museos.txt',stringMuseo,end);
  --- Variante 1 ---
  fs.appendFile('./museosYOrganismos.txt',stringMuseo,dispararOrganismos);
  --- Variante 2 ---
  fs.appendFile('./museosYOrganismos.txt',stringMuseo,end);
  --- Variante 3 ---
  fs.appendFile('./museosYOrganismos.txt',stringMuseo,end);
  */
}

function guardarOrganismos(error, respuesta){
  if(error){throw new Error('Algo anduvo mal al guardar los organismos', error); }
  
  const organismos = respuesta.body.results;
  var stringOrganismo = ""

  organismos.forEach(organismo => {
    stringOrganismo += `${organismo.nombre}. Por cualquier consulta comunicarse al ${organismo.telefono}. \n`
  });
  /*
  --- EJERCICIO NORMAL ---
  fs.appendFile('./organismos.txt', stringOrganismo, end);
  --- Variante 1 ---
  fs.appendFile('./museosYOrganismos.txt', stringOrganismo, end);
  --- Variante 2 ---
  fs.appendFile('./museosYOrganismos.txt', stringOrganismo, disparaMuseos);
  --- Variante 3 ---
  fs.appendFile('./museosYOrganismos.txt', stringOrganismo, end);
  */

}

function end(error){
  if (error) {
    throw new Error('algo se rompió', error);
  }
  else{
    console.log("No hubo problemas.")
  }
}

function dispararOrganismos(){
  superagent
    .get('https://www.cultura.gob.ar/api/v2.0/organismos')
    .query({ format: 'json' })
    .end(guardarOrganismos)
}

function disparaMuseos(){
  superagent
    .get('https://www.cultura.gob.ar/api/v2.0/museos')
    .query({ format: 'json' })
    .end(guardarMuseos)
}
/* 
--- Variante 1 ---
disparaMuseos();
--- Variante 2 ---
dispararOrganismos();
--- Variante 3 ---
La subida de los museos/organismos es aleatoria, depende de cual llegue mas rapido 
(probar varias veces porque acá se agregan todos de una y tiene mas ventaja los museos)
disparaMuseos();
dispararOrganismos();
*/


