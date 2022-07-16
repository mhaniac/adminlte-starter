export interface Menu {
  label: string | null;
  routerLink: string | null;
  childs: Menu[] | null;
  icon: string | null;
  title: string | null;
}
