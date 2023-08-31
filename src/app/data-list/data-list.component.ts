import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DataService } from '../services/data.service'; 

@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.css']
})
export class DataListComponent implements OnInit {
  dataList: any[] = [];
  searchForm: FormGroup;

  constructor(private dataService: DataService, private fb: FormBuilder) {
    this.searchForm = this.fb.group({
      searchQuery: ['']
    });
  }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.dataService.getData().subscribe(
      (data: any) => {
        this.dataList = data;
      },
      (error: any) => {
        console.error('Error fetching data:', error);
      }
    );
  }

  search(): void {
    const searchQuery = this.searchForm.value.searchQuery.toLowerCase();
    // Filter dataList based on searchQuery
    this.filteredDataList = this.dataList.filter(item =>
      item.name.toLowerCase().includes(searchQuery)
    );
  }
}

