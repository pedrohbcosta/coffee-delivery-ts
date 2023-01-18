import styled from "styled-components";
import { SelectionBaseStyle } from "../../styles";

export const SelectedCoffeesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: .75rem;
  width: 40rem;
`;

export const DetailsContainer = styled(SelectionBaseStyle)`
  border-radius: 6px 44px 6px 44px;
  display: flex;
  flex-direction: column;
`;