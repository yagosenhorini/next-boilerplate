export interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {
  value: string;
  onChange: () => void;
  placeholder: string;
}
