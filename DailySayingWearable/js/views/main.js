/*
 *      Copyright (c) 2015 Samsung Electronics Co., Ltd
 *
 *      Licensed under the Flora License, Version 1.1 (the "License");
 *      you may not use this file except in compliance with the License.
 *      You may obtain a copy of the License at
 *
 *              http://floralicense.org/license/
 *
 *      Unless required by applicable law or agreed to in writing, software
 *      distributed under the License is distributed on an "AS IS" BASIS,
 *      WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *      See the License for the specific language governing permissions and
 *      limitations under the License.
 */

/*global define, document*/

/**
 * Main view module.
 *
 * @module views/main
 * @requires {@link views/display}
 * @requires {@link views/sound}
 * @requires {@link views/call}
 * @requires {@link views/screenLock}
 * @requires {@link views/input}
 * @requires {@link views/gearInfo}
 * @requires {@link views/device}
 * @requires {@link views/connections}
 * @requires {@link views/accessibility}
 * @requires {@link helpers/popup}
 * @namespace views/main
 */
define({
    name: 'views/main',
    requires: [
        'views/display',
        'views/sound',
        'views/call',
        'views/screenLock',
        'views/input',
        'views/gearInfo',
        'views/device',
        'views/connections',
        'views/accessibility',
        'helpers/popup'
    ],
    def: function main(req) {
        'use strict';

        /**
         * Popup helper module instance.
         *
         * @memberof views/main
         * @private
         * @type {Module}
         */
        var popupHelper = req.helpers.popup,

            /**
             * Page element.
             *
             * @memberof views/main
             * @private
             * @type {HTMLElement}
             */
            page = null;

        /**
         * Initializes module.
         *
         * @memberof views/main
         * @public
         */
        function init() {
            page = document.getElementById('main');

            popupHelper.resetScrollBeforeOpen(
                page.querySelector('#power-saving-popup')
            );
        }

        return {
            init: init
        };
    }
});
