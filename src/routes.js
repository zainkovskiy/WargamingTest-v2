import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { Main } from "components/Main";
import { Country } from "components/Country";
import { Flags } from "components/Flags";
import { CardShipFull } from "components/CardShipFull";

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Main/>,
    children: [
      {
        path: '/',
        element: <Flags/>
      },
      {
        path: 'country',
        element: <Country/>
      },
      {
        path: 'country/:flag',
        element: <Country/>
      },
      {
        path: 'ship',
        element: <CardShipFull/>
      },
      {
        path: 'ship/:name',
        element: <CardShipFull/>
      },
    ]
  },
])