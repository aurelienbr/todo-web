export type Option = {
  label: string;
  value: string | Array<Option>;
  key: string;
};

export type NestedOptions = Array<Option>;
