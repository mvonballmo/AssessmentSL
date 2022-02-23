import {useReducer} from 'react'
import {AppHeader} from "./AppHeader";
import { AppContext } from "./AppContext";
import {MasterDetail} from "./MasterDetail";
import {createInitialState, reducer} from "./appFunctions";
import {AppService} from "./AppService";

function App() {
    const [state, dispatch] = useReducer(reducer, createInitialState());
    const service = new AppService(dispatch);

  return (
      <AppContext.Provider value={{ state, service }}>
      <header>
        <AppHeader />
      </header>
      <main>
        <MasterDetail />
      </main>
      </AppContext.Provider>
  )
}

export default App
