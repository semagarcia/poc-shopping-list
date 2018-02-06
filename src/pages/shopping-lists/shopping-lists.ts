import { Component } from '@angular/core';
import { IonicPage, ItemSliding, ModalController, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';

import { AddNewListPage } from './../modals/';
import { ShoppingList } from './../../models';
import { ShoppingAlimentListPage } from './../shopping-aliment-list/shopping-aliment-list';
import { ShoppingListProvider } from './../../providers';

@IonicPage()
@Component({
  selector: 'page-shopping-lists',
  templateUrl: 'shopping-lists.html',
})
export class ShoppingListsPage {
  private shoppingListCollection: AngularFirestoreCollection<any>;
  private shoppingListDoc: AngularFirestoreDocument<any>;
  shoppingListsObs: Observable<ShoppingList[]>;

  constructor(
    private afs: AngularFirestore,
    private modalCtrl: ModalController,
    public navCtrl: NavController,
    private shoppingListSrv: ShoppingListProvider
  ) { 
    this.shoppingListsObs = this.shoppingListSrv.getUserShoppingLists()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShoppingListsPage');
  }

  addShoppingList() {
    this.modalCtrl.create(AddNewListPage).present();
  }

  openList(shoppingListId: string) {
    this.navCtrl.push(ShoppingAlimentListPage, { listId: shoppingListId });
  }

  itemPressed(item: ItemSliding) {
    console.log('pressed: ', item);
  }

  editItem(item: ItemSliding) {
    console.log('edit: ', item);
  }

  deleteItem(item: ItemSliding) {
    console.log('deleting: ', item);
  }

}
