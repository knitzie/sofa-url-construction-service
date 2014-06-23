/**
 * sofa-url-construction-service - v0.4.0 - 2014-06-23
 * http://www.sofa.io
 *
 * Copyright (c) 2014 CouchCommerce GmbH (http://www.couchcommerce.com / http://www.sofa.io) and other contributors
 * THIS SOFTWARE CONTAINS COMPONENTS OF THE SOFA.IO COUCHCOMMERCE SDK (WWW.SOFA.IO).
 * IT IS PROVIDED UNDER THE LICENSE TERMS OF THE ATTACHED LICENSE.TXT.
 */
;(function (sofa, undefined) {

'use strict';
/* global sofa */
/**
 * @name UrlConstructionService
 * @namespace sofa.UrlConstructionService
 *
 * @description
 * As the name says. This service provides methods to construct URLs for
 * different use cases.
 */
sofa.define('sofa.UrlConstructionService', function (configService) {
    var self = {};

    /**
     * @method createUrlForContentPage
     * @memberof sofa.UrlConstructionService
     *
     * @description
     * Creates url for content page.
     *
     * @param {string} pageId
     * @return {string} Url
     */
    self.createUrlForContentPage = function (pageId) {
        return '/pages/' + pageId;
    };

    /**
     * @method createUrlForRootCategory
     * @memberof sofa.UrlConstructionService
     *
     * @description
     * Creates url for root category.
     *
     * @return {string} Url
     */
    self.createUrlForRootCategory = function () {
        return '';
    };

    /**
     * @method createUrlForCart
     * @memberof sofa.UrlConstructionService
     *
     * @description
     * Creates url for cart.
     *
     * @return {string} Url
     */
    self.createUrlForCart = function () {
        return '/cart';
    };

    /**
     * @method createUrlForCheckout
     * @memberof sofa.UrlConstructionService
     *
     * @description
     * Creates url for checkout.
     *
     * @return {string} Url
     */
    self.createUrlForCheckout = function () {
        return '/checkout';
    };

    /**
     * @method createUrlForSummary
     * @memberof sofa.UrlConstructionService
     *
     * @description
     * Creates url for summary.
     *
     * @param {string} token Summary token.
     * @return {string} Url
     */
    self.createUrlForSummary = function (token) {
        return '/summary/' + token;
    };

    /**
     * @method createUrlForShippingCostsPage
     * @memberof sofa.UrlConstructionService
     *
     * @description
     * Creates url for shipping costs page.
     *
     * @return {string} Url
     */
    self.createUrlForShippingCostsPage = function () {
        return '/pages/' + configService.get('linkShippingCosts', '');
    };

    return self;
});

} (sofa));
