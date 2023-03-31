// tslint:disable
import * as React from 'react';

interface TestContextState {
  continentName: string;
}

interface TestContext {
  state: TestContextState;
  dispatch: React.Dispatch<AppAction>;
}

type ContinentUpdateAction = {
  type: 'continent-update';
  payload: string;
};

type ContinentEmptyAction = {
  type: 'continent-empty';
};

type AppAction = ContinentUpdateAction | ContinentEmptyAction;

export const mockedDispatch = jest.fn();

const initialState = {
  state: {
    continentName: '',
  },
  dispatch: mockedDispatch,
};

const TestContextInstance = React.createContext<TestContext>(initialState);

const uchReducer: React.Reducer<TestContextState, AppAction> = (
  state: TestContextState,
  action: AppAction
) => {
  switch (action.type) {
    case 'continent-update': {
      return {
        ...state,
        continentName: action.payload,
      };
    }
    case 'continent-empty': {
      return {
        continentName: '',
      };
    }
    default:
      return state;
  }
};

function TestContextProvider({
  children,
}: {
  children: React.ReactNode | React.ReactNode[];
}) {
  const [state] = React.useReducer(uchReducer, {
    continentName: '',
  });

  const value = { state, dispatch: mockedDispatch };
  return (
    <TestContextInstance.Provider value={value}>
      {children}
    </TestContextInstance.Provider>
  );
}

export { TestContextProvider };

export default TestContextInstance;
