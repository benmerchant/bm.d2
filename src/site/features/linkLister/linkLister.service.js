/*
 * Title: linkLister.service.js
 *
 * Description: CRUD the links with MongoDB
 *
 * Author: Ben Merchant
*/
import {linksInFakeMongo} from './linksInFakeMongo';

export class LinkListerService {
  constructor(){};

  getLinksFromFAKEMongo(){
    return linksInFakeMongo;
  };
};
