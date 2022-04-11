import styled from "styled-components";
import { SearchInput } from "../molecules/SearchInpout";
import { UserCard } from "../organisms/user/Usercard";

const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    name: `あっぽー ${val}`,
    image: "https://source.unsplash.com/5Vr_RVPfbMI",
    email: "aaa@bbb.com",
    phone: "111-2222-3333",
    company: {
      name: "株式会社だよ株式会社"
    },
    website: "https://google.com"
  };
});

export const Users = () => {
  return (
    <SContainer>
      <SUserArea>
        <h2>ユーザー一覧だよ</h2>
        <SearchInput />
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </SUserArea>
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;

const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;
