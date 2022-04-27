/**
 *
 * Dados estos arrays de usuarios y emails necesitamos que se ejecuten
 * varias tareas.
 *
 * 1. Crear una función llamada getUser que reciba un
 * argumento nombre, busque a ese usuario y devuelva una
 * Promise. Si encuentra el user, debe resolverse con
 * los datos del usuario, si no, reject con un error de
 * que el usuario no existe
 *
 * 2. Crear una función getMail que recibe el id de un
 * usuario y retorna una Promise. Si encuentra el usuario,
 * debe resolverse con el email, si no, debe hacer reject
 * con un error de que usuario no exite
 *
 * NOTA: Dentro de las Promesas usar un setTimeout de 2 segundos para
 * simular el tiempo de respuesta de la búsqueda.
 *
 * BONUS: Una vez acabes las dos funciones, y compruebes su funcionamiento, haz
 * que el resolve de la Promise que devuelve getUser, en vez de devolver el usuario,
 * devuelva su email. Debes llamar a la función getEmail() y pasarle el id del usuario encontrado
 *
 * */

const users = [
  { id: 1, name: "Pedro" },
  { id: 2, name: "Laura" },
];

const emails = [
  { id: 1, email: "pedro@gmail.com" },
  { id: 2, email: "laura@gmail.com" },
];

const getUser = (name) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const userFound = users.find((user) => {
        return user.name === name;
      });

      if (userFound) {
        resolve(userFound);
      } else {
        reject(new Error("Usuario no encontrado"));
      }
    }, 2000);
  });
};

getUser("Pedro")
  .then((user) => {
    console.log(user);
  })
  .catch((error) => {
    console.error(error.message);
  });
