import styled from "styled-components";

export default function DashboardPage() {
  return (
    <MainContainer>
      <Text>Em produção</Text>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  background-color: #18305d;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Text = styled.div`
  color: #fffcf7;
  font-size: 50px;
`;
