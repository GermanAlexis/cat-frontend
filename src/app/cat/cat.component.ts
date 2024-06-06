import { Component, inject, OnInit } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { BreedsService } from './cat.service';
import { Observable } from 'rxjs';
import { IBreed } from './interfaces/cat.interface';

@Component({
  selector: 'app-cat',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
  ],
  templateUrl: './cat.component.html',
  styleUrl: './cat.component.css',
})
export class CatComponent implements OnInit {
  private breedsService = inject(BreedsService);

  breeds: IBreed[] = [];

  ngOnInit(): void {
    this.getBreed();
  }

  columns = [
    {
      columnDef: 'position',
      header: 'No.',
      cell: (element: IBreed) => `${element.id}`,
    },
    {
      columnDef: 'name',
      header: 'Name',
      cell: (element: IBreed) => `${element.name}`,
    },
    {
      columnDef: 'origin',
      header: 'Origin',
      cell: (element: IBreed) => `${element.origin}`,
    },
    {
      columnDef: 'temperament',
      header: 'Temperament',
      cell: (element: IBreed) => `${element.temperament}`,
    },
    {
      columnDef: 'country_code',
      header: 'Country code',
      cell: (element: IBreed) => `${element.country_code}`,
    },
  ];

  displayedColumns = [...this.columns.map((c) => c.columnDef), 'actions'];

  dataSource = new MatTableDataSource<IBreed>();

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.breedsService.search(filterValue).subscribe({
      next: (data) => (this.dataSource.data = data),
      error: (error) => console.log(error),
    });
  }

  async getBreed() {
    this.breedsService.getBreeds().subscribe(
      (data: IBreed[]) => {
        this.dataSource.data = data; // Update data source directly
      },
      (error) => {
        console.error('Error fetching breeds:', error);
      }
    );
  }

  redirectToDetail(id: number) {
    // Replace with your actual redirection logic (e.g., using router)
    console.log(`Redirecting to details page for breed with ID: ${id}`);
  }
}
