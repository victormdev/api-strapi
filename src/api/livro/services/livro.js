'use strict';

/**
 * livro service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::livro.livro');
