```markdown
Integrantes:
Sebastian Falconi
Jessica Andrango
Adrián Bravo

## Rutas de la API

### 1. **Gestión de Usuarios**

- **GET `/users/`**
  - **Método**: `GET`
  - **Descripción**: Obtiene todos los usuarios del sistema.
  - **Respuesta**: Lista de usuarios.
  
- **GET `/users/:id`**
  - **Método**: `GET`
  - **Descripción**: Obtiene un usuario específico por ID.
  - **Parámetros**:
    - `id`: El ID del usuario.
  - **Respuesta**: El objeto del usuario.

- **POST `/users/`**
  - **Método**: `POST`
  - **Descripción**: Crea un nuevo usuario.
  - **Body**:
    ```json
    {
      "firstName": "Nombre",
      "lastName": "Apellido",
      "email": "usuario@dominio.com",
      "password": "contraseña",
      "userType": "admin" // (admin, creator, consumer)
    }
    ```
  - **Respuesta**: El objeto del usuario creado.

- **PUT `/users/:id`**
  - **Método**: `PUT`
  - **Descripción**: Actualiza los datos de un usuario por ID.
  - **Parámetros**:
    - `id`: El ID del usuario a actualizar.
  - **Body**:
    ```json
    {
      "firstName": "NuevoNombre",
      "lastName": "NuevoApellido",
      "email": "nuevo@dominio.com",
      "userType": "creator"
    }
    ```
  - **Respuesta**: El objeto del usuario actualizado.

- **DELETE `/users/:id`**
  - **Método**: `DELETE`
  - **Descripción**: Elimina un usuario por ID.
  - **Parámetros**:
    - `id`: El ID del usuario a eliminar.
  - **Respuesta**: Mensaje de confirmación.

### 2. **Gestión de Cursos**

- **POST `/courses/`**
  - **Método**: `POST`
  - **Descripción**: Crea un nuevo curso.
  - **Body**:
    ```json
    {
      "name": "Curso de Node.js",
      "description": "Aprende Node.js desde cero.",
      "state": "active" // (in_progress, active, inactive)
    }
    ```
  - **Respuesta**: El objeto del curso creado.

- **PUT `/courses/:id`**
  - **Método**: `PUT`
  - **Descripción**: Actualiza los datos de un curso por ID.
  - **Parámetros**:
    - `id`: El ID del curso a actualizar.
  - **Body**:
    ```json
    {
      "name": "Nuevo Curso de Node.js",
      "description": "Curso actualizado de Node.js.",
      "state": "inactive"
    }
    ```
  - **Respuesta**: El objeto del curso actualizado.

- **DELETE `/courses/:id`**
  - **Método**: `DELETE`
  - **Descripción**: Elimina un curso por ID (solo para administradores).
  - **Parámetros**:
    - `id`: El ID del curso a eliminar.
  - **Respuesta**: Mensaje de confirmación.

- **GET `/courses/:id`**
  - **Método**: `GET`
  - **Descripción**: Obtiene los detalles de un curso por ID.
  - **Parámetros**:
    - `id`: El ID del curso a consultar.
  - **Respuesta**: El objeto del curso.

- **PATCH `/courses/:id/status`**
  - **Método**: `PATCH`
  - **Descripción**: Cambia el estado de un curso por ID (solo para creadores de cursos).
  - **Parámetros**:
    - `id`: El ID del curso a actualizar.
  - **Body**:
    ```json
    {
      "status": "active"
    }
    ```
  - **Respuesta**: El objeto del curso actualizado.

### 3. **Gestión de Suscripciones**

- **POST `/subscriptions/`**
  - **Método**: `POST`
  - **Descripción**: Se suscribe a un curso.
  - **Body**:
    ```json
    {
      "courseId": "ID_DEL_CURSO"
    }
    ```
  - **Respuesta**: Información de la suscripción.

- **DELETE `/subscriptions/:courseId`**
  - **Método**: `DELETE`
  - **Descripción**: Cancela la suscripción a un curso.
  - **Parámetros**:
    - `courseId`: El ID del curso al que el usuario está suscrito.
  - **Respuesta**: Mensaje de confirmación.

- **GET `/subscriptions/:courseId`**
  - **Método**: `GET`
  - **Descripción**: Obtiene la suscripción de un consumidor a un curso.
  - **Parámetros**:
    - `courseId`: El ID del curso.
  - **Respuesta**: Información de la suscripción.

## Explicación del DTO Builder

El **DTO Builder** es un patrón utilizado para simplificar la creación de objetos de transferencia de datos (DTOs) en una API. En este proyecto, se utiliza para construir objetos de respuesta de manera flexible y mantener el código organizado. Por ejemplo, en lugar de devolver directamente un objeto del modelo de base de datos, usamos el DTO Builder para personalizar y formatear la respuesta.

### Ejemplo de DTO Builder en un Curso:

```javascript
class CourseDTO {
  constructor(course) {
    this.id = course.id;
    this.name = course.name;
    this.description = course.description;
    this.state = course.state;
    this.creatorId = course.creatorId;
  }

  static from(course) {
    return new CourseDTO(course);
  }
}
```
