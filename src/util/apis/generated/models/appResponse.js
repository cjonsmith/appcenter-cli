/*
 * Code generated by Microsoft (R) AutoRest Code Generator 0.17.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

var models = require('./index');

/**
 * @class
 * Initializes a new instance of the AppResponse class.
 * @constructor
 * @member {string} id The unique ID (UUID) of the app
 * 
 * @member {string} appSecret A unique and secret key used to identify the app
 * in communication with the ingestion endpoint for crash reporting and
 * analytics
 * 
 * @member {string} [azureSubscriptionId] The unique ID (UUID) of the Azure
 * subscription associate with the app
 * 
 * @member {string} [description] The description of the app
 * 
 * @member {string} displayName The display name of the app
 * 
 * @member {string} [iconUrl] The string representation of the URL pointing to
 * the app's icon
 * 
 * @member {string} name The name of the app used in URLs
 * 
 * @member {string} os The OS the app will be running on. Possible values
 * include: 'iOS', 'Android', 'Windows'
 * 
 * @member {object} owner
 * 
 * @member {string} [owner.id] The unique id (UUID) of the owner
 * 
 * @member {string} [owner.avatarUrl] The avatar URL of the owner
 * 
 * @member {string} [owner.displayName] The owner's display name
 * 
 * @member {string} [owner.email] The owner's email address
 * 
 * @member {string} [owner.name] The unique name that used to identify the
 * owner
 * 
 * @member {string} [owner.type] The owner type. Can either be 'org' or
 * 'user'. Possible values include: 'org', 'user'
 * 
 * @member {string} platform The platform of the app. Possible values include:
 * 'Java', 'Objective-C-Swift', 'React-Native', 'UWP', 'Xamarin'
 * 
 * @member {string} origin The origin of this app can only be mobile-center or
 * hockeyapp for now. Possible values include: 'mobile-center', 'hockeyapp'
 * 
 */
function AppResponse() {
}

/**
 * Defines the metadata of AppResponse
 *
 * @returns {object} metadata of AppResponse
 *
 */
AppResponse.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'AppResponse',
    type: {
      name: 'Composite',
      className: 'AppResponse',
      modelProperties: {
        id: {
          required: true,
          serializedName: 'id',
          type: {
            name: 'String'
          }
        },
        appSecret: {
          required: true,
          serializedName: 'app_secret',
          type: {
            name: 'String'
          }
        },
        azureSubscriptionId: {
          required: false,
          serializedName: 'azure_subscription_id',
          type: {
            name: 'String'
          }
        },
        description: {
          required: false,
          serializedName: 'description',
          type: {
            name: 'String'
          }
        },
        displayName: {
          required: true,
          serializedName: 'display_name',
          type: {
            name: 'String'
          }
        },
        iconUrl: {
          required: false,
          serializedName: 'icon_url',
          type: {
            name: 'String'
          }
        },
        name: {
          required: true,
          serializedName: 'name',
          type: {
            name: 'String'
          }
        },
        os: {
          required: true,
          serializedName: 'os',
          type: {
            name: 'String'
          }
        },
        owner: {
          required: true,
          serializedName: 'owner',
          type: {
            name: 'Composite',
            className: 'Owner'
          }
        },
        platform: {
          required: true,
          serializedName: 'platform',
          type: {
            name: 'String'
          }
        },
        origin: {
          required: true,
          serializedName: 'origin',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = AppResponse;
