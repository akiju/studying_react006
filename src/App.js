import { PrimaryButton } from "./components/atoms/button/PromaryButton";
import { SecondaryButton } from "./components/atoms/button/SecondaryButton";
import { SearchInput } from "./components/molecules/SearchInpout";
import { UserCard } from "./components/organisms/user/Usercard";
import "./styles.css";

const user = {
  name: "あっぽー",
  image: "https://source.unsplash.com/5Vr_RVPfbMI",
  email: "aaa@bbb.com",
  phone: "111-2222-3333",
  company: {
    name: "株式会社だよ株式会社"
  },
  website: "https://google.com"
};

export default function App() {
  return (
    <div className="App">
      <PrimaryButton>ぼたん</PrimaryButton>
      <SecondaryButton>ぼたん</SecondaryButton>
      <br />
      <SearchInput />
      <UserCard user={user} />
    </div>
  );
}
