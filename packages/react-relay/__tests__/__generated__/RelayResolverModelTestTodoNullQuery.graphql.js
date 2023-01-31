/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @oncall relay
 *
 * @generated SignedSource<<1f03636f43c1a6198cded2e2b40a3586>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { ClientRequest, ClientQuery } from 'relay-runtime';
import {todo_model_null as queryTodoModelNullResolverType} from "../../../relay-runtime/store/__tests__/resolvers/TodoModel.js";
// Type assertion validating that `queryTodoModelNullResolverType` resolver is correctly implemented.
// A type error here indicates that the type signature of the resolver module is incorrect.
(queryTodoModelNullResolverType: () => mixed);
export type RelayResolverModelTestTodoNullQuery$variables = {||};
export type RelayResolverModelTestTodoNullQuery$data = {|
  +todo_model_null: ?{|
    +id: string,
  |},
|};
export type RelayResolverModelTestTodoNullQuery = {|
  response: RelayResolverModelTestTodoNullQuery$data,
  variables: RelayResolverModelTestTodoNullQuery$variables,
|};
*/

var node/*: ClientRequest*/ = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "concreteType": "TodoModel",
  "kind": "LinkedField",
  "name": "todo_model_null",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    }
  ],
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": {
      "hasClientEdges": true
    },
    "name": "RelayResolverModelTestTodoNullQuery",
    "selections": [
      {
        "kind": "ClientEdgeToClientObject",
        "concreteType": "TodoModel",
        "backingField": {
          "alias": null,
          "args": null,
          "fragment": null,
          "kind": "RelayResolver",
          "name": "todo_model_null",
          "resolverModule": require('./../../../relay-runtime/store/__tests__/resolvers/TodoModel').todo_model_null,
          "path": "todo_model_null"
        },
        "linkedField": (v0/*: any*/)
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "RelayResolverModelTestTodoNullQuery",
    "selections": [
      {
        "kind": "ClientEdgeToClientObject",
        "backingField": {
          "name": "todo_model_null",
          "args": null,
          "fragment": null,
          "kind": "RelayResolver",
          "storageKey": null,
          "isOutputType": false
        },
        "linkedField": (v0/*: any*/)
      }
    ]
  },
  "params": {
    "cacheID": "e68bd5d578c26d569c6e90289b95ec54",
    "id": null,
    "metadata": {},
    "name": "RelayResolverModelTestTodoNullQuery",
    "operationKind": "query",
    "text": null
  }
};
})();

if (__DEV__) {
  (node/*: any*/).hash = "206392633843e125a92d4daffb6de27d";
}

module.exports = ((node/*: any*/)/*: ClientQuery<
  RelayResolverModelTestTodoNullQuery$variables,
  RelayResolverModelTestTodoNullQuery$data,
>*/);
