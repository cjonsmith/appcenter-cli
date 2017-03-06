/*
 * Code generated by Microsoft (R) AutoRest Code Generator 0.17.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

/* jshint latedef:false */
/* jshint forin:false */
/* jshint noempty:false */

'use strict';

var util = require('util');
var msRest = require('ms-rest');
var ServiceClient = msRest.ServiceClient;

var models = require('./models');
var operations = require('./operations');

/**
 * @class
 * Initializes a new instance of the MobileCenterClient class.
 * @constructor
 *
 * @param {credentials} credentials - Subscription credentials which uniquely identify client subscription.
 *
 * @param {string} [baseUri] - The base URI of the service.
 *
 * @param {object} [options] - The parameter options
 *
 * @param {Array} [options.filters] - Filters to be added to the request pipeline
 *
 * @param {object} [options.requestOptions] - Options for the underlying request object
 * {@link https://github.com/request/request#requestoptions-callback Options doc}
 *
 * @param {boolean} [options.noRetryPolicy] - If set to true, turn off default retry policy
 *
 */
function MobileCenterClient(credentials, baseUri, options) {
  if (credentials === null || credentials === undefined) {
    throw new Error('\'credentials\' cannot be null.');
  }

  if (!options) options = {};

  MobileCenterClient['super_'].call(this, credentials, options);
  this.baseUri = baseUri;
  if (!this.baseUri) {
    this.baseUri = 'https://api.mobile.azure.com/';
  }
  this.credentials = credentials;

  this.account = new operations.Account(this);
  this.distribute = new operations.Distribute(this);
  this.crashOperations = new operations.CrashOperations(this);
  this.buildOperations = new operations.BuildOperations(this);
  this.test = new operations.Test(this);
  this.tables = new operations.Tables(this);
  this.azure = new operations.Azure(this);
  this.push = new operations.Push(this);
  this.identity = new operations.Identity(this);
  this.deprecated = new operations.Deprecated(this);
  this.codepush = new operations.Codepush(this);
  this.analytics = new operations.Analytics(this);
  this.models = models;
  msRest.addSerializationMixin(this);
}

util.inherits(MobileCenterClient, ServiceClient);

module.exports = MobileCenterClient;
