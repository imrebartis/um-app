import * as React from 'react';

interface AppContextState {
  continentName: string;
}

interface AppContext {
  state: AppContextState;
  dispatch: React.Dispatch<AppAction>;
}

type ContinentUpdateAction = {
  type: 'continent-update';
  payload: string;
};

type AppAction = ContinentUpdateAction;

const initialState = {
  state: {
    continentName: '',
  },
  dispatch: () => {},
};

const AppContext = React.createContext<AppContext>(initialState);

const uchReducer: React.Reducer<AppContextState, AppAction> = (
  state: AppContextState,
  action: AppAction
) => {
  switch (action.type) {
    case 'continent-update': {
      return {
        ...state,
        continentName: action.payload,
      };
    }
    default:
      return state;
  }
};

function AppContextProvider({
  children,
}: {
  children: React.ReactNode | React.ReactNode[];
}) {
  const [state, dispatch] = React.useReducer(uchReducer, {
    continentName: '',
  });

  const value = { state, dispatch };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export { AppContextProvider };

export default AppContext;
