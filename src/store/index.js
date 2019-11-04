import { createStore } from "redux"; // Cria o estado global esse Store onde fica armazenado a maioria das informaçôes da aplicação
import rootReducer from "./reducers";

const store = createStore(rootReducer); // var que chama essa createStore(); // recebe o course como parametro createStore(reducer);

export default store; // exporta esse store
