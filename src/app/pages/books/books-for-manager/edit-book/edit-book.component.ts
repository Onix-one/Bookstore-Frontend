import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSelect } from '@angular/material/select';
import { ReplaySubject, Subject } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';

interface Website {
  id: string;
  name: string;
}
@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {
  createBook!: FormGroup;

  title = 'app-material3';
    
  protected websites:any  =  [
    {id: '1', name: 'ItSolutionStuff.com'},
    {id: '2', name: 'HDTuto.com'},
    {id: '3', name: 'Nicesnippets.com'},
    {id: '4', name: 'Google.com'},
    {id: '5', name: 'laravel.com'},
    {id: '6', name: 'npmjs.com'},
    {id: '7', name: 'Google2.com'},
  ]; 
  
  public websiteMultiCtrl: FormControl = new FormControl();
  public websiteMultiFilterCtrl: FormControl = new FormControl();
  public filteredWebsitesMulti: ReplaySubject<any> = new ReplaySubject<any>(1);

  
  @ViewChild('multiSelect', { static: true }) multiSelect?: MatSelect;
  
  protected _onDestroy = new Subject();

  constructor() { }

  

  hide: boolean = false;

  ngOnInit(): void {
    this.createBook = new FormGroup({
      bookName: new FormControl(''),
      description : new FormControl('')
    });

      this.websiteMultiCtrl.setValue(this.websites[1]);
      this.filteredWebsitesMulti.next(this.websites.slice());
    
      this.websiteMultiFilterCtrl.valueChanges
        .pipe(takeUntil(this._onDestroy))
        .subscribe(() => {
          this.filterWebsiteMulti();
        });
  }

  addAuthor(){}
   /**
   * Write code on Method
   *
   * method logical code
   */
    ngAfterViewInit() {
      this.setInitialValue();
    }
   
    /**
     * Write code on Method
     *
     * method logical code
     */
    ngOnDestroy() {
      // this._onDestroy.next();
      this._onDestroy.complete();
    }
    
    /**
     * Write code on Method
     *
     * method logical code
     */
    protected setInitialValue() {
      this.filteredWebsitesMulti
        .pipe(take(1), takeUntil(this._onDestroy))
        .subscribe(() => {
          if (this.multiSelect != null) {
            this.multiSelect.compareWith = (a: Website, b: Website) => a && b && a.id === b.id;
          }
           
        });
    }
    
    /**
     * Write code on Method
     *
     * method logical code
     */
    protected filterWebsiteMulti() {
      if (!this.websites) {
        return;
      }
    
      let search = this.websiteMultiFilterCtrl.value;
      if (!search) {
        this.filteredWebsitesMulti.next(this.websites.slice());
        return;
      } else {
        search = search.toLowerCase();
      }
    
      this.filteredWebsitesMulti.next(
        this.websites.filter((bank: { name: string; }) => bank.name.toLowerCase().indexOf(search) > -1)
      );
    }

  submit() {
    if (this.createBook.valid) {
      console.log(this.createBook.value);

      // this.client
      //   .registerUser(this.registrationUser.value)
      //   .then((err) => console.log(err));
    }
  }
}
