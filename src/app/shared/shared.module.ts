import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { IdFromUrlPipe } from './pipes';

const SHARED_PIPES = [IdFromUrlPipe];

@NgModule({
  declarations: [...SHARED_PIPES],
  imports: [CommonModule],
  exports: [CommonModule, ...SHARED_PIPES],
})
export class SharedModule {}
