import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";

console.log('hallo?')
export default function configureStore(
  initialState = {
    queries: [
      {
        question: "How do you add a question?",
        answer: "Just use the form below"
      }
    ]
  }
) {
  return createStore(rootReducer, initialState, applyMiddleware(thunk));
}
