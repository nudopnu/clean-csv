import { NgModule } from '@angular/core';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { IconDefinition } from '@ant-design/icons-angular';
import { UserOutline, DownOutline, InboxOutline } from '@ant-design/icons-angular/icons';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzTableModule } from 'ng-zorro-antd/table';


const icons: IconDefinition[] = [
  UserOutline,
  DownOutline,
  InboxOutline,
];

@NgModule({
  imports: [
    NzIconModule.forRoot(icons)
  ],
  exports: [
    NzUploadModule,
    NzListModule,
    NzDropDownModule,
    NzIconModule,
    NzButtonModule,
    NzTabsModule,
    NzTableModule,
  ]
})
export class ZorroModule { }
