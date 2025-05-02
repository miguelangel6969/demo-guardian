import {Component, signal} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router, RouterOutlet} from '@angular/router';
import {filter} from 'rxjs';
import {MenuItem} from 'primeng/api';
import {CommonModule} from '@angular/common';
import {PrimeNgModule} from '../../../core/modules/PrimeNgModule';
import {FormsModule} from '@angular/forms';
import {LayoutService} from '../../../core/services/layout.service';

@Component({
    selector: 'navbar-cmp',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css'],
    standalone: true,
    imports: [
      CommonModule,
      FormsModule,
      PrimeNgModule,
    ],
})

export class NavbarComponent{

  constructor(private router: Router, private activatedRoute: ActivatedRoute,public layoutService: LayoutService) {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd) // Solo en cambios de navegación
      )
      .subscribe(() => {
        this.breadcrumbItems = this.buildBreadcrumb(this.activatedRoute.root);
      });
  }

  breadcrumbItems: MenuItem[] = [];
  breadcrumbHome = { icon: 'pi pi-home', routerLink: '/' };

  buildBreadcrumb(route: ActivatedRoute, url: string = '', breadcrumbs: any[] = []): any[] {
    const children: ActivatedRoute[] = route.children;

    if (children.length === 0) {
      return breadcrumbs;
    }

    for (const child of children) {
      const routeURL: string = child.snapshot.url.map(segment => segment.path).join('/');
      if (routeURL !== '') {
        url += `/${routeURL}`;
      }

      const label = child.snapshot.data['breadcrumb'];
      if (label) {
        breadcrumbs.push({ label, routerLink: url });
      }

      return this.buildBreadcrumb(child, url, breadcrumbs);
    }

    return breadcrumbs;
  }

  searchQuery = '';
  nestedMenuItems: MenuItem[] = [
    {
      label: 'Carga de información',
      icon: 'pi pi-fw pi-upload',
      items: [] ,
      routerLink: ['/home/upload'],
      routerLinkActiveOptions: { exact: true }
    },
    {
      label: 'Módulo de reportes',
      icon: 'pi pi-fw pi-chart-line',
      items: [],
      routerLink: ['/home/download'],
      routerLinkActiveOptions: { exact: true }
    },
    {
      label: 'Profile',
      icon: 'pi pi-fw pi-user',
      items: [
        {
          label: 'Settings',
          icon: 'pi pi-fw pi-cog'
        }
      ]
    },
    {
      separator: true
    },
    {
      label: 'Quit',
      icon: 'pi pi-fw pi-sign-out'
    }
  ];

  filteredMenu = signal<MenuItem[]>(this.nestedMenuItems);

  onSearchChange() {
    this.filteredMenu.set(this.filterMenu(this.nestedMenuItems, this.searchQuery));
  }

  // ✅ Esta función debe estar dentro del mismo componente
  filterMenu(items: MenuItem[], query: string): MenuItem[] {
    if (!query) return items;

    const lowerQuery = query.toLowerCase();
    const result: MenuItem[] = [];

    for (const item of items) {
      const matchesLabel = item.label?.toLowerCase().includes(lowerQuery);

      // Llamada recursiva si hay hijos
      let filteredChildren: MenuItem[] | undefined;
      if (item.items && item.items.length > 0) {
        filteredChildren = this.filterMenu(item.items, query);
      }

      if (matchesLabel) {
        // Si el padre coincide, lo devolvemos con todos sus hijos originales
        result.push({
          ...item,
          items: item.items
        });
      } else if (filteredChildren && filteredChildren.length > 0) {
        // Si no coincide el padre, pero sí los hijos: devolvemos los hijos filtrados
        result.push({
          ...item,
          items: filteredChildren
        });
      }
      // Si ni el padre ni hijos coinciden, no se agrega nada
    }

    return result;
  }

  toggleDarkMode() {
    this.layoutService.layoutConfig.update((state) => ({ ...state, darkTheme: !state.darkTheme }));
  }

}
