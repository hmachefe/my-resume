import { Component, OnInit, Input } from '@angular/core';
import { Link } from '../../model/resume.model';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss']
})

export class LinkComponent {
  @Input() link: Link;

  isExternalLink(link: Link) {
    return link.type === 'external';
  }
}
