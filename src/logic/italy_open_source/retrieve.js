/*
 * Project: retrieve_data_italy
 * Author: mauromarini
 * Date: 30/01/21
 * Package: 
 * Created on: WebStorm
 * Copyright © 2021 retrieve_data_italy
 * 
 * Released under MIT License
 * Copyright (c) 2020 -2021 @marinimau
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated 
 * documentation files (the "Software"), to deal in the Software without restriction, including without limitation the 
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to 
 * permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *  - The above copyright notice and this permission notice shall be included in all copies or substantial portions of 
 *    the Software.
 *  - THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO 
 *    THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE 
 *    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF 
 *    CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS 
 *    IN THE SOFTWARE.
 *
 */


import RemoteUrls from "../../ui/contents/urls";

const retrieveData = (url) =>
    fetch(url)
        .then(res => (res.ok ? res : Promise.reject(res)))
        .then(res => res.json()["data"]);

export const retrieveDeliveryData = () => retrieveData(RemoteUrls.delivery);

export const retrieveAdministrationData = () => retrieveData(RemoteUrls.administration);
