import { forwardRef, InputHTMLAttributes } from "react";
import { RegularText } from "../Typograph";
import { InputStyleContainer, InputWrapper } from "./styles";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: string;
};

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
  ({ error, className, ...props }, ref) => {
    return (
      <InputWrapper className={className}>
        <InputStyleContainer {...props} ref={ref}/>
        {error && <RegularText size="s">{error}</RegularText>}
      </InputWrapper>
    )
  }
)