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
      desc:
        '1HOPSAT TD (1st-generation High Optical Performance Satellite Technical Demonstrator) is the prototype satellite of an earth observation constellation by Hera Systems.',
      url: 'https://space.skyrocket.de/img_sat/1hopsat-td__1.jpg',
      id: 44859,
    },
    {
      name: 'iss (zarya)',
      desc:
        'Zarya, is the first module of the International Space Station to have been launched.',
      url:
        'https://upload.wikimedia.org/wikipedia/commons/d/db/Zarya_from_STS-88.jpg',
      id: 25544,
    },
    {
      name: 'proxima i',
      desc:
        'Proxima 1 and 2 are pathfinder satellites for Fleet Space Technologies planned network of Centauri satellites for global satellite connectivity to the Internet of things (IoT)',
      url: 'https://space.skyrocket.de/img_sat/proxima-1__1.jpg',
      id: 43694,
    },
    {
      name: 'centauri-1',
      desc:
        'Centauri 1 and 2 are pathfinder satellites for Fleet Space Technologies planned network for global satellite connectivity to the Internet of things (IoT).',
      url: 'https://space.skyrocket.de/img_sat/centauri-1__1.jpg',
      id: 43809,
    },
    {
      name: 'centauri-2',
      desc:
        'Centauri 1 and 2 are pathfinder satellites for Fleet Space Technologies planned network for global satellite connectivity to the Internet of things (IoT).',
      url: 'https://space.skyrocket.de/img_sat/centauri-1__1.jpg',
      id: 43722,
    },
    {
      name: 'proxima ii',
      desc:
        'Proxima 1 and 2 are pathfinder satellites for Fleet Space Technologies planned network of Centauri satellites for global satellite connectivity to the Internet of things (IoT)',
      url: 'https://space.skyrocket.de/img_sat/proxima-1__1.jpg',
      id: 43696,
    },
    {
      name: 'centauri-3 (tyvak-0210)',
      desc:
        'Centauri 3 is a pathfinder satellites for Fleet Space Technologies planned 140 satellite network for global satellite connectivity to the Internet of things (IoT) designed for use in the energy, utilities, and resource industries.',
      url: 'https://space.skyrocket.de/img_sat/centauri-3__1.jpg',
      id: 47966,
    },
    {
      name: 'yaogan-33',
      desc:
        'The Chinese Yaogan government remote sensing satellite, likely also used as a military reconnaissance satellite, is likely the first of a successor series to the Yaogan-1 (JB-5) class space-based synthetic aperture radar (SAR) system.',
      url: 'https://space.skyrocket.de/img_sat/yaogan-29__1.jpg',
      id: 47302,
    },
    // {
    //   name: 'starlink-1517',
    //   id: 45787,
    // },
    {
      name: 'noaa 19',
      desc:
        'NOAA-19, (NOAA-N Prime) before launch, is the last of the American National Oceanic and Atmospheric Administration (NOAA) series of weather satellites',
      url:
        'https://upload.wikimedia.org/wikipedia/commons/6/63/NOAA-N%27_satellite_in_Vandenberg_AFB_clean_room.jpg',
      id: 33591,
    },
    {
      name: '1998-067ra',
      desc:
        'The launch of one very small spacecraft marks a big success for the first collaboration between NASA and the Mexican Space Agency on a spaceflight project. It’s also important for the team of students in Mexico who designed and built the satellite.',
      url:
        'https://www.nasa.gov/sites/default/files/thumbnails/image/iss062e036372.jpg',
      id: 45257,
    },
    {
      name: 'funcube-1 (ao-73)',
      desc:
        'FUNcube-1, also known as AO-73, is a 1U cubesat (10cm x 10cm x 10cm) built and launched as a collaborative effort between AMSAT-UK, AMSAT-NL, and ISIS-BV',
      url:
        'https://www.amsat.org/wordpress/wp-content/uploads/2013/11/funcube.jpg',
      id: 39444,
    },
    {
      name: 'cubebug-2 (lo-74)',
      desc:
        'The CubeBug-1 2U CubeSat, also known as El Capitán Beto, is the first technology demonstration mission for a new cubesat platform design (mechanics, hardware and software) intended to be released as Open Source and Open Hardware for its use in Amateur projects, University projects and research labs.',
      url:
        'https://static.isstracker.pl/images/satellites/0/40/md/md-cubebug-2-lo-74-39440.png',
      id: 39440,
    },
    {
      name: 'radfxsat (fox-1b)',
      desc:
        'Fox-1B, AO-91 or AMSAT OSCAR 91 is an United States amateur radio satellite. It is a 1U Cubesat, was built by the AMSAT-NA and carries a single-channel transponder for FM radio.',
      url:
        'https://ukamsat.files.wordpress.com/2017/11/radfxsat-fox-1b-cubesat.jpg',
      id: 43017,
    },
    {
      name: 'velox-pii',
      desc:
        'VELOX-II is the second nanosatellite built by the NTU/SaRC (Nanyang Technological University/Satellite Research Center), Singapore',
      url: 'https://space.skyrocket.de/img_sat/velox-2__1.jpg',
      id: 39438,
    },
    {
      name: 'noaa 15',
      desc:
        'NOAA-15, also known as NOAA-K before launch, is an operational, polar-orbiting of the NASA-provided Television Infrared Observation Satellite (TIROS) series of weather forecasting satellite operated by National Oceanic and Atmospheric Administration (NOAA).',
      url: 'https://en.wikipedia.org/wiki/NOAA-15#/media/File:NOAA-M.jpg',
      id: 25338,
    },
    {
      name: 'gomx-1',
      desc:
        'GomSpace is a university spin-off company, founded in 2007 with roots from Aalborg University, Aalborg, Denmark. The development project for the satellite was named GATOSS (Global Air Traffic Awareness and Optimizing through Spaceborne Surveillance), but the satellite mission is officially registered as GOMX-1.',
      url:
        'https://gomspace.com/Storage/cache/img/Storage/plugin_files/catalogue/product/36/7e7ed1b0e1338174e7c3ae36a3bf9196.png',
      id: 39430,
    },
    {
      name: 'd-star one (sparrow)',
      desc:
        'D-Star One is a 3U CubeSat which is equipped with four identical radio modules with D-Star capabilities, all being operated in a half-duplex mode.',
      url: 'https://space.skyrocket.de/img_sat/d-star-one__1.jpg',
      id: 43881,
    },
    {
      name: 'stars (kukai)',
      desc:
        "Kagawa University's STARS 1 (Space Tethered Autonomous Robotic Satellite), also known as Kukai, consists of a Mother Satellite and a Daughter Satellite connected by a tether 10 m in length.",
      url: 'https://space.skyrocket.de/img_sat/stars-1__2.jpg',
      id: 33498,
    },
    {
      name: 'meteor-m 2',
      desc:
        'The Meteor-M-2 (also referred to as Meteor-M2, or as Meteor-M N2) satellite is a Roskosmos/Roshydromet/Planeta (Moscow, Russia) follow-on polar-orbiting meteorological mission to Meteor-M-1 (launch Sept. 17, 2009).',
      url:
        'http://104.131.251.97/spacecraft/wp-content/uploads/sites/18/2015/08/5155475_orig.jpg',
      id: 40069,
    },
  ];

  constructor(private router: Router) {}

  ngOnInit() {}

  showData(id: number) {
    this.router.navigate([`/sat-tle/${id.toString()}`]);
  }
}
