import { Provider } from "react-redux";
import store from "./store/store";

import Button from "./Button";

function App() {
  return (
    <Provider store={store}>
      <Button />
    </Provider>
  );
}

export default App;
