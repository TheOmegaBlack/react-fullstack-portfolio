import type { EditorState as EditorStateType } from 'draft-js';

export type blogState = {
  newDraft: boolean,
  creating: boolean,
  postId: string,
  draftId: string,
  loading: boolean,
  failed: boolean,
};

export type draft = {
  title: string,
  content: EditorStateType,
  labels: Array<string>,
  publishedPost: string,
  created: string,
};

export type action = {
  type: string,
  payload: any,
};

export type postComponentType = {
  editorState: EditorStateType,
  newDraft: boolean,
  title: string,
  updateEditorState: Function,
  updateTitle: Function,
  getDraftData: Function,
  saveDraftContent: Function,
  createEditorState: Function,
};
