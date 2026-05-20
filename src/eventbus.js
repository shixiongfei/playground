/*
 * eventbus.js
 *
 * Copyright (c) 2026 Xiongfei Shi
 *
 * Author: Xiongfei Shi <xiongfei.shi(a)icloud.com>
 * License: Apache-2.0
 *
 * https://github.com/shixiongfei/playground
 */

import { eventlite } from "eventlite.js";

/**
 * @import { EventLite } from "eventlite.js";
 *
 * @typedef {{
 * }} Events
 *
 * @type {EventLite<Events>}
 */
export const EventBus = eventlite();

export default EventBus;
