import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tle',
  templateUrl: './tle.page.html',
  styleUrls: ['./tle.page.scss'],
})
export class TlePage implements OnInit {
  satellites = [
    {
      name: 'ihopsat-td',
      id: 44859,
    },
    {
      name: 'iss (zarya)',
      id: 25544,
    },
    {
      name: 'proxima i',
      id: 43694,
    },
    {
      name: 'centauri-1',
      id: 43809,
    },
    {
      name: 'centauri-2',
      id: 43722,
    },
    {
      name: 'proxima ii',
      id: 43696,
    },
    {
      name: 'centauri-3 (tyvak-0210)',
      id: 47966,
    },
    {
      name: 'yaogan-33',
      id: 47302,
    },
    {
      name: 'starlink-1517',
      id: 45787,
    },
    {
      name: 'noaa 119',
      id: 33591,
    },
    {
      name: '1998-067ra',
      id: 45257,
    },
    {
      name: 'funcube-1 (ao-73)',
      id: 39444,
    },
    {
      name: 'cubebug-2 (lo-74)',
      id: 39440,
    },
    {
      name: 'radfxsat (fox-1b)',
      id: 43017,
    },
    {
      name: 'velox-pii',
      id: 39438,
    },
    {
      name: 'noaa 15',
      id: 25338,
    },
    {
      name: 'gomx-1',
      id: 39430,
    },
    {
      name: 'd-star one (sparrow)',
      id: 43881,
    },
    {
      name: 'stars (kukai)',
      id: 33498,
    },
    {
      name: 'meteor-m 2',
      id: 40069,
    },
  ];

  constructor(private router: Router) {}

  ngOnInit() {}

  showData(id: number) {
    this.router.navigate([`/sat-tle/${id.toString()}`]);
  }
}
