import { service } from '@ember/service';
import BaseStore from '@ember-data/store';

export default class Store extends BaseStore {
  @service requestManager;
}
