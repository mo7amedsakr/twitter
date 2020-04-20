import styled from 'styled-components';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

export const TextArea = styled(TextareaAutosize)`
  color: ${({ theme }) => theme.text_primary};
  width: 100%;
  font-size: 2rem;
  padding: 1.5rem 0;
  resize: none;
  overflow: hidden;
  &::placeholder {
    color: ${({ theme }) => theme.text_secondary};
  }
`;
