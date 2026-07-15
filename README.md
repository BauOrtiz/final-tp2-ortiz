# final-tp2-ortiz

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

