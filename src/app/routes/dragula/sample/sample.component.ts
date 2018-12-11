import { Component, OnInit } from '@angular/core';
import { _HttpClient } from '@delon/theme';
import { DragulaService } from 'ng2-dragula';

@Component({
  selector: 'app-dragula-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.less'],
})
export class DragulaSampleComponent implements OnInit {
  vamps = [
    { name: 'Bad Vamp' },
    { name: 'Petrovitch the Slain' },
    { name: 'Bob of the Everglades' },
    { name: 'The Optimistic Reaper' },
  ];

  vamps2 = [
    { name: 'Dracula' },
    { name: 'Kurz' },
    { name: 'Vladislav' },
    { name: 'Deacon' },
  ];

  constructor(private dragulaService: DragulaService) {}
  ngOnInit() {
    // use these if you want

    // this.dragulaService.createGroup('VAMPIRES', {
    //   // ...
    // });

    this.dragulaService.dropModel('VAMPIRES').subscribe(args => {
      console.log(args);
    });
  }
}
