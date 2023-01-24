import { forwardRef, InputHTMLAttributes } from "react";
import { InputStyleContainer } from "./styles";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

// export function Input({ ...props }: InputProps) {
//   return (
//     <InputStyleContainer {...props}/>
//   )
// }

/*
To fix the error message: Warning: 
  Function components cannot be given refs. 
  Attempts to access this ref will fail. 
  Did you mean to use React.forwardRef()?

We need to change the function to a const, passing the forwardRef with reference.
So we change the code for code below.
*/

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => {
    return (
      <InputStyleContainer {...props} ref={ref}/>
    )
  }
)