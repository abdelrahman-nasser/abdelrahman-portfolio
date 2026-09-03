import { Component } from '@angular/core';

import { aiAugmentedEngineering } from '../../../content';
import { PageContainer } from '../../../layout/page-container/page-container';
import type { AiAugmentedEngineering } from '../../../models/content.models';

@Component({
  imports: [PageContainer],
  selector: 'app-ai-engineering',
  styleUrl: './ai-engineering.scss',
  templateUrl: './ai-engineering.html',
})
export class AiEngineering {
  protected readonly data: AiAugmentedEngineering = aiAugmentedEngineering;
}
