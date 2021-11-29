import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { filter } from '@ember/object/computed';
import { inject as service } from '@ember/service';

export default Controller.extend({
  settings: service(),

  // pageitems: computed('model.namedId', function() {
  //   let namedId = this.get('model.namedId');
  //   return this.store.query('pageitem', { orderBy: 'order', reload: true, filter: { title: "" } });
  //   // const a = pageItems.filter(pageitem => pageitem.page === 'workshops');
  //   // return a;
  //   // let a = [];
  //   // for (let pageitem in pageitems) {
  //   //   if (pageitem.page == 'workshops') {
  //   //     a.push(pageitem);
  //   //   }
  //   // }
  //   // return pageItems;//.toArray();
  //   // return this.store.query('pageitem', { orderBy: 'order', reload: true }).filter(function(item) {
  //   //     return item.page !== namedId;
  //   //   });
  // }),

  // pageItems: computed('model.namedId', function() {
  //   const namedId = this.get('name');
  //   return this.store.findAll('pageitem').then(function(list) {
  //     return list.filterBy("page", namedId);
  //   });
  //   // let pageItems = this.store.query('pageitem', { orderBy: 'order', reload: true });
  //   // filter(pageItems, function(item) {
  //   //   return item.page === namedId;
  //   // });
  //   //
  //   // return pageItems;
  //   // return this.store.findAll('pageitem', { orderBy: 'order', reload: true });
  // })
});
