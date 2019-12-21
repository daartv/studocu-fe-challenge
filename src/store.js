import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";

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
  return createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(thunk)));
}
