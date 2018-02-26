import {Component, OnInit, Inject, ElementRef, AfterViewInit, Output, EventEmitter} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';
import {UserSkillLevelsHaveWant} from '../../../shared/user-skills.service'

@Component({
  selector: 'app-dialog',
  templateUrl: './skill-level-popover.component.html',
  styleUrls: ['./skill-level-popover.component.css']
})

export class SkillLevelPopoverComponent implements OnInit, AfterViewInit {

  public skillLevels:string[] = [
      "?",
      "none",
      "beginner",
      "intermediate",
      "advanced",
      "expert",
  ];

  @Output() tellDialogWidth = new EventEmitter();

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public el: ElementRef,
  ) {
  }

  ngOnInit() {
    console.log('UserSkillLevels', this.data);
  }

  ngAfterViewInit(){
    this.tellDialogWidth.emit(this.el.nativeElement.getBoundingClientRect())
  }

  getDialogResult(have, want): UserSkillLevelsHaveWant {
    return  {
      have: have.selectedValue || null,
      want: want.selectedValue || null,
    }
  }
}
