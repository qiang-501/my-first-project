import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { MatTabGroup } from '@angular/material/tabs';
import * as locationJson from '../../../../assets/data/locationResult.json';
export class Tenant {
  value?: string;
  label?: string;
  checked?: boolean;
  customer: Array<Customer> = new Array<Customer>();
}

export class Customer {
  value?: string;
  label?: string;
  checked?: boolean;
  plant: Array<Plant> = new Array<Plant>();
}
export class Plant {
  value?: string;
  label?: string;
  checked?: boolean;
  unit: Array<Unit> = new Array<Unit>();
}
export class Unit {
  value?: string;
  label?: string;
  checked?: boolean;
  location: Array<Location> = new Array<Location>();
}
export class Location {
  value?: string;
  label?: string;
  checked?: boolean;
}
export class PageModel {
  customer_page_size: number = 20;
  customer_allComplete: boolean = false;
  customer_someComplete: boolean = false;
  plant_page_size: number = 20;
  plant_allComplete: boolean = false;
  plant_someComplete: boolean = false;
  unit_page_size: number = 20;
  unit_allComplete: boolean = false;
  unit_someComplete: boolean = false;
  location_page_size: number = 20;
  location_allComplete: boolean = false;
  location_someComplete: boolean = false;
}
@Component({
  selector: 'app-demo2',
  templateUrl: './demo2.component.html',
  styleUrl: './demo2.component.scss',
})
export class Demo2Component implements OnInit {
  public tabGroupIndex?: number;
  public locationSource: Array<Tenant> = [];
  public currentPage: PageModel;
  // public customer_page_size: number = 20;
  // public plant_page_size: number = 20;
  // public unit_page_size: number = 20;
  // public location_page_size: number = 20;
  private _locationDataSourceObservable: Observable<Array<any>>;
  @Input() locationDataSource: Observable<any>;
  @Input() set locationDataSourceObservable(value: Observable<Array<any>>) {
    (this._locationDataSourceObservable = value), this.LoadlocationDataSource();
  }
  _items: Array<Tenant> = [];
  get locationDataSourceObservable(): Observable<Array<any>> {
    return this._locationDataSourceObservable;
  }
  set items(value: Array<Tenant>) {
    this._items = value;
  }

  get items(): Array<Tenant> {
    return this._items;
  }

