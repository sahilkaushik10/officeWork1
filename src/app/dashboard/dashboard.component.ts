import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

import { View3Service } from '../view3.service';
import { View4Service } from '../view4.service';
import { View6Service } from '../view6.service';
import { View6TwoService } from '../view6-two.service';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, AfterViewInit {
  showBarChart: boolean = false;
  showPieChart: boolean = false;
  canvasDiv: boolean = false;
  canvasDiv1: boolean = false;


  // emplRank = [1,2,3,4,5,6,7]; 

  view3Data: any[] = [];
  view4Data: any[] = [];
  view6Data: any[] = [];
  view6TwoData: any[] = [];
  selectedView: string = '';
  
  @ViewChild('barChart') barChartRef!: ElementRef;
  @ViewChild('pieChart') pieChartRef!: ElementRef;
  @ViewChild('pieChart1') pieChartReff!: ElementRef;


  constructor(
    private view3Service: View3Service,
    private view4Service: View4Service,
    private view6Service: View6Service,
    private view6TwoService:View6TwoService,
  ) {}

  ngOnInit() {
    Chart.register(...registerables);
  }

  ngAfterViewInit() {
    this.renderCharts();
    // this.renderPieCharts1();
  }

  showView(view: string) {
    this.selectedView = view;
    if (view === 'view3') {
      this.showBarChart = false;
      this.showPieChart = false;
      this.getView3Data();
    } else if (view === 'view4') {
      this.canvasDiv = false;
      this.canvasDiv1 = true;
      this.showBarChart = true;
      this.showPieChart = false;
      this.getView4Data();

    } else if (view === 'view6') {
      this.canvasDiv = true;
      this.canvasDiv1 = false;
      this.showBarChart = false;
      this.showPieChart = true;
      this.getView6Data();
      this.getView6TwoData();

    }
  }
 
  getView3Data() {
    this.view3Service.getView3Data().subscribe((data: any) => {
      this.view3Data = data;
    });
  }

  getView4Data() {
    this.view4Service.getView4Data().subscribe((data: any) => {
      this.view4Data = data;
      this.renderCharts();
    });
  }

  getView6Data() {
    this.view6Service.getView6Data().subscribe((data: any) => {
      this.view6Data = data;
      this.renderCharts();
    });
  }

  getView6TwoData(){
    this.view6TwoService.getView6TwoData().subscribe((data: any) => {
      this.view6TwoData = data;
      this.renderCharts();
    });
  }


  renderCharts() {
    if (this.selectedView === 'view4') {
      this.renderBarChart();
    } else if (this.selectedView === 'view6') {
      this.renderPieChart();
      this.renderPieChart1();
    }
  }

  renderBarChart() {
    if (this.showBarChart) {

    const canvas = this.barChartRef.nativeElement;
    const ctx = canvas.getContext('2d');

    const labels = this.view4Data.map(item => item.reporter);
    const data = this.view4Data.map(item => item.employeeCount);

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Leave Counts By Manager',
            data: data,
            backgroundColor: ' rgba(167, 146, 32, 0.6)',
          }
        ]
      },
      options: {
      }
    });
  }
}


renderPieChart1() {
  if (this.showPieChart) {
  const canvas = this.pieChartReff.nativeElement;
  const ctx = canvas.getContext('2d');
  console.log("pie chart 2.......")

  
  const labels1 = this.view6TwoData.map(item => item.leave_type);
  const data1 = this.view6TwoData.map(item => item.total_leave_days)



  new Chart(ctx, {
    type: 'pie',
    data: {
      labels: labels1,
      datasets: [
     
        {
                  data: data1,
                  label:'Data Engineering',
                  backgroundColor: [
                    'rgba(117, 131, 42, 0.6)',
                    'rgba(59, 173, 49, 0.6)',
                    'rgba(104, 41, 76, 0.6)',
                  ],
                }
      ]
      
    },
    options: {
    }
  });
}
}


  renderPieChart() {
      if (this.showPieChart) {
      const canvas = this.pieChartRef.nativeElement;
      const ctx = canvas.getContext('2d');
      console.log('pie chart 1........')

  
      const labels = this.view6Data.map(item => item.leave_type);
      const data = this.view6Data.map(item => item.total_leave_days);

      new Chart(ctx, {
        type: 'pie',
        data: {
          labels: labels,
          datasets: [
            {
              data: data,
              label:'IT',
              backgroundColor: [
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)',
              ],
            }
          
          ]
          
        },
        options: {
        }
      });
    }
  }
  }
  

