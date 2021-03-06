// @flow
import { CombinedState, combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import type { BrowserHistory } from 'history';
import auth from './auth';
import blog from './blog';
import post from './post';
import message from './messages';

export default function CombineReducers(
  history: BrowserHistory,
): CombinedState {
  return combineReducers({
    router: connectRouter(history),
    auth,
    blog,
    post,
    message,
  });
}
