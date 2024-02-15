import { NgModule } from '@angular/core';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { IconDefinition } from '@ant-design/icons-angular';
import { UserOutline, DownOutline } from '@ant-design/icons-angular/icons';
import { NzButtonModule } from 'ng-zorro-antd/button';

const icons: IconDefinition[] = [
  UserOutline,
  DownOutline,
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
  ]
})
export class ZorroModule { }
