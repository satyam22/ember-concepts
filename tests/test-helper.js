import Application from 'ember-concepts/app';
import config from 'ember-concepts/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
