import styled from 'styled-components';
export const Wrapper = styled.div`
  margin-bottom: 2rem;
`;
export const Info = styled.div`
  border-bottom: solid 1px var(--gray-5);
  color: var(--gray-7);
  display: flex;
  font-size: var(--font-size-1);
  font-style: italic;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 1rem;
  padding: 0 0.5rem 0.5rem;
`;

export const Detail = styled.span``;
export const QuestionEl = styled.p`
  font-size: var(--font-size-2);
  margin-bottom: 2rem;
`;

export const Answers = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 2rem;
`;

export const Message = styled.span`
  display: block;
  color: ${(props: any) => (props.inCorrect ? 'red' : 'green')};
`;

export const Navigation = styled.div`
  display: flex;
  justify-content: space-between;
`;
