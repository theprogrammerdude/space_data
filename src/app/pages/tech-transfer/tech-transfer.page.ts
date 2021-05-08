import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tech-transfer',
  templateUrl: './tech-transfer.page.html',
  styleUrls: ['./tech-transfer.page.scss'],
})
export class TechTransferPage implements OnInit {
  topics = [
    { title: 'Technology', url: 'technology' },
    { title: 'Science', url: 'science' },
    {
      title: 'Business Systems and Project Management',
      url: 'business_systems_and_project_management',
    },
    // {
    //   title: 'Design and Integration Tools',
    //   url: 'design_and_integration_tools',
    // },
    { title: 'Propulsion', url: 'propulsion' },
    { title: 'Data and Image Processing', url: 'data_and_image_processing' },
    {
      title: 'Environmental Science',
      url: 'environmental_science_earth_air_space_exoplanet',
    },
    { title: 'System Testing', url: 'system_testing' },
    { title: 'Vehicle Management', url: 'vehicle_management_space_air_ground' },
    { title: 'Structures and Mechanism', url: 'structures_and_mechanisms' },
    { title: 'Materials and Processes', url: 'materials_and_processes' },
    { title: 'Autonomous Systems', url: 'autonomous_systems' },
    { title: 'Operations', url: 'operations' },
    {
      title: 'Data Servers Processing and Handling',
      url: 'data_servers_processing_and_handling',
    },
    { title: 'Crew and Lify Support', url: 'crew_and_life_support' },
    {
      title: 'Electronics and Electrical Power',
      url: 'electronics_and_electrical_power',
    },
    { title: 'Aeronautics', url: 'aeronautics' },
  ];

  constructor(private router: Router) {}

  ngOnInit() {}

  gotoTopic(url: String) {
    this.router.navigate([`/topic/${url}`]);
  }
}
