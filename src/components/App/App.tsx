import * as React from 'react';

import { Hello } from '../Hello';

export default interface AppProps {
  color: string;
}

export const App = (props: AppProps) => (
  <>
    <h1>Welcome to React with Typescript</h1>
    <p>The color of this page is: {props.color}</p>

    <Hello compiler="TypeScript" framework="React" />
  </>
);
