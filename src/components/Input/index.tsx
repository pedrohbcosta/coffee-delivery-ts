import { forwardRef, InputHTMLAttributes } from "react";
import { RegularText } from "../Typograph";
import { InputStyleContainer, InputStyled, InputWrapper, RightText } from "./styles";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: string;
  rightText?: string;
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
  ({ error, className, rightText,...props }, ref) => {
    return (
      <InputWrapper className={className}>
        <InputStyleContainer hasError={!!error}>
          <InputStyled  {...props} ref={ref} />
          {rightText && <RightText>{rightText}</RightText>}
        </InputStyleContainer>
        {error && <RegularText size="s">{error}</RegularText>}
      </InputWrapper>
    )
  }
)