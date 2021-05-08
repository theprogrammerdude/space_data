import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tech-transfer',
  templateUrl: './tech-transfer.page.html',
  styleUrls: ['./tech-transfer.page.scss'],
})
export class TechTransferPage implements OnInit {
  topics = [
    {
      title: 'Technology',
      url: 'technology',
      subtitle: 'Latest Tech ralates updates from NASA',
      desc:
        'Technology can be most broadly defined as the entities, both material and immaterial, created by the application of mental and physical effort in order to achieve some value. In this usage, technology refers to tools and machines that may be used to solve real-world problems.',
    },
    {
      title: 'Science',
      url: 'science',
      subtitle: 'Scientific researches, patents, experiments and other data',
      desc:
        'Science is the pursuit and application of knowledge and understanding of the natural and social world following a systematic methodology based on evidence. Scientific methodology includes the following: ... Evidence. Experiment and/or observation as benchmarks for testing hypotheses.',
    },
    {
      title: 'Propulsion',
      url: 'propulsion',
      subtitle: 'Airplace and Spaceship propulsion data',
      desc:
        'What is propulsion? The word is derived from two Latin words: pro meaning before or forwards and pellere meaning to drive. Propulsion means to push forward or drive an object forward. A propulsion system is a machine that produces thrust to push an object forward.',
    },
    {
      title: 'Operations',
      url: 'operations',
      subtitle: 'Operation related data and statistics',
      desc:
        'Performance of a practical work or of something involving the practical application of principles or processes Practice until you can go through the whole operation without hesitation or thinking. The quality or state of being functional or operative The plant is now in operation.',
    },
    {
      title: 'Aeronautics',
      url: 'aeronautics',
      subtitle: 'Aeronautics discoveries and further ',
      desc:
        'Aeronautics is the study of the science of flight. Aeronautics is the method of designing an airplane or other flying machine. To design a plane, engineers must understand all of these elements.',
    },
  ];

  constructor(private router: Router) {}

  ngOnInit() {}

  gotoTopic(url: String) {
    this.router.navigate([`/topic/${url}`]);
  }
}
