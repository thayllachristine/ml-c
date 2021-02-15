interface IPathFromRoot {
  id: string;
  name: string;
}

export interface IFilterValues {
  id: string;
  name: string;
  path_from_root: IPathFromRoot[];
}

export interface IFilter {
  id: string;
  name: string;
  type: string;
  values: IFilterValues[];
}
