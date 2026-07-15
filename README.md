# final-tp2-ortiz

## Rutas implementadas

Taller de Programación 2
Examen Final (15 de julio, 2026)
Enunciado: Sistema de monitoreo de sensores IoT
Requerimientos del backend:
● Almacenar, actualizar y listar sensores.
● Validar los datos al recibir lecturas.
● Generar alertas cuando corresponda.
● Almacenar y listas alertas.
Objetivo del sistema:
1. Registrar sensores y su última lectura.
Si llega una lectura de un sensor ya existente, se debe
2. Implementar un sistema de alertas según umbrales:
● TEMPERATURA: alerta si valor > 35
● HUMEDAD: alerta si valor < 20
● CO2: alerta si valor > 1000
3. Permitir listar sensores y consultar alertas recientes.
Se desea desarrollar un sistema backend que permita
instalados en una planta industrial.
Cada sensor se identifica mediante un
SEN4A9X1).
Cada lectura enviada incluye:
● id: identificador del sensor
● tipo: tipo de sensor (TEMPERATURA, HUMEDAD, CO2)
● valor: valor numérico medido
● timestamp: fecha/hora ISO (ej: "2025-12-01T18:30:00Z")
(ejemplo:
actualizar su última lectura.
recibir,almacenary procesar
lecturas enviadas por sensores IoT
código alfanumérico de 8 caracteres
Endpoints requeridos:
alertas activas
1.
2.
3. GET /alertas
Devuelve la lista de
GET /sensores
Lista todos los sensores con su última lectura.
Respuesta:
[
{
id: "SEN4A9X1"
,
tipo: "TEMPERATURA"
,
valor: 32.5,
timestamp: "2025-12-01T18:30:00Z"
}
]
POST /lecturas
Recibe una lectura y actualiza el sensor.
{
id: "SEN4A9X1"
,
tipo: "TEMPERATURA"
,
valor: 32.5,
timestamp: "2025-12-01T18:30:00Z"
}
Validaciones:
● id: exactamente 8 caracteres alfanuméricos.
● tipo: debe ser uno de TEMPERATURA, HUMEDAD, CO2.
● valor: numérico válido.
● timestamp: string.
Respuesta exitosa:
{
id: "SEN4A9X1"
,
tipo: "TEMPERATURA"
,
valor: 32.5,
timestamp: "2025-12-01T18:30:00Z"
,
alerta: "TEMPERATURA alta" // Si no hay alerta, alerta: null
}
correspondientes a los sensores registrados.
Respuesta:
[
{
id: "SEN4A9X1"
,
tipo: "TEMPERATURA"
,
valor: 32.5,
timestamp: "2025-12-01T18:30:00Z"
,
alerta: "TEMPERATURA alta"
},
{
…
}
]
Recordar el rol de las factories, que nos permiten desacoplarnos de las
dependencias de nuestros componentes a la hora necesitar una instancia de los
mismos. Recordar esto especialmente a la hora de decidir cómo obtener los casos
de uso para invocarlos desde la capa de ruteo.
El servidor recibirá y responderá desde y hacia el frontend con los datos requeridos en
formato JSON. En caso de suceder algún inconveniente, se espera que el servidor
responda con un objeto con un campo ‘errorMsg’ informando el motivo de la falla. Todas las
respuestas deberán estar correctamente adosadas con su código de estado
correspondiente, según el resultado de la operación.
El proyecto debe incluir únicamente el backend del sistema, utilizando Node.js +
express. El formato del servidor es de tipo RESTful. Tener en cuenta los
lineamientos que propone esta propuesta, especialmente a la hora de elegir las rutas
de acceso al sistema.
El sistema debe estar correctamente separado en capas y componentes, y esta
separación debe estar claramente puesta de manifiesto en la estructura de carpetas
y archivos. Entre los componentes que esperamos que estén presentes
encontramos: router/controlador, casos de uso, modelo/s, DAO/s, servicio de envío
de mails, y factories (los que correspondan de acuerdo al sistema modelado).
Prestar atención al sentido de las dependencias entre los componentes, recordando
que las capas más cercanas al negocio no deben estar acopladas a las capas más
externas (usualmente de infraestructura). Con esto en mente,
.
La es una parte importante del negocio, por lo tanto, observar
cómo y dónde realizarla.
Noes necesario utilizar unaconexiónabasededatosreal,persistirenelDAO

### GET /sensores

```http
GET http://localhost:8000/sensores
```

No lleva body. Devuelve estado `200` y un array con la última lectura de cada sensor.

### POST /lecturas

```http
POST http://localhost:8000/lecturas
Content-Type: application/json
```

Registra un sensor o actualiza su última lectura. Devuelve estado `201`.

## Bodies de prueba para POST /lecturas

Temperatura sin alerta:

```json
{
  "id": "TEMP0001",
  "tipo": "TEMPERATURA",
  "valor": 30,
  "timestamp": "2026-07-15T10:00:00Z"
}
```

Temperatura alta:

```json
{
  "id": "TEMP0002",
  "tipo": "TEMPERATURA",
  "valor": 36,
  "timestamp": "2026-07-15T10:05:00Z"
}
```

Humedad baja:

```json
{
  "id": "HUME0001",
  "tipo": "HUMEDAD",
  "valor": 19,
  "timestamp": "2026-07-15T10:10:00Z"
}
```

CO2 alto:

```json
{
  "id": "CO2S0001",
  "tipo": "CO2",
  "valor": 1001,
  "timestamp": "2026-07-15T10:15:00Z"
}
```

Valores límite sin alerta:

```json
{
  "id": "TEMP0035",
  "tipo": "TEMPERATURA",
  "valor": 35,
  "timestamp": "2026-07-15T10:20:00Z"
}
```

```json
{
  "id": "HUME0020",
  "tipo": "HUMEDAD",
  "valor": 20,
  "timestamp": "2026-07-15T10:21:00Z"
}
```

```json
{
  "id": "CO2S1000",
  "tipo": "CO2",
  "valor": 1000,
  "timestamp": "2026-07-15T10:22:00Z"
}
```

Actualizar un sensor existente:

```json
{
  "id": "TEMP0001",
  "tipo": "TEMPERATURA",
  "valor": 40,
  "timestamp": "2026-07-15T11:00:00Z"
}
```

## Bodies para probar validaciones

Estas peticiones deben devolver estado `400` y un objeto con `errorMsg`.

ID inválido:

```json
{
  "id": "ABC",
  "tipo": "TEMPERATURA",
  "valor": 30,
  "timestamp": "2026-07-15T10:00:00Z"
}
```

Tipo inválido:

```json
{
  "id": "SENS0001",
  "tipo": "PRESION",
  "valor": 30,
  "timestamp": "2026-07-15T10:00:00Z"
}
```

Valor enviado como texto:

```json
{
  "id": "SENS0005",
  "tipo": "TEMPERATURA",
  "valor": "36",
  "timestamp": "2026-07-15T10:00:00Z"
}
```

Timestamp inválido:

```json
{
  "id": "SENS0003",
  "tipo": "TEMPERATURA",
  "valor": 30,
  "timestamp": 12345
}
```

Campos faltantes:

```json
{
  "id": "SENS0004",
  "tipo": "CO2"
}
```

Después de las pruebas inválidas, ejecutar `GET /sensores` para comprobar que no
fueron almacenadas.

---

