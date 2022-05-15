const explorers = [
    {
      name: "Explorer 1",
      exercises_completed: 10,
      rate: 99,
      city: "CDMX",
      stack: [
        "js",
        "c#"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: true,
          exercisesFinished: true
        }
      }
    },
    {
      name: "Explorer 2",
      exercises_completed: 9,
      city: "Veracruz",
      rate: 50,
      stack: [
        "js"
      ],
      missions: {
        onboarding: {
          isFinished: false,
          exercisesFinished: false
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    },
    {
      name: "Explorer 3",
      exercises_completed: 3,
      city: "Sonora",
      rate: 100,
      stack: [
        "elixir"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    }
   ]


  //Imprime el nombre (propiedad name) de cada explorer en la lista, usa FOR EACH 
  const GetNames = (explorers) => {
    explorers.forEach(element => {
        console.log(element.name);
    });
  } 
  GetNames(explorers);

  //Imprime el stack de cada explorer, usa FOR EACH
  const GetStack = (explorers) => {
    explorers.forEach(element => {
        console.log(element.name);
        element.stack.forEach(element =>{
            console.log(element);
        });
    });
  } 
  GetStack(explorers);

//Crea una nueva lista con las listas de stacks de cada explorer, usa MAP
const explorers2 = explorers.map(function(obj){
    var stack = {};
    stack[obj.stack] = obj.stack;
    return stack;
 });
console.log(explorers2);

//Obtén la lista de explorers que tengan en su stack "js", usa FILTER (para validar un elemento en un lista se usa el método includes)
const explorersstackjs = explorers.filter((stack) => // esta es una función
  stack.stack.includes('js') // indicación para solo filtrar elementos que incluyan "land"
)
console.log("Uso de filter")
console.log(explorersstackjs)

//Busca el primer explorer que sea de la CDMX, usa FIND
const explorecdmx = explorers.find((explorer) => explorer.city == "CDMX")
console.log("Ejemplo Find:" + explorecdmx.name)

//Obtén la suma de todos los exercises_completed, usa REDUCE
const explorersreduce = explorers.reduce((pv,cv) => pv + cv.exercises_completed, 0)
console.log("Ejemplo con reduce:"+explorersreduce)

//