  get customerCount(): number {
    var ret: number = 0;
    this.items.map((_) => {
      if (_.checked) {
        ret += _.customer.length;
      }
    });
    return ret;
  }
  get plantCount(): number {
    var ret: number = 0;
    this.items.map((_) => {
      if (_.checked) {
        _.customer.map((s) => {
          if (s.checked) {
            ret += s.plant.length;
          }
        });
      }
    });
    return ret;
  }
  get unitCount(): number {
    var ret: number = 0;
    this.items.map((_) => {
      if (_.checked) {
        _.customer.map((c) => {
          if (c.checked) {
            c.plant.map((p) => {
              ret += p.unit.length;
            });
          }
        });
      }
    });
    return ret;
  }
  get locationCount(): number {
    var ret: number = 0;
    this.items.map((_) => {
      if (_.checked) {
        _.customer.map((c) => {
          if (c.checked) {
            c.plant.map((p) => {
              if (p.checked) {
                p.unit.map((u) => {
                  if (u.checked) {
                    ret += u.location.length;
                  }
                });
              }
            });
          }
        });
      }
    });
    return ret;
  }
  get customer(): Array<Customer> {
    var ret: Array<Customer> = [];
    var customers: Array<Customer> = [];
    this.items.map((_) => {
      if (_.checked) {
        _.customer.map((c) => {
          let customTemp = customers.filter((f) => f.label == c.label);
          if (customTemp.length > 0) {
            customTemp[0].value = customTemp[0].value + '|' + c.value;
          } else {
            customers.push(c);
          }
        });
      }
    });
    ret = customers.slice(
      this.currentPage.customer_page_size - 20,
      this.currentPage.customer_page_size
    );
    return ret;
  }
  get plant(): Array<Plant> {
    var allPlant: Array<Plant> = [];
    var ret: Array<Plant> = [];
    this.items
      .filter((t) => t.checked)
      .map((t) => {
        t.customer
          .filter((c) => c.checked)
          .map((c) => {
            c.plant.map((p) => {
              let plantTemp = allPlant.filter((f) => f.label == p.label);
              if (plantTemp.length > 0) {
                plantTemp[0].value = plantTemp[0].value + '|' + p.value;
              } else {
                allPlant.push(p);
              }
            });
            //allPlant = allPlant.concat(c.plant);
          });
      });
    ret = allPlant.slice(
      this.currentPage.plant_page_size - 20,
      this.currentPage.plant_page_size
    );
    return ret;
  }
  get unit(): Array<Unit> {
    var allUnit: Array<Unit> = [];
    var ret: Array<Unit> = [];
    this.items
      .filter((t) => t.checked)
      .map((t) => {
        t.customer
          .filter((c) => c.checked)
          .map((c) => {
            c.plant
              .filter((p) => p.checked)
              .map((p) => {
                allUnit = allUnit.concat(p.unit);
              });
          });
      });
    ret = allUnit.slice(
      this.currentPage.unit_page_size - 20,
      this.currentPage.unit_page_size
    );
    return ret;
  }
  get location(): Array<Location> {
    var allLocation: Array<Location> = [];
    var ret: Array<Location> = [];
    this.items
      .filter((t) => t.checked)
      .map((t) => {
        t.customer
          .filter((c) => c.checked)
          .map((c) => {
            c.plant
              .filter((p) => p.checked)
              .map((p) => {
                p.unit
                  .filter((u) => u.checked)
                  .map((u) => {
                    allLocation = allLocation.concat(u.location);
                  });
              });
          });
      });
    ret = allLocation.slice(
      this.currentPage.location_page_size - 20,
      this.currentPage.location_page_size
    );
    return ret;
  }
  ngOnInit(): void {
    this.currentPage = new PageModel();
    this.locationSource = [];
    this.initData(locationJson);
  }
  public selectAll(type: string, para: any) {
    switch (type) {
      case 'tenant':
        this.items.map((_) => {
          _.checked = para.checked;
        });
        break;
      case 'customer':
        // this.items
        //   .filter((_) => _.checked)
        //   .map((item) => {
        //     item.customer.map((item) => {
        //       item.checked = para.checked;
        //     });
        //   });
        this.customer.map((c) => {
          c.checked = para.checked;
        });
        break;
      case 'plant':
        // this.items
        //   .filter((_) => _.checked)
        //   .map((tenant) => {
        //     tenant.customer
        //       .filter((_) => _.checked)
        //       .map((customer) => {
        //         customer.plant.map((plant) => {
        //           plant.checked = para.checked;
        //         });
        //       });
        //   });
        this.plant.map((p) => {
          p.checked = para.checked;
        });
        break;
      case 'unit':
        // this.items
        //   .filter((_) => _.checked)
        //   .map((tenant) => {
        //     tenant.customer
        //       .filter((_) => _.checked)
        //       .map((customer) => {
        //         customer.plant
        //           .filter((_) => _.checked)
        //           .map((plant) => {
        //             plant.unit.map((unit) => {
        //               unit.checked = para.checked;
        //             });
        //           });
        //       });
        //   });
        this.unit.map((u) => {
          u.checked = para.checked;
        });
        break;
      case 'location':
        // this.items
        //   .filter((_) => _.checked)
        //   .map((tenant) => {
        //     tenant.customer
        //       .filter((_) => _.checked)
        //       .map((customer) => {
        //         customer.plant
        //           .filter((_) => _.checked)
        //           .map((plant) => {
        //             plant.unit
        //               .filter((_) => _.checked)
        //               .map((unit) => {
        //                 unit.location.map((location) => {
        //                   location.checked = para.checked;
        //                 });
        //               });
        //           });
        //       });
        //   });
        this.location.map((l) => {
          l.checked = para.checked;
        });
        break;
    }
  }
  public LoadlocationDataSource() {
    this._locationDataSourceObservable.subscribe((res: any) => {
      this.initData(res);
    });
  }

