import generateTests from './copyable-tests';
import setupMirage from '../helpers/setup-mirage';
import { moduleFor } from 'ember-qunit';

moduleFor('copyable', 'Integration | Copyable | sync', {
  integration: true,

  beforeEach() {
    return setupMirage(this, { async: false });
  },

  afterEach() {
   this.server.shutdown();
 }
});

generateTests({ async: false });
