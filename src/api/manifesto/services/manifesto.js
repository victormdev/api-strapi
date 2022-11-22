'use strict';

/**
 * manifesto service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::manifesto.manifesto');