  public initData(res: any) {
    for (var i = 0; i < res.data.length; i++) {
      if (
        this.locationSource.filter((s) => s.value == res.data[i].tenant)
          .length == 0
      ) {
        //add tenant
        this.locationSource.push({
          value: res.data[i].tenant,
          label: res.data[i].tenant,
          checked: false,
          customer: [
            {
              value: res.data[i].customer,
              label: res.data[i].customer,
              checked: false,
              plant: [
                {
                  value: res.data[i].plant,
                  label: res.data[i].plant,
                  checked: false,
                  unit: [
                    {
                      value: res.data[i].unit,
                      label: res.data[i].unit,
                      checked: false,
                      location: [
                        {
                          value: res.data[i].location,
                          label: res.data[i].location,
                          checked: false,
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        });
        continue;
      }
      var customer = this.locationSource.filter(
        (s) => s.value == res.data[i].tenant
      )[0].customer;
      if (customer.filter((s) => s.value == res.data[i].customer).length == 0) {
        //add customer
        customer.push({
          value: res.data[i].customer,
          label: res.data[i].customer,
          checked: false,
          plant: [
            {
              value: res.data[i].plant,
              label: res.data[i].plant,
              checked: false,
              unit: [
                {
                  value: res.data[i].unit,
                  label: res.data[i].unit,
                  checked: false,
                  location: [
                    {
                      value: res.data[i].location,
                      label: res.data[i].location,
                      checked: false,
                    },
                  ],
                },
              ],
            },
          ],
        });
        continue;
      }
      var plants = this.locationSource
        .filter((s) => s.value == res.data[i].tenant)[0]
        .customer.filter((s) => s.value == res.data[i].customer)[0].plant;

      if (plants.filter((s) => s.value == res.data[i].plant).length == 0) {
        //add plant
        plants.push({
          value: res.data[i].plant,
          label: res.data[i].plant,
          checked: false,
          unit: [
            {
              value: res.data[i].unit,
              label: res.data[i].unit,
              checked: false,
              location: [
                {
                  value: res.data[i].location,
                  label: res.data[i].location,
                  checked: false,
                },
              ],
            },
          ],
        });
        continue;
      }
      var units = this.locationSource
        .filter((s) => s.value == res.data[i].tenant)[0]
        .customer.filter((s) => s.value == res.data[i].customer)[0]
        .plant.filter((s) => s.value == res.data[i].plant)[0].unit;
      if (units.filter((s) => s.value == res.data[i].unit).length == 0) {
        //add unit
        units.push({
          value: res.data[i].unit,
          label: res.data[i].unit,
          checked: false,
          location: [
            {
              value: res.data[i].location,
              label: res.data[i].location,
              checked: false,
            },
          ],
        });
        continue;
      }
      var locations = this.locationSource
        .filter((s) => s.value == res.data[i].tenant)[0]
        .customer.filter((s) => s.value == res.data[i].customer)[0]
        .plant.filter((s) => s.value == res.data[i].plant)[0]
        .unit.filter((s) => s.value == res.data[i].unit)[0].location;
      if (
        locations.filter((s) => s.value == res.data[i].location).length == 0
      ) {
        //add location
        locations.push({
          value: res.data[i].location,
          label: res.data[i].location,
          checked: false,
        });
      }
    }
    this.items = this.locationSource;
  }
  setTabGroup(tab: MatTabGroup, index: number) {
    tab.selectedIndex = this.tabGroupIndex = index;
  }
  setDataSource() {
    var ret: Array<Customer> = [];
    this.items.map((_) => {
      if (_.checked) {
        ret = ret.concat(_.customer);
      }
    });
    return ret;
  }
  updateStatus() {
    this.currentPage.customer_allComplete = this.customer.every(
      (t) => t.checked
    );
    this.currentPage.customer_someComplete =
      this.customer.filter((c) => c.checked).length !==
        this.currentPage.customer_page_size &&
      this.customer.filter((c) => c.checked).length > 0;
  }
}